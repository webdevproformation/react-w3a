import { Component } from 'react';
import like from "./like.svg";

class Like extends Component {
    state = { 
        nombre : 0 ,
        style : { 
            width : "40px" ,
            height : "40px",
            cursor:"pointer"
        }
    }

    augmenter = () => {
        this.setState({
            nombre : this.state.nombre + 1
        })
    }

    modifStyle = () => {
        this.setState({
            style : { width : "80px" , height : "80px" }
        })
    }
    retourNormal = () => {
        this.setState({
            style : { width : "40px" , height : "40px" }
        })
    }

    render() { 
        return ( 
            <>
                <img 
                    src={like} 
                    alt="" 
                    onClick={this.augmenter} 
                    style={ this.state.style } 
                    onMouseEnter={this.modifStyle}
                    onMouseLeave={this.retourNormal}
                    />
                <span>{ this.state.nombre }</span>
            </>
         );
    }
}
 
export default Like;