import React from 'react';
import styled from 'styled-components';
import AnimatedSection from './AnimatedSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTshirt, 
  faSprayCan,
  faWindowMaximize, 
  faBroom, 
  faBed, 
  faTruck, 
  faMedal
} from '@fortawesome/free-solid-svg-icons';

const OffersSection = styled.section`
  background-color: var(--very-light-blue);
  padding: 5rem 0;
  text-align: center;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(to right, var(--primary-blue), var(--secondary-blue));
  }
`;

const OffersContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  
  h2 {
    margin-bottom: 2rem;
    font-weight: 700;
    color: var(--primary-blue);
    position: relative;
    display: inline-block;
    
    &:after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 3px;
      background: linear-gradient(to right, var(--primary-blue), var(--secondary-blue));
      border-radius: 2px;
    }
  }
`;

const OfferContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const OfferText = styled.div`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  text-align: right;
  line-height: 1.8;
`;

const DeliveryAreasContainer = styled.div`
  margin: 2rem auto 1rem;
  padding: 1.5rem;
  background-color: rgba(240, 249, 255, 0.8);
  border-radius: 8px;
  border-right: 4px solid var(--primary-blue);
  text-align: right;
  
  h3 {
    color: var(--primary-blue);
    margin-bottom: 0.8rem;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    
    svg {
      margin-left: 0.5rem;
    }
  }
  
  .areas {
    font-weight: 600;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
    
    span {
      margin: 0 0.3rem;
      color: #666;
    }
  }
  
  .note {
    font-size: 0.9rem;
    color: #666;
    margin-top: 0.5rem;
  }
`;

const IconWrapper = styled.span`
  display: inline-block;
  margin-left: 0.5rem;
  color: var(--primary-blue);
  font-size: 1.2rem;
`;

const ButtonContainer = styled.div`
  margin-top: 2rem;
  
  a {
    margin: 0 0.5rem;
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }
  }
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
            <OfferText>
              <IconWrapper><FontAwesomeIcon icon={faTshirt} /></IconWrapper>
              שירותי כביסה קיפול ייבוש סידור הבגדים, לכם נשאר רק להכניס לארון<br/>
              <IconWrapper><FontAwesomeIcon icon={faSprayCan} /></IconWrapper>
              כל סוגי הניקוי יבש<br/>
              <IconWrapper><FontAwesomeIcon icon={faWindowMaximize} /></IconWrapper>
              ניקוי וילונות<br/>
              <IconWrapper><FontAwesomeIcon icon={faBroom} /></IconWrapper>
              ניקוי שטיחים<br/>
              <IconWrapper><FontAwesomeIcon icon={faBed} /></IconWrapper>
              ניקוי כל סוגי שמיכות פוך חורף/קיץ
            </OfferText>
          </AnimatedSection>
          <AnimatedSection animation="fadeIn" delay={0.4}>
            <OfferText>
              <IconWrapper><FontAwesomeIcon icon={faTruck} /></IconWrapper>
              <strong>שירות משלוחים מהיר איסוף והחזרה מבית הלקוח</strong><br/>
              <IconWrapper><FontAwesomeIcon icon={faMedal} /></IconWrapper>
              <span style={{fontSize: '1.4rem', fontWeight: 'bold', color: 'var(--primary-blue)'}}>מדורגים מקום ראשון באיזי ובגוגל</span>
            </OfferText>
            
            <DeliveryAreasContainer>
              <h3>
                <IconWrapper><FontAwesomeIcon icon={faTruck} /></IconWrapper>
                משלוחים חינם באזורי:
              </h3>
              <div className="areas">
                הוד השרון <span>|</span> רמות השבים <span>|</span> ירקונה <span>|</span> אלישמע <span>|</span> כפר מלל <span>|</span> בצרה <span>|</span> כפר סבא <span>|</span> רעננה
              </div>
              <div className="note">
                *כפוף למינימום. ניתן לספק משלוחים לערים נוספות בתשלום נוסף.
              </div>
            </DeliveryAreasContainer>
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
