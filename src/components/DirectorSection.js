import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const DirectorContainer = styled.section`
  padding: 5rem 0;
  background: #ffffff;
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 40% 60%;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const PortraitSection = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PortraitPlaceholder = styled.div`
  width: 100%;
  height: 500px;
  background: #f1f5f9;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9ca3af;
  font-size: 1.2rem;
  font-weight: 500;
  border: 2px dashed #d1d5db;
  transition: all 0.3s ease;

  &:hover {
    border-color: #fbbf24;
    background: #f8fafc;
  }

  @media (max-width: 768px) {
    height: 400px;
  }
`;

const ContentSection = styled(motion.div)`
  color: #1e293b;
  line-height: 1.8;
`;

const DirectorTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 2rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const DirectorParagraph = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1.8rem;
  color: #374151;
  text-align: justify;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: left;
  }
`;

const DirectorSection = () => {
  const portraitVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, delay: 0.2, ease: "easeOut" }
    }
  };

  return (
    <DirectorContainer id="director">
      <ContentWrapper>
        <PortraitSection
          variants={portraitVariants}
          initial="hidden"
          animate="visible"
        >
          <PortraitPlaceholder>
            Director Portrait
          </PortraitPlaceholder>
        </PortraitSection>

        <ContentSection
          variants={contentVariants}
          initial="hidden"
          animate="visible"
        >
          <DirectorTitle>Director</DirectorTitle>
          
          <DirectorParagraph>
            Mr. Rajeev Kumar Singh, the esteemed Director of Adharv Construction Pvt. Ltd., 
            brings a wealth of technical expertise and visionary leadership to the organization. 
            A diploma holder in Mechanical Engineering, he combines a strong foundation in 
            engineering principles with years of hands-on experience in the construction industry.
          </DirectorParagraph>
          
          <DirectorParagraph>
            Under his guidance, Adharv Construction has grown into a trusted name known for 
            delivering high-quality projects with precision, innovation, and integrity. Mr. Singh's 
            commitment to excellence is reflected in every venture the company undertakes—whether 
            it's infrastructure development, residential complexes, or commercial projects.
          </DirectorParagraph>
          
          <DirectorParagraph>
            With a forward-thinking approach and an unwavering dedication to client satisfaction, 
            he continues to steer Adharv Construction towards setting new benchmarks in the industry.
          </DirectorParagraph>
        </ContentSection>
      </ContentWrapper>
    </DirectorContainer>
  );
};

export default DirectorSection;
