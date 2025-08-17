import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroContainer = styled.section`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 2;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
  position: relative;
  z-index: 3;
`;

const MainHeadline = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
`;

const Tagline = styled(motion.p)`
  font-size: clamp(1.1rem, 2vw, 1.25rem);
  color: #ffffff;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const CTAButton = styled(motion.button)`
  background: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  border: 2px solid rgba(255, 255, 255, 0.3);
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-2px);
  }
`;

const CTAButtonSmall = styled.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.5rem;
  text-transform: none;
  letter-spacing: normal;
`;

const VideoControls = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  z-index: 4;
  display: flex;
  gap: 1rem;
`;

const ControlButton = styled.button`
  background: rgba(0, 0, 0, 0.7);
  color: #ffffff;
  border: 2px solid rgba(255, 255, 255, 0.3);
  padding: 0.75rem;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
    border-color: rgba(255, 255, 255, 0.6);
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    font-size: 1rem;
  }
`;

const HeroSection = () => {
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

    const handleScroll = () => {
      if (videoRef.current) {
        const rect = videoRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (!isInView && isPlaying) {
          videoRef.current.pause();
          setIsPlaying(false);
        } else if (isInView && !isPlaying) {
          videoRef.current.play();
          setIsPlaying(true);
        }
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
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('scroll', handleScroll);
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

  const headlineVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const taglineVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, delay: 0.2, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, delay: 0.4, ease: "easeOut" }
    }
  };

  const controlsVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, delay: 0.6, ease: "easeOut" }
    }
  };

  return (
    <HeroContainer id="home">
      <VideoBackground 
        ref={videoRef}
        autoPlay 
        muted={isMuted}
        loop 
        playsInline
      >
        <source src="/Hero_Section_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>
      
      <Overlay />
      
      <ContentWrapper>
        <MainHeadline
          variants={headlineVariants}
          initial="hidden"
          animate="visible"
        >
          Building the Future with
          <br />
          <span style={{ color: '#fbbf24' }}>Strength and Precision</span>
        </MainHeadline>
        
        <Tagline
          variants={taglineVariants}
          initial="hidden"
          animate="visible"
        >
          We transform architectural visions into reality, delivering exceptional 
          construction projects that stand the test of time and exceed expectations.
        </Tagline>
        
        <motion.div
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        >
          <CTAButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Quotation
          </CTAButton>
        </motion.div>
      </ContentWrapper>

      <VideoControls
        variants={controlsVariants}
        initial="hidden"
        animate="visible"
      >
        <ControlButton onClick={toggleMute} title={isMuted ? "Unmute" : "Mute"}>
          {isMuted ? "🔇" : "🔊"}
        </ControlButton>
        <ControlButton onClick={togglePlayPause} title={isPlaying ? "Pause" : "Play"}>
          {isPlaying ? "⏸️" : "▶️"}
        </ControlButton>
      </VideoControls>
    </HeroContainer>
  );
};

export default HeroSection;
