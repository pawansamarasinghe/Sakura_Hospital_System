import React from 'react';
import { Grid, Form, Header, Message } from 'semantic-ui-react';
import { Helmet } from 'react-helmet';
import store from 'store';
import Swal from 'sweetalert2';
import styles from './loginstyle.css'

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
  
    const { username, password } = this.state;
    const { history } = this.props;
  
  
    if ((username === 'dulka' && password === 'dulka')) {
      history.push('/labhome');

      let timerInterval
            Swal.fire({
              title: 'Hello Laboratory !!',
              html: 'Things Getting Ready in <b></b> milliseconds.',
              timer: 3000,
              timerProgressBar: true,
              didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                  b.textContent = Swal.getTimerLeft()
                }, 100)
              },
              willClose: () => {
                clearInterval(timerInterval)
              }
            }).then((result) => {
              /* Read more about handling dismissals below */
              if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer')
              }
            })

    }
    else if ((username === 'kitty' && password === 'kitty')) {
      history.push('/sechome');

      let timerInterval
            Swal.fire({
              title: 'Hello Security !!',
              html: 'Things Getting Ready in <b></b> milliseconds.',
              timer: 2000,
              timerProgressBar: true,
              didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                  b.textContent = Swal.getTimerLeft()
                }, 100)
              },
              willClose: () => {
                clearInterval(timerInterval)
              }
            }).then((result) => {
              /* Read more about handling dismissals below */
              if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer')
              }
            })


    }
    else if ((username === 'pawan' && password === 'pawan')) {
      history.push('/abhome');

      let timerInterval
      Swal.fire({
        title: 'Hello Emergency Services !!',
        html: 'Things Getting Ready in <b></b> milliseconds.',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
          const b = Swal.getHtmlContainer().querySelector('b')
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
          }, 100)
        },
        willClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log('I was closed by the timer')
        }
      })

    }
    else if ((username === 'buddisha' && password === 'buddisha')) {
      history.push('/eqhome');

      let timerInterval
      Swal.fire({
        title: 'Hello Equipment Center !!',
        html: 'Things Getting Ready in <b></b> milliseconds.',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
          const b = Swal.getHtmlContainer().querySelector('b')
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
          }, 100)
        },
        willClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log('I was closed by the timer')
        }
      })


    }
    else if ((username === 'milani' && password === 'milani')) {
      history.push('/get');

      let timerInterval
      Swal.fire({
        title: 'Hello Staff Management !!',
        html: 'Things Getting Ready in <b></b> milliseconds.',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
          const b = Swal.getHtmlContainer().querySelector('b')
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
          }, 100)
        },
        willClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log('I was closed by the timer')
        }
      })

    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Invalid Username or Password!'
      })

    }
  
    

  }

  handleChange = (e) =>{
    const {name,value} = e.target;

    this.setState({
        ...this.state,
        [name]:value
    })
}

  render() {
    

    return (

      <div>
      
        <div class="container-fluid ps-md-0">
  <div class="row g-0">
    <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
    <div class="col-md-8 col-lg-6">
      <div class="login d-flex align-items-center py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-9 col-lg-8 mx-auto">
              <img src="/img/sakura_logo.png" width="200" height="250" class="imgcenter"/>
              <center><h1 class="login-heading mb-4">SAKURA Hospitals</h1></center><br/><br/><br/>
              <center><h3 class="login-heading mb-4"></h3></center>

             
              <form onSubmit={this.onSubmit}>
                <div class="form-floating mb-3">
                <input type="username" name="username" class="form-control"  placeholder="name@example.com" onChange={this.handleChange} />
                  <label for="floatingInput">Username</label>
                </div>
                <div class="form-floating mb-3">
                <input type="password" name="password" class="form-control" placeholder="Password" onChange={this.handleChange} />
                  <label for="floatingPassword">Password</label>
                </div>

                <div class="d-grid">
                  <button class="btn btn-lg btn-danger btn-login text-uppercase fw-bold mb-2" type="submit">Sign in</button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


      </div>
    );
  }
}

export default Login;
