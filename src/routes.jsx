import React from 'react';
import {Route} from 'react-router';

import HostPage from './containers/HostPage'
import User from './containers/User'
import Login from './containers/Login'
import NotFound from './containers/NotFound'

const routes = <Route path="/" component={HostPage}>
    <Route path="user" component={User} />
    <Route path="user/(:id)" component={User} />
    <Route path="login" component={Login} />
    <Route path="*" component={NotFound}/>
</Route>

export default routes
