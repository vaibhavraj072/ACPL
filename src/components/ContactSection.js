import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactContainer = styled.section`
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

const ContactCards = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactCard = styled(motion.div)`
  background: ${props => props.isYellow ? '#fbbf24' : '#f8fafc'};
  color: #1e293b;
  padding: 2.5rem 2rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid ${props => props.isYellow ? 'rgba(0, 0, 0, 0.1)' : 'rgba(0, 0, 0, 0.05)'};

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
  }
`;

const CardIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: #1e293b;
`;

const CardTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #1e293b;
`;

const CardDescription = styled.p`
  margin-bottom: 2rem;
  line-height: 1.7;
  font-size: 1.05rem;
  color: #374151;
`;

const CardButton = styled.button`
  background: ${props => props.isYellow ? '#1e293b' : '#fbbf24'};
  color: ${props => props.isYellow ? '#ffffff' : '#1e293b'};
  border: none;
  padding: 1rem 2rem;
  border-radius: 25px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 0 auto;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

const ContactFormSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const MapContainer = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.05);
`;

const MapFrame = styled.iframe`
  width: 100%;
  height: 450px;
  border: none;
`;

const MapOverlay = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
`;

const GetDirectionButton = styled.button`
  background: #1e293b;
  color: #ffffff;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  font-size: 1rem;

  &:hover {
    background: #334155;
    transform: translateY(-2px);
  }
`;

const ContactForm = styled.form`
  background: #ffffff;
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.05);
`;

const FormTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 2.5rem;
  text-align: center;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  &:last-child {
    grid-template-columns: 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.75rem;
  font-weight: 600;
  color: #374151;
  font-size: 0.95rem;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #ffffff;

  &:focus {
    outline: none;
    border-color: #fbbf24;
    box-shadow: 0 0 0 3px rgba(251, 191, 36, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;
  background: #ffffff;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: #fbbf24;
    box-shadow: 0 0 0 3px rgba(251, 191, 36, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

const SubmitButton = styled.button`
  background: #f1f5f9;
  color: #1e293b;
  border: none;
  padding: 1.2rem 3rem;
  border-radius: 25px;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  margin-top: 1rem;

  &:hover {
    background: #e2e8f0;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }
`;

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    companyEmail: '',
    website: '',
    phoneNumber: '',
    requirements: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, delay: 0.3, ease: "easeOut" }
    }
  };

  const mapVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, delay: 0.1, ease: "easeOut" }
    }
  };

  return (
    <ContactContainer id="contact">
      <SectionTitle>
        <TitleBackground>Contact Us</TitleBackground>
        <TitleForeground>Contact Us</TitleForeground>
      </SectionTitle>
      
      <ContactCards>
        <ContactCard
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          isYellow={true}
        >
          <CardIcon>💬</CardIcon>
          <CardTitle>Book a Meeting</CardTitle>
          <CardDescription>
            Book a meeting for short intro and a quick start to your dream.
          </CardDescription>
          <CardButton isYellow={true}>
            Book Meeting →
          </CardButton>
        </ContactCard>

        <ContactCard
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
        >
          <CardIcon>📞</CardIcon>
          <CardTitle>Phone Us</CardTitle>
          <CardDescription>
            If you prefer to speak by phone, we're available by 12/7 to answer your call.
          </CardDescription>
          <CardButton>
            Call us on +918210273002 →
          </CardButton>
        </ContactCard>

        <ContactCard
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          <CardIcon>🧭</CardIcon>
          <CardTitle>Get Direction</CardTitle>
          <CardDescription>
            Get Direction to office if you are nearby.
          </CardDescription>
          <CardButton>
            Direction →
          </CardButton>
        </ContactCard>
      </ContactCards>

      <ContactFormSection>
        <MapContainer
          variants={mapVariants}
          initial="hidden"
          animate="visible"
        >
          <MapFrame 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114612.5774004693!2d91.62048236025815!3d26.143179268794878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5a287f9133ff%3A0x2bbd1332436bde32!2sGuwahati%2C%20Assam!5e0!3m2!1sen!2sin!4v1755374285444!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <MapOverlay>
            <GetDirectionButton>Get Direction</GetDirectionButton>
          </MapOverlay>
        </MapContainer>

        <ContactForm
          variants={formVariants}
          initial="hidden"
          animate="visible"
          onSubmit={handleSubmit}
        >
          <FormTitle>Get In Touch</FormTitle>
          
          <FormRow>
            <FormGroup>
              <FormLabel>First Name</FormLabel>
              <FormInput
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Last Name</FormLabel>
              <FormInput
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
          </FormRow>

          <FormRow>
            <FormGroup>
              <FormLabel>Company Name</FormLabel>
              <FormInput
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Company Email</FormLabel>
              <FormInput
                type="email"
                name="companyEmail"
                value={formData.companyEmail}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
          </FormRow>

          <FormRow>
            <FormGroup>
              <FormLabel>Website (with https://)</FormLabel>
              <FormInput
                type="url"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                placeholder="https://example.com"
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Phone Number</FormLabel>
              <FormInput
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
          </FormRow>

          <FormRow>
            <FormGroup>
              <FormLabel>What Do you need (with budget)?</FormLabel>
              <FormTextarea
                name="requirements"
                value={formData.requirements}
                onChange={handleInputChange}
                placeholder="Describe your project requirements and budget..."
                required
              />
            </FormGroup>
          </FormRow>

          <SubmitButton type="submit">Submit</SubmitButton>
        </ContactForm>
      </ContactFormSection>
    </ContactContainer>
  );
};

export default ContactSection;
