import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled.section`
  padding: 5rem 0;
  background: #ffffff;
  position: relative;
`;

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
`;

const TitleBackground = styled.h2`
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 800;
  color: rgba(0, 0, 0, 0.05);
  margin: 0;
  line-height: 1;
`;

const TitleForeground = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: #1e293b;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const TextContent = styled(motion.div)`
  color: #334155;
  line-height: 1.8;
`;

const CompanyName = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  color: #475569;
`;

const Tagline = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: #fbbf24;
  margin-top: 2rem;
  font-style: italic;
`;

const VisualElement = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const AboutVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
`;

const AboutSection = () => {
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const videoVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, delay: 0.3, ease: "easeOut" }
    }
  };

  return (
    <AboutContainer id="about">
      <SectionTitle>
        <TitleBackground>About Us</TitleBackground>
        <TitleForeground>About Us</TitleForeground>
      </SectionTitle>
      
      <ContentWrapper>
        <TextContent
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <CompanyName>Adharv Construction Private Limited (ACPL)</CompanyName>
          <Description>
            We specialize in residential, commercial, and infrastructure projects, 
            delivering exceptional construction solutions that blend modern technology 
            with skilled craftsmanship.
          </Description>
          <Description>
            Our commitment to safety, precision, and timely delivery ensures that 
            every project exceeds expectations and stands the test of time.
          </Description>
          <Tagline>ACPL - Building Dreams, Creating Landmarks.</Tagline>
        </TextContent>
        
        <VisualElement
          variants={videoVariants}
          initial="hidden"
          animate="visible"
        >
          <AboutVideo autoPlay muted loop playsInline>
            <source src="/About_Us_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </AboutVideo>
        </VisualElement>
      </ContentWrapper>
    </AboutContainer>
  );
};

export default AboutSection;
