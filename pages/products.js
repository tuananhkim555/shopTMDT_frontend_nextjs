import Center from "@/components/Center";
import Header from "@/components/Header";
import ProductsGrid from "@/components/ProductsGird";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import styled from "styled-components";

const Title = styled.h2`
    font-size: 1.3rem;
`;

export default function ProductsPage({products}){
    return (
        <>
            <Header/>
            <Center>
                <Title>All Products</Title>
                <ProductsGrid products={products} />
            </Center>
        </>
    );
}

export async function getServerSideProps() {
    await mongooseConnect();
    const products = await Product.find({}, null, {sort:{'_id':-1}});
    return {
        props:{
            products: JSON.parse(JSON.stringify(products)),
        }};
}