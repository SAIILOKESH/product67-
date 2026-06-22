/**
 * @jest-environment jsdom
 */
const { loadHTML } = require('./setup');

describe('Accessibility', () => {
  beforeEach(() => {
    loadHTML();
  });

  describe('Image Alt Attributes', () => {
    test('all images should have alt attributes', () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        expect(img.hasAttribute('alt')).toBe(true);
        expect(img.getAttribute('alt').trim()).not.toBe('');
      });
    });

    test('logo image should have descriptive alt text', () => {
      const logo = document.querySelector('.logo');
      expect(logo.getAttribute('alt')).toBe('Tech Nova logo');
    });

    test('hero image should have descriptive alt text', () => {
      const heroImg = document.querySelector('.home-image');
      expect(heroImg.getAttribute('alt')).toBe('Tech Nova Smart Watch');
    });

    test('product card images should have descriptive alt text', () => {
      const productImgs = document.querySelectorAll('.product-card img');
      const expectedAlts = [
        'Smart Watch Pro',
        'Sport Fitness Band',
        'Classic Time Band',
        'Pulse Smart Watch',
        'Elite Watch X',
        'Nova Fitness Watch'
      ];
      const actualAlts = Array.from(productImgs).map(img => img.getAttribute('alt'));
      expect(actualAlts).toEqual(expectedAlts);
    });
  });

  describe('Semantic Elements', () => {
    test('should use header element for site header', () => {
      const header = document.querySelector('header');
      expect(header).not.toBeNull();
    });

    test('should use nav element for navigation', () => {
      const nav = document.querySelector('nav');
      expect(nav).not.toBeNull();
    });

    test('should use main element for primary content', () => {
      const main = document.querySelector('main');
      expect(main).not.toBeNull();
    });

    test('should use footer element for site footer', () => {
      const footer = document.querySelector('footer');
      expect(footer).not.toBeNull();
    });

    test('should use section elements for content areas', () => {
      const sections = document.querySelectorAll('main section');
      expect(sections.length).toBeGreaterThanOrEqual(4);
    });

    test('navigation should use list elements', () => {
      const navList = document.querySelector('nav ul');
      expect(navList).not.toBeNull();
      const listItems = navList.querySelectorAll('li');
      expect(listItems.length).toBeGreaterThan(0);
    });
  });

  describe('Link Accessibility', () => {
    test('all links should have href attributes', () => {
      const links = document.querySelectorAll('a');
      links.forEach(link => {
        expect(link.hasAttribute('href')).toBe(true);
      });
    });

    test('all links should have visible text content', () => {
      const links = document.querySelectorAll('a');
      links.forEach(link => {
        expect(link.textContent.trim()).not.toBe('');
      });
    });

    test('no links should have empty href', () => {
      const links = document.querySelectorAll('a');
      links.forEach(link => {
        expect(link.getAttribute('href')).not.toBe('');
      });
    });
  });

  describe('Document Language', () => {
    test('html element should have lang attribute', () => {
      const html = document.querySelector('html');
      expect(html.hasAttribute('lang')).toBe(true);
      expect(html.getAttribute('lang')).toBe('en');
    });
  });

  describe('Image Loading Optimization', () => {
    test('hero image should use eager loading', () => {
      const heroImg = document.querySelector('.home-image');
      expect(heroImg.getAttribute('loading')).toBe('eager');
    });

    test('below-the-fold images should use lazy loading', () => {
      const productImg = document.querySelector('.product-image');
      expect(productImg.getAttribute('loading')).toBe('lazy');

      const cardImgs = document.querySelectorAll('.product-card img');
      cardImgs.forEach(img => {
        expect(img.getAttribute('loading')).toBe('lazy');
      });
    });
  });
});
