import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import SearchPage from '../search/SearchPage';

const MainNav = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Redirect to="/search" />
            </Route>
            <Route path="/search">
                <SearchPage />
            </Route>
        </Switch>
    );
}

export default MainNav;