import React, { Component } from 'react';


class Input extends Component {

    nothing (){
        return false
    }
    
    render() {

        const {type, inputClass , labelClass, id, forLabel , text, length, keyUp, check} = this.props

        return (
            <>
            <label className={labelClass} htmlFor={forLabel}>{text}</label>
            <input type={type} className={inputClass} id={id} minLength={length} onKeyUp={keyUp} onClick={id === 'exampleCheck1' ? check : this.nothing}/>
          </>
            );
    }
}

export default Input