import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import JSON from './db.json.js'

// Components
import Header from  './components/header'
import NewsList from './components/news_list'

class App extends Component {
    state = {
        news: JSON,
        filtered: []
    }

    getKeyword = (event) => {
        // console.log(event.target.value)
        let keyword = event.target.value
        let filtered = this.state.news.filter( (item) => {
            return item.title.indexOf(keyword) > -1
        });
        this.setState({
            filtered
        })
    }

    render(){
        let newsFilter = this.state.filtered;
        let newsWhole = this.state.news;
        return (
            <div>
                <Header keywords={this.getKeyword}/>
                <NewsList news={newsFilter.length === 0 ? newsWhole : newsFilter} donkey="awesome"/>
            </div>
        )
    }   
}

ReactDOM.render(<App/>, document.querySelector('#root'));