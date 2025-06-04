const { JSDOM } = require('jsdom');
const { loadContent } = require('../js/main');

describe('loadContent', () => {
  beforeEach(() => {
    const dom = new JSDOM('<div class="project-data"></div><div class="navigation"></div><div class="arrow-right"></div><div class="arrow-left"></div>');
    global.window = dom.window;
    global.document = dom.window.document;
    global.$ = () => ({
      ready: (fn) => fn(),
      click: jest.fn(),
      collapse: jest.fn(),
      toggleClass: jest.fn(),
    });
    global.gsap = { to: jest.fn() };
    global.VanillaTilt = { init: jest.fn() };
  });

  test('creates project cards for provided data', () => {
    const data = [
      { title: 'One', techStack: [], srcURL: '', thumbnail: '', description: '' },
      { title: 'Two', techStack: [], srcURL: '', thumbnail: '', description: '' }
    ];
    loadContent(data);
    const cards = document.querySelectorAll('.project-card');
    expect(cards.length).toBe(data.length);
  });
});
