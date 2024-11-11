import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import BarsIcon from "./icons/Bars";
import { FaHome, FaShoppingBag, FaThList, FaUser, FaShoppingCart, FaTimes } from 'react-icons/fa';

const StyledHeader = styled.header`
    background: linear-gradient(135deg, #000000 0%, #2d2d2d 100%);
    box-shadow: inset 0 0 100px rgba(0,0,0,0.3);
    position: sticky;
    top: 0;
    z-index: 100;
    
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
        transform: translateX(-100%);
        opacity: 0;
    `}
    gap: 25px;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 80px 20px 20px;
    background: linear-gradient(135deg, #000000 0%, #2d2d2d 100%);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    
    @media (min-width: 768px) {
        display: flex;
        position: static;
        padding: 0;
        transform: none;
        opacity: 1;
        align-items: center;
        background: none;
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
        font-size: 1.1rem;
    }
    
    @media (max-width: 768px) {
        font-size: 1.2rem;
        padding: 15px 0;
        transform: translateX(-100%);
        animation: slideIn 0.3s forwards;
        animation-delay: calc(0.1s * var(--index));
        opacity: 0;
    }
    
    @keyframes slideIn {
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    svg {
        font-size: 1.2em;
        
        @media (max-width: 768px) {
            font-size: 1.3em;
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

    .close-icon {
        font-size: 1.5em;
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
        padding: 0 6px;
        font-size: 0.85em;
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
                        <NavLink href={'/'} style={{"--index": 1}}><FaHome />Home</NavLink>
                        <NavLink href={'/products'} style={{"--index": 2}}><FaShoppingBag />All Products</NavLink>
                        <NavLink href={'/categories'} style={{"--index": 3}}><FaThList />Categories</NavLink>
                        <NavLink href={'/account'} style={{"--index": 4}}><FaUser />Account</NavLink>
                        <NavLink href={'/cart'} style={{"--index": 5}}>
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
                        {mobileNavActive ? <FaTimes className="close-icon" /> : <BarsIcon />}
                    </NavButton>
                </Wrapper>
            </Center>
        </StyledHeader>
    );
}