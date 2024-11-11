import styled from "styled-components";
import ProductBox from "./ProductBox";
import Footer from "./Footer";

const StyledProductsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
    margin: 20px 0 50px;
    padding: 0 10px;

    @media screen and (min-width: 480px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        padding: 0 15px;
    }

    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 25px;
        padding: 0 20px;
    }

    @media screen and (min-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
        gap: 30px;
        padding: 0;
    }

    @media screen and (min-width: 1200px) {
        gap: 35px;
        margin: 30px 0 60px;
    }
`;

export default function ProductsGrid({products}) {
    return (
        <StyledProductsGrid>
            {products?.length > 0 && products.map(product => (
                <ProductBox key={product._id} {...product}/>
            ))}
        </StyledProductsGrid>
    );
}