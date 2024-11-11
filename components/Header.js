import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import BarsIcon from "./icons/Bars";
import { FaHome, FaShoppingBag, FaThList, FaUser, FaShoppingCart } from 'react-icons/fa';

const StyledHeader = styled.header`
    background-color: #222;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    position: sticky;
    top: 0;
    z-index: 100;
`;

const Logo = styled(Link)`
    color: #fff;
    text-decoration: none;
    position: relative;
    z-index: 3;
    font-size: 1.2rem;
    font-weight: bold;
    transition: color 0.3s ease;
    
    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
    
    @media (max-width: 480px) {
        font-size: 1rem;
    }
    
    &:hover {
        color: #ddd;
    }
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    
    @media (max-width: 768px) {
        padding: 15px 0;
    }
`;

const StyledNav = styled.nav`
    ${props => props.mobileNavActive ? `
        display: block;
        transform: translateX(0);
        opacity: 1;
    ` : `
        display: none;
        transform: translateX(100%);
        opacity: 0;
    `}
    gap: 25px;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 80px 20px 20px;
    background-color: #222;
    transition: all 0.3s ease-in-out;
    
    @media (min-width: 768px) {
        display: flex;
        position: static;
        padding: 0;
        transform: none;
        opacity: 1;
        align-items: center;
    }
`;

const NavLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 8px;
    color: #aaa;
    text-decoration: none;
    padding: 12px 0;
    transition: all 0.3s ease;
    font-weight: 500;
    font-size: 1rem;
    
    @media (max-width: 1024px) {
        font-size: 0.9rem;
    }
    
    @media (max-width: 768px) {
        font-size: 0.85rem;
        padding: 10px 0;
    }
    
    svg {
        font-size: 1.2em;
        
        @media (max-width: 768px) {
            font-size: 1.1em;
        }
    }
    
    &:hover {
        color: #fff;
        transform: translateX(5px);
        
        svg {
            transform: scale(1.1);
        }
    }
    
    @media (min-width: 768px) {
        padding: 0;
        margin: 0 12px;
        
        &:hover {
            transform: translateY(-2px);
        }
    }
`;

const NavButton = styled.button`
    background-color: transparent;
    height: 36px;
    width: 36px;
    border: none;
    color: white;
    cursor: pointer;
    position: relative;
    z-index: 3;
    transition: transform 0.3s ease;
    
    @media (max-width: 480px) {
        height: 32px;
        width: 32px;
    }
    
    &:hover {
        transform: scale(1.1);
    }
    
    &:active {
        transform: scale(0.95);
    }
    
    @media (min-width: 768px) {
        display: none;
    }
`;

const CartCount = styled.span`
    background-color: #ff4444;
    color: white;
    border-radius: 50%;
    padding: 0 6px;
    font-size: 0.8em;
    margin-left: 5px;
    
    @media (max-width: 768px) {
        padding: 0 5px;
        font-size: 0.75em;
    }
`;

export default function Header() {
    const {cartProducts} = useContext(CartContext);
    const [mobileNavActive,setMobileNavActive] = useState(false);
    
    return(
        <StyledHeader>
            <Center>
                <Wrapper>
                    <Logo href={'/'}>TUAN ANH STORE</Logo>
                    <StyledNav mobileNavActive={mobileNavActive}>
                        <NavLink href={'/'}><FaHome />Home</NavLink>
                        <NavLink href={'/products'}><FaShoppingBag />All Products</NavLink>
                        <NavLink href={'/categories'}><FaThList />Categories</NavLink>
                        <NavLink href={'/account'}><FaUser />Account</NavLink>
                        <NavLink href={'/cart'}>
                            <FaShoppingCart />
                            Cart
                            {cartProducts.length > 0 && (
                                <CartCount>{cartProducts.length}</CartCount>
                            )}
                        </NavLink>
                    </StyledNav>
                    <NavButton 
                        onClick={() => setMobileNavActive(prev => !prev)}
                        aria-label="Toggle navigation menu"
                    >
                        <BarsIcon />
                    </NavButton>
                </Wrapper>
            </Center>
        </StyledHeader>
    );
}