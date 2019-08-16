import React, { Component } from 'react';
import classes from './Galeria.css';

class Galeria extends Component {
    state = {
        images: '',
        image: '',
    }



    componentDidMount() {
        setTimeout(() => {
            const thumbnails = [];
            console.log(this.props.image)
            if (this.props.image !== []) {
                thumbnails.push(this.props.image)
                this.setState({image: this.props.image[0]})
                this.setState({images: thumbnails})
                console.log(this.state)
                console.log('condição 1')
            } else {
                this.setState({ images: this.props.image })
                console.log(this.state)
                console.log('condição 2')
            }
          }, 100);
          setTimeout(() => {
            this.setState({image: this.props.image})
        }, 150);
    }

    changeImageHandler = (thumbnail) => {
        setTimeout(() => {
        this.setState({image: thumbnail})
        console.log(this.state)
    }, 100);
    }


    render() {

        let thumbnails = '';
        if (this.props.image !== []) {
            thumbnails =  <div onClick={() => this.changeImageHandler(this.props.image)} className={classes.thumbnails}><img src={`https://firebasestorage.googleapis.com/v0/b/agencian1.appspot.com/o/${this.props.image.toLowerCase()}?alt=media&token=9fee7d21-83c7-4115-8a8e-8c9e951b667c`} alt="img"/> </div>
         } else {
                thumbnails = this.state.images.map(
                    thumbnail => <div onClick={() => this.changeImageHandler(thumbnail.image)} className={classes.thumbnails}><img src={`https://firebasestorage.googleapis.com/v0/b/agencian1.appspot.com/o/${thumbnail.toLowerCase()}?alt=media&token=9fee7d21-83c7-4115-8a8e-8c9e951b667c`} alt="img"/> </div>
                )
            }
        let selectedThumbnail = '';
        if (this.state.image) {
            selectedThumbnail = <div className={classes.selectedThumbnail}><img src={`https://firebasestorage.googleapis.com/v0/b/agencian1.appspot.com/o/${this.state.image.toLowerCase()}?alt=media&token=9fee7d21-83c7-4115-8a8e-8c9e951b667c`} alt="img"/> </div>
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
