import React, { Component } from 'react';
import classes from './Sale.css';
import axios from '../../axios-registers';
import Spinner from '../../components/UI/Spinner/Spinner';
import Slider from '../../components/Slider/Slider';
// import GaleriaImagens from '../../components/GaleriaImagens/GaleriaImagens';
import Galeria from '../../components/GaleriaImagens/Galeria';
class Sale extends Component {
    state = {
        products: null,
        produto: null,
        loading: true,
    }
    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);

        for (let param of query.entries()) {
 
            console.log('console log param 1')
            console.log(param[1])
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
                    this.setState({loading: false, produto: filtered})
                console.log(this.state)
            })
                .catch(err => {
                    this.setState({loading: false});
                });
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
    let galeria = <Spinner />
    let titulo = '';
    let priceInfo = '';
    if (this.state.produto) {
        galeria = (<Galeria product={this.state.produto} />)
        titulo = (<h1>{this.state.produto[0].nome}</h1>)
        priceInfo = ( <div>
            <p>de {this.state.produto[0].price}</p>
            <p><br/>por </p><h4>{this.state.produto[0].realprice}</h4>
            </div>
        )
    }
    


    return ( 
        <div className={classes.Sale}>
            <div className={classes.breadCrumbGrid}>
                breadCrumbs
            </div>
            <div className={classes.cartaoDoProduto}>
                <div className={classes.imagemProduto}>
                    {/* <GaleriaImagens /> */}
                    {galeria}
                </div>
                <div className={classes.navegadorDeCompra}>
                    <div className={classes.productName}>
                        {titulo}
                    </div>
                    <div className={classes.priceBuyBox}>
                        {priceInfo}
                        <button>COMPRA AE</button>
                    </div>
                    <div className={classes.freteCalculation}>
                        <div>CALCULE O FRETE:</div>
                        
                        <div className={classes.ceparea}>
                        <input type="text" className={classes.abc} placeholder="00000"/> <input type="text" className={classes.cde} placeholder="000"/> <button />

                        </div>
                    </div>
                </div>
            </div>
        <div className={classes.descricaoProduto}>

        </div>
        <div className={classes.slickSliderShelf}>
            <Slider />
        </div>
        <p> Sale </p>
        </div>
    )
}
}

export default Sale;