/**
 * @jest-environment jsdom
 */
const { loadHTML } = require('./setup');

describe('Navigation and Links', () => {
  beforeEach(() => {
    loadHTML();
  });

  describe('Navigation Menu', () => {
    test('should have an unordered list of nav links', () => {
      const navList = document.querySelector('nav ul');
      expect(navList).not.toBeNull();
    });

    test('should have exactly 5 navigation items', () => {
      const navItems = document.querySelectorAll('nav ul li');
      expect(navItems.length).toBe(5);
    });

    test('should have correct navigation link texts', () => {
      const navLinks = document.querySelectorAll('nav ul li a');
      const expectedTexts = ['Home', 'Features', 'Products', 'About Us', 'Contact'];
      const actualTexts = Array.from(navLinks).map(link => link.textContent);
      expect(actualTexts).toEqual(expectedTexts);
    });

    test('should have correct href anchors for navigation links', () => {
      const navLinks = document.querySelectorAll('nav ul li a');
      const expectedHrefs = ['#home', '#features', '#products', '#about', '#contact'];
      const actualHrefs = Array.from(navLinks).map(link => link.getAttribute('href'));
      expect(actualHrefs).toEqual(expectedHrefs);
    });
  });

  describe('Internal Link Targets', () => {
    test('all navigation anchors should reference existing sections', () => {
      const navLinks = document.querySelectorAll('nav ul li a');
      navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
          const targetId = href.substring(1);
          const target = document.getElementById(targetId);
          expect(target).not.toBeNull();
        }
      });
    });

    test('home section should exist with correct id', () => {
      const section = document.getElementById('home');
      expect(section).not.toBeNull();
      expect(section.tagName).toBe('SECTION');
    });

    test('features section should exist with correct id', () => {
      const section = document.getElementById('features');
      expect(section).not.toBeNull();
      expect(section.tagName).toBe('SECTION');
    });

    test('products section should exist with correct id', () => {
      const section = document.getElementById('products');
      expect(section).not.toBeNull();
      expect(section.tagName).toBe('SECTION');
    });

    test('about section should exist with correct id', () => {
      const section = document.getElementById('about');
      expect(section).not.toBeNull();
      expect(section.tagName).toBe('SECTION');
    });

    test('contact section should exist with correct id', () => {
      const section = document.getElementById('contact');
      expect(section).not.toBeNull();
      expect(section.tagName).toBe('SECTION');
    });
  });

  describe('Call-to-Action Links', () => {
    test('should have Buy Now buttons linking to products or contact', () => {
      const buyBtns = document.querySelectorAll('.buy-btn');
      expect(buyBtns.length).toBeGreaterThanOrEqual(1);

      buyBtns.forEach(btn => {
        const href = btn.getAttribute('href');
        expect(href).toMatch(/^#(products|contact)$/);
      });
    });

    test('header Buy Now button should link to products', () => {
      const headerBtn = document.querySelector('.header-btn');
      expect(headerBtn).not.toBeNull();
      expect(headerBtn.getAttribute('href')).toBe('#products');
    });

    test('Explore More button should link to products', () => {
      const homeBtn = document.querySelector('.home-content .buy-btn');
      expect(homeBtn).not.toBeNull();
      expect(homeBtn.getAttribute('href')).toBe('#products');
      expect(homeBtn.textContent).toBe('Explore More');
    });
  });
});
