import React from 'react';
import styled from 'styled-components';
import AnimatedSection from './AnimatedSection';

const OffersSection = styled.section`
  background-color: var(--very-light-blue);
  padding: 5rem 0;
  text-align: center;
`;

const OffersContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const OfferContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const OfferText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const ButtonContainer = styled.div`
  margin-top: 2rem;
`;

const Offers = () => {
  return (
    <OffersSection id="offers">
      <OffersContainer>
        <AnimatedSection animation="slideUp">
          <h2>מה אנחנו מציעים לכם</h2>
        </AnimatedSection>
        <OfferContent>
          <AnimatedSection animation="fadeIn" delay={0.2}>
            <OfferText>מצטרפים למנוי השנתי ב־20 ₪ בלבד לשנה ובקנייה מעל 250 ₪ מקבלים 30 ₪ מתנה לקנייה הראשונה!</OfferText>
          </AnimatedSection>
          <AnimatedSection animation="fadeIn" delay={0.4}>
            <OfferText>וגם בכל קנייה (החל מהקנייה הבאה) – 50 ₪ הנחה בכל רכישה מעל 500 ₪ 🎁</OfferText>
          </AnimatedSection>
          <AnimatedSection animation="scale" delay={0.6}>
            <ButtonContainer>
              <a href="#services" className="btn primary-btn">למדו עוד על השירותים שלנו</a>
              <a href="#contact" className="btn secondary-btn">הזמינו שירותים</a>
            </ButtonContainer>
          </AnimatedSection>
        </OfferContent>
      </OffersContainer>
    </OffersSection>
  );
};

export default Offers;
