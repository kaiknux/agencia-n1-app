import React, { Component } from 'react';
import classes from './Galeria.css';
import axios from '../../axios-registers';

class Galeria extends Component {
    state = {
        product: false,
        products: false,
        image: '',
    }


    componentDidMount() {

        const teste = this.props.product[0]
        console.log(teste);
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
            const activeProduct = fetchedProducts.filter(
                item => item.id === this.props.product[0].id
            )
            const optionalProducts = fetchedProducts.filter(
                item => item.id !== this.props.product[0].id
            )
            const activeImage = activeProduct[0].image[0];
            
            this.setState({product: activeProduct, products: optionalProducts, image: activeImage})
            console.log(this.state)
            console.log(this.state.product[0].image)
            })
        .catch(err => {
            console.log(err)
        })

    }
    changeImageHandler = (thumbnail) => {
        console.log(thumbnail);
        this.setState({image: thumbnail})
    }

    render() {
        let thumbnails = '';
        if (this.state.product) {
            thumbnails = ( this.state.product[0].image.map(
                (item) => (
                    <div onClick={() => this.changeImageHandler(item)} className={classes.thumbnails}><img src={`https://firebasestorage.googleapis.com/v0/b/agencian1.appspot.com/o/${item}?alt=media&token=40f830c9-677f-48e3-89e0-41110529a772`} alt="img"/> </div>
                    )
            )
            )
        }
        // if (this.state.image) {
        //     selectedThumbnail = ( <p>{this.state.image}</p>)
        // }
        // let thumbnails = '';
        // if (this.state.images) {
        //     thumbnails =  <div onClick={() => this.changeImageHandler(this.props.image)} className={classes.thumbnails}><img src={`https://https://firebasestorage.googleapis.com/v0/b/agencian1.appspot.com/o/${this.state.image}alt=media&token=40f830c9-677f-48e3-89e0-41110529a772`} alt="img"/> </div>
        //  } else {
        //         thumbnails = this.state.images.map(
        //             thumbnail => <div onClick={() => this.changeImageHandler(thumbnail.image)} className={classes.thumbnails}><img src={`https://firebasestorage.googleapis.com/v0/b/agencian1.appspot.com/o/${thumbnail}?alt=media&token=9fee7d21-83c7-4115-8a8e-8c9e951b667c`} alt="img"/> </div>
        //         )
        //     }
        let selectedThumbnail = '';
        if (this.state.image) {
            selectedThumbnail = <div className={classes.selectedThumbnail}><img src={`https://firebasestorage.googleapis.com/v0/b/agencian1.appspot.com/o/${this.state.image}?alt=media&token=40f830c9-677f-48e3-89e0-41110529a772`} alt="img"/> </div>
        }

                // não vou fazer ele entregar props pra router e escolher imagem, só tem uma de cada mesmo. se estiver sobrando tempo eu faço depois

        return(
            <div className={classes.GalContainer}>
                <div>
                    {thumbnails}
                </div>
                <div>
                    {selectedThumbnail}
                </div>
            </div>

        );
    }
}
export default Galeria;
