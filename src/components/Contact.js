import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import AnimatedSection from './AnimatedSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faClock } from '@fortawesome/free-solid-svg-icons';

const ContactSection = styled.section`
  background-color: var(--very-light-blue);
  padding: 5rem 0;
`;

const ContactContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const ContactIntro = styled.p`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
  font-size: 1.2rem;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
`;

const ContactInfo = styled.div`
  p {
    margin-bottom: 1rem;
  }
  
  i {
    color: var(--primary-blue);
    margin-left: 10px;
  }
`;

const ContactButtons = styled.div`
  margin-top: 2rem;
`;

const ContactForm = styled.div`
  background-color: var(--white);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-family: 'Heebo', sans-serif;
  font-size: 1rem;
  text-align: right;
  direction: rtl;
  
  &:focus {
    outline: none;
    border-color: var(--primary-blue);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-family: 'Heebo', sans-serif;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: var(--primary-blue);
  }
`;

const SubmitButton = styled.button`
  background-color: var(--primary-blue);
  color: var(--white);
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--secondary-blue);
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  
  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual EmailJS public key
  }, []);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send email using EmailJS
      // The email will be sent to Liadshemi1212@gmail.com
      const templateParams = {
        to_email: 'Liadshemi1212@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        message: formData.message
      };
      
      // Replace with your actual EmailJS service ID and template ID
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        templateParams
      );
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      });
      
      setSubmitMessage('פנייתך התקבלה בהצלחה! ניצור איתך קשר בהקדם.');
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitMessage('אירעה שגיאה בשליחת הטופס. אנא נסו שנית.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactSection id="contact">
      <ContactContainer>
        <AnimatedSection animation="slideUp">
          <h2>רוצים להצטרף?</h2>
        </AnimatedSection>
        
        <AnimatedSection animation="fadeIn" delay={0.3}>
          <ContactIntro>אנחנו לא סתם מכבסים – אנחנו מקשיבים ❤️</ContactIntro>
        </AnimatedSection>
        
        <ContactGrid>
          <AnimatedSection animation="slideRight" delay={0.4} duration={0.7}>
            <ContactInfo>
              <h3>פרטי יצירת קשר</h3>
              <p><FontAwesomeIcon icon={faMapMarkerAlt} />  דרך רמתיים 35, הוד השרון</p>
              <p><FontAwesomeIcon icon={faPhone} /> 055-4315229</p>
              <p><FontAwesomeIcon icon={faClock} /> א'-ה': 08:00-19:00, ו': 08:00-13:00</p>
              
              <ContactButtons>
                <a href="tel:055-4315229" className="btn primary-btn">התקשרו אלינו</a>
                <a href="https://wa.me/9721234567" className="btn secondary-btn">שלחו לנו הודעה</a>
              </ContactButtons>
            </ContactInfo>
          </AnimatedSection>
          
          <AnimatedSection animation="slideLeft" delay={0.4} duration={0.7}>
            <ContactForm>
              <h3>השאירו פרטים ונחזור אליכם</h3>
              {submitMessage && (
                <p style={{ color: submitMessage.includes('שגיאה') ? 'red' : 'green', marginBottom: '1rem' }}>
                  {submitMessage}
                </p>
              )}
              <form onSubmit={handleSubmit}>
                <AnimatedSection animation="fadeIn" delay={0.5} duration={0.5}>
                  <FormGroup>
                    <Input 
                      type="text" 
                      id="name" 
                      name="name" 
                      placeholder="שם מלא" 
                      required 
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </FormGroup>
                </AnimatedSection>
                
                <AnimatedSection animation="fadeIn" delay={0.6} duration={0.5}>
                  <FormGroup>
                    <Input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      placeholder="טלפון" 
                      required 
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </FormGroup>
                </AnimatedSection>
                
                <AnimatedSection animation="fadeIn" delay={0.7} duration={0.5}>
                  <FormGroup>
                    <Input 
                      type="email" 
                      id="email" 
                      name="email" 
                      placeholder="אימייל" 
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </FormGroup>
                </AnimatedSection>
                
                <AnimatedSection animation="fadeIn" delay={0.8} duration={0.5}>
                  <FormGroup>
                    <TextArea 
                      id="message" 
                      name="message" 
                      placeholder="הודעה" 
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </FormGroup>
                </AnimatedSection>
                
                <AnimatedSection animation="scale" delay={0.9} duration={0.4}>
                  <SubmitButton type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'שולח...' : 'שליחה'}
                  </SubmitButton>
                </AnimatedSection>
              </form>
            </ContactForm>
          </AnimatedSection>
        </ContactGrid>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
