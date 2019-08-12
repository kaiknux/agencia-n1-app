import React, { Component } from 'react';
import classes from './Games.css';
import axios from '../../axios-registers';
import Input from '../../components/Input/Input';
import Spinner from '../../components/UI/Spinner/Spinner';
import { storage } from '../../assets/firebase';

class Games extends Component {
    state = { 
        itemForm: {
            nome: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Nome do produto',
                },
                value: '',
                validation: {
                    required: true,
                },
            },
            price: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Preço do produto',
                },
                value: '',
                validation: {
                    required: true,
                },
            },
            description: {
                elementType: 'textarea',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Descrição do produto',
                },
                value: '',
                validation: {
                    required: true,
                },
            },
        },
        image: null,
        url: null,
        loading: false,
    };


    inputChangedHandler = (event, inputIdentifier) => {

        const updateditemForm = {
            ...this.state.itemForm
        };
        const updatedFormElement = { 
            ...updateditemForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation)
        updateditemForm[inputIdentifier] = updatedFormElement;
        this.setState({itemForm: updateditemForm});
    }

    registerHandler = (event) => {
        console.log(event.target)
        event.preventDefault(); // evine que envie uma request e reloade a pagina
        this.setState({loading: true});
        // alert('Continue!');

        const image = this.state.image;
        const uploadTask = storage.ref(this.state.image.name).put(image);
        uploadTask.on('state_changed', 
        (snapshot) => {
            //progress function
            console.log('uploading...')
        }, (error) => {
            //error function
            console.log(error);
            this.setState({loading: false})
        }, () => {
            //success function
            console.log('uploaded!')
            this.setState({loading: false})
            const formData = {};
            for (let formElementIdentifier in this.state.itemForm ) {
                formData[formElementIdentifier] = this.state.itemForm[formElementIdentifier].value;
            }
            console.log('aqui');
            console.log(this.state.image)
            let formDataCor = {
                ...formData,
                image: this.state.image.name,
            }
            axios.post( '/presentes.json' , formDataCor )
            .then(response => {
                this.setState({loading: false});
            })
            .catch(error => {
                this.setState({loading: false});
                console.log(error);
        });
        })
        // const register = {
        //     // file in here
        //     produto: formDataCor,
        // }

    }
    componentDidMount() {
        console.log(this.state);
    }

    checkValidity(value, rules) {
        let isValid = false;
        if (rules.required) {
            isValid = value.trim() !== '';
        }
        return isValid
    }

    handleChange = (e) => {

        const oi = e.target.files[0];
        this.setState({image: oi})
    }

render () {
    const formElementsArray = [];
    for (let key in this.state.itemForm) {
        formElementsArray.push({
            id: key,
            config: this.state.itemForm[key]
        });
    }
    let form = (
        <form onSubmit={this.registerHandler}>
            {formElementsArray.map(formElement => (
                <Input key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.value}
                    changed={(event) => this.inputChangedHandler(event, formElement.id)}
                />
            ))}
            <input type="file" onChange={this.handleChange}/>
            <button>Enviar</button>
        </form>);
        if (this.state.loading) {
            form = <Spinner />;
        }

    return ( 
        <div className={classes.Games}>
            Adicionando produtos no banco de dados Google Firebase:
                {form}


        </div>
    )
}
}

export default Games;

// service firebase.storage {
//   match /b/{bucket}/o {
//     match /{allPaths=**} {
//       allow read, write: if request.auth != null;
//     }
//   }
// }