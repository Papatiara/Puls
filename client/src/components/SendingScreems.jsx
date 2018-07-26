import React from 'react';

class SendingScreems extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
           click: false
       }
    }

    render() {
        return(
            <div id="table">
              <table className="pure-table">
    <thead>
        <tr>
            <th>#</th>
            <th>Model</th>
            <th>Quantity</th>
        </tr>
    </thead>

    <tbody>
        <tr className="pure-table-odd">
            <td>1</td>
            <td>6</td>
            <td>0</td>
        </tr>

        <tr>
            <td>2</td>
            <td>6s</td>
            <td>0</td>
        </tr>

        <tr className="pure-table-odd">
            <td>3</td>
            <td>7</td>
            <td>0</td>
        </tr>

        <tr>
            <td>4</td>
            <td>7 Plus</td>
            <td>0</td>
        </tr>

        <tr className="pure-table-odd">
            <td>5</td>
            <td>8</td>
            <td>0</td>
        </tr>

        <tr>
            <td>6</td>
            <td>8 Plus</td>
            <td>0</td>
        </tr>

        <tr className="pure-table-odd">
            <td>7</td>
            <td>X</td>
            <td>0</td>
        </tr>
    </tbody>
</table>  
                </div>
        )
    }
}

export default SendingScreems;
