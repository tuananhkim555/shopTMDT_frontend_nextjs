import styled from "styled-components";
import Center from "./Center";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import CartIcons from "./icons/CartIcons";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 70px 0;
  position: relative;
  overflow: hidden;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: 600;
  font-size: 1.5rem;
  letter-spacing: -0.5px;
  line-height: 1.2;
  margin-bottom: 15px;
  background: linear-gradient(to right, #fff, #ccc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: slideInLeft 1s ease-out;
  
  @media (min-width: 768px) {
    font-size: 3.2rem;
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const Desc = styled.p`
  color: #aaa;
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 25px;
  max-width: 600px;
  animation: fadeIn 1s ease-out 0.3s both;
  
  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ColumnWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;
  align-items: center;
  
  img {
    max-width: 100%;
    max-height: 300px;
    display: block;
    margin: 0 auto;
    transition: transform 0.5s ease;
    animation: floatAnimation 3s ease-in-out infinite;
    
    &:hover {
      transform: scale(1.05) rotate(2deg);
    }
  }
  
  div:nth-child(1) {
    order: 2;
  }
  
  @media (min-width: 768px) {
    grid-template-columns: 1.1fr 0.9fr;
    gap: 80px;
    
    div:nth-child(1) {
      order: 0;
    }
    
    img {
      max-width: 100%;
      max-height: 400px;
    }
  }

  @keyframes floatAnimation {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-15px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

const Column = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 30px;
  flex-wrap: wrap;
  animation: slideUpFade 1s ease-out 0.6s both;
  
  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }

  @keyframes slideUpFade {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  button, a {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }
  }
`;

export default function Featured({product}) {
  const {addProduct} = useContext(CartContext);
  function addFeaturedToCart(){
    addProduct(product._id);
  }
  return (
    <Bg>
      <Center>
        <ColumnWrapper>
          <Column>
            <div>
              <Title>{product.title}</Title>
              <Desc>{product.description}</Desc>
              <ButtonsWrapper>
                <ButtonLink href={'/products/'+product._id} outline={1} white={1}>
                  Xem Ngay
                </ButtonLink>
                <Button onClick={addFeaturedToCart} size="l" primary="true">
                  <CartIcons/>
                  Thêm vào giỏ hàng
                </Button>
              </ButtonsWrapper>
            </div>
          </Column>
          <Column>
            <img
              src="http://shop-react-anhtuan.s3.amazonaws.com/1720201731604.png"
              alt=""
            />
          </Column>
        </ColumnWrapper>
      </Center>
    </Bg>
  );
}
