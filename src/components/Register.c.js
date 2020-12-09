import React, { Component } from 'react';
import {register} from './User.c';
import '../css/signup.css';
import { Link } from 'react-router-dom';


class Register extends Component {

    constructor(){
        super();
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault()

        const user = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password,
        }
        
        
        register(user).then(res => {
            if(res){
                this.props.history.push('/login')
            }
        })
    }
     

    render() {
        return (
            <div className="container">
                <div class="container-fluid stylish-form">
                <h2 class="text-center">REGISTER NOW</h2>
                <div class="row mar20" >
                <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="inner-section">
                <form onSubmit={this.onSubmit} method="POST" action="https://google.co.in">
              <div class="mar20 inside-form">
                <h2 class="font_white text-center">SIGN UP</h2>
                <ul>
                  <li class="icon-holder dsp-flex">
                    <i class="fa fa-facebook "></i>
                  </li>
                  <li class="icon-holder dsp-flex">
                    <i class="fa fa-twitter "></i>
                  </li>
                  <li class="icon-holder dsp-flex">
                    <i class="fa fa-instagram "></i>
                  </li>
                </ul>
                <div class="input-group">
                  <span class="input-group-addon"><i class="fa fa-pencil "></i></span>
                  <input type="text" class="form-control" name="first_name" placeholder="First Name..." 
                    value = {this.state.first_name} onChange = {this.onChange} required = "required" />
                    
                </div>

                <div class="input-group">
                  <span class="input-group-addon"><i class="fa fa-pencil "></i></span>
                  <input type="text" class="form-control" name="last_name" placeholder="Last Name..." 
                    value = {this.state.last_name} onChange = {this.onChange} required = "required" />
                </div>

                <div class="input-group">
                  <span class="input-group-addon"><i class="fa fa-envelope "></i></span>
                  <input type="email" class="form-control" name="email" placeholder="Email..." 
                   value = {this.state.email} onChange = {this.onChange} required = "required"
                  />
                </div>
                <div class="input-group">
<span class="input-group-addon"><i class="fa fa-lock "></i></span>
                  <input type="password" class="form-control" name="password" placeholder="Password..." 
                    value = {this.state.password} onChange = {this.onChange} required = "required" />
                </div>
                <div class="footer text-center">
                <button class="btn btn-neutral btn-round btn-lg" type="submit">
                <Link to='/login'>Register</Link>
                </button>
                  
                </div>
              </div>
            </form>
                </div>
                </div>
            
                </div>
                </div>
            </div>
        )
    }
}

export default Register;