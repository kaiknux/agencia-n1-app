import React from 'react';
import classes from './Input.css';

const input = (props) => {
    let inputElement = null;
    switch (props.elementType) {
            //lembrar que className no html não é case sensitive, então fazer inputType virar inputtype em switch case
        case ('input'):
            inputElement = <input onChange={props.changed} className={classes.InputElement} {...props.elementConfig} value={props.value}/>;
            break;
        case ('textarea'):
            inputElement = <textarea onChange={props.changed} className={classes.InputElement} {...props.elementConfig} value={props.value}/>;
            break;
        case ('select'):
            inputElement = (
                <select
                    className={classes.InputElement}
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
        break;
        default:
            inputElement = <input onChange={props.changed} className={classes.InputElement} {...props.elementConfig} value={props.value}/>;
    }



    return (
    <div className={classes.Input}>
        <label className={classes.Label}>{props.label}</label>
        {inputElement}
    </div>
    )
}

export default input;