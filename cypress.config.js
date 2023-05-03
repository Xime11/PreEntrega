const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout:10000,
    //tiempo de espera
    watchForFileChanges:false,
    //en false no se ejecutar automaticamente,solo cuando quiero ejecutar desde cypress.
    baseUrl:'https://pushing-front.vercel.app/',
    //pagina base que estamos testeando.
  },
});
