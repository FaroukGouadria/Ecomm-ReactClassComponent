import React, { Component } from "react";

export default class CustomersList extends Component {
    state = {
        pageTitle: "Customers", 
        customers: [
            { id: 1, name: "farouk ", phone: "53060972", address: { city: "tunisie" },photo:"https://picsum.photos/id/101/60" },
            { id: 2, name: "mahdi ", phone: "12121212", address: { city: "tunisie" }, photo: "https://picsum.photos/id/104/60" },
            { id: 3, name: "fraj", phone: null, address: { city: "tunisie" }, photo: "https://picsum.photos/id/1011/60" },
            { id: 4, name: "mohamed", phone: "542523423", address: { city: "tunisie" }, photo: "https://picsum.photos/id/1033/60"},
            { id: 5, name: "mahmoud", phone: null, address: { city: "tunisie" }, photo: "https://picsum.photos/id/100/60" },
            { id: 6, name: "khairi", phone: "68786788", address: { city: "tunisie" }, photo: "https://picsum.photos/id/1010/60" },
            { id: 7, name: "mohbiste", phone: null, address: { city: "tunisie" }, photo: "https://picsum.photos/id/1010/60"},
            { id: 8, name: "oussema", phone: "897897897", address: { city: "tunisie" }, photo: "https://picsum.photos/id/1010/60"},
            { id: 9, name: "oussema", phone: "897897897", address: { city: "tunisie" }, photo: "https://picsum.photos/id/1010/60" },
            { id: 10, name: "oussema", phone: "897897897", address: { city: "tunisie" }, photo: "https://picsum.photos/id/1010/60" },
            { id: 11, name: "oussema", phone: "897897897", address: { city: "tunisie" }, photo: "https://picsum.photos/id/1010/60" }, 
        ],
        customerCount: 0,//a verifier
    }

    
    render() {
        return (
            <div>
                <h4 className="border-bottom m-1 p-1">{this.state.pageTitle} <span >{this.state.customerCount} </span>
                
                    <button className="btn btn-info" onClick={this.refreche}>Refresh</button>
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
        return(
            this.setState({
                //  customerCount:this.state.customers.length,
                customerCount: this.state.customers.length,
            })
        );
    }
   

    getPhone =(phone)=>{
       if(phone)
       return phone 
       else
       return <div style={{color:'red'}} >No Info</div>
    }   
    getRowElement= ()=>{
        return(
            this.state.customers.map((cust,index) => {
                return (
                    <tr key={cust.id}>
                        <td>{cust.id}</td>
                        <td>
                            <img src={cust.photo} alt="customerImage" /><br/>
                            <button className="btn btn-sm btn-secondary"onClick={()=>{this.changePick(cust,index)}}>Change Picture</button>
                        </td>
                        <td>{cust.name}</td>
                        <td >{this.getPhone(cust.phone)}</td>
                        <td>{cust.address.city}</td>
                    </tr>
                );
            })
        )

    }
    changePick=(cust,index)=>{
        //get exixting customer
            var curtArray=this.state.customers
            curtArray[index].photo="https://picsum.photos/id/111/60"
         //mise ajour lel photo   
            this.setState({
                customers:curtArray
            })
    }

}