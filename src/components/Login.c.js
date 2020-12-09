import React, { Component } from 'react';
import {login} from './User.c';
import '../css/signup.css';
import { Link } from 'react-router-dom';



class Login extends Component {

    constructor(){
        super();
        this.state = {
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
            email: this.state.email,
            password: this.state.password
        }

        login(user).then(res => {
            if(res){
                this.props.history.push('/')
            }
        })
    }
     

    render() {
        return (
           <div className="container">
           <div class="container-fluid stylish-form">
           <h2 class="text-center">GET STARTED</h2>
           <div class="row mar20" >
           <div class="col-md-12 col-sm-12 col-xs-12">
           <div class="inner-section">
           <form onSubmit={this.onSubmit} method="POST" action="https://google.co.in">
           <div class="mar20 inside-form">
                <h2 class="font_white text-center">LOG IN</h2>
           <div class="input-group">
                  <span class="input-group-addon"><i class="fa fa-pencil "></i></span>
                  <input type="text" class="form-control" name="email" placeholder="Email..." 
                    value = {this.state.email} onChange = {this.onChange} required = "required" />
                    
                </div>
                <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-lock "></i></span>
                  <input type="password" class="form-control" name="password" placeholder="Password..." 
                    value = {this.state.password} onChange = {this.onChange} required = "required" />
                </div>
                <div class="footer text-center">
                <button class="btn btn-neutral btn-round btn-lg" type="submit">
                    <Link to="/event">View Events</Link>
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

export default Login;