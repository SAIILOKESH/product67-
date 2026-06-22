/**
 * @jest-environment jsdom
 */
const { loadHTML, loadCSS } = require('./setup');

describe('SEO and Responsive Design', () => {
  beforeEach(() => {
    loadHTML();
  });

  describe('SEO Essentials', () => {
    test('should have a unique page title', () => {
      const title = document.querySelector('title');
      expect(title).not.toBeNull();
      expect(title.textContent.length).toBeGreaterThan(0);
      expect(title.textContent.length).toBeLessThan(70);
    });

    test('should have only one h1 tag', () => {
      const h1s = document.querySelectorAll('h1');
      expect(h1s.length).toBe(1);
    });

    test('h1 should contain brand name', () => {
      const h1 = document.querySelector('h1');
      expect(h1.textContent).toContain('TECH NOVA');
    });

    test('should have proper heading hierarchy (no skipping levels)', () => {
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      let lastLevel = 0;
      headings.forEach(heading => {
        const level = parseInt(heading.tagName.charAt(1));
        expect(level).toBeLessThanOrEqual(lastLevel + 1);
        lastLevel = level;
      });
    });

    test('images should have meaningful alt text (not just filenames)', () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        const alt = img.getAttribute('alt');
        expect(alt).not.toMatch(/\.(jpg|png|svg|gif|webp)$/i);
      });
    });
  });

  describe('Responsive Meta Tags', () => {
    test('should have viewport meta tag', () => {
      const viewport = document.querySelector('meta[name="viewport"]');
      expect(viewport).not.toBeNull();
    });

    test('viewport should set width to device-width', () => {
      const viewport = document.querySelector('meta[name="viewport"]');
      expect(viewport.getAttribute('content')).toContain('width=device-width');
    });

    test('viewport should set initial-scale to 1.0', () => {
      const viewport = document.querySelector('meta[name="viewport"]');
      expect(viewport.getAttribute('content')).toContain('initial-scale=1.0');
    });
  });

  describe('CSS Responsive Design', () => {
    let css;

    beforeEach(() => {
      css = loadCSS();
    });

    test('should have media queries for tablet breakpoint', () => {
      expect(css).toContain('@media (max-width: 768px)');
    });

    test('should have media queries for mobile breakpoint', () => {
      expect(css).toContain('@media (max-width: 500px)');
    });

    test('tablet breakpoint should adjust header to column layout', () => {
      const tabletMediaQuery = css.substring(css.indexOf('@media (max-width: 768px)'));
      expect(tabletMediaQuery).toContain('flex-direction: column');
    });

    test('tablet breakpoint should adjust product grid to 2 columns', () => {
      const tabletMediaQuery = css.substring(css.indexOf('@media (max-width: 768px)'));
      expect(tabletMediaQuery).toContain('grid-template-columns: repeat(2, 1fr)');
    });

    test('mobile breakpoint should adjust product grid to single column', () => {
      const mobileMediaQuery = css.substring(css.indexOf('@media (max-width: 500px)'));
      expect(mobileMediaQuery).toContain('grid-template-columns: 1fr');
    });

    test('should use flexible layout (flexbox) for main sections', () => {
      expect(css).toContain('display: flex');
    });

    test('should use CSS grid for product cards', () => {
      expect(css).toContain('display: grid');
    });

    test('images should have max-width 100% for responsiveness', () => {
      expect(css).toContain('max-width: 100%');
    });
  });

  describe('CSS Design System', () => {
    let css;

    beforeEach(() => {
      css = loadCSS();
    });

    test('should use consistent primary color', () => {
      const primaryColorMatches = css.match(/#0f4c4c/g);
      expect(primaryColorMatches.length).toBeGreaterThanOrEqual(3);
    });

    test('should use consistent accent color', () => {
      const accentColorMatches = css.match(/#0b8a6c/g);
      expect(accentColorMatches.length).toBeGreaterThanOrEqual(2);
    });

    test('should have consistent border-radius for cards', () => {
      expect(css).toContain('border-radius: 8px');
    });

    test('should use box-sizing border-box globally', () => {
      expect(css).toContain('box-sizing: border-box');
    });

    test('should reset body margin', () => {
      expect(css).toContain('margin: 0');
    });
  });
});
