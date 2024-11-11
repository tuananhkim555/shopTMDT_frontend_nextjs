import styled from "styled-components"

const StyledInput = styled.input`
    width: 100%;
    padding: 8px 12px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-sizing: border-box;
    font-size: 1rem;
    transition: all 0.3s ease;
    outline: none;

    &:focus {
        border-color: #666;
        box-shadow: 0 0 5px rgba(0,0,0,0.1);
    }

    &::placeholder {
        color: #999;
    }

    &:disabled {
        background-color: #f5f5f5;
        cursor: not-allowed;
    }

    @media (max-width: 768px) {
        font-size: 0.9rem;
        padding: 6px 10px;
    }
`; 

export default function Input(props){
    return <StyledInput {...props} />
}