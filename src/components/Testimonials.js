import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight, faQuoteLeft, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import AnimatedSection from './AnimatedSection';

const TestimonialsSection = styled.section`
  background-color: #f8f9fa;
  padding: 6rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const TestimonialsContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const TestimonialsHeader = styled.div`
  margin-bottom: 3rem;
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: var(--primary-blue);
    position: relative;
    display: inline-block;
    
    &:after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 3px;
      background-color: var(--primary-blue);
    }
  }
`;

const ReviewCount = styled.div`
  font-size: 1.1rem;
  margin: 2rem 0;
  color: #555;
  
  span {
    font-size: 1.3rem;
    font-weight: bold;
    color: var(--primary-blue);
  }
`;

const TestimonialsCarousel = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 0;
`;

const TestimonialCard = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  padding: 2.5rem 2rem;
  margin: 1rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: var(--primary-blue);
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
  }
`;

const QuoteIcon = styled.div`
  position: absolute;
  color: rgba(0, 0, 0, 0.05);
  font-size: 4rem;
  z-index: 0;
  
  &.left {
    top: 10px;
    right: 20px;
  }
  
  &.right {
    bottom: 10px;
    left: 20px;
  }
`;

const TestimonialContent = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
  text-align: right;
  color: #444;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.5rem;
  position: relative;
  z-index: 1;
`;

const Author = styled.p`
  font-weight: 600;
  color: var(--primary-blue);
  font-size: 1.1rem;
`;

const TestimonialDate = styled.span`
  font-size: 0.9rem;
  color: #888;
`;

const Stars = styled.div`
  color: #FFD700;
  font-size: 1.2rem;
  letter-spacing: 2px;
  margin-top: 0.5rem;
  text-align: right;
`;

const CarouselControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  gap: 1rem;
`;

const CarouselButton = styled.button`
  background: white;
  color: var(--primary-blue);
  border: 2px solid var(--primary-blue);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: var(--primary-blue);
    color: white;
  }
  
  &:focus {
    outline: none;
  }
`;

const CarouselDots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  gap: 0.5rem;
`;

const CarouselDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props => props.active ? 'var(--primary-blue)' : '#ccc'};
  cursor: pointer;
  transition: all 0.2s ease;
`;

const RatingBadge = styled.div`
  background: linear-gradient(135deg, var(--primary-blue), var(--secondary-blue));
  color: white;
  padding: 1.5rem 2.5rem;
  border-radius: 12px;
  display: inline-block;
  margin-top: 3rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
`;

const RatingText = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  margin: 0.5rem 0;
`;

const RatingSource = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
  font-size: 0.95rem;
