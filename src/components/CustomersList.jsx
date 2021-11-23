import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CustomersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageTitle: "Customers",
            customers: [],
            customerCount: 0,//a verifier
        }
    }

    render() {
        return (
            <div>
                <h4 className="border-bottom m-1 p-1">{this.state.pageTitle} <span >{this.state.customerCount} </span>

                    <button className="btn btn-info m-2" onClick={this.refreche}>Refresh</button>

                    <Link className="btn btn-info" to="/new-customer">New Customer</Link>
                </h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Photos</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.getRowElement()}
                    </tbody>
                </table>
            </div>
        )


    }

    refreche = () => {
        return (
            this.setState({
                //  customerCount:this.state.customers.length,
                customerCount: this.state.customers.length,
            })
        );
    }


    getPhone = (phone) => {
        if (phone)
            return phone
        else
            return <div style={{ color: 'red' }} >No Info</div>
    }
    getRowElement = () => {
        return (
            this.state.customers.map((cust, index) => {
                return (
                    <tr key={cust.id}>
                        <td>{cust.id}</td>
                        <td>
                            <img src={cust.photo} alt="customerImage" /><br />
                            <button className="btn btn-sm btn-secondary" onClick={() => { this.changePick(cust, index) }}>Change Picture</button>
                        </td>
                        <td>{cust.name}</td>
                        <td >{this.getPhone(cust.phone)}</td>
                        <td>{cust.address.city}</td>
                        <td>
                            <Link to={`/update-customer/${cust.id}`}>Update</Link>
                        </td>
                    </tr>
                );
            })
        )

    }
    componentDidMount = async () => {
        document.title = "Customers-MyApp"
        //get request (/customers)
        let response = await fetch("http://localhost:5001/customers", { method: "GET" });
        if (response.ok)//200 to 299
        {
            let body = await response.json();
            this.setState({ customers: body });
        } else {
            console.log("Error" + response.status);
        }

    }
    changePick = (cust, index) => {
        //get exixting customer
        var curtArray = this.state.customers
        curtArray[index].photo = "https://picsum.photos/id/111/60"
        //mise ajour lel photo   
        this.setState({
            customers: curtArray
        })
    }

}