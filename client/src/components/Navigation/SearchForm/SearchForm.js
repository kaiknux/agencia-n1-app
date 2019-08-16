import React, { Component } from 'react';
import classes from './SearchForm.css';
import axios from '../../../axios-registers';


class SearchForm extends Component {

    state = {
        suggestions: [],
        text: '',
        text1a: '',
        
    };


    onTextChanged = (event) => {
        const value = event.target.value;
        let suggestions = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = this.state.suggestions.nome.sort().filter(v => regex.test(v));
        }
        this.setState(() => ({ suggestions, text: value }));
        console.log(this.state)
    }

    componentDidMount () {
        axios.get('/presentes.json')
        .then(res => {
            console.log('aqui')
            console.log(res.data)
            const fetchedProducts = [];
            for (let key in res.data) {
                fetchedProducts.push({
                    ...res.data[key],
                });
            }
            console.log('fetched products')
            console.log(fetchedProducts)
            this.setState({loading: false, suggestions: fetchedProducts});
            console.log('e agora');
            console.log(this.state)
        })
        .catch(err => {
            this.setState({loading: false});
        });

    }


    renderSuggestions = () => {
        const { suggestions } = this.state;
        if (suggestions.length === 0) {
            return null;
        } else {
        return (
            <ul className={classes.sugList}> 
                {suggestions.map((item) => <li onClick={() => this.suggestionStatesCleaner(item)}>{item.name}</li>)}
            </ul>
        );
    }
    }
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
        const { text } = this.state;
        return (
                <div className={classes.Headerf1}>
                    <form onSubmit={this.getWeather}>
                        <div className={classes.Container}>
                            <input     onKeyPress={event => {
                                          if (event.key === 'Enter') {
                                                this.suggestionSelected()
                                         }}}
                                         autoComplete="off" 
                                         value={text} 
                                         onChange={this.onTextChanged} 
                                         name="city" 
                                         placeholder="" 
                                         className={classes.FormControl} 
                                         autoFocus 
                                         />
                            {this.renderSuggestions()}
                        </div>
                        {/* <button className={classes.ButtonAs}>
                            Get Weather!
            </button> */}
                    </form>
                </div>

        );
    }
};

export default SearchForm;