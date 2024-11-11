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

const StyledFooter = styled.footer`
  background-color: #222;
  color: #fff;
  padding: 30px 0;
  bottom: 0;
  width: 100%;
  margin-top: 100px;
  box-shadow: 0 -5px 15px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  flex: 1;
  
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
                <span>www.tuananhdev.com</span>
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
