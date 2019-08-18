import React from 'react';
import classes from './ProdutoListado.css';


const ProdutoListado = (props) => (
    <div onClick={props.clicked} className={classes.ProdutoListado}>
    <div className={classes.destro}>
        <img src={`https://firebasestorage.googleapis.com/v0/b/agencian1.appspot.com/o/${props.image[0].toLowerCase()}?alt=media&token=9fee7d21-83c7-4115-8a8e-8c9e951b667c`} className={classes.Image} alt="Pic" />
    </div>
    <div className={classes.canhoto}>
        <p><br />{props.nome}</p>
        <p><br /> <br /></p>   
        <p><br /></p>
        <p>de {props.preco}</p><br/>
        <h4>por {props.realpreco}</h4>
        <p><br /></p>
        <p><br /></p>
        <p><br /></p>
    </div>
</div>
)

export default ProdutoListado;