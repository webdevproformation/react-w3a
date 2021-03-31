import { Component } from 'react';
import "./Cinquieme.css" ;

class Cinquieme extends Component {
    state = { 
        titre : "Premier article",
        contenu : "lorem ipsum" ,
        like : 35
     }

    genererLike( like ){
        if( like <= 10){
            return "new" 
        }
        return "hot" 
    }

    render() { 
        let {titre , contenu , like } = this.state ;  // déstructuration 
        return ( 
            <article> 
                <h2>{ titre }</h2>
                <p>{ contenu }</p>
                <span className={ this.genererLike(like) }>{like}</span> 
            </article>
         );
    }
}
 
export default Cinquieme;