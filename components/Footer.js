import styled from "styled-components";
import Center from "./Center";

const StyledFooter = styled.footer`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

const FooterLink = styled.a`
  color: #aaa;
  text-decoration: none;
  margin-bottom: 10px;
  transition: color 0.3s ease;
  
  &:hover {
    color: #fff;
  }
`;

const FooterText = styled.p`
  color: #aaa;
  font-size: 0.9rem;
  line-height: 1.5;
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #444;
  color: #aaa;
  font-size: 0.8rem;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <Center>
        <FooterContent>
          <FooterColumn>
            <FooterTitle>Về chúng tôi</FooterTitle>
            <FooterText>
              Chúng tôi là một cửa hàng trực tuyến cung cấp các sản phẩm chất lượng cao với giá cả phải chăng.
            </FooterText>
          </FooterColumn>
          <FooterColumn>
            <FooterTitle>Liên kết nhanh</FooterTitle>
            <FooterLink href="/">Trang chủ</FooterLink>
            <FooterLink href="/products">Sản phẩm</FooterLink>
            <FooterLink href="/about">Về chúng tôi</FooterLink>
            <FooterLink href="/contact">Liên hệ</FooterLink>
          </FooterColumn>
          <FooterColumn>
            <FooterTitle>Liên hệ</FooterTitle>
            <FooterText>
              Phong Thuy - Le Thuy<br />
              Quang Binh - Viet Nam<br />
              Email: tuananhkim555@gmail.com<br />
              Điện thoại: 0766-353-315
            </FooterText>
          </FooterColumn>
        </FooterContent>
        <Copyright>
          © {new Date().getFullYear()} Tuan Anh Dev. Tất cả quyền được bảo lưu.
        </Copyright>
      </Center>
    </StyledFooter>
  );
}
