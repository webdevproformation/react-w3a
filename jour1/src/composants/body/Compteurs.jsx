import { Component } from 'react';
import Compteur from "./Compteur";

class Compteurs extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <Compteur />
                <Compteur />
                <Compteur />
                <Compteur />
            </>

         );
    }
}
 
export default Compteurs;