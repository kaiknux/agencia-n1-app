import React, { Component } from 'react';
import classes from './SearchForm.css';

// import { Router } from "react-router";
// import { createBrowserHistory } from "history";
import { withRouter } from 'react-router-dom';
import axios from '../../../axios-registers';


class SearchForm extends Component {

    state = {
        suggestions: [],
        fetchedProducts: [],
        searchString: '',
        final: '',
        
    };

    funcaoReload = (param) => {
        this.setState({searchString: ''})
    
    }

    
    funcaoNova = (event) => {
        this.setState({
            searchString: event.target.value
        })
        let libraries = this.state.suggestions
        let searchString = this.state.searchString.trim().toLowerCase()
        if (searchString.length > 1) {
            libraries = libraries.filter( i => i.toLowerCase().match( searchString ) )
        }
        console.log(searchString)
        console.log(libraries)
        this.setState({final: libraries, backdrap: true, triggerSuggestion: true})
        console.log(this.state)

    }

    componentDidMount () {
        axios.get('/presentes.json')
        .then(res => {
            const fetchedProducts = [];
            for (let key in res.data) {
                fetchedProducts.push({
                    ...res.data[key],
                    id: key
                });
            }
                this.setState({fetchedProducts: fetchedProducts});
                let arrayPraFiltrar = fetchedProducts.map(a => a.nome)
                this.setState({suggestions: arrayPraFiltrar});                
                console.log(arrayPraFiltrar)
                console.log(this.state)
            }
        )
        .catch(err => {

        });

    }

    productSelectedHandler = (prodName) => {
        this.setState({ searchString: prodName, backdrap: false, triggerSuggestion: false })

        const queryParams = [];

        const libraries = this.state.fetchedProducts
        for (let osc in libraries) {
            if (libraries[osc].nome === prodName) {
                queryParams.push('product=' + libraries[osc].id);
            }
        }
        console.log(queryParams)
        const queryString = queryParams.join('&');
        // console.log(this.props)
        // const lugar = `/sale/${queryString}`
        console.log(this.props.history)
        this.props.history.replace({
            pathname: '/sale',
            search: '/' + queryString
        });
        window.location.reload();
        }

        
        // this.props.history.push({
        //     pathname: '/sale',
        //     search: '/' + queryString
        // });
    
  


        // const queryParams = [];
        // queryParams.push('product=' + id);
        // const queryString = queryParams.join('&');
        // this.props.history.push({
        //     pathname: '/sale',
        //     search: '/' + queryString
        // });

    



    suggestionSelected (optionClicked) {
        console.log(optionClicked)
        const agoraSim = optionClicked;
        this.setState({text1a: agoraSim})
    

        // this.props.functionHandler(this.state.text)
        console.log(this.state.text1a);
    }
    // functionPush () {
    //     console.log(this.state.text1a);
    //     console.log(this.state.text);
    // }
//     suggestionStatesCleaner (aew) {
//     this.props.functionHandler(aew);
//     this.setState({suggestions: []})
// }
    render() {

        const text = this.state.searchString;
        let backdrap = null;
        let sugestoes = null;
        if (this.state.searchString && this.state.triggerSuggestion) {
            sugestoes = (
                this.state.final.map(
                    sugestaoUnica => {
                        return ( 
                        <div className={classes.sugList} onClick={() => this.productSelectedHandler(sugestaoUnica)}>
                            {sugestaoUnica}
                        </div>
                        )
                    }
                )
            ) 
        }
        if (this.state.backdrap) {
            backdrap = (
                <div className={classes.Backdrap} onClick={this.funcaoReload}></div>
            )
        }

        return (
                <div className={classes.Headerf1}>
                    <form onSubmit={this.searchHandler} className={classes.formHeader}>
                        <div className={classes.Container}>
                            <input     onKeyPress={event => {
                                          if (event.key === 'Enter') {
                                                this.suggestionSelected()
                                         }}}
                                         autoComplete="off" 
                                         value={text} 
                                         onChange={this.funcaoNova} 
                                         name="city" 
                                         placeholder="Digite o que procura" 
                                         className={classes.FormControl} 
                                         autoFocus 
                                         />
                                         <div className={classes.sugPackage}>{sugestoes}</div>
                                         {backdrap}
                                         
                            
                        </div>
                    </form>
                </div>

        );
    }
};

export default withRouter(SearchForm);