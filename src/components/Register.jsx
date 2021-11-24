import React, { Component } from 'react'

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            username: "",
            dateOfBirth: "",
            password: "",
            controls: ["email", "username", "dateOfBirth", "password"],
            errors: {
                email: [],
                username: [],
                dateOfBirth: [],
                password: [],
            },
        };
    }
    render() {
        return (
            <div className='row'>
                <div className="col-lg-6 mx-auto">
                    <h1>Rgister</h1>
                    <br />
                    <div className='form-group form-row'>
                        <label className='col-lg-4 col-form-label' htmlFor='email'>Email</label>
                        <div className='col-lg-8'>
                            <input type="text" id="email" className='form-control' value={this.state.email} onChange={(event) => {
                                this.setState({ email: event.target.value }, this.validate);
                            }} />
                        </div>
                    </div>
                    <div className='form-group form-row'>
                        <label className='col-lg-4 col-form-label' htmlFor='name'>UserName</label>
                        <div className='col-lg-8'>
                            <input type="text" id="name" className='form-control' value={this.state.username} onChange={(event) => {
                                this.setState({ username: event.target.value }, this.validate);
                            }} />
                        </div>
                    </div>
                    <br />
                    <div className='form-group form-row'>
                        <label className='col-lg-4 col-form-label' htmlFor='date'>Date Of BirthDay</label>
                        <div className='col-lg-8'>
                            <input type="date" id="date" className='form-control' value={this.state.dateOfBirth} onChange={(event) => {
                                this.setState({ dateOfBirth: event.target.value }, this.validate);
                            }} />
                        </div>
                    </div>
                    <br />
                    <div className='form-group form-row'>
                        <label className='col-lg-4 col-form-label' htmlFor='password'>Password</label>
                        <div className='col-lg-8'>
                            <input type="password" id="password" className='form-control' value={this.state.password} onChange={(event) => {
                                this.setState({ password: event.target.value }, this.validate);
                            }} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <button className="btn btn-primary m-2" onClick={this.OnRegisterClick}>
                                Register
                            </button>
                        </div>
                        <ul className="text-danger">
                            {Object.keys(this.state.errors).map((control) => {
                                return this.state.errors[control].map((err) => {
                                    return <li key={err}>{err}</li>;
                                });
                            })}
                        </ul>
                        <div>
                            {JSON.stringify(this.state.errors)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    validate = () => {
        const validaEmailRegex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
        const validPasswordRegex = /((?=.*\d)(?=.[a-z])(?=.*[A-Z]).{6,15})/;
        let errors = {};
        //bch na9raw kol control min table controls
        this.state.controls.forEach((control) => {
            errors[control] = [];
            switch (control) {
                case "email":
                    //email can't be blank
                    if (!this.state[control]) {
                        errors[control].push("email can't be blank");
                    }
                    //if 1 : ki thala mich fergh taada lil if 2 w choufha compatible maa regExp ou nn 
                    if (this.state.email) {

                        if (!validaEmailRegex.test(this.state[control])) {
                            errors[control].push("Invalid Email");
                        }
                    }
                    break;
                case "password":
                    //password can't be blank
                    if (!this.state[control]) {
                        errors[control].push("password can't be blank");
                    }
                    if (this.state.password) {

                        if (!validPasswordRegex.test(this.state[control])) {
                            errors[control].push("password must be 6 to 15 characters long with at least one uppercase letter,one lowercase letter and one digit");
                        }
                    }
                    break;
                case "username":
                    if (!this.state[control]) {
                        errors[control].push("username can't be blank");
                    }
                    break;
                case "dateOfBirth":
                    if (!this.state[control]) {
                        errors[control].push("date of birthDay can't be blank");
                    }
                    //date should be 18 years old
                    if (this.state[control]) {

                        let dob = new Date(this.state[control]).getTime();//date in milliseconds
                        let today = new Date().getTime();
                        if (today - 18 * 365.25 * 24 * 60 * 60 * 1000 < dob) {
                            errors[control].push("Minimum age is 18 years");
                        }
                    }



                    break;
                default:
                    break;
            }
        });
        //set errors
        this.setState({ errors: errors });
    };
}
