///<reference types="cypress"/>

import { LoginPage } from "../support/pages/loginPage";
import { HomePage } from "../support/pages/homePage";
import { ProductsPage } from "../support/pages/productsPage";
import { RegisterPage } from "../support/pages/registerPage";
import { HeaderPage } from "../support/pages/headerPage";
import { ShoppingCartPage } from "../support/pages/shoppingCartPage";


describe('Desafio PreEntrega',()=>{
    let LosDatos;
    const loginPage=new LoginPage();
    const homePage=new HomePage();
    const productsPage=new ProductsPage();
    const registerPage=new RegisterPage();
    const headerPage=new HeaderPage();
    const shoppingCartPage=new ShoppingCartPage();

    before('befor',()=>{
        cy.fixture("datos").then((info)=>{
            LosDatos=info
        });
    })

    beforeEach('antes',()=>{
        cy.visit('')
     
    });
    it("carrito de compras",()=>{
        registerPage.clickIniciaSesion()
        loginPage.escribirUsuario(LosDatos.usuario.usuario);
        loginPage.escribirContraseña(LosDatos.usuario.contraseña);
        loginPage.clickLogIn();
        cy.get(headerPage.user).should('exist');
        homePage.clickOnlineShop();
      /* cy.xpath('//p[text()=LosDatos.producto.nombre1]//following-sibling::button[text()="Add to cart"]').click();
        cy.xpath('//button[text()="Close"]').click();
        cy.xpath('//p[text()="Black Socks"]//following-sibling::button[text()="Add to cart"]').click();
        cy.xpath('//button[text()="Close"]').click();*/
        productsPage.clickAgregarProducto(LosDatos.producto.nombre1);
        productsPage.clickAgregarProducto(LosDatos.producto.nombre2);
        cy.get(productsPage.goShoppingCartButton).click();
        shoppingCartPage.retornarNombre(LosDatos.producto.nombre1).should('have.text',LosDatos.producto.nombre1)
        shoppingCartPage.retornarPrecio(LosDatos.producto.nombre1).should('have.text','$'+ LosDatos.producto.precio1);
        shoppingCartPage.retornarNombre(LosDatos.producto.nombre2).should('have.text',LosDatos.producto.nombre2);
        shoppingCartPage.retornarPrecio(LosDatos.producto.nombre2).should('have.text','$'+ LosDatos.producto.precio2);
        shoppingCartPage.clickTotalPrecio();
        cy.get(shoppingCartPage.precioTotal).should('have.text',LosDatos.producto.precio1 + LosDatos.producto.precio2);
    });

});


