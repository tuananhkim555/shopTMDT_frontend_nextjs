import styled from "styled-components";

const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: 600;
    color: #2d3436;
    margin: 1rem 0;
    transition: all 0.3s ease;

    @media screen and (min-width: 480px) {
        font-size: 1.8rem;
        margin: 1.5rem 0;
    }

    @media screen and (min-width: 768px) {
        font-size: 2rem;
        margin: 2rem 0;
    }

    @media screen and (min-width: 1024px) {
        font-size: 2.2rem;
        margin: 2.5rem 0;
    }

    &:hover {
        color: #0984e3;
    }
`;

export default Title;