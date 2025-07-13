import React from 'react';
import styled from 'styled-components';
import AnimatedSection from './AnimatedSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTshirt, 
  faIron, 
  faCouch, 
  faSoap, 
  faBed, 
  faHeart, 
  faShoppingBasket, 
  faTruck,
  faHandsWash,
  faStream
} from '@fortawesome/free-solid-svg-icons';

const ServicesSection = styled.section`
  background-color: var(--white);
  padding: 5rem 0;
`;

const ServicesContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`;

const ServiceCard = styled.div`
  background-color: var(--very-light-blue);
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  
  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem 0.75rem;
  }
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const ServiceIcon = styled(FontAwesomeIcon)`
  font-size: 2.5rem;
  color: var(--primary-blue);
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 0.75rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.75rem;
    margin-bottom: 0.5rem;
  }
`;

const ServiceTitle = styled.h3`
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 0.75rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
`;

const ServiceDescription = styled.p`
  color: var(--text-color);
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const Services = () => {
  const services = [
    {
      icon: faTshirt,
      title: 'כביסה',
      description: 'שירות כביסה מקצועי עם ריח מיוחד שנשאר בארון שבועות'
    },
    {
      icon: faStream,
      title: 'גיהוץ בגדים מקצועי',
      description: 'גיהוץ מקצועי לכל סוגי הבגדים'
    },
    {
      icon: faCouch,
      title: 'ניקוי שטיחים ווילונות',
      description: 'ניקוי מקצועי לשטיחים ווילונות'
    },
    {
      icon: faSoap,
      title: 'ניקוי יבש איכותי',
      description: 'ניקוי יבש לבגדים עדינים'
    },
    {
      icon: faBed,
      title: 'ניקוי שמיכות וכריות',
      description: 'ניקוי מקצועי לשמיכות וכריות'
    },
    {
      icon: faHeart,
      title: 'ניקוי שמלות כלה וחליפות חתן',
      description: 'טיפול מיוחד בבגדי חתונה'
    },
    {
      icon: faShoppingBasket,
      title: 'מוצרי ניקיון וכביסה',
      description: 'מגוון מוצרי ניקיון וכביסה איכותיים'
    },
    {
      icon: faTruck,
      title: 'משלוחים חינם',
      description: 'שירות משלוחים חינם עם חיוך'
    }
  ];

  return (
    <ServicesSection id="services">
      <ServicesContainer>
        <AnimatedSection animation="slideUp">
          <h2>השירותים שלנו</h2>
        </AnimatedSection>
        <ServicesGrid>
          {services.map((service, index) => (
            <AnimatedSection 
              key={index}
              animation="scale" 
              delay={0.1 * index}
            >
              <ServiceCard>
                <ServiceIcon icon={service.icon} />
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
              </ServiceCard>
            </AnimatedSection>
          ))}
        </ServicesGrid>
      </ServicesContainer>
    </ServicesSection>
  );
};

export default Services;
