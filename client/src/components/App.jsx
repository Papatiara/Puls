import React from 'react';
import TechView from './TechView';

class App extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
           user: '',
           password: '',
           showPass: 'Show',
           click: false,
           type: 'password'
       }
    }

    user(event) {
      this.setState({
          user: event.target.value
      });
    }

    password(event) {
        this.setState({
            password: event.target.value
        });
      }

    click() {
        this.setState({
            click: true,
          });  
    }

    showPassword() {
        if (this.state.showPass === 'Show') {
        this.setState({
            showPass: 'Hide',
            type: 'text'
        })
    } else {
        this.setState({
            showPass: 'Show',
            type: 'password'
        })
    }
    }

    render() {
        if (this.state.click === true) {
            return (
            <TechView user={this.state.user} />
            )
        } 
       return(
        <div id="wrapper">
        <div> <img src="../puls.png" height="140" width="auto"/> </div>
        <p> Username </p>
        <input value={this.state.user} onChange={(e) => this.user(e)} required/>
        <form type="text"> </form> 
        <p> Password </p>
        <div>
        <input type={this.state.type} value={this.state.password} onChange={(value) => this.password(value)} required/>
        <form type="text"> </form> 
        <button onClick={() => this.showPassword()} className="password"> {this.state.showPass} </button>
        </div>
        <button onClick={() => this.click()} className="submit"> Submit </button>
        </div> 
        )
    }
}

export default App;