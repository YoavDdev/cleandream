import React from 'react';
import styled from 'styled-components';
import AnimatedSection from './AnimatedSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTshirt, 
  faStream, 
  faCouch, 
  faSoap, 
  faBed, 
  faHeart, 
  faShoppingBasket, 
  faTruck,
  faMapMarkerAlt,
  faPhone,
  faClock
} from '@fortawesome/free-solid-svg-icons';

const AboutSection = styled.section`
  background-color: var(--white);
  padding: 5rem 0;
`;

const AboutContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const AboutHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutText = styled.div`
  p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
  }
  
  ul {
    margin: 2rem 0;
    padding-right: 1.5rem;
  }
  
  li {
    margin-bottom: 0.8rem;
    position: relative;
    
    &::before {
      content: "✓";
      color: var(--primary-blue);
      margin-left: 0.5rem;
    }
  }
`;

const AboutImage = styled.div`
  img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const ServicesList = styled.div`
  background-color: var(--very-light-blue);
  padding: 2rem;
  border-radius: 10px;
  margin: 3rem 0;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

const ServiceItem = styled.div`
  display: flex;
  align-items: center;
  
  svg {
    color: var(--primary-blue);
    margin-left: 0.8rem;
    font-size: 1.2rem;
  }
`;

const ContactInfo = styled.div`
  background-color: var(--primary-blue);
  color: var(--white);
  padding: 2rem;
  border-radius: 10px;
  margin-top: 3rem;
  
  h3 {
    color: var(--white);
    margin-bottom: 1.5rem;
  }
  
  p {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    
    svg {
      margin-left: 0.8rem;
    }
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <AboutContainer>
        <AboutHeader>
          <AnimatedSection animation="slideUp">
            <h1>קצת עלינו</h1>
          </AnimatedSection>
          <AnimatedSection animation="fadeIn" delay={0.3}>
            <h3>מכבסה מקצועית</h3>
          </AnimatedSection>
        </AboutHeader>
        
        <AboutContent>
          <AnimatedSection animation="slideRight" delay={0.2}>
            <AboutText>
              <p>
                מהיום אתם לא צריכים להתלבט, לא לקפל, ולא לבזבז זמן. אנחנו כאן כדי להפוך את הכביסה שלכם לחוויה קלה, ריחנית ומדויקת.
              </p>
              <p>
                הקמנו את המכבסה שלנו באזור השרון מתוך חלום פשוט: להעניק שירות כביסה מקצועי ואישי, כזה שמרגיש כמו בית.
                עם ניסיון, אכפתיות והמון אהבה לבדים – הפכנו לשם מוכר באזור השרון והסביבה.
              </p>
              <p>
                אצלנו תמצאו את כל מה שאתם צריכים – במקום אחד:
              </p>
              <ul>
                <li>שירות כביסה עם שליח עד הבית – תוך יום-יומיים בלבד</li>
                <li>גיהוץ מקצועי לבגדים, חולצות, מכנסיים, מצעים ועוד</li>
                <li>ניקוי יבש איכותי לבגדים עדינים, חליפות ושמלות</li>
                <li>ניקוי שמיכות, שטיחים ווילונות – כולל חומרים עדינים וריח מרענן</li>
                <li>מוצרי ניקיון וריח ייחודי של בית שרק אצלנו תמצאו</li>
              </ul>
              <p>
                כל מה שאתם צריכים – זה לשלוח לנו וואטסאפ או לבקר בחנות. אנחנו כבר נדאג לאיסוף, ניקוי, קיפול והחזרה – בלי מאמץ ועם חיוך.
              </p>
              <p>
                אנחנו לא עוד מכבסה.
                אנחנו עסק משפחתי, מקומי, שמאמין בשירות אישי ובהקפדה על הפרטים הקטנים.
              </p>
              <p>
                <strong>איכות. יחס אישי. המון אהבה – בבגד אחד בכל פעם.</strong>
              </p>
              <p>
                מחכים לשק הראשון שלכם! ❤️
              </p>
            </AboutText>
          </AnimatedSection>
          
          <AnimatedSection animation="slideLeft" delay={0.4}>
            <AboutImage>
              <img src="/images/מכבסת קלין דרים.jpg" alt="מכבסת קלין דרים" />
            </AboutImage>
          </AnimatedSection>
        </AboutContent>
        
        <AnimatedSection animation="fadeIn" delay={0.5}>
          <ServicesList>
            <h3>השירותים שלנו</h3>
            <ServicesGrid>
              {[
                { icon: faTshirt, text: 'כביסה' },
                { icon: faStream, text: 'גיהוץ בגדים מקצועי' },
                { icon: faCouch, text: 'ניקוי שטיחים ווילונות' },
                { icon: faSoap, text: 'ניקוי יבש איכותי' },
                { icon: faBed, text: 'ניקוי שמיכות וכריות' },
                { icon: faHeart, text: 'ניקוי שמלות כלה וחליפות חתן' },
                { icon: faShoppingBasket, text: 'מוצרי ניקיון וכביסה' },
                { icon: faTruck, text: 'משלוחים חינם' }
              ].map((item, index) => (
                <AnimatedSection 
                  key={index} 
                  animation="fadeIn" 
                  delay={0.6 + (index * 0.1)}
                  duration={0.5}
                >
                  <ServiceItem>
                    <FontAwesomeIcon icon={item.icon} />
                    <span>{item.text}</span>
                  </ServiceItem>
                </AnimatedSection>
              ))}
            </ServicesGrid>
          </ServicesList>
        </AnimatedSection>
        
        <AnimatedSection animation="slideUp" delay={0.8}>
          <ContactInfo>
            <h3>פרטי יצירת קשר</h3>
            <p><FontAwesomeIcon icon={faMapMarkerAlt} /> דרך רמתיים 35, הוד השרון</p>
            <p><FontAwesomeIcon icon={faPhone} /> 055-1234567</p>
            <p><FontAwesomeIcon icon={faClock} /> א'-ה': 08:00-19:00, ו': 08:00-13:00</p>
          </ContactInfo>
        </AnimatedSection>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
