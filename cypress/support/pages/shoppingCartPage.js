export class ShoppingCartPage{

    retornarNombre(producto){
        return cy.get(`[name='${producto}']`);
    };
    
    retornarPrecio(producto){
        return cy.contains(producto).siblings('#productPrice');

    };

    clickTotalPrecio() {
        cy.xpath("//button[text()='Show total price']").click();
     };

     precioTotal(){
        cy.xpath('//p[@id="price"]')
     };

    
}