`;

const ViewMoreButton = styled.a`
  display: inline-block;
  margin-top: 2rem;
  color: white;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  background: var(--primary-blue);
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--secondary-blue);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  
  // Real testimonials from Easy.co.il
  const testimonials = [
    {
      quote: 'מקום מעולה! הכביסה תמיד חוזרת נקיה ועם ריח ממכר. חוץ מזה יש להם מלא מוצרי ניקיון (כל מוצר קיים בערך) סופר שווים אז אני גם קונה מוצרים על הדרך.',
      author: 'Dafna F.',
      date: '04/11/2022',
      rating: 5,
      source: 'Easy.co.il'
    },
    {
      quote: 'ממליץ ממליץ הכי טובים בהוד השרון שלחתי שטיח שאגי וחולצה לניקוי שירות מקצועי חזר נקי אנשים שמחים תודה ליעד ושריקה',
      author: 'גיא א.',
      date: '30/08/2022',
      rating: 5,
      source: 'Easy.co.il'
    },
    {
      quote: 'המכבסה הייתה מעולה. אנשי צוות נחמדים,חייכנים ועשו את השירות עם חיוך. הבגדים הגיעו במצב מעולה,ממליצה מאוד',
      author: 'קרני ד.',
      date: '19/07/2022',
      rating: 5,
      source: 'Easy.co.il'
    },
    {
      quote: 'מכבסה מעולה!! ממליצה מאוד שירות מעולה ברמה מאוד גבוהה והכביסה חזרה עם ריח מדהים.',
      author: 'peleg z.',
      date: '01/08/2022',
      rating: 5,
      source: 'Easy.co.il'
    },
    {
      quote: 'מקום אליפות , אנשים אליפות . הבגדים חזרו ברמה גבוה ואיכותית אין עליכם !',
      author: 'הראל מ.',
      date: '20/07/2022',
      rating: 5,
      source: 'Easy.co.il'
    },
    {
      quote: 'שירות מעולה! הכביסה חזרה נקייה, מגוהצת ועם ריח מדהים. ממליצה בחום.',
      author: 'רוני כ.',
      date: '15/07/2022',
      rating: 5,
      source: 'Easy.co.il'
    },
    {
      quote: 'מקום מקסים עם שירות אדיב ומקצועי. הבגדים חזרו במצב מעולה.',
      author: 'יעל ל.',
      date: '10/08/2022',
      rating: 5,
      source: 'Easy.co.il'
    },
    {
      quote: 'מקום איכותי שירות ברמה גבוהה הכי טובים בהוד השרון !',
      author: 'שירן ע.',
      date: '11/08/2022',
      rating: 5,
      source: 'Easy.co.il'
    },
    {
      quote: 'ממליץ בחום שירות מצויין והכביסה חזרה עם ריח מדהים!',
      author: 'Itai l.',
      date: '19/07/2022',
      rating: 5,
      source: 'Easy.co.il'
    }
  ];
  
  // Display 3 testimonials per page
  const testimonialsPerPage = 3;
  const pageCount = Math.ceil(testimonials.length / testimonialsPerPage);
  
  const displayedTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage, 
    (currentPage + 1) * testimonialsPerPage
  );
  
  // Use useCallback to memoize the handler functions
  const handleNextPage = React.useCallback(() => {
    setCurrentPage((prev) => (prev + 1) % pageCount);
  }, [pageCount]);
  
  const handlePrevPage = React.useCallback(() => {
    setCurrentPage((prev) => (prev === 0 ? pageCount - 1 : prev - 1));
  }, [pageCount]);
  
  const goToPage = React.useCallback((pageIndex) => {
    setCurrentPage(pageIndex);
  }, []);
  
  // Auto-play functionality
  useEffect(() => {
    let interval;
    
    if (autoPlay) {
      interval = setInterval(() => {
        setCurrentPage((prev) => (prev + 1) % pageCount);
      }, 5000); // Change testimonial every 5 seconds
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoPlay, pageCount]);

  return (
    <TestimonialsSection id="testimonials">
      <TestimonialsContainer>
        <AnimatedSection animation="fadeIn">
          <TestimonialsHeader>
            <h2>מה הלקוחות שלנו אומרים</h2>
            <ReviewCount>
              <span>מקום ראשון</span> בביקורות באזור השרון עם <span>יותר מ-300</span> ביקורות חיוביות
            </ReviewCount>
          </TestimonialsHeader>
        </AnimatedSection>
        
        <TestimonialsCarousel>
          <AnimatedSection animation="fadeIn" delay={0.2}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {displayedTestimonials.map((testimonial, index) => (
                <TestimonialCard key={index}>
                  <QuoteIcon className="left">
                    <FontAwesomeIcon icon={faQuoteRight} />
                  </QuoteIcon>
                  
                  <TestimonialContent>
                    {testimonial.quote}
                  </TestimonialContent>
                  
                  <TestimonialAuthor>
                    <Author>{testimonial.author}</Author>
                    <TestimonialDate>{testimonial.date}</TestimonialDate>
                  </TestimonialAuthor>
                  
                  <Stars>★★★★★</Stars>
                  
                  <QuoteIcon className="right">
                    <FontAwesomeIcon icon={faQuoteLeft} />
                  </QuoteIcon>
                </TestimonialCard>
              ))}
            </div>
          </AnimatedSection>
          
          <CarouselControls>
            <CarouselButton onClick={handlePrevPage}>
              <FontAwesomeIcon icon={faChevronRight} />
            </CarouselButton>
            
            <CarouselDots>
              {Array.from({ length: pageCount }).map((_, index) => (
                <CarouselDot 
                  key={index} 
                  active={currentPage === index}
                  onClick={() => goToPage(index)}
                />
              ))}
            </CarouselDots>
            
            <CarouselButton onClick={handleNextPage}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </CarouselButton>
          </CarouselControls>
        </TestimonialsCarousel>
        
        <AnimatedSection animation="fadeIn" delay={0.5}>
          <RatingBadge>
            <Stars>★★★★★</Stars>
            <RatingText>5/5</RatingText>
            <RatingSource>
              מתוך יותר מ-300 ביקורות ב-Easy.co.il
            </RatingSource>
          </RatingBadge>
          
          <div style={{ marginTop: '2rem' }}>
            <ViewMoreButton href="https://easy.co.il/page/10108474" target="_blank" rel="noopener noreferrer">
              לצפייה בכל הביקורות
            </ViewMoreButton>
          </div>
        </AnimatedSection>
      </TestimonialsContainer>
    </TestimonialsSection>
  );
};

export default Testimonials;
