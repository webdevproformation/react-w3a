import { Component } from 'react';
import Compteur from "./Compteur";

class Compteurs extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <Compteur compteur="12" largeur="30" />
                <Compteur />
                <Compteur />
                <Compteur />
            </>

         );
    }
}
 
export default Compteurs;