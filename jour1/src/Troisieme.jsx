import  { Component } from 'react';

class Troisieme extends Component {
    state = {  }
    render() { 
        return (
            <>
                <h1>Troisième composant</h1>
                <p className="introduction">lorem <br /> ipsum</p>
                <hr />
                <label htmlFor="nom">nom</label> 
                <input type="text" id="nom" />
            </>
         );
    }
}
 
export default Troisieme;