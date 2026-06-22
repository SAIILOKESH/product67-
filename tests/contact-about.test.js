/**
 * @jest-environment jsdom
 */
const { loadHTML } = require('./setup');

describe('About and Contact Sections', () => {
  beforeEach(() => {
    loadHTML();
  });

  describe('About Section', () => {
    test('should have about-section class', () => {
      const about = document.querySelector('.about-section');
      expect(about).not.toBeNull();
    });

    test('should have About heading', () => {
      const heading = document.querySelector('.about-section h2');
      expect(heading).not.toBeNull();
      expect(heading.textContent).toBe('About Tech Nova');
    });

    test('should have company description', () => {
      const desc = document.querySelector('.about-section p');
      expect(desc).not.toBeNull();
      expect(desc.textContent.length).toBeGreaterThan(50);
    });

    test('description should mention wearable technology', () => {
      const desc = document.querySelector('.about-section p');
      expect(desc.textContent).toContain('wearable technology');
    });

    test('should have correct id for navigation', () => {
      const about = document.querySelector('.about-section');
      expect(about.getAttribute('id')).toBe('about');
    });
  });

  describe('Contact Section', () => {
    test('should have contact-section class', () => {
      const contact = document.querySelector('.contact-section');
      expect(contact).not.toBeNull();
    });

    test('should have Contact heading', () => {
      const heading = document.querySelector('.contact-section h2');
      expect(heading).not.toBeNull();
      expect(heading.textContent).toBe('Contact Us');
    });

    test('should display email address', () => {
      const contact = document.querySelector('.contact-section');
      expect(contact.textContent).toContain('support@technova.com');
    });

    test('should display phone number', () => {
      const contact = document.querySelector('.contact-section');
      expect(contact.textContent).toContain('+91 6374866860');
    });

    test('should have correct id for navigation', () => {
      const contact = document.querySelector('.contact-section');
      expect(contact.getAttribute('id')).toBe('contact');
    });

    test('email should be in proper format', () => {
      const contact = document.querySelector('.contact-section');
      const emailPattern = /[\w.-]+@[\w.-]+\.\w+/;
      expect(contact.textContent).toMatch(emailPattern);
    });

    test('phone number should include country code', () => {
      const contact = document.querySelector('.contact-section');
      expect(contact.textContent).toMatch(/\+91/);
    });
  });
});
