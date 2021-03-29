import { Component } from 'react';
import "./Quatrieme.css" ;

class Quatrieme extends Component {
    
    state = { 
        chiffre : 30, // déconseillé de créer un attribut de class 
        libelle : "like"
    }

    genererLibelleLike(){
        if(this.state.chiffre <= 0){
            return <p>Vous n'avez aucun like</p> ;
            /** vous pouvez retourner directement du jsx dans vos fonctions */
        }
        return <p>via la fonction {this.state.chiffre + " " + this.state.libelle}</p> ;
    }


    render() { 
        return ( 
            <>
                <p className="nombre">{ this.state.chiffre } {this.state.libelle}</p>
                <p className="nombre">{ this.state.chiffre + " " + this.state.libelle }</p>
                { this.genererLibelleLike() }
            </>
         );
    }
}
 
export default Quatrieme;