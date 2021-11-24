import React, { Component } from 'react'
export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = { email: "admin@admin.com", password: "admin", message: "" }
    }
    render() {
        return (
            <div className="row">
                <div className="col-lg-6 mx-auto">
                    <h4 className="my-1 py-2 border-bottom" >Login</h4>

                    <div className="form-group form-row p-2 m-2">
                        <label htmlFor="emailf" className="col-lg-4">EMAIL</label>
                        <input type="email" className="form-control" value={this.state.email}
                            onChange={(event) => {
                                this.setState({ email: event.target.value });
                                console.log(this.state.email);
                            }
                            } />
                    </div>

                    <div className="form-group form-row  p-2 m-2">
                        <label htmlFor="passordf" className="col-lg-4">PASSWORD</label>
                        <input type="password" className="form-control" value={this.state.password}
                            onChange={(event) => { this.setState({ password: event.target.value }) }} />
                    </div>

                    <div className=" text-end m-2 p-2">

                        <button className="btn btn-primary m-2" onClick={this.onLoginClick}>   Login</button>
                    </div>
                    <div className="text-center" style={{ fontSize: "30px" }} >
                        {this.state.message}
                    </div>

                </div>
            </div>

        )
    }

    onLoginClick = async () => {

        console.log(this.state);
        var response = await fetch(`http://localhost:5001/Users?email=${this.state.email}&password=${this.state.password}`, { methode: 'GET' });

        var body = await response.json();
        console.log(body);
        if (body.length > 0) {
            //success:update the message property of state of current component
            this.setState({
                message: <span className="text-success">Successfully logged-in
                </span>
            });
            //call the AppComponent's updateLoggedIn method
            this.props.updateLogginIn(true);
            //navigate to dashboard
            this.props.history.replace("/dashboard");
        } else {
            //error
            this.setState({
                message: <span className="text-danger">failed logged-in
                </span>
            });
        }








        //Methode 1
        // if (this.state.email === "farouk@local.tn" && this.state.password === "farouk") {
        //     //success
        //     this.setState({
        //         message: <span className="text-success">Successfully logged-in
        //         </span>
        //     });
        // } else {
        //     //error
        //     this.setState({
        //         message: <span className="text-danger">failed logged-in
        //         </span>
        //     });
        // }
    }
    componentDidMount() {
        document.title = "Login-MyApp"
    }
}
