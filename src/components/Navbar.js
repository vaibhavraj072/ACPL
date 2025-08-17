import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const NavContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: transparent;
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1.5rem 0;
  transition: all 0.3s ease;
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  height: 80px;
  width: auto;
  object-fit: contain;
  transition: transform 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.05);
  }
  
  @media (max-width: 768px) {
    height: 60px;
  }
  
  @media (max-width: 480px) {
    height: 50px;
  }
`;

const NavLinksContainer = styled.div`
  background: rgba(241, 245, 249, 0.9);
  border: 1px solid rgba(203, 213, 225, 0.8);
  border-radius: 30px;
  padding: 1rem 2.5rem;
  display: flex;
  gap: 2.5rem;
  align-items: center;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion.a)`
  color: #1e293b;
  text-decoration: none;
  font-weight: 700;
  font-size: 1rem;
  transition: all 0.3s ease;
  cursor: pointer;
  padding: 0.5rem 0;

  &:hover {
    color: #fbbf24;
    transform: translateY(-2px);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #ffffff;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.75rem;
  border-radius: 50%;
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  z-index: 999;

  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileNavLink = styled(motion.a)`
  color: #ffffff;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.5rem;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #fbbf24;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #ffffff;
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  backdrop-filter: blur(10px);
`;

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, scale: 0.8 },
    open: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const navItems = [
    { name: 'Home', href: '/', isLink: true },
    { name: 'About Us', href: '#about', isLink: false },
    { name: 'Contact Us', href: '#contact', isLink: false },
    { name: 'Director', href: '/director', isLink: true }
  ];

  return (
    <>
      <NavContainer
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <NavContent>
          <Logo src="/logo_navbar.png" alt="ACPL Construction Logo" />
          <NavLinksContainer>
            {navItems.map((item, index) => (
              <NavLink
                key={item.name}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {item.isLink ? (
                  <Link to={item.href} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {item.name}
                  </Link>
                ) : (
                  <a href={item.href} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {item.name}
                  </a>
                )}
              </NavLink>
            ))}
          </NavLinksContainer>
          <MobileMenuButton onClick={() => setIsMobileMenuOpen(true)}>
            ☰
          </MobileMenuButton>
        </NavContent>
      </NavContainer>

      {isMobileMenuOpen && (
        <MobileMenu
          variants={mobileMenuVariants}
          initial="closed"
          animate="open"
        >
          <CloseButton onClick={() => setIsMobileMenuOpen(false)}>
            ×
          </CloseButton>
          {navItems.map((item, index) => (
            <MobileNavLink
              key={item.name}
              onClick={() => setIsMobileMenuOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.isLink ? (
                <Link to={item.href} style={{ color: 'inherit', textDecoration: 'none' }}>
                  {item.name}
                </Link>
              ) : (
                <a href={item.href} style={{ color: 'inherit', textDecoration: 'none' }}>
                  {item.name}
                </a>
              )}
            </MobileNavLink>
          ))}
        </MobileMenu>
      )}
    </>
  );
};

export default Navbar;
