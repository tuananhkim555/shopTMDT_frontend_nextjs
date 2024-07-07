import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/models/Order";
import { Product } from "@/models/Product";
const stripe = require('stripe')(process.env.STRIPE_SK);

const exchangeRate = 23000; // 1 USD = 23000 VND

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Phương thức yêu cầu phải là POST' });
    }
    
    const {
        name,
        email,
        phone,
        city,
        postalCode,
        streetAddress,
        country,
        cartProducts,
    } = req.body;
    
    await mongooseConnect();
    const productsIds = cartProducts;
    const uniqueIds = [...new Set(productsIds)];
    const productsInfos = await Product.find({ _id: uniqueIds });
    
    let line_items = [];
    for (const productId of uniqueIds) {
        const productInfo = productsInfos.find(p => p._id.toString() === productId);
        const quantity = productsIds.filter(id => id === productId).length || 0;
        if (quantity > 0 && productInfo) {
            const priceInUSD = Math.ceil(productInfo.price / exchangeRate * 100); // Chuyển đổi giá trị sang cents USD
            line_items.push({
                quantity,
                price_data: {
                    currency: 'USD',
                    product_data: { name: productInfo.title },
                    unit_amount: priceInUSD,
                },
            });
        }
    }

    const orderDoc = await Order.create({
        line_items,
        name,
        email,
        phone,
        city,
        postalCode,
        streetAddress,
        country,
        paid: false,
    });

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'], 
            line_items,
            mode: 'payment',
            customer_email: email,
            success_url: process.env.PUBLIC_URL + '/cart?success=1',
            cancel_url: process.env.PUBLIC_URL + '/cart?canceled=1',
            metadata: { orderId: orderDoc._id.toString(),test:'ok'},
        });

        res.json({
            url: session.url,
        });
    } catch (error) {
        console.error('Stripe session creation failed:', error);
        res.status(500).json({ message: 'Đã xảy ra lỗi trong khi tạo phiên thanh toán Stripe' });
    }
}
