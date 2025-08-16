import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const WorkContainer = styled.section`
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

const ProjectsGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectImage = styled.div`
  height: 250px;
  background: ${props => props.background || 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)'};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const SwimmingPoolImage = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 60px;
    background: #0ea5e9;
    border-radius: 50px 50px 0 0;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 60%;
    left: 20%;
    width: 40px;
    height: 30px;
    background: #84cc16;
    border-radius: 20px;
  }
`;

const ProjectInfo = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const ProjectStatus = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: #fbbf24;
  color: #1e293b;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
`;

const PlaceholderCard = styled.div`
  height: 250px;
  background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9ca3af;
  font-size: 1.1rem;
  font-weight: 500;
`;

const WorkSection = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const projects = [
    {
      id: 1,
      title: "Swimming Pool Project",
      description: "Luxurious swimming pool area with lush greenery and mountain views. A completed project showcasing our expertise in landscape and recreational construction.",
      status: "Completed",
      hasImage: true
    },
    {
      id: 2,
      title: "Project Coming Soon",
      description: "More exciting projects will be showcased here. Stay tuned for updates on our latest construction achievements.",
      status: "Coming Soon",
      hasImage: false
    },
    {
      id: 3,
      title: "Project Coming Soon",
      description: "More exciting projects will be showcased here. Stay tuned for updates on our latest construction achievements.",
      status: "Coming Soon",
      hasImage: false
    }
  ];

  return (
    <WorkContainer id="work">
      <SectionTitle>
        <TitleBackground>Work</TitleBackground>
        <TitleForeground>Work</TitleForeground>
      </SectionTitle>
      
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.2 }}
          >
            <ProjectImage>
              {project.hasImage ? (
                <SwimmingPoolImage />
              ) : (
                <PlaceholderCard>
                  Project Coming Soon
                </PlaceholderCard>
              )}
            </ProjectImage>
            
            <ProjectInfo>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectStatus>{project.status}</ProjectStatus>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </WorkContainer>
  );
};

export default WorkSection;
