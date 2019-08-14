import React from 'react';
import classes from './ProdutoListado.css';

const ProdutoListado = (props) => (
    <div onClick={props.clicked} className={classes.ProdutoListado}>
<div className={classes.canhoto}>
    <h1>{props.key}</h1>
    <p>{props.nome}</p>
    <p>{props.preco}</p>
    <p>{props.image}</p>
</div>
<div className={classes.destro}>    <img src={`https://firebasestorage.googleapis.com/v0/b/agencian1.appspot.com/o/${props.image.toLowerCase()}?alt=media&token=9fee7d21-83c7-4115-8a8e-8c9e951b667c`} className={classes.Image} alt="Pic"/>
</div>
</div>
);

export default ProdutoListado;