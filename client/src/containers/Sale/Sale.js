import React, { Component } from 'react';
import classes from './Sale.css';
import axios from '../../axios-registers';
import Spinner from '../../components/UI/Spinner/Spinner';
import ProdutoListado from '../../components/ProdutoListado/ProdutoListado';

class Sale extends Component {
    state = {
        products: null,
    }
    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);

        for (let param of query.entries()) {
            const teste = param[0]
            const bola = param[1] 
            console.log('console log param 1')
            console.log(param[1])
            const arrayDeObjetos = [];
            axios.get('/presentes.json')
            .then(res => {
                // console.log('aqui')
                // console.log(res.data)
                const fetchedProducts = [];
                for (let key in res.data) {
                    fetchedProducts.push({
                        ...res.data[key],
                        id: key
                    });
                }
                this.setState({loading: false, products: fetchedProducts})
                const filtered = this.state.products.filter(item =>
                    item.id === param[1] )
                    console.log(filtered);
                console.log(this.state)
            })
                .catch(err => {
                    this.setState({loading: false});
                });
                console.log(this.state)
            }
        

        // for (let param of query.entries()) {
        //     if (param[0] === 'id') {
        //         price = param[1];
        //     } else if (param[0] === '/bacon') {
        //         param[0] = 'bacon'
        //         objetoDeIngredientes[param[0]] = +param[1];
        //     } else {
        //         objetoDeIngredientes[param[0]] = +param[1];
        //     }
        // }
        // this.setState({ingredients: objetoDeIngredientes, totalPrice: price})
    }

render () {
    return ( 
        <div className={classes.Sale}>
        <p> Sale </p>
        </div>
    )
}
}

export default Sale;