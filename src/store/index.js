import Reducers from './reducers.js';
import {legacy_createStore as createStore} from 'redux'

const store = createStore(Reducers)

export default store;