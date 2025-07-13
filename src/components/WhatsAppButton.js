import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppButtonContainer = styled.a`
  position: fixed;
  left: 20px;
  top: 85%;
  transform: translateY(-50%);
  background-color: #25D366;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  z-index: 999;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
  }
  
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    left: 15px;
  }
`;

const WhatsAppIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
`;

const WhatsAppButton = ({ phoneNumber }) => {
  // Format the phone number for WhatsApp link
  const formattedNumber = phoneNumber.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${formattedNumber}`;
  
  return (
    <WhatsAppButtonContainer 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
    >
      <WhatsAppIcon icon={faWhatsapp} />
    </WhatsAppButtonContainer>
  );
};

export default WhatsAppButton;
