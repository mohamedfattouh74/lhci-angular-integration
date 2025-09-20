// lighthouserc.js
module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npx serve ./www -s -l 5000',
      url: [
        'http://localhost:5000/login',
        'http://localhost:5000/home',
        'http://localhost:5000/about',
      ],
      numberOfRuns: 1,
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.85 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:seo': ['warn', { minScore: 0.9 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
