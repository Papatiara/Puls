import React from 'react';
import SendingScreems from './SendingScreems'

class TechView extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
           click: false
       }
    }

    sendingScreems() {
      this.setState({
          click: true
      })
    }
    render() {
        if (this.state.click === true) {
            return(
                <SendingScreems />
            )
        }
        return (
      <div id="techview">
        <div> <img src="../puls.png" height="140" width="auto"/> </div>
      <p className="techName"> Hello {this.props.user}! </p>
      <h5 className="techName"> Select an option below </h5>
      <button className="button-xlarge pure-button" onClick={() => this.sendingScreems()}> I am sending screens</button>
      <button className="button-xlarge pure-button"> How many screens I sent</button>
      <button className="button-xlarge pure-button"> Overview</button>
    </div>
        )
    }


}




export default TechView;

