import React, { Component } from 'react';
import Products from './Products';

class ShoppingCart extends Component {
    state = {
        pageTitle: "ShoppingCart",
        productCount: 0,
        products: [
            { id: 1, productName: "Iphone", price: 1200, quantite: 0, category: "informatique" },
            { id: 2, productName: "Iphone", price: 1200, quantite: 0, category: "informatique" },
            { id: 3, productName: "Iphone", price: 1200, quantite: 0, category: "informatique" },
            { id: 4, productName: "Iphone", price: 1200, quantite: 0, category: "informatique" },
            { id: 5, productName: "Iphone", price: 1200, quantite: 0, category: "informatique" },
            { id: 6, productName: "Iphone", price: 1200, quantite: 0, category: "informatique" },
            { id: 7, productName: "Iphone", price: 1200, quantite: 0, category: "informatique" },
        ]
    }
    render() {
        return (
            <div className="container-fluid">
                <h4 className="border-bottom m-1 p-1">{this.state.pageTitle} <span >{this.state.productCount} </span>
                    <button className="btn btn-info" onClick={this.refreche}>Refresh</button>
                </h4>
                <div className="row">
                    {
                        this.state.products.map((prod) => {
                            return (
                                <Products
                                    key={prod.id}
                                    product={prod}
                                    onIcrement={this.handleIncrement}
                                    onDecrement={this.handleDecrement}>
                                    <button className='btn btn-primary'>Buy Now</button>
                                </Products>
                            );
                        })
                    }
                </div>
            </div>
        );

    }
    //render ends


    handleIncrement = (product, max) => {


        console.log("incremenet", product)
        let allProducts = [...this.state.products]
        let index = allProducts.indexOf(product);
        if (allProducts[index].quantite < max) {

            allProducts[index].quantite++;
            this.setState({
                products: allProducts
            })
        }

    }
    handleDecrement = (product, min) => {
        console.log("decremenet", product)
        let allProducts = [...this.state.products]
        let index = allProducts.indexOf(product);
        if (allProducts[index].quantite > 0) {
            allProducts[index].quantite--;
            this.setState({
                products: allProducts
            })
        }

    }
}

export default ShoppingCart;