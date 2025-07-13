import React from 'react';
import styled from 'styled-components';
import AnimatedSection from './AnimatedSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHandshake, 
  faBolt, 
  faSprayCan, 
  faPaw, 
  faShippingFast, 
  faUserFriends 
} from '@fortawesome/free-solid-svg-icons';

const FeaturesSection = styled.section`
  background-color: var(--light-blue);
  padding: 5rem 0;
  text-align: center;
`;

const FeaturesContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const FeaturesIntro = styled.p`
  max-width: 800px;
  margin: 0 auto 3rem;
  font-size: 1.2rem;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FeatureCard = styled.div`
  background-color: var(--white);
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const FeatureIcon = styled(FontAwesomeIcon)`
  font-size: 2.5rem;
  color: var(--primary-blue);
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  color: var(--text-color);
`;

const FeaturesCTA = styled.div`
  margin-top: 3rem;
`;

const Features = () => {
  const featureItems = [
    {
      icon: faHandshake,
      title: 'שירות אישי',
      description: 'בגובה העיניים – כי כל שק כביסה הוא עולם שלם'
    },
    {
      icon: faBolt,
      title: 'שירות חירום',
      description: 'שכחת שיש לך אירוע מחר? אנחנו כבר באים לקחת ולסדר'
    },
    {
      icon: faSprayCan,
      title: 'ריח של בית',
      description: 'ריח מיוחד שנשאר בארון גם שבועות אחרי'
    },
    {
      icon: faPaw,
      title: 'חיות מחמד',
      description: 'טיפול גם בבגדים של חיות מחמד'
    },
    {
      icon: faShippingFast,
      title: 'משלוחים מהירים',
      description: 'שירות משלוחים מהיר באזור השרון עם חיוך'
    },
    {
      icon: faUserFriends,
      title: 'שירות מספר 1',
      description: 'השירות המוביל באזור השרון עם יותר מ-300 ביקורות חיוביות'
    }
  ];

  return (
    <FeaturesSection id="features">
      <FeaturesContainer>
        <AnimatedSection animation="slideUp">
          <h2>למה לבחור בנו</h2>
        </AnimatedSection>
        
        <AnimatedSection animation="fadeIn" delay={0.3}>
          <FeaturesIntro>
            כי אצלנו לא תרגישו לקוח – תרגישו כמו בבית.<br />
            השירות שלנו נולד מתוך אהבה לריח של כביסה נקייה, סדר, רוגע… ואנשים ❤️
          </FeaturesIntro>
        </AnimatedSection>
        
        <FeaturesGrid>
          {featureItems.map((item, index) => (
            <AnimatedSection 
              key={index} 
              animation="bounce" 
              delay={0.1 * index}
              duration={0.6}
            >
              <FeatureCard>
                <FeatureIcon icon={item.icon} />
                <FeatureTitle>{item.title}</FeatureTitle>
                <FeatureDescription>{item.description}</FeatureDescription>
              </FeatureCard>
            </AnimatedSection>
          ))}
        </FeaturesGrid>
        
        <AnimatedSection animation="scale" delay={0.6}>
          <FeaturesCTA>
            <a href="#contact" className="btn primary-btn">תשלחו לנו הודעה</a>
          </FeaturesCTA>
        </AnimatedSection>
      </FeaturesContainer>
    </FeaturesSection>
  );
};

export default Features;
