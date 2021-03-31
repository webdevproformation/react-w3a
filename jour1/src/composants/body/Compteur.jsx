/* import { Component } from 'react';

class Compteur extends Component {
    state = { 
        valeur : this.props.compteur.valeur
    } 
    // solution 1 éviter la perte de contexte de this
    augmenter( data ){
        // alert("j'ai cliqué sur le bouton +");
        // console.log(this);
        // this.state.valeur++; 
        // let valeur = this.state.valeur ; 
        // let that = this; 
        //  this.setState({
        //    valeur : this.state.valeur + 1 
        // }) 
        // appel une méthode qui est stockée dans le parent 
        this.props.augmenter( data );
    }

    passage(){
        console.log("je viens de rentrer dans le bouton +");
    }
    // solution 2 éviter la perte de contexte de this 
    diminuer = (data) => {
        //console.log(this.state.valeur);
        //this.setState({ valeur : this.state.valeur - 1 });
        this.props.diminuer(data);
    }

    misEnformeCompteur(){
        //console.log(this.props.compteur); // enfant lecture seule 
        // rdv 13h46 bon appétit !!
        //console.log(this.props.largeur)
        const {valeur}= this.props.compteur ;
        if(valeur === 0){
            return "Zero" ;
        }
        return valeur ;
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
                <button onClick={() => { this.diminuer( this.props.compteur )}}>-</button>
                <button onClick={ () => { this.info( "une information" ) }}>information</button>
            </div>
        );
    }
}
 
export default Compteur; */

//sfc stateless fonctional component


const diminuer = (data) => {
    //console.log(this.state.valeur);
    //this.setState({ valeur : this.state.valeur - 1 });
    this.props.diminuer(data);
}

function passage(){
    console.log("je viens de rentrer dans le bouton +");
}

const info = (param) => {
    console.log(param);
}

function augmenter( data ){
    this.props.augmenter( data );
}

function misEnformeCompteur( valeur ){
    if(valeur === 0){
        return "Zero" ;
    }
    return valeur ;
}

const Compteur = props => {
    return ( 
        <div className="compteur" style={{ padding: "0.2em 0" }}>
                <span> 
                    { misEnformeCompteur( props.compteur.valeur ) }
                </span>
                <button onClick={ () => { augmenter( props.compteur ) } } onMouseEnter={passage}>+</button>
                <button onClick={() => { diminuer( props.compteur )}}>-</button>
                <button onClick={ () => { info( "une information" ) }}>information</button>
        </div>
    );
}
 
export default Compteur;
