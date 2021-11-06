import React, { Component } from 'react'

export default class Products extends Component {
    render() {
        return (
            <div className="col-lg-4">
                <div className="card m-2">
                    <div className="card-header">
                        {this.props.product.category}
                        <span className="pull-right" onClick={() => {this.props.onDelete(this.props.product )}}>
                            <i className="fa fa-times"  ></i>
                        </span>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Designation: {this.props.product.name}</h5>
                        <p className="card-text"> Price: {this.props.product.price} DT</p>
                        <p className="card-text">Quantity {this.props.product.quantite}</p>
                    </div>

                    <div className="card-footer">
                        <div className="float-start">
                            <span className='badge' style={{ color: "black", fontSize: "15px" }}>{this.props.product.quantite}</span>
                            <div className="btn-group">
                                <button className='btn btn-outline-success' onClick={() => { this.props.onIcrement(this.props.product, 5) }}>+</button>
                                <button className='btn btn-outline-success' onClick={() => { this.props.onDecrement(this.props.product, 0) }}>-</button>
                            </div>
                        </div>
                        <div className="float-end"> {this.props.children}</div>

                    </div>
                </div>
            </div>
        )
    }
}
