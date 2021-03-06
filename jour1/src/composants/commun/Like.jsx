import { Component } from 'react';
import like from "./like.svg";
import "./Like.css" ;

class Like extends Component {
    state = { 
        nombre : this.props.nombre ,
        class : "",
        style : { 
            width : "40px" ,
            height : "40px",
            cursor:"pointer"
        }
    }

    augmenter = (data) => {
        /* this.setState({
            nombre : this.state.nombre + 1
        }) */
        this.props.augmenter(data)
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

    changement = () => {
        if(this.state.class ){
            this.setState({
                class : "big"
            })
        }else {
            this.setState({
                class : ""
            })
        }
    }

    componentDidMount() {
        console.log("le composant like est affiché dans le DOM ")
    }

    render() { 
        console.log("render like")
        return ( 
            <>
                <img 
                    src={like} 
                    alt="" 
                    onClick={ () => this.props.augmenter(this.props)} 
                    style={ this.state.style } 
                  
                    // onMouseEnter={this.modifStyle}
                    // onMouseLeave={this.retourNormal}
                    />
                <span>{ this.props.nombre }</span>
                {
                    /*
                        <img src={like} onClick={this.changement} className={this.state.class} alt="" />
                    */
                }
                
            </>
         );
    }
}
 
export default Like;