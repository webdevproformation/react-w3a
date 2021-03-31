import { Component } from 'react';

class Compteur extends Component {
    state = { 
        valeur : this.props.compteur.valeur
    }
    // solution 1 éviter la perte de contexte de this
    augmenter( data ){
        // alert("j'ai cliqué sur le bouton +");
        // console.log(this);
        // this.state.valeur++; 
        /* let valeur = this.state.valeur ; */
        /* let that = this; */
       /*  this.setState({
            valeur : this.state.valeur + 1 
        }) */
        // appel une méthode qui est stockée dans le parent 
        this.props.augmenter( data );
    }

    passage(){
        console.log("je viens de rentrer dans le bouton +");
    }
    // solution 2 éviter la perte de contexte de this 
    diminuer = () => {
        console.log(this.state.valeur);
        this.setState({ valeur : this.state.valeur - 1 });
    }

    misEnformeCompteur(){
        console.log(this.props.compteur); // enfant lecture seule 
        // rdv 13h46 bon appétit !!
        console.log(this.props.largeur)
        if(this.state.valeur === 0){
            return "Zero"
        }
        return this.state.valeur ;
    }

    info = (param) => {
        console.log(param);
        // this dans les méthodes 
    }

    render() { 
        return ( 
            <div className="compteur" style={{ padding: "0.2em 0" }}>
                <span> 
                    { this.misEnformeCompteur() }
                </span>
                <button onClick={ () => { this.augmenter( this.props.compteur ) } } onMouseEnter={this.passage}>+</button>
                <button onClick={this.diminuer}>-</button>
                <button onClick={ () => { this.info( "une information" ) }}>information</button>
            </div>
        );
    }
}
 
export default Compteur;
