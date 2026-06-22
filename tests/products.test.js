/**
 * @jest-environment jsdom
 */
const { loadHTML } = require('./setup');

describe('Product Cards and Content', () => {
  beforeEach(() => {
    loadHTML();
  });

  describe('Featured Product Section', () => {
    test('should have a featured product container', () => {
      const featured = document.querySelector('.featured-product');
      expect(featured).not.toBeNull();
    });

    test('featured product should have an image', () => {
      const img = document.querySelector('.featured-product img');
      expect(img).not.toBeNull();
      expect(img.getAttribute('src')).toBeTruthy();
    });

    test('featured product should have a heading', () => {
      const heading = document.querySelector('.product-details h3');
      expect(heading).not.toBeNull();
      expect(heading.textContent).toBe('Why Choose Tech Nova?');
    });

    test('featured product should list features', () => {
      const features = document.querySelectorAll('.product-details ul li');
      expect(features.length).toBe(4);
    });

    test('featured product features should include key selling points', () => {
      const features = document.querySelectorAll('.product-details ul li');
      const featureTexts = Array.from(features).map(f => f.textContent);
      expect(featureTexts).toContain('Heart rate & sleep tracking');
      expect(featureTexts).toContain('Water-resistant for everyday use');
      expect(featureTexts).toContain('Long battery life');
      expect(featureTexts).toContain('Stylish look for work or workouts');
    });
  });

  describe('Product Cards Grid', () => {
    test('should have product-cards-section container', () => {
      const section = document.querySelector('.product-cards-section');
      expect(section).not.toBeNull();
    });

    test('should have exactly 6 product cards', () => {
      const cards = document.querySelectorAll('.product-card');
      expect(cards.length).toBe(6);
    });

    test('each product card should have an image', () => {
      const cards = document.querySelectorAll('.product-card');
      cards.forEach(card => {
        const img = card.querySelector('img');
        expect(img).not.toBeNull();
        expect(img.getAttribute('src')).toBeTruthy();
      });
    });

    test('each product card should have a name (h3)', () => {
      const cards = document.querySelectorAll('.product-card');
      cards.forEach(card => {
        const name = card.querySelector('h3');
        expect(name).not.toBeNull();
        expect(name.textContent.trim()).not.toBe('');
      });
    });

    test('each product card should have a price', () => {
      const cards = document.querySelectorAll('.product-card');
      cards.forEach(card => {
        const price = card.querySelector('.price');
        expect(price).not.toBeNull();
        expect(price.textContent).toMatch(/₹\d+/);
      });
    });

    test('each product card should have a Buy Now button', () => {
      const cards = document.querySelectorAll('.product-card');
      cards.forEach(card => {
        const btn = card.querySelector('.buy-btn');
        expect(btn).not.toBeNull();
        expect(btn.textContent).toBe('Buy Now');
        expect(btn.getAttribute('href')).toBe('#contact');
      });
    });

    test('should display correct product names', () => {
      const names = document.querySelectorAll('.product-card h3');
      const expectedNames = [
        'Smart Watch Pro',
        'Sport Fitness Band',
        'Classic Time Band',
        'Pulse Smart Watch',
        'Elite Watch X',
        'Nova Fitness Watch'
      ];
      const actualNames = Array.from(names).map(n => n.textContent);
      expect(actualNames).toEqual(expectedNames);
    });

    test('should display correct product prices', () => {
      const prices = document.querySelectorAll('.product-card .price');
      const expectedPrices = ['₹129', '₹89', '₹99', '₹149', '₹179', '₹159'];
      const actualPrices = Array.from(prices).map(p => p.textContent);
      expect(actualPrices).toEqual(expectedPrices);
    });

    test('all prices should be positive numbers', () => {
      const prices = document.querySelectorAll('.product-card .price');
      prices.forEach(price => {
        const numericValue = parseInt(price.textContent.replace('₹', ''));
        expect(numericValue).toBeGreaterThan(0);
      });
    });
  });

  describe('Home/Hero Section', () => {
    test('should have hero tag text', () => {
      const heroTag = document.querySelector('.hero-tag');
      expect(heroTag).not.toBeNull();
      expect(heroTag.textContent).toBe('New Arrival');
    });

    test('should have hero heading', () => {
      const heading = document.querySelector('.home-content h2');
      expect(heading).not.toBeNull();
      expect(heading.textContent).toBe('Meet the Future of Smart Wearables');
    });

    test('should have hero description', () => {
      const desc = document.querySelector('.home-content p');
      expect(desc).not.toBeNull();
      expect(desc.textContent).toContain('Track your fitness');
    });

    test('should have hero image', () => {
      const img = document.querySelector('.home-image-wrap img');
      expect(img).not.toBeNull();
      expect(img.getAttribute('src')).toContain('unsplash.com');
    });
  });
});
