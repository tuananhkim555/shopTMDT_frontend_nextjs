import styled from "styled-components";
import Center from "./Center";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import CartIcons from "./icons/CartIcons";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Bg = styled.div`
  background: linear-gradient(135deg, #000000 0%, #2d2d2d 100%);
  color: #fff;
  padding: 70px 0;
  position: relative;
  overflow: hidden;
  box-shadow: inset 0 0 100px rgba(0,0,0,0.3);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 50%, rgba(81, 162, 233, 0.1) 0%, rgba(0, 0, 0, 0) 50%),
      radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.07) 0%, rgba(0, 0, 0, 0) 50%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.15;
    pointer-events: none;
    animation: subtleMove 30s linear infinite;
  }

  @keyframes subtleMove {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 60px 60px;
    }
  }
`;

const Title = styled.h1`
  margin: 0;
  font-weight: 600;
  font-size: 1.5rem;
  letter-spacing: -0.5px;
  line-height: 1.2;
  margin-bottom: 15px;
  background: linear-gradient(to right, #fff 20%, #64B5F6 50%, #fff 80%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 3s linear infinite, slideInLeft 1s ease-out;
  
  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }
  
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
  text-shadow: 0 1px 2px rgba(0,0,0,0.3);
  
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
    filter: drop-shadow(0 10px 20px rgba(0,0,0,0.3));
    
    &:hover {
      transform: scale(1.05) rotate(2deg);
      filter: drop-shadow(0 15px 30px rgba(0,0,0,0.4));
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
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 5px 20px rgba(81, 162, 233, 0.3);
    }
    
    &:active {
      transform: translateY(-1px);
      box-shadow: 0 3px 10px rgba(81, 162, 233, 0.2);
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
