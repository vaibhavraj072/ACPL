import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterContainer = styled.footer`
  background: #000000;
  color: #ffffff;
  padding: 3rem 0 1rem 0;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

const FooterLeft = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FooterLogo = styled.img`
  height: 60px;
  width: auto;
  object-fit: contain;
  filter: brightness(-1) invert(1);
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1rem;
  color: #e2e8f0;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ContactIcon = styled.span`
  font-size: 1.25rem;
  color: #fbbf24;
`;

const FooterRight = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 1rem;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Tagline = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #fbbf24;
  text-align: right;
  line-height: 1.3;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const CompanyAbbreviation = styled.div`
  font-size: 1.25rem;
  font-weight: 500;
  color: #e2e8f0;
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid #374151;
  color: #9ca3af;
  font-size: 0.875rem;
`;

const Footer = () => {
  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, delay: 0.2, ease: "easeOut" }
    }
  };

  return (
    <FooterContainer>
      <FooterContent>
        <FooterLeft
          variants={leftVariants}
          initial="hidden"
          animate="visible"
        >
          <FooterLogo src="/logo_footer.png" alt="ACPL Construction Logo" />
          
          <ContactInfo>
            <ContactItem>
              <ContactIcon>📷</ContactIcon>
              <span>@adharvconstructionpvt</span>
            </ContactItem>
            
            <ContactItem>
              <ContactIcon>✉️</ContactIcon>
              <span>acpl.rajeev@gmail.com</span>
            </ContactItem>
            
            <ContactItem>
              <ContactIcon>📞</ContactIcon>
              <span>+91 8210273002</span>
            </ContactItem>
          </ContactInfo>
        </FooterLeft>

        <FooterRight
          variants={rightVariants}
          initial="hidden"
          animate="visible"
        >
          <Tagline>Building Dreams, Creating Landmarks.</Tagline>
          <CompanyAbbreviation>-ACPL</CompanyAbbreviation>
        </FooterRight>
      </FooterContent>

      <Copyright>
        © 2023 ACPL. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
