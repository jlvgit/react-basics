import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom'

// Components
import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profile';
import PostItem from './components/post_item';
import Life from './components/life';
import Conditional from './components/conditional'


const App = () => {
    return(
        <BrowserRouter>
            <div>
                <header>
                    <NavLink to="/">Home</NavLink><br/>
                    <NavLink 
                        to="/posts"
                        activeStyle={{color:'red'}}
                        activeClassName="selected"
                    >Posts</NavLink><br/>
                    <NavLink to={{
                        pathname: '/profile'
                    }}>Profile</NavLink><br/>
                    <NavLink to="/life">Life</NavLink><br/>
                    <NavLink to="/conditional">Conditional</NavLink><br/>
                    <hr/>
                </header>
                <Switch>
                    <Route path="/posts/:id/:username" component={PostItem} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/posts" component={Posts} />
                    <Route path="/life" component={Life}/>
                    <Route path="/conditional" component={Conditional}/>
                    <Route path="/" exact component={Home} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

ReactDom.render(
    <App/>, 
    document.querySelector('#root')
)