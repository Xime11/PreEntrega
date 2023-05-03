export class LoginPage{

    contructor(){
        this.usuarioInput='#user';
    }
    escribirUsuario(usuario){
        cy.get('#user').type(usuario); 
    }
    escribirContraseña(password) {
        cy.get('#pass').type(password);
    };

    clickLogIn() {
       cy.contains('Log in').click();
    };
    clearUsuario() {
        cy.get(this.usuarioInput).clear()
    };

}