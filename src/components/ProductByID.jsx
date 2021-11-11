import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ProductByID extends Component {
    constructor(props) {
        super(props)

        this.state = {
            product: {},
        }
    }
    render() {
        return (
            <div className="row">
                <div className="col-lg-6 mx-auto">
                    <div className="card m-2">
                        <div className="card-header">
                            {this.state.product.category}
                            <span className="pull-right" onClick={() => { this.props.onDelete(this.state.product) }}>
                                <i className="fa fa-times"  ></i>
                            </span>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">
                                Designation:    {this.state.product.productName}
                            </h5>
                            <p className="card-text">
                                Price:
                                {this.state.product.price} DT
                            </p>
                            <p className="card-text">
                                Quantity:
                                {this.state.product.quantite}
                            </p>
                        </div>

                        <div className="card-footer">
                            <div className="float-start">
                                <span className='badge' style={{ color: "black", fontSize: "15px" }}>
                                    {this.state.product.quantite}
                                </span>
                                <div className="btn-group">
                                    <button className='btn btn-outline-success' onClick={() => { this.props.onIcrement(this.props.product, 5) }}>+</button>
                                    <button className='btn btn-outline-success' onClick={() => { this.props.onDecrement(this.props.product, 0) }}>-</button>
                                </div>
                            </div>
                            <div className="float-end"> 
                                <Link to="/cart"className="btn btn-secondary">Back</Link>
                            {this.props.children}</div>

                        </div>
                    </div>
                </div>
            </div>
           
        )
    }
    componentDidMount = async () => {
        document.title =`${this.state.product.productName}- MyApp`
        //get the value of route parameter
        var id = this.props.match.params.id;

        //send get request
        var response = await fetch(`http://localhost:5001/products/${id}`, {
            method: "GET",
        });

        //get response body
        var body = await response.json();
        console.log(body);

        //check response body
        if (body) {
            //update the response body into state
            this.setState({ product: body });
        }
    };
    // componentDidUpdate(prevProps, prevState) {
       
    // }
    // componentWillUnmount() {
        
    // }
}
