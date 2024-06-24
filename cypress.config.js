const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 5000, // alterando o timeout padrao do cypress
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
