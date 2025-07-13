import React from 'react';
import styled from 'styled-components';
import AnimatedSection from './AnimatedSection';

const HeroSection = styled.section`
  background: linear-gradient(rgba(30, 136, 229, 0.8), rgba(13, 71, 161, 0.9)), url('https://images.unsplash.com/photo-1545173168-9f1947eebb7f?q=80&w=2071&auto=format&fit=crop');
  background-size: cover;
  background-position: center;
  color: var(--white);
  text-align: center;
  padding: 8rem 1rem;
  margin-top: 4rem;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
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
  margin-bottom: 2rem;
`;

const ButtonContainer = styled.div`
  margin-top: 2rem;
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
