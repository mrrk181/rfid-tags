/**
 * Created by uzysjung on 16. 7. 9..
 */

import React ,{ Component, PropTypes }from 'react'
import { Provider } from 'react-redux'
import { store , history } from './store'
import localStore from '../../node_modules/store/store.js'
import 'font-awesome-webpack2'
// import '../../node_modules/bootstrap/dist/js/bootstrap'
import Routes from './routes'
import { authUser } from './actions/user.js';
import NotificationSystem from 'react-notification-system';


export default function App() {
    return (
        <div>
            <Provider store={store}>
                <Routes history={history} />
            </Provider>
        </div>
    );
}
const propTypes = {
    store: PropTypes.object,
    history : PropTypes.object,
    // layout : PropTypes.component
};
App.propTypes = propTypes;
