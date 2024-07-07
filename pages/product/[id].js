import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import Center from "@/components/Center";
import Header from "@/components/Header";
import ProductImages from "@/components/ProductImages";
import Title from "@/components/Title";
import WhiteBox from "@/components/WhiteBox";
import CartIcons from "@/components/icons/CartIcons";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { useContext } from "react";
import styled from "styled-components";

const ColWrapper = styled.div`
   display: grid;
   grid-template-columns: 1fr;
    @media (min-width: 768px){
        grid-template-columns: .8fr 1.2fr;   
    };
   gap:40px;
   margin:40px 0;
`;

const PriceRow = styled.div`
   gap: 20px;
   display:flex;
   align-items:center;
`;

const Price = styled.span`
    font-size:1.3rem;
`;

export default function ProductPage({product}){
    const {addProduct} = useContext(CartContext);
    return (
        <>
            <Header/>
            <Center>
                <ColWrapper>
                   <WhiteBox>
                        <ProductImages images={product.images}/>
                    </WhiteBox>
                    <div>
                        <Title>{product.title}</Title>
                        <p>{product.description}</p>
                        <PriceRow>
                            <div>
                                <Price>
                                    {product.price.toLocaleString('vi-VN')} VND
                                </Price>
                            </div>
                            <div>
                                <Button primary="true"
                                onClick={() => addProduct(product._id)}>
                                <CartIcons/>
                                Add to Cart</Button>
                            </div>
                        </PriceRow>
                    </div> 
                </ColWrapper>
            </Center>
        </>
    );
}

export async function getServerSideProps(context){
    await mongooseConnect();
    const {id} = context.query;
    const product = await Product.findById(id);
    return {
        props: {
            product: JSON.parse(JSON.stringify(product)),
        }
    }
}
