import styled, {css} from "styled-components";
import { primary } from "@/lib/colors";

export const ButtonStyle = css`
    padding: 8px 20px;
    border-radius: 6px;
    border: none;
    outline: none;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }

    &:active {
        transform: translateY(1px);
    }

    svg {
        height: 16px;
        margin-right: 8px;
        transition: transform 0.2s ease;
    }

    &:hover svg {
        transform: scale(1.1);
    }

    ${props => props.block && css`
        display: block;
        width: 100%;
    `}

    ${props => props.white && !props.outline && css`
        background-color: #fff;
        color: #000;
        box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        
        &:hover {
            background-color: #f8f8f8;
        }
    `}

    ${props => props.white && props.outline && css`
        background-color: transparent;
        color: #fff;
        border: 2px solid #fff;
        
        &:hover {
            background-color: rgba(255,255,255,0.1);
        }
    `}

    ${props => props.black && !props.outline && css`
        background-color: #000;
        color: #fff;
        
        &:hover {
            background-color: #222;
        }
    `}

    ${props => props.black && props.outline && css`
        background-color: transparent;
        color: #000;
        border: 2px solid #000;
        
        &:hover {
            background-color: rgba(0,0,0,0.05);
        }
    `}

    ${props => props.primary && !props.outline && css`
        background: linear-gradient(135deg, #5f2c82 0%, #49a09d 50%, #5f2c82 100%);
        background-size: 200% auto;
        color: white;
        
        &:hover {
            background-position: right center;
        }
    `}

    ${props => props.primary && props.outline && css`
        background-color: transparent;
        color: ${primary};
        border: 2px solid ${primary};
        
        &:hover {
            background-color: rgba(95,44,130,0.05);
        }
    `}

    ${props => props.size === 'l' && css`
        padding: 10px 24px;
        font-size: 15px;

        svg {
            height: 20px;
        }
    `}
`;

const StyledButton = styled.button`
    ${ButtonStyle}
`;

export default function Button({children,...rest}) {
    return (
        <StyledButton {...rest}>{children}</StyledButton>
    );
}