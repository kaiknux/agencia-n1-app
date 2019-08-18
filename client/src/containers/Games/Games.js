import React, { Component } from 'react';
import classes from './Games.css';
import axios from '../../axios-registers';
import Input from '../../components/Input/Input';
import Spinner from '../../components/UI/Spinner/Spinner';
import { storage } from '../../assets/firebase';
import ProdutoListado from '../../components/ProdutoListado/ProdutoListado';

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
            apelido: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Short name do produto, a ser exibido no BreadCrumbs',
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
                    placeholder: 'Preço sem desconto',
                },
                value: '',
                validation: {
                    required: true,
                },
            },
            realprice: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Preço de venda',
                },
                value: '',
                validation: {
                    required: true,
                },
            },
            vendivel: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Anunciar para venda? \'sim\' ou \'não\'  ',
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
        products: null,
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

    handleFileChange = (e) => {

        const yourFilesToTheServer = e.target.files
        let arrayPackage = [];
        setTimeout(() => {
            for (let key in yourFilesToTheServer) {
                arrayPackage.push(yourFilesToTheServer[key])
            }}, 400);

        this.setState({imageArray: arrayPackage, image: e.target.files})
        setTimeout(() => {
            console.log(this.state)
        }, 300);

    }
        
    formsToFirebaseHandler = async (event) => {
    event.preventDefault();

// ---------------------------------------------------------------------------------------
        const arrayDeNomes = [];
        setTimeout(() => {
            for (let i = 0; i < (this.state.imageArray.length - 2); i++) {
                arrayDeNomes.push(this.state.imageArray[i].name)
            }
        }, 100)
        console.log('arrayDeNomes:')
        console.log(arrayDeNomes);
        setTimeout(() => {
        this.setState({
            ImageArrayFiltrado: arrayDeNomes
        })
        console.log(this.state)
    }, 300)
const formData = {};
for (let formElementIdentifier in this.state.itemForm ) {
    formData[formElementIdentifier] = this.state.itemForm[formElementIdentifier].value;
}

formData.image = arrayDeNomes;
console.log(formData);
console.log('arrayDeNomes')
console.log(arrayDeNomes)
console.log(this.state)
// let formDataCor = {
//     ...formData,
//     image: this.state.ImageArrayFiltrado,
// }
setTimeout(() => {
axios.post( '/presentes.json' , formData )
.then(response => {
    this.setState({loading: false});
    window.location.reload();
})
.catch(error => {
    this.setState({loading: false});
    console.log(error);
});
}, 300)


// ---------------------------------------------------------------------------------------
    
    setTimeout(() => {
     this.state.imageArray.forEach(
           (jpg) => {
               console.log(jpg);
               let uploadTask = storage.ref(jpg.name).put(jpg)
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
                   console.log(`${jpg.name} uploaded!`)
               })
           })
        }, 500);
       }

    

    checkValidity(value, rules) {
        let isValid = false;
        if (rules.required) {
            isValid = value.trim() !== '';
        }
        return isValid
    }



    componentDidMount () {
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

render () {
    const formElementsArray = [];
    for (let key in this.state.itemForm) {
        formElementsArray.push({
            id: key,
            config: this.state.itemForm[key]
        });
    }
    let form = (
        <form onSubmit={this.formsToFirebaseHandler}>
            {formElementsArray.map(formElement => (
                <Input key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.value}
                    changed={(event) => this.inputChangedHandler(event, formElement.id)}
                />
            ))}
            <input type="file" onChange={this.handleFileChange} multiple />
            <button>Enviar</button>
        </form>);
        if (this.state.loading) {
            form = <Spinner />;
        }
        let productsListed = <Spinner />;
        if (this.state.products) {

            if (Array.isArray(this.state.image)) {
                let produtosOriginais = this.state.products.slice(0,4)
                productsListed = (
                    produtosOriginais.map(singleProd => {
                        return <ProdutoListado key={singleProd.id}
                                        nome={singleProd.nome}
                                        preco={singleProd.price}
                                        image={singleProd.image[0]}
                                        realpreco={singleProd.realprice}
                        />
                    } ))
            } else {
                let produtosOriginais = this.state.products.slice(0,4)
            productsListed = (
                produtosOriginais.map(singleProd => {
                    return <ProdutoListado key={singleProd.id}
                                    nome={singleProd.nome}
                                    preco={singleProd.price}
                                    image={singleProd.image}
                                    realpreco={singleProd.realprice}
                    />
                } ))
                    
        }
    }

       


    return ( 
        <div className={classes.Games}>
            Adicionando novos presentes no banco de dados Google Firebase para entrarem na loja:
            <div className={classes.AreaDeForm}>
                {form}
            </div>
                <br/>
                Visualizando objetos iniciais:
                <div className={classes.ProdutosCadastrados}>
   
                {productsListed}
                </div>
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