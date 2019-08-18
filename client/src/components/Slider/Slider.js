import React, { Component } from "react";
import Slider from "react-slick";
import classes from './Slider.css'
import ProdutoListado from '../../components/ProdutoListado/ProdutoListado';
import { withRouter } from 'react-router-dom';

class Responsive extends Component {

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
    window.location.reload();
}

  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1050,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 360,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    let singleProduct = '';
    if (this.props.products) {
      singleProduct = (
        this.props.products.map(singleProd => {
          return <div><ProdutoListado key={singleProd.id}
                          nome={singleProd.nome}
                          preco={singleProd.price}
                          image={singleProd.image}
                          realpreco={singleProd.realprice}
                          clicked={() => this.productSelectedHandler(singleProd.id)}
                          /></div>
        })
      )
    }
    return (
      <div className={classes.SliderContainer}>
        <Slider {...settings}>
          {singleProduct}
        </Slider>
      </div>
    );
  }
}

export default withRouter(Responsive);