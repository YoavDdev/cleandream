import React from 'react';
import styled from 'styled-components';
import AnimatedSection from './AnimatedSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faMedal } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const HeroSection = styled.section`
  background: linear-gradient(rgba(30, 136, 229, 0.8), rgba(13, 71, 161, 0.9)), url('https://images.unsplash.com/photo-1545173168-9f1947eebb7f?q=80&w=2071&auto=format&fit=crop');
  background-size: cover;
  background-position: center;
  color: var(--white);
  text-align: center;
  padding: 8rem 1rem;
  margin-top: 4rem;
  min-height: 80vh;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  touch-action: auto;
  -webkit-overflow-scrolling: touch;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: var(--white);
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const RatingBadge = styled.div`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(240, 249, 255, 0.95));
  color: var(--primary-blue);
  border-radius: 12px;
  padding: 1.2rem 2rem;
  margin: 2rem auto;
  max-width: 550px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.5) inset;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transform: translateY(-5px);
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(to right, #FFD700, #FFA500);
  }
  
  .rating-line {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.6rem;
    position: relative;
    z-index: 1;
    
    &:last-child {
      margin-bottom: 0;
    }
    
    svg {
      margin: 0 0.6rem;
      color: #FFD700;
      font-size: 1.3rem;
      filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.2));
    }
    
    .google-icon {
      color: #4285F4;
    }
  }
  
  .highlight {
    color: var(--primary-blue-dark);
    font-size: 1.4rem;
    font-weight: 800;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    letter-spacing: 0.5px;
  }
  
  .reviews {
    font-size: 1.1rem;
  }
  
  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
    margin: 1.5rem auto;
    
    .highlight {
      font-size: 1.2rem;
    }
    
    .reviews {
      font-size: 1rem;
    }
  }
`;

const ButtonContainer = styled.div`
  margin-top: 1.5rem;
`;

const Hero = () => {
  return (
    <HeroSection id="home">
      <HeroContent>
        <AnimatedSection animation="slideUp" duration={0.8}>
          <HeroTitle>כביסה בריח של בית, שירות מכל הלב ❤️</HeroTitle>
        </AnimatedSection>
        <AnimatedSection animation="fadeIn" delay={0.4} duration={0.8}>
          <HeroSubtitle>שירות מקצועי, אישי ואיכותי</HeroSubtitle>
        </AnimatedSection>
        
        <AnimatedSection animation="fadeIn" delay={0.6} duration={0.8}>
          <RatingBadge>
            <div className="rating-line">
              <FontAwesomeIcon icon={faMedal} size="lg" />
              <span className="highlight">מדורגים במקום ה-1 באיזי ובגוגל!</span>
              <FontAwesomeIcon icon={faMedal} size="lg" />
            </div>
            <div className="rating-line">
              <FontAwesomeIcon icon={faStar} />
              <span className="reviews">עם מעל 300 ביקורות חיוביות</span>
              <FontAwesomeIcon icon={faGoogle} className="google-icon" />
            </div>
          </RatingBadge>
        </AnimatedSection>
        <AnimatedSection animation="scale" delay={0.8} duration={0.6}>
          <ButtonContainer>
            <a href="#contact" className="btn primary-btn">צרו קשר</a>
            <a href="#services" className="btn secondary-btn">השירותים שלנו</a>
          </ButtonContainer>
        </AnimatedSection>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
