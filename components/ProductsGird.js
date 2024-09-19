import styled from "styled-components";
import ProductBox from "./ProductBox";
import Footer from "./Footer";

const StyledProductsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-bottom: 50px; // Added margin-bottom for spacing from Footer
    @media (min-width: 768px){
         grid-template-columns: 1fr 1fr 1fr 1fr;
    };
`;

export default function ProductsGrid({products}){
    return (
        <StyledProductsGrid>
             {products?.length > 0 && products.map(product => (
                    <ProductBox key={product._id} {...product}/>
                ))}
        </StyledProductsGrid>
    );
}