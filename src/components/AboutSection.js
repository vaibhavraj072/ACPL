import React, { useState, useRef, useEffect } from 'react';
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
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && videoRef.current) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else if (!document.hidden && videoRef.current && isPlaying) {
        videoRef.current.play();
      }
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !isPlaying) {
          if (videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
          }
        } else if (!entry.isIntersecting && isPlaying) {
          if (videoRef.current) {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        }
      });
    };

    // Create Intersection Observer for better performance
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.3, // Trigger when 30% of video is visible
      rootMargin: '0px 0px -100px 0px' // Start pausing slightly before video is completely out of view
    });

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
      observer.disconnect();
    };
  }, [isPlaying]);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

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
          <AboutVideo 
            ref={videoRef}
            autoPlay 
            muted={isMuted}
            loop 
            playsInline
          >
            <source src="/About_Us_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </AboutVideo>
          
          {/* Video Controls Overlay */}
          <motion.div
            style={{
              position: 'absolute',
              bottom: '1rem',
              right: '1rem',
              display: 'flex',
              gap: '0.5rem',
              zIndex: 10
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <button
              onClick={toggleMute}
              style={{
                background: 'rgba(0, 0, 0, 0.7)',
                color: '#ffffff',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                padding: '0.5rem',
                borderRadius: '50%',
                cursor: 'pointer',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1rem',
                backdropFilter: 'blur(10px)'
              }}
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? "🔇" : "🔊"}
            </button>
            <button
              onClick={togglePlayPause}
              style={{
                background: 'rgba(0, 0, 0, 0.7)',
                color: '#ffffff',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                padding: '0.5rem',
                borderRadius: '50%',
                cursor: 'pointer',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1rem',
                backdropFilter: 'blur(10px)'
              }}
              title={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? "⏸️" : "▶️"}
            </button>
          </motion.div>
        </VisualElement>
      </ContentWrapper>
    </AboutContainer>
  );
};

export default AboutSection;
