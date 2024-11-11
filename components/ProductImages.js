import { useState } from "react";
import styled from "styled-components";

    const Image = styled.img`
        width: 100%;
        height: 100%;
        object-fit: contain;
    `;

    const BigImage = styled.img`
        width: 100%;
        height: 100%;
        object-fit: contain;
    `;

    const ImageButtons = styled.div`
        display: flex;
        gap: 8px;
        margin-top: 15px;
        justify-content: center;
        flex-wrap: wrap;

        @media screen and (max-width: 768px) {
            gap: 6px;
            margin-top: 10px;
        }
    `;

    const ImageButton = styled.div`
        border: 2px solid #ccc;
        ${props => props.active ? `
                border-color: #ccc;
            ` : `
                border-color: transparent;
                opacity: .7;
            `}
        width: 60px;
        height: 60px;
        padding: 4px;
        cursor: pointer;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;

        @media screen and (max-width: 768px) {
            width: 50px;
            height: 50px;
        }

        &:hover {
            opacity: 1;
        }
    `;

    const BigImageWrapper = styled.div`
        width: 100%;
        height: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        border-radius: 10px;
        overflow: hidden;

        @media screen and (max-width: 768px) {
            height: 250px;
        }
    `;

export default function ProductImages({images}){
    const [activeImage,setActiveImage] = useState(images?.[0]);
    return (
        <>  
            <BigImageWrapper>
                <BigImage src={activeImage} alt="Product"/>
            </BigImageWrapper>
            <ImageButtons>
                {images.map(image => (
                    <ImageButton
                        key={image} 
                        active={image===activeImage} 
                        onClick={() => setActiveImage(image)}> 
                        <Image src={image} alt="Thumbnail" />
                    </ImageButton>
                ))}
            </ImageButtons>
        </>
    );
}