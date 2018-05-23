import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize'
import AppRouter from './router/AppRouter'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
const store = configureStore();
console.log(state)

const jsx = ( <
    Provider store = { store } >
    <
    AppRouter / >
    <
    /Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));