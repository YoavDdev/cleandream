import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const PhoneButtonWrapper = styled.div`
  position: fixed;
  left: 20px;
  top: 75%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  z-index: 999;
  direction: rtl;
  
  @media (max-width: 480px) {
    left: 14px;
  }
`;

const PhoneButtonContainer = styled.a`
  background-color: #0078FF;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.4);
  }
  
  svg {
    font-size: 1.8rem;
  }
  
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    
    svg {
      font-size: 1.5rem;
    }
  }
`;

const PhoneText = styled.div`
  background-color: #0078FF;
  color: white;
  padding: 10px 15px;
  border-radius: 20px;
  margin-right: -10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  font-weight: 600;
  font-size: 0.95rem;
  max-width: 0;
  overflow: hidden;
  white-space: nowrap;
  transition: max-width 0.5s ease, padding 0.5s ease, margin 0.5s ease;
  opacity: 0;
  
  ${PhoneButtonWrapper}:hover & {
    max-width: 300px;
    opacity: 1;
  }
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 8px 12px;
  }
`;

const PhoneButton = () => {
  return (
    <PhoneButtonWrapper>
      <PhoneText>התקשרו אלינו ואנו נדאג לכל השאר!</PhoneText>
      <PhoneButtonContainer href="tel:0554315229" aria-label="התקשר אלינו">
        <FontAwesomeIcon icon={faPhone} />
      </PhoneButtonContainer>
    </PhoneButtonWrapper>
  );
};

export default PhoneButton;
