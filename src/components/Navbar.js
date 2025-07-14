import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faPhone } from '@fortawesome/free-solid-svg-icons';

// Overlay for mobile menu
const MobileOverlay = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  transition: opacity 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
`;

// Main navbar container
const NavbarContainer = styled.nav`
  background-color: var(--white);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
`;

// Inner container for centering
const NavbarInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ scrolled }) => (scrolled ? '0.7rem 2rem' : '1rem 2rem')};
  transition: all 0.3s ease;
  position: relative;
  
  @media (max-width: 768px) {
    padding: ${({ scrolled }) => (scrolled ? '0.5rem 1rem' : '0.7rem 1rem')};
    justify-content: center;
    align-items: center;
  }
`;

// Logo styling
const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
  }
  
  h1 {
    font-size: 2.2rem;
    margin: 0;
    color: #2a3990; /* Dark blue color from the image */
    letter-spacing: 0.5px;
    
    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
  }
`;

// Mobile menu button
const MenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: var(--primary-blue);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;
  transition: color 0.2s ease;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: var(--primary-blue-dark, #0056b3);
  }
  
  &:focus {
    outline: none;
  }
  
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    margin: auto 0;
  }
`;

// Desktop navigation
const DesktopNav = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

// Mobile navigation
const MobileNav = styled.ul`
  display: none;
  list-style: none;
  margin: 0;
  padding: 2rem 0;
  
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    position: fixed;
    top: 0;
    right: 0;
    width: 75%;
    height: 100vh;
    background-color: var(--white);
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    z-index: 1000;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
    padding-top: 5rem;
  }
`;

// Nav item styling
const NavItem = styled.li`
  margin: 0 1rem;
  position: relative;
  
  @media (max-width: 768px) {
    margin: 1rem 0;
    width: 80%;
  }
`;

// Nav link styling
const NavLink = styled(Link)`
  color: var(--text-color);
  font-weight: 600;
  text-decoration: none;
  padding: 0.5rem 0.8rem;
  position: relative;
  transition: all 0.3s ease;
  display: block;
  text-align: center;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 50%;
    background-color: var(--primary-blue);
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }
  
  &:hover {
    color: var(--primary-blue);
    
    &:after {
      width: 60%;
    }
  }
  
  @media (max-width: 768px) {
    padding: 1rem;
    font-size: 1.2rem;
    border-radius: 8px;
    
    &:hover {
      background-color: rgba(0, 123, 255, 0.1);
    }
  }
`;

// Contact button for desktop
const ContactButton = styled(Link)`
  background-color: var(--primary-blue);
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  margin-left: 1rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 123, 255, 0.2);
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

// Mobile contact button
const MobileContactButton = styled(Link)`
  background-color: var(--primary-blue);
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  margin-top: 2rem;
  width: 80%;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 123, 255, 0.2);
  }
  
  @media (min-width: 769px) {
    display: none;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent scrolling when menu is open
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        closeMenu();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  return (
    <>
      <MobileOverlay isOpen={isOpen} onClick={closeMenu} />
      <NavbarContainer>
        <NavbarInner scrolled={scrolled}>
          <Logo onClick={() => {
            // Navigate to home page if not already there
            if (window.location.pathname !== '/') {
              window.location.href = '/';
            } else {
              // If already on home page, just scroll to top
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}>
            <h1>קלין דרים</h1>
          </Logo>
          
          {/* Desktop Navigation */}
          <DesktopNav>
            <NavItem>
              <NavLink to="/" onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}>דף הבית</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/" onClick={() => {
                setTimeout(() => {
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}>השירותים שלנו</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about" onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}>אודות</NavLink>
            </NavItem>
            <ContactButton to="/" onClick={() => {
              setTimeout(() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}>
              <FontAwesomeIcon icon={faPhone} />
              צור קשר
            </ContactButton>
          </DesktopNav>
          
          {/* Mobile Navigation */}
          <MobileNav isOpen={isOpen}>
            <NavItem>
              <NavLink to="/" onClick={(e) => {
                closeMenu();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}>דף הבית</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/" onClick={() => {
                closeMenu();
                setTimeout(() => {
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}>השירותים שלנו</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about" onClick={(e) => {
                closeMenu();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}>אודות</NavLink>
            </NavItem>
            <MobileContactButton to="/" onClick={() => {
              closeMenu();
              setTimeout(() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}>
              <FontAwesomeIcon icon={faPhone} />
              צור קשר
            </MobileContactButton>
          </MobileNav>
          
          {/* Mobile Menu Button */}
          <MenuButton onClick={toggleMenu}>
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </MenuButton>
        </NavbarInner>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
