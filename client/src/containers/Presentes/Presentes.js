import React, { Component } from 'react';
import classes from './Presentes.css';
import axios from '../../axios-registers';
import Spinner from '../../components/UI/Spinner/Spinner';
import ProdutoListado from '../../components/ProdutoListado/ProdutoListado';


class Presentes extends Component {
    state = {
        loading: false,
        products: null,
    }

    componentDidMount () {
        axios.get('/presentes.json')
        .then(res => {
            // console.log('aqui')
            // console.log(res.data)
            console.log(this.props)
            const fetchedProducts = [];
            for (let key in res.data) {
                fetchedProducts.push({
                    ...res.data[key],
                    id: key
                });
            }
            // console.log('fetched products')
            // console.log(fetchedProducts)
            this.setState({loading: false, products: fetchedProducts});
            // console.log('e agora');
            // console.log(this.state)
        })
        .catch(err => {
            this.setState({loading: false});
        });

    }
    productSelectedHandlerOld = (id) => {
        console.log(id);
    }

    productSelectedHandler = (id) => {
        console.log('aqui o id')
        console.log(id)
        console.log('aqui o state')
        console.log(this.state)
        const queryParams = [];
        queryParams.push('product=' + id);
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname: '/sale',
            search: '/' + queryString
        });
    }
    
render () {

    let productsListed = <Spinner />;
    if (this.state.products) {
        if (Array.isArray(this.state.image)) {
            productsListed = (
                this.state.products.map(singleProd => {
                    return <ProdutoListado key={singleProd.id}
                                    nome={singleProd.nome}
                                    preco={singleProd.price}
                                    image={singleProd.image[0]}
                                    clicked={() => this.productSelectedHandler(singleProd.id)}
                                    realpreco={singleProd.realprice}
                    />
                } ))
        } else {
        productsListed = (
            this.state.products.map(singleProd => {
                return <ProdutoListado key={singleProd.id}
                                nome={singleProd.nome}
                                preco={singleProd.price}
                                image={singleProd.image}
                                clicked={() => this.productSelectedHandler(singleProd.id)}
                                realpreco={singleProd.realprice}
                />
            } ))
                
    }
}

    return ( 
        <div className={classes.Presentes}>
                {productsListed}
        </div>
    )
}
}

export default Presentes;