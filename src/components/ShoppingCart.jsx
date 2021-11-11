import React, { Component } from 'react';
import Products from './Products';

class ShoppingCart extends Component {
    //execute when the component is mounted 
    constructor(props) {
        console.log("constructor of shopping cart");
        super(props);//calling superClass's constructor
        //initilization of states
        this.state = {
            pageTitle: "ShoppingCart",
            productCount: 0,
            products: []
        }
    }
    // state = {
    //     pageTitle: "ShoppingCart",
    //     productCount: 0,
    //     products: [
    //         { id: 1, productName: "Iphone", price: 1200, quantite: 0, category: "informatique" },
    //         { id: 2, productName: "Iphone", price: 1200, quantite: 0, category: "informatique" },
    //         { id: 3, productName: "Iphone", price: 1200, quantite: 0, category: "informatique" },
    //         { id: 4, productName: "Iphone", price: 1200, quantite: 0, category: "informatique" },
    //         { id: 5, productName: "Iphone", price: 1200, quantite: 0, category: "informatique" },
    //         { id: 6, productName: "Iphone", price: 1200, quantite: 0, category: "informatique" },
    //         { id: 7, productName: "Iphone", price: 1200, quantite: 0, category: "informatique" },
    //     ]
    // }
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
                                    onDecrement={this.handleDecrement}
                                    onDelete={this.handleDelete}>
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

    //executes after constcuctor and render method
    componentDidMount = async()=> {
        document.title="ShoppingCart - MyApp"
       // console.log('Mounted component shobbingCart')
        //fetch data from server
        var response = await fetch("http://localhost:5001/products",{method:"GET"});
       var product= await response.json();
        console.log(product);

        this.setState({products:product});



       //premiere methode sans async and await
        // promise.then((response)=>{
        //     console.log(response);
        //     var promise2=response.json();
        //     promise2.then((product)=>{
        //         console.log(product);
        //         this.setState({products:product})
        //     })
        // }) 
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("updateComponent",
            prevProps,
            prevState,
            this.props,
            this.state
        );
    }
    //exectutes when the current instance of cunnrent component is being deleted from memory
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

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

    handleDelete = (product) => {
        let allProducts = [...this.state.products]
        let index = allProducts.indexOf(product);
        if (window.confirm("Are you sure to delete ?")) {

            //delete product based in index
            allProducts.splice(index, 1);

            this.setState({
                products: allProducts,
            });
        };
    }
    componentDidCatch(error, info) {
        console.log("componentError shoppingCarte")
        console.log(error, info);

        localStorage.lastError = `error : ${error}\ninfo : ${JSON.stringify(info)}`;
    }
}

export default ShoppingCart;