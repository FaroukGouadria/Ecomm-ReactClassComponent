import React, { Component } from 'react'

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            username: "",
            dateOfBirth: "",
            password: "",
            gender: "",
            country: "",
            controls: ["email", "username", "dateOfBirth", "password", "gender", "country"],
            errors: {
                email: [],
                username: [],
                dateOfBirth: [],
                password: [],
                gender: [],
                country: []
            },
            message: "",
            dirty: {
                email: false,
                username: false,
                dateOfBirth: false,
                password: false,
                gender: false,
                country: false,
            }
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
                            <input type="text" id="email" className='form-control' autoFocus="autofocus" value={this.state.email} onChange={(event) => {
                                let dirty = this.state.dirty;
                                dirty.email = true;
                                this.setState({ email: event.target.value, dirty: dirty }, this.validate);
                            }}
                                onBlur={(event) => {
                                    let dirty = this.state.dirty;
                                    dirty.email = true;
                                    this.setState({ dirty: dirty }, this.validate);

                                }}
                            />
                            <div className='text-danger'>
                                {this.state.errors.email[0] && this.state.dirty.email ? this.state.errors.email : ""}
                            </div>
                        </div>
                    </div>
                    <div className='form-group form-row'>
                        <label className='col-lg-4 col-form-label' htmlFor='name'>UserName</label>
                        <div className='col-lg-8'>
                            <input type="text" id="name" className='form-control' value={this.state.username} onChange={(event) => {
                                let dirty = this.state.dirty;
                                dirty.username = true;
                                this.setState({ username: event.target.value }, this.validate);
                            }}
                                onBlur={(event) => {
                                    let dirty = this.state.dirty;
                                    dirty.username = true;
                                    this.setState({ dirty: dirty }, this.validate);

                                }} />
                            <div className='text-danger'>
                                {this.state.errors.username[0] && this.state.dirty.username ? this.state.errors.username : ""}
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className='form-group form-row'>
                        <label className='col-lg-4 col-form-label' htmlFor='date'>Date Of BirthDay</label>
                        <div className='col-lg-8'>
                            <input type="date" id="date" className='form-control' value={this.state.dateOfBirth} onChange={(event) => {
                                let dirty = this.state.dirty;
                                dirty.dateOfBirth = true;
                                this.setState({ dateOfBirth: event.target.value }, this.validate);
                            }}
                                onBlur={(event) => {
                                    let dirty = this.state.dirty;
                                    dirty.dateOfBirth = true;
                                    this.setState({ dirty: dirty }, this.validate);

                                }}
                            />
                            <div className='text-danger'>
                                {this.state.errors.dateOfBirth[0] && this.state.dirty.dateOfBirth ? this.state.errors.dateOfBirth : ""}
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className='form-group form-row'>
                        <label className='col-lg-4 col-form-label' htmlFor='password'>Password</label>
                        <div className='col-lg-8'>
                            <input type="password" id="password" className='form-control' value={this.state.password} onChange={(event) => {
                                let dirty = this.state.dirty;
                                dirty.password = true;
                                this.setState({ password: event.target.value }, this.validate);
                            }}
                                onBlur={(event) => {
                                    let dirty = this.state.dirty;
                                    dirty.password = true;
                                    this.setState({ dirty: dirty }, this.validate);

                                }}
                            />
                            <div className='text-danger'>
                                {this.state.errors.password[0] && this.state.dirty.password ? this.state.errors.password : ""}
                            </div>
                        </div>
                    </div>
                    <div className='form-group form-row'>
                        <label className='col-lg-4'>Gender</label>
                        <div className='col-lg-8'>
                            <div className='form-check'>
                                <input type="radio" id="male" name="gender" className='form-heck-input' value="male" checked={this.state.gender === "male" ? true : false}
                                    onChange={(event) => {
                                        let dirty = this.state.dirty;
                                        dirty.gender = true;
                                        this.setState({ gender: event.target.value });
                                    }}
                                    onBlur={(event) => {
                                        let dirty = this.state.dirty;
                                        dirty.gender = true;
                                        this.setState({ dirty: dirty });
                                    }}
                                />
                                <label className='form-check-label' htmlFor='male' >Male</label>
                            </div>
                            <div className='form-check'>
                                <input type="radio" id="female" name="gender" value="female" className='form-heck-input' checked={this.state.gender === "female" ? true : false}
                                    onChange={(event) => {
                                        let dirty = this.state.dirty;
                                        dirty.gender = true;
                                        this.setState({ gender: event.target.value });
                                    }}
                                    onBlur={(event) => {
                                        let dirty = this.state.dirty;
                                        dirty.gender = true;
                                        this.setState({ dirty: dirty });
                                    }}
                                />
                                <label className='form-check-label' htmlFor='female' >Female</label>
                            </div>
                            <div className='text-danger'>
                                {this.state.errors.gender[0] && this.state.dirty.gender ? this.state.errors.gender : ""}
                            </div>
                        </div>
                    </div>
                    <div className='form-group form-row'>
                        <label className='col-lg-4 col-form-label' htmlFor='country'>
                            Country
                        </label>
                        <div className='col-lg-8'>
                            <select
                                className='form-control'
                                value={this.state.country}
                                onChange={(event) => {
                                    let dirty = this.state.dirty;
                                    dirty.country = true;
                                    this.setState({ country: event.target.value, dirty: dirty }, this.validate);
                                }}
                                onBlur={(event) => {
                                    let dirty = this.state.dirty;
                                    dirty.country = true;
                                    this.setState({ dirty: dirty });
                                }}

                            >
                                <option value="">Please Select</option>
                                <option value="Afganistan" > Afghanistan </option>
                                <option value="Albanie" > Albanie </option>
                                <option value="Algérie" > Algérie </option>
                                <option value="Samoa américaines" > Samoa américaines </option>
                                <option value="Andorre" > Andorre </option>
                                <option value="Angola" > Angola </option>
                                <option value="Anguilla" > Anguilla </option>
                                <option value="Antigua-et-Barbuda" > Antigua-et-Barbuda </option>
                                <option value="Argentine" > Argentine </option>
                                <option value="Arménie" > Arménie </option>
                                <option value="Aruba" > Aruba </option>
                                <option value="Australie" > Australie </option>
                                <option value="Autriche" > Autriche </option>
                                <option value="Azerbaïdjan" > Azerbaïdjan </option>
                                <option value="Bahamas" > Bahamas </option>
                                <option value="Bahreïn" > Bahreïn </option>
                                <option value="Bangladesh" > Bangladesh </option>
                                <option value="Barbade" > Barbade </option>
                                <option value="Biélorussie" > Biélorussie </option>
                                <option value="Belgique" > Belgique </option>
                                <option value="Belize" > Belize </option>
                                <option value="Bénin" > Bénin </option>
                                <option value="Bermudes" > Bermudes </option>
                                <option value="Bhoutan" > Bhoutan </option>
                                <option value="Bolivie" > Bolivie </option>
                                <option value="Bonaire" > Bonaire </option>
                                <option value="Bosnie-Herzégovine" > Bosnie-Herzégovine </option>
                                <option value="Botswana" > Botswana </option>
                                <option value="Brésil" > Brésil </option>
                                <option value="British Indian Ocean Ter" > British Indian Ocean Ter </option>
                                <option value="Brunei" > Brunei </option>
                                <option value="Bulgarie" > Bulgarie </option>
                                <option value="Burkina Faso" > Burkina Faso </option>
                                <option value="Burundi" > Burundi </option>
                                <option value="Cambodge" > Cambodge </option>
                                <option value="Cameroun" > Cameroun </option>
                                <option value="Canada" > Canada </option>
                                <option value="Îles Canaries" > Îles Canaries </option>
                                <option value="Cap-Vert" > Cap-Vert </option>
                                <option value="Îles Caïmans" > Îles Caïmans </option>
                                <option value="République centrafricaine" > République centrafricaine </option>
                                <option value="Tchad" > Tchad </option>
                                <option value="Channel Islands" > Channel Islands </option>
                                <option value="Chili" > Chili </option>
                                <option value="Chine" > Chine </option>
                                <option value="Île de Noël" > Île de Noël </option>
                                <option value="Île Cocos" > Île Cocos </option>
                                <option value="Colombie" > Colombie </option>
                                <option value="Comores" > Comores </option>
                                <option value="Congo" > Congo </option>
                                <option value="Iles Cook" > Iles Cook </option>
                                <option value="Costa Rica" > Costa Rica </option>
                                <option value="Côte d'Ivoire" > Côte d'Ivoire </option>
                                <option value="Croatie" > Croatie </option>
                                <option value="Cuba" > Cuba </option>
                                <option value="Curaco" > Curaçao </option>
                                <option value="Chypre" > Chypre </option>
                                <option value="République tchèque" > République tchèque </option>
                                <option value="Danemark" > Danemark </option>
                                <option value="Djibouti" > Djibouti </option>
                                <option value="Dominique" > Dominique </option>
                                <option value="République dominicaine" > République dominicaine </option>
                                <option value="Timor oriental" > Timor oriental </option>
                                <option value="Equateur" > Equateur </option>
                                <option value="Egypte" > Egypte </option>
                                <option value="Salvador" > Salvador </option>
                                <option value="Guinée équatoriale" > Guinée équatoriale </option>
                                <option value="Erythrée" > Erythrée </option>
                                <option value="Estonie" > Estonie </option>
                                <option value="Éthiopie" > Éthiopie </option>
                                <option value="Îles Malouines" > Îles Malouines </option>
                                <option value="Îles Féroé" > Îles Féroé </option>
                                <option value="Fidji" > Fidji </option>
                                <option value="Finlande" > Finlande </option>
                                <option value="France" > France </option>
                                <option value="Guyane française" > Guyane française </option>
                                <option value="Polynésie française" > Polynésie française </option>
                                <option value="Terr sud français" > Ter sud français </option>
                                <option value="Gabon" > Gabon </option>
                                <option value="Gambie" > Gambie </option>
                                <option value="Géorgie" > Géorgie </option>
                                <option value="Allemagne" > Allemagne </option>
                                <option value="Ghana" > Ghana </option>
                                <option value="Gibraltar" > Gibraltar </option>
                                <option value="Grande-Bretagne" > Grande-Bretagne </option>
                                <option value="Grèce" > Grèce </option>
                                <option value="Groenland" > Groenland </option>
                                <option value="Grenade" > Grenade </option>
                                <option value="Guadeloupe" > Guadeloupe </option>
                                <option value="Guam" > Guam </option>
                                <option value="Guatemala" > Guatemala </option>
                                <option value="Guinée" > Guinée </option>
                                <option value="Guyane" > Guyane </option>
                                <option value="Haïti" > Haïti </option>
                                <option value="Hawaï" > Hawaï </option>
                                <option value="Honduras" > Honduras </option>
                                <option value="Hong Kong" > Hong Kong </option>
                                <option value="Hongrie" > Hongrie </option>
                                <option value="Islande" > Islande </option>
                                <option value="Indonésie" > Indonésie </option>
                                <option value="Inde" > Inde </option>
                                <option value="Iran" > Iran </option>
                                <option value="Irak" > Irak </option>
                                <option value="Irlande" > Irlande </option>
                                <option value="Île de Man" > Île de Man </option>
                                <option value="Israël" > Israël </option>
                                <option value="Italie" > Italie </option>
                                <option value="Jamaïque" > Jamaïque </option>
                                <option value="Japon" > Japon </option>
                                <option value="Jordanie" > Jordanie </option>
                                <option value="Kazakhstan" > Kazakhstan </option>
                                <option value="Kenya" > Kenya </option>
                                <option value="Kiribati" > Kiribati </option>
                                <option value="Corée du Nord" > Corée du Nord </option>
                                <option value="Korea Sout" > Corée du Sud </option>
                                <option value="Koweit" > Koweït </option>
                                <option value="Kirghizistan" > Kirghizistan </option>
                                <option value="Laos" > Laos </option>
                                <option value="Lettonie" > Lettonie </option>
                                <option value="Liban" > Liban </option>
                                <option value="Lesotho" > Lesotho </option>
                                <option value="Libéria" > Libéria </option>
                                <option value="Libye" > Libye </option>
                                <option value="Liechtenstein" > Liechtenstein </option>
                                <option value="Lituanie" > Lituanie </option>
                                <option value="Luxembourg" > Luxembourg </option>
                                <option value="Macao" > Macao </option>
                                <option value="Macédoine" > Macédoine </option>
                                <option value="Madagascar" > Madagascar </option>
                                <option value="Malaisie" > Malaisie </option>
                                <option value="Malawi" > Malawi </option>
                                <option value="Maldives" > Maldives </option>
                                <option value="Mali" > Mali </option>
                                <option value="Malte" > Malte </option>
                                <option value="Marshall Islands" > Marshall Islands </option>
                                <option value="Martinique" > Martinique </option>
                                <option value="Mauritanie" > Mauritanie </option>
                                <option value="Maurice" > Maurice </option>
                                <option value="Mayotte" > Mayotte </option>
                                <option value="Mexique" > Mexique </option>
                                <option value="Midway Islands" > Midway Islands </option>
                                <option value="Moldavie" > Moldavie </option>
                                <option value="Monaco" > Monaco </option>
                                <option value="Mongolie" > Mongolie </option>
                                <option value="Montserrat" > Montserrat </option>
                                <option value="Maroc" > Maroc </option>
                                <option value="Mozambique" > Mozambique </option>
                                <option value="Myanmar" > Myanmar </option>
                                <option value="Nambie" > Nambie </option>
                                <option value="Nauru" > Nauru </option>
                                <option value="Népal" > Népal </option>
                                <option value="Antilles néerlandaises" > Antilles néerlandaises </option>
                                <option value="Pays-Bas" > Pays-Bas (Hollande, Europe) </option>
                                <option value="Nevis" > Nevis </option>
                                <option value="Nouvelle-Calédonie" > Nouvelle-Calédonie </option>
                                <option value="Nouvelle-Zélande" > Nouvelle-Zélande </option>
                                <option value="Nicaragua" > Nicaragua </option>
                                <option value="Niger" > Niger </option>
                                <option value="Nigéria" > Nigéria </option>
                                <option value="Noué" > Nioué </option>
                                <option value="Norfolk Island" > Norfolk Island </option>
                                <option value="Norvège" > Norvège </option>
                                <option value="Oman" > Oman </option>
                                <option value="Pakistan" > Pakistan </option>
                                <option value="Palau Island" > Palau Island </option>
                                <option value="Palestine" > Palestine </option>
                                <option value="Panama" > Panama </option>
                                <option value="Papouasie-Nouvelle-Guinée" > Papouasie-Nouvelle-Guinée </option>
                                <option value="Paraguay" > Paraguay </option>
                                <option value="Pérou" > Pérou </option>
                                <option value=" Philippines " > Philippines </option>
                                <option value="Pitcairn Island" > Pitcairn Island </option>
                                <option value="Pologne" > Pologne </option>
                                <option value="Portugal" > Portugal </option>
                                <option value="Porto Rico" > Porto Rico </option>
                                <option value="Qatar" > Qatar </option>
                                <option value="République du Monténégro" > République du Monténégro </option>
                                <option value="République de Serbie" > République de Serbie </option>
                                <option value="La Réunion" > La Réunion </option>
                                <option value="Roumanie" > Roumanie </option>
                                <option value="Russie" > Russie </option>
                                <option value="Rwanda" > Rwanda </option>
                                <option value="St Barthelemy" > St Barthelemy </option>
                                <option value="Saint-Eustache" > Saint-Eustache </option>
                                <option value="Sainte-Hélène" > Sainte-Hélène </option>
                                <option value="St Kitts-Nevis" > St Kitts-Nevis </option>
                                <option value="Sainte Lucie" > Sainte Lucie </option>
                                <option value="Saint-Martin" > Saint-Martin </option>
                                <option value="St Pierre & Miquelon" > St Pierre & Miquelon </option>
                                <option value="St Vincent & Grenadines" > St Vincent & Grenadines </option>
                                <option value="Saipan" > Saipan </option>
                                <option value="Samoa" > Samoa </option>
                                <option value="Samoa américaines" > Samoa américaines </option>
                                <option value="Saint-Marin" > Saint-Marin </option>
                                <option value="Arabie saoudite" > Arabie saoudite </option>
                                <option value="Sénégal" > Sénégal </option>
                                <option value="Seychelles" > Seychelles </option>
                                <option value="Sierra Leone" > Sierra Leone </option>
                                <option value="Singapour" > Singapour </option>
                                <option value="Slovaquie" > Slovaquie </option>
                                <option value="Slovénie" > Slovénie </option>
                                <option value="Îles Salomon" > Îles Salomon </option>
                                <option value="Somalie" > Somalie </option>
                                <option value="Afrique du Sud" > Afrique du Sud </option>
                                <option value="Espagne" > Espagne </option>
                                <option value="Sri Lanka" > Sri Lanka </option>
                                <option value="Soudan" > Soudan </option>
                                <option value="Suriname" > Suriname </option>
                                <option value="Swaziland" > Swaziland </option>
                                <option value="Suède" > Suède </option>
                                <option value="Suisse" > Suisse </option>
                                <option value="Syrie" > Syrie </option>
                                <option value="Tahiti" > Tahiti </option>
                                <option value="Taïwan" > Taïwan </option>
                                <option value="Tadjikistan" > Tadjikistan </option>
                                <option value="Tanzanie" > Tanzanie </option>
                                <option value="Thaïlande" > Thaïlande </option>
                                <option value="Togo" > Togo </option>
                                <option value="Tokélaou" > Tokélaou </option>
                                <option value="Tonga" > Tonga </option>
                                <option value="Trinité-et-Tobago" > Trinité-et-Tobago </option>
                                <option value="Tunisie" > Tunisie </option>
                                <option value="Turquie" > Turquie </option>
                                <option value="Turkménistan" > Turkménistan </option>
                                <option value="Tuvalu" > Tuvalu </option>
                                <option value="Ouganda" > Ouganda </option>
                                <option value="Royaume-Uni" > Royaume-Uni </option>
                                <option value="Ukraine" > Ukraine </option>
                                <option value="Erimates Arabes Unis" > Emirats Arabes Unis </option>
                                <option value="États-Unis d'Amérique" > États-Unis d'Amérique </option>
                                <option value="Uraguay" > Uruguay </option>
                                <option value="Ouzbékistan" > Ouzbékistan </option>
                                <option value="Vanuatu" > Vanuatu </option>
                                <option value="État de la Cité du Vatican" > État de la Cité du Vatican </option>
                                <option value="Venezuela" > Venezuela </option>
                                <option value="Vietnam" > Vietnam </option>
                                <option value="Îles Vierges (Britanniques)" > Îles Vierges (Britanniques) </option>
                                <option value="Îles Vierges (États-Unis)" > Îles Vierges (États-Unis) </option>
                                <option value="Wake Island" > Wake Island </option>
                                <option value="Yémen" > Yémen </option>
                                <option value="Zaïre" > Zaïre </option>
                                <option value="Zambie" > Zambie </option>
                                <option value="Zimbabwe" > Zimbabwe </option>
                            </select>
                            <div className='text-danger'>
                                {this.state.errors.country[0] && this.state.dirty.country ? this.state.errors.country : ""}
                            </div> 
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className='text-center'>
                                {this.state.message}
                            </div>
                            <button className="btn btn-primary m-2" onClick={this.OnRegisterClick}>
                                Register
                            </button>
                        </div>
                        <ul className="text-danger">
                            {Object.keys(this.state.errors).map((control) => {
                                if (this.state.dirty[control]) {
                                    return this.state.errors[control].map((err) => {
                                        return <li key={err}>{err}</li>;
                                    });
                                } else {
                                    return '';
                                }
                            })}
                        </ul>
                        <div>
                            {JSON.stringify(this.state)}
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
                case "gender":
                    if (!this.state[control]) {
                        errors[control].push("Gender can't be blank");
                    }
                    break;
                case "country":
                    if (!this.state[control]) {
                        errors[control].push("country can't be blank");
                    }
                    break;
                default:
                    break;
            }
        });
        //set errors
        this.setState({ errors: errors });
    };
    isValid = () => {
        let valid = true;
        //read all controls from state.errors
        for (let control in this.state.errors) {
            if (this.state.errors[control].length > 0) {
                valid = false;
            }
        }

        return valid;
    }
    OnRegisterClick = () => {
        this.validate();
        var dirty = this.state.dirty;
        Object.keys(dirty).forEach((control) => {
            dirty[control] = true;

        });
        this.setState({ dirty: dirty });
        if (this.isValid()) {
            this.setState({ message: "valid" })
        } else {
            this.setState({ message: "Invalid" })
        }
    }
}
