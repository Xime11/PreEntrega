export class ProductsPage{

    constructor(){
        //this.addTocartButton='//button[text()="Add to cart"]';
        this.closeModal='#closeModal';
        this.goShoppingCartButton='#goShoppingCart';
        
    }

    clickAgregarProducto(producto){
        //cy.xpath(`//p[text()="producto"]//following-sibling::button[text()="Add to cart"]`).click();
        cy.get(`[value='${producto}']`).click();
        cy.get(this.closeModal).click();
        
    }

}


