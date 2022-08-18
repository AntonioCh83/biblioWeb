import React, { Component } from 'react';
import LoginService from '../utils/login';

 class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            user:"",
            password:"",
            success:false,
            error:false,
            errorMessage:'',
            successMessage:''
        }
        this.serviceLogin=new LoginService();
    }

    funcSuccess=(result)=>{
        this.setState({
            ...this.state,
            success:true,
            successMessage:`login effettuto con token ${result.token}`
            


        })
    }

    funcError=(result)=>{
        this.setState({
            ...this.state,
            error:true,
            errorMessage:`login fallito ,errore ${result}`
        })
    }

    chanceInput=(e)=>{
        
        this.setState({[e.target.name]:e.target.value});   
        
    }
   
    submit(e){
        e.preventDefault();
        this.serviceLogin.login(this.state.user,this.state.password,this.funcSuccess,this.funcError)
        console.log(this.state.user, this.state.password)
    }

  render() {
    return (
     <section className="section-content bg padding-y">
      <h2>Login</h2>
          <div className="container login-container">
              <div className="row">
                  <div className="col-md-6 login-form">
                      <h3>Accesso a BiblioWeb</h3>
                      <div className="form-group">
                          <input type="text" className="form-control"  name="user" placeholder="Nome Utente" 
                              onChange={this.chanceInput} value={this.state.user} />
                      </div>
                      <div className="form-group">
                          <input type="password" className="form-control"  name="password" placeholder="Password" 
                           value={this.state.password} onChange={this.chanceInput}    />
                      </div>
                      <div className="form-group">
                          <button className="btnSubmit"  onClick={this.submit.bind(this)}>Connetti</button>
                      </div>
                      <div className="form-group">
                              <a href="#" className="ForgetPwd">Password Dimenticata?</a>
                      </div>
                     
                  </div>
                  {this.state.success?<h3>{this.state.successMessage}</h3>:''}
                  {this.state.error?<h3>{this.state.errorMessage}</h3>:''}
              </div>
          </div>
      </section>
    );
  }
}

export default Login;
