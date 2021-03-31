import { Component } from 'react';


class Sixieme extends Component {
    state = { 
        liste : ["Lundi", "Mardi", "Mercredi"]
    }
    render() { 
        return ( 
            <>
                <ul>
                    <li>{this.state.liste[0]}</li>
                    <li>{this.state.liste[1]}</li>
                    <li>{this.state.liste[2]}</li>
                </ul>
                <hr />
                <ul>
                    { this.state.liste.map( item => <li>{item}</li> ) }
                </ul>
            </>
         );
    }
}
 
export default Sixieme;