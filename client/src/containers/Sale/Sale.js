import React, { Component } from 'react';
import classes from './Sale.css';
import axios from '../../axios-registers';
import Spinner from '../../components/UI/Spinner/Spinner';
import Slider from '../../components/Slider/Slider';
// import GaleriaImagens from '../../components/GaleriaImagens/GaleriaImagens';
import Galeria from '../../components/GaleriaImagens/Galeria';
import Modal from '../../components/UI/Modal/Modal';
import image from '../../assets/Images/Capture.JPG';
class Sale extends Component {
    state = {
        products: null,
        produto: null,
        loading: true,
        modalCompra: false,
        modalCEP: false,
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
                const unfiltered = this.state.products.filter(item =>
                    item.id !== param[1] )
                    this.setState({loading: false, produto: filtered, outrosProdutos: unfiltered})
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

    productDescriptionModalHandlerOn = () => {
        this.setState({modalCompra: true})
    }
    productDescriptionModalHandlerOff = () => {
        this.setState({modalCompra: false})
    }

    modalCEPHandlerOn = () => {
        this.setState({modalCEP: true})
    }

    modalCEPHandlerOff = () => {
        this.setState({modalCEP: false})
    }
    action = () => {
        console.log('oi')
    }

render () {
    let galeria = (<div className={classes.showSpinner}>
    <Spinner />
    <h4>Vá até PRESENTES e selecione um produto!</h4>
    </div>

    )
    let titulo = '';
    let priceInfo = '';
    let breadcrumbProduct = '';
    let productDescription = '';
    let productNameForModal = '';
    const postalFeatureNotReady = <div><br/><br/><br/><br/><br/><br/><br/><br/><br/><h4>Feature não criada.</h4></div>
    if (this.state.produto) {
        galeria = (<Galeria product={this.state.produto} />)
        titulo = (<h1>{this.state.produto[0].nome}</h1>)
        priceInfo = ( <div>
            <p>de {this.state.produto[0].price}</p>
            <p><br/>por </p><h4>{this.state.produto[0].realprice}</h4>
            </div>
        )
        breadcrumbProduct = <div>{this.state.produto[0].apelido}</div>
        productDescription = <p>{this.state.produto[0].description}</p>
        productNameForModal = (<div className={classes.ModalCenter}>
            <img src={image} alt='ok'/><br/><br/>
        <h4>{this.state.produto[0].apelido} ADICIONADO AO CARRINHO!</h4><br/><br/>
        <button onClick={() => this.productDescriptionModalHandlerOff()}>OK!</button>
        </div>
        )
    }
    


    return ( 
        <div className={classes.Sale}>
            <div className={classes.breadCrumbGrid}>
                <div className={classes.breadItem}>
                    N1
                </div>
                <div className={classes.breadItem}>
                    action figures
                </div>
                <div className={classes.breadItemSelected}>
                    {breadcrumbProduct}
                </div>
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
                        <button onClick={() => this.productDescriptionModalHandlerOn()}>COMPRA AE</button>
                    </div>
                    <div className={classes.freteCalculation}>
                        <div>CALCULE O FRETE:</div>
                        
                        <div className={classes.ceparea}>
                        <input type="text" className={classes.abc} placeholder="00000"/> <input type="text" className={classes.cde} placeholder="000"/><button onClick={() => this.modalCEPHandlerOn()}>Calcular</button>

                        </div>
                    </div>
                </div>
            </div>
        <div className={classes.descricaoProduto}>
            <h2>Descrição do produto</h2>
            <br/>
            {productDescription}
            <br/><br/><br/>
            <h2>Quem viu, viu também</h2>
        </div>
        <div className={classes.slickSliderShelf}>

            <Slider products={this.state.outrosProdutos} />
        </div>
        <Modal show={this.state.modalCompra} modalClosed={this.productDescriptionModalHandlerOff}> {productNameForModal} </Modal>
        <Modal show={this.state.modalCEP} modalClosed={this.modalCEPHandlerOff}> {postalFeatureNotReady} </Modal>
        </div>
    )
}
}

export default Sale;