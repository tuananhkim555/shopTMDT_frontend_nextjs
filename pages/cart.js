// pages/cart.js
import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import Center from "@/components/Center";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Input from "@/components/Input";
import Table from "@/components/Table";
import WhiteBox from "@/components/WhiteBox";
import Title from "@/components/Title";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { FaShoppingCart } from 'react-icons/fa';

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin: 20px 0 30px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1.2fr 0.8fr;
    gap: 40px;
    margin: 40px 0 50px;
  }
`;

const ProductInfoCell = styled.td`
  padding: 8px 0;
  font-size: 0.9rem;

  @media screen and (min-width: 768px) {
    padding: 10px 0;
    font-size: 1rem;
  }
`;

const ProductImageBox = styled.div`
  width: 80px;
  height: 80px;
  padding: 2px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  
  img {
    max-width: 50px;
    max-height: 50px;
  }

  @media screen and (min-width: 768px) {
    width: 100px;
    height: 100px;
    padding: 10px;
    border-radius: 10px;

    img {
      max-width: 80px;
      max-height: 80px;
    }
  }
`;

const QuantityLabel = styled.span`
  padding: 0 10px;
  display: block;
  font-size: 0.9rem;

  @media screen and (min-width: 768px) {
    display: inline-block;
    padding: 0 15px;
    font-size: 1rem;
  }
`;

const CityHolder = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 5px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;

  svg {
    font-size: 1.8rem;
    color: #555;
  }
`;

const EmptyCartMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  font-size: 1.2rem;
  color: #666;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 1.4rem;
    padding: 60px 20px;
  }
`;

// Function to format price with dots as thousand separators
const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export default function CartPage() {
  const { cartProducts, addProduct, removeProduct, clearCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(""); 
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [country, setCountry] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  useEffect(() => {
    if (cartProducts.length > 0) {
      axios.post("/api/cart", { ids: cartProducts }).then((response) => {
        setProducts(response.data);
      });
    } else {
      setProducts([]);
    }
  }, [cartProducts]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.location.href.includes('success')) {
        setPaymentSuccess(true);
      }
    }
  }, []);

  useEffect(() => {
    if (paymentSuccess) {
      clearCart();
    }
  }, [paymentSuccess]);

  function moreOfThisProduct(id) {
    addProduct(id);
  }

  function lessOfThisProduct(id) {
    removeProduct(id);
  }

  async function goToPayment() {
    try {
      const response = await axios.post('/api/checkout', {
        name, email, phone, city, postalCode, streetAddress, country,
        cartProducts,
      });
      if (response.data.url) {
        window.location = response.data.url;
      }
    } catch (error) {
      console.error('Payment request failed:', error);
    }
  }

  let total = 0;
  for (const productId of cartProducts) {
    const price = products.find((p) => p._id === productId)?.price || 0;
    total += price;
  }

  if (paymentSuccess) {
    return (
      <>
        <Header />
        <Center>
          <ColumnsWrapper>
            <WhiteBox>
              <Title>Thanks for your order</Title>
              <p>We will email you when your order will be sent.</p>
            </WhiteBox>
          </ColumnsWrapper>
        </Center>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <Center>
        <ColumnsWrapper>
          <WhiteBox>
            <TitleWrapper>
              <FaShoppingCart />
              <Title>Cart</Title>
            </TitleWrapper>
            {!cartProducts?.length && (
              <EmptyCartMessage>
                Your cart is empty
              </EmptyCartMessage>
            )}
            {products?.length > 0 && (
              <Table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product._id}>
                      <ProductInfoCell>
                        <ProductImageBox>
                          <img src={product.images[0]} alt="" />
                        </ProductImageBox>
                        {product.title}
                      </ProductInfoCell>
                      <td>
                        <Button onClick={() => lessOfThisProduct(product._id)}>
                          -
                        </Button>
                        <QuantityLabel>
                          {
                            cartProducts.filter((id) => id === product._id)
                              .length
                          }
                        </QuantityLabel>
                        <Button onClick={() => moreOfThisProduct(product._id)}>
                          +
                        </Button>
                      </td>
                      <td>
                        {formatPrice(
                          cartProducts.filter((id) => id === product._id)
                            .length * product.price
                        )}{" "}
                        VND
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td></td>
                    <td>Total</td>
                    <td>{formatPrice(total)} VND</td>
                  </tr>
                </tbody>
              </Table>
            )}
          </WhiteBox>
          {!!cartProducts.length && (
            <WhiteBox>
              <Title>Order information</Title>
              <Input
                type="text"
                placeholder="Name"
                value={name}
                name="name"
                onChange={(ev) => setName(ev.target.value)}
              />
              <Input
                type="text"
                placeholder="Email"
                value={email}
                name="email"
                onChange={(ev) => setEmail(ev.target.value)}
              />
              <Input
                type="number"
                placeholder="Phone"
                value={phone} 
                name="phone"
                onChange={(ev) => setPhone(ev.target.value)}
              />
              <CityHolder>
                <Input
                  type="text"
                  placeholder="City"
                  value={city}
                  name="city"
                  onChange={(ev) => setCity(ev.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Postal Code"
                  value={postalCode}
                  name="postalCode"
                  onChange={(ev) => setPostalCode(ev.target.value)}
                />
              </CityHolder>
              <Input
                type="text"
                placeholder="Street Address"
                value={streetAddress}
                name="streetAddress"
                onChange={(ev) => setStreetAddress(ev.target.value)}
              />
              <Input
                type="text"
                placeholder="Country"
                value={country}
                name="country"
                onChange={(ev) => setCountry(ev.target.value)}
              />
              <Button black="true" block="true" 
                onClick={goToPayment}
              >
                Continue to payment
              </Button>
            </WhiteBox>
          )}
        </ColumnsWrapper>
      </Center>
      <Footer/>
    </>
  );
}
