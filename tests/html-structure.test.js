/**
 * @jest-environment jsdom
 */
const { loadHTML } = require('./setup');

describe('HTML Document Structure', () => {
  beforeEach(() => {
    loadHTML();
  });

  describe('Document Head', () => {
    test('should have correct charset meta tag', () => {
      const charset = document.querySelector('meta[charset]');
      expect(charset).not.toBeNull();
      expect(charset.getAttribute('charset')).toBe('UTF-8');
    });

    test('should have viewport meta tag for responsive design', () => {
      const viewport = document.querySelector('meta[name="viewport"]');
      expect(viewport).not.toBeNull();
      expect(viewport.getAttribute('content')).toContain('width=device-width');
      expect(viewport.getAttribute('content')).toContain('initial-scale=1.0');
    });

    test('should have a page title', () => {
      const title = document.querySelector('title');
      expect(title).not.toBeNull();
      expect(title.textContent).toBe('Tech Nova Smart Watch');
    });

    test('should link to external stylesheet', () => {
      const link = document.querySelector('link[rel="stylesheet"]');
      expect(link).not.toBeNull();
      expect(link.getAttribute('href')).toBe('style.css');
    });
  });

  describe('Semantic HTML Structure', () => {
    test('should have a header element', () => {
      const header = document.querySelector('header');
      expect(header).not.toBeNull();
    });

    test('should have a main element', () => {
      const main = document.querySelector('main');
      expect(main).not.toBeNull();
    });

    test('should have a footer element', () => {
      const footer = document.querySelector('footer');
      expect(footer).not.toBeNull();
    });

    test('should have nav element inside header', () => {
      const nav = document.querySelector('header nav');
      expect(nav).not.toBeNull();
    });

    test('should have multiple section elements', () => {
      const sections = document.querySelectorAll('section');
      expect(sections.length).toBeGreaterThanOrEqual(4);
    });

    test('should have proper heading hierarchy', () => {
      const h1 = document.querySelectorAll('h1');
      expect(h1.length).toBe(1);

      const h2 = document.querySelectorAll('h2');
      expect(h2.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe('Header Section', () => {
    test('should have the site-header class', () => {
      const header = document.querySelector('header.site-header');
      expect(header).not.toBeNull();
    });

    test('should contain brand section with logo', () => {
      const brand = document.querySelector('.brand');
      expect(brand).not.toBeNull();

      const logo = brand.querySelector('img.logo');
      expect(logo).not.toBeNull();
      expect(logo.getAttribute('src')).toBe('logo.svg');
    });

    test('should have correct brand name', () => {
      const h1 = document.querySelector('.header-text h1');
      expect(h1).not.toBeNull();
      expect(h1.textContent).toBe('TECH NOVA SMART WATCH');
    });

    test('should have tagline text', () => {
      const tagline = document.querySelector('.header-text p');
      expect(tagline).not.toBeNull();
      expect(tagline.textContent).toContain('Stay connected');
    });

    test('should have Buy Now button in header', () => {
      const buyBtn = document.querySelector('.button-container .buy-btn');
      expect(buyBtn).not.toBeNull();
      expect(buyBtn.textContent).toBe('Buy Now');
    });
  });

  describe('Footer Section', () => {
    test('should have site-footer class', () => {
      const footer = document.querySelector('footer.site-footer');
      expect(footer).not.toBeNull();
    });

    test('should contain address information', () => {
      const footer = document.querySelector('.site-footer');
      expect(footer.textContent).toContain('Address');
      expect(footer.textContent).toContain('RAMNAGAR');
      expect(footer.textContent).toContain('COIMBATORE');
    });

    test('should contain contact number', () => {
      const footer = document.querySelector('.site-footer');
      expect(footer.textContent).toContain('6374866860');
    });

    test('should contain copyright notice', () => {
      const footer = document.querySelector('.site-footer');
      expect(footer.textContent).toContain('2026 Tech Nova');
      expect(footer.textContent).toContain('All rights reserved');
    });

    test('should have three content divisions', () => {
      const divs = document.querySelectorAll('.site-footer div');
      expect(divs.length).toBe(3);
    });
  });
});
