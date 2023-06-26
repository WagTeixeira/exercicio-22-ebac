const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'acu83f',
  e2e: {
    setupNodeEvents(on, config) {
      
    },
    baseUrl: "http://lojaebac.ebaconline.art.br/"
  },
});
