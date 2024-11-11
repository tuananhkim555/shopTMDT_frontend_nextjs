import styled from "styled-components";
import Center from "./Center";
import { 
  FaStore, 
  FaLink, 
  FaPhoneAlt, 
  FaHome, 
  FaShoppingCart, 
  FaInfoCircle, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaGlobe 
} from 'react-icons/fa';
import Link from "next/link";

const StyledFooter = styled.footer`
  background: linear-gradient(135deg, #000000 0%, #2d2d2d 100%);
  box-shadow: inset 0 0 100px rgba(0,0,0,0.3);
  color: #fff;
  padding: 30px 0;
  bottom: 0;
  width: 100%;
  margin-top: 100px;
  position: relative;
  display: flex;
  flex-direction: column;

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

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  flex: 1;
  position: relative;
  z-index: 1;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    padding: 0 15px;
  }
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 8px;
  border-bottom: 2px solid #444;
  
  svg {
    color: #e5e7eb;
    font-size: 1.1em;
  }
`;

const FooterLink = styled.a`
  color: #aaa;
  text-decoration: none;
  margin-bottom: 12px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 0;
  
  svg {
    color: #666;
    font-size: 1em;
    transition: all 0.3s ease;
  }
  
  &:hover {
    color: #fff;
    transform: translateX(5px);
    
    svg {
      color: #fff;
    }
  }
`;

const FooterText = styled.div`
  color: #aaa;
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  
  svg {
    color: #666;
    font-size: 1em;
    min-width: 18px;
  }

  &:hover {
    color: #fff;
    svg {
      color: #fff;
    }
  }

  a {
    color: #aaa;
    text-decoration: none;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #444;
  color: #888;
  font-size: 0.85rem;
  position: relative;
  z-index: 1;
  
  &:hover {
    color: #aaa;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <Center>
        <FooterContent>
          <FooterColumn>
            <FooterTitle><FaStore /> Về chúng tôi</FooterTitle>
            <FooterText>
              Chúng tôi là một cửa hàng trực tuyến cung cấp các sản phẩm chất lượng cao với giá cả phải chăng.
            </FooterText>
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle><FaLink /> Liên kết nhanh</FooterTitle>
            <FooterLink href="/"><FaHome /> Trang chủ</FooterLink>
            <FooterLink href="/products"><FaShoppingCart /> Sản phẩm</FooterLink>
            <FooterLink href="/about"><FaInfoCircle /> Về chúng tôi</FooterLink>
            <FooterLink href="/contact"><FaPhoneAlt /> Liên hệ</FooterLink>
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle><FaPhoneAlt /> Liên hệ</FooterTitle>
            <ContactInfo>
              <FooterText>
                <FaMapMarkerAlt />
                <span>Phong Thuy - Le Thuy, Quang Binh</span>
              </FooterText>
              <FooterText>
                <FaEnvelope />
                <span>tuananhkim555@gmail.com</span>
              </FooterText>
              <FooterText>
                <FaPhoneAlt />
                <span>0766-353-315</span>
              </FooterText>
              <FooterText>
                <FaGlobe />
                <a href="https://www.tuananhdev.click" target="_blank" rel="noopener noreferrer">www.tuananhdev.click</a>
              </FooterText>
            </ContactInfo>
          </FooterColumn>
        </FooterContent>
        
        <Copyright>
          © {new Date().getFullYear()} Tuan Anh Dev. Tất cả quyền được bảo lưu.
        </Copyright>
      </Center>
    </StyledFooter>
  );
}
