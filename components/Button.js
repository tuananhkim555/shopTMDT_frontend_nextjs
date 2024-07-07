import styled, {css} from "styled-components";
import { primary } from "@/lib/colors";

export const ButtonStyle = css`
   margin: 10px 0;
            padding: 5px 15px;
            background-size: 200% auto;
            box-shadow: 0px 0px 4px #eee;
            border-radius: 5px;
            border:none;
            outline:none; 
            cursor: pointer;
            display:inline-flex;
            align-items:center;
            text-decoration:none;
            font-size: 14px;
            text-align:center;
            font-weight:600;
            font-family: 'Poppins', sans-serif;
            svg{
                height:20px;
                margin-right: 5px;

            }

            ${props => props.block && css`
                display: block;
                width: 100%;
            `};

            ${props => props.white && !props.outline && css`
                 background-color:#fff;
                 color:#000;   
            `}
              ${props => props.white && props.outline && css`
                 background-color:transparent;
                 color:#fff;   
                 border: 1px solid #fff;
            `}
            ${props => props.black && !props.outline && css`
                 background-color:#000;
                 color:#fff;   
            `}
              ${props => props.black && props.outline && css`
                 background-color:transparent;
                 color:#000;
                 border: 1px solid #000;   
            `}

            ${props => props.primary && !props.outline && css`
                background-image: linear-gradient(to right, #5f2c82 0%, #49a09d  51%, #5f2c82  100%);
                color: white;
                
           `}
           ${props => props.primary && props.outline && css`
            background-color: transparent;
            color: ${primary};
            border: 1px solid ${primary};
            
       `}

            ${props => props.size === 'l' && css`
                align-items:center;
                svg{
                  height:30px;  
                }
            `}
`;


const StyledButton = styled.button`
      ${ButtonStyle}   
`;

export default function Button({children,...rest}){
    return(
        <StyledButton {...rest}>{children}</StyledButton>
    );
}