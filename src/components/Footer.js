import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faClock, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const FooterSection = styled.footer`
  background-color: var(--secondary-blue);
  color: var(--white);
  padding: 4rem 0 2rem;
`;

const FooterContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const FooterLogo = styled.div`
  h2 {
    font-family: 'Pacifico', cursive;
    color: var(--white);
    font-size: 2rem;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
    letter-spacing: 0.5px;
    
    &:after {
      display: none;
    }
  }
`;

const FooterLinks = styled.div`
  h3 {
    color: var(--white);
    margin-bottom: 1.5rem;
  }
  
  ul {
    list-style: none;
  }
  
  li {
    margin-bottom: 0.8rem;
  }
  
  a {
    color: var(--light-blue);
    
    &:hover {
      color: var(--white);
    }
  }
`;

const FooterServices = styled.div`
  h3 {
    color: var(--white);
    margin-bottom: 1.5rem;
  }
  
  ul {
    list-style: none;
  }
  
  li {
    margin-bottom: 0.8rem;
  }
`;

const FooterContact = styled.div`
  h3 {
    color: var(--white);
    margin-bottom: 1.5rem;
  }
  
  p {
    margin-bottom: 0.8rem;
  }
  
  i {
    margin-left: 10px;
    color: var(--light-blue);
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    
    p {
      margin-bottom: 1rem;
    }
  }
`;

const FooterLinksBottom = styled.div`
  a {
    color: var(--light-blue);
    margin-right: 1rem;
    
    &:hover {
      color: var(--white);
    }
  }
`;

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <FooterContent>
          <FooterLogo>
            <h2>Clean Dream</h2>
            <p>כביסה בריח של בית, שירות מכל הלב ❤️</p>
          </FooterLogo>
          
          <FooterLinks>
            <h3>קישורים מהירים</h3>
            <ul>
              <li><a href="#home">דף הבית</a></li>
              <li><a href="#services">השירותים שלנו</a></li>
              <li><a href="#contact">צור קשר</a></li>
            </ul>
          </FooterLinks>
          
          <FooterServices>
            <h3>השירותים שלנו</h3>
            <ul>
              <li>כביסה ✓</li>
              <li>גיהוץ בגדים מקצועי ✓</li>
              <li>ניקוי שטיחים ווילונות ✓</li>
              <li>ניקוי יבש איכותי ✓</li>
              <li>ניקוי שמיכות וכריות ✓</li>
            </ul>
          </FooterServices>
          
          <FooterContact>
            <h3>צרו קשר</h3>
            <p><FontAwesomeIcon icon={faMapMarkerAlt} /> דרך רמתיים 35, הוד השרון</p>
            <p><FontAwesomeIcon icon={faPhone} /> 055-4528012</p>
            <p><FontAwesomeIcon icon={faEnvelope} /> shemtovmimi@gmail.com</p>
            <p><FontAwesomeIcon icon={faClock} /> א'-ה': 08:00-19:00, ו': 08:00-13:00</p>
          </FooterContact>
        </FooterContent>
        
        <FooterBottom>
          <p>© כל הזכויות שמורות {new Date().getFullYear()}</p>
          <FooterLinksBottom>
            <Link to="/privacy" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>מדיניות פרטיות</Link> | 
            <Link to="/accessibility" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>הצהרת נגישות</Link>
          </FooterLinksBottom>
        </FooterBottom>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;
