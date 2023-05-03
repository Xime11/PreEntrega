export class RegisterPage{

 
    //para cuando se me repite el sector
      constructor(){
          this.clickIniciaSesionSpan='#registertoggle'
          this.usuarioInput='#user'
  
      };
      
  
  clickIniciaSesion(){
      //cy.get('#registertoggle').dblclick();
     //otra forma usando el contructor
      cy.get(this.clickIniciaSesionSpan).dblclick();
  
  
  }
  
  escribirUsuario(usuario){
      cy.get(this.usuarioInput).type(usuario);
  }
  
  
  checkGenero(genero){
      cy.get(`[value=${genero}]`).check();
  }
  
  
  };