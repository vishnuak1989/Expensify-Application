import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import 'normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize'
import AppRouter from './router/AppRouter'
import configureStore from './store/configureStore'
import {addExpense} from './actions/expenses'
import {setTextFilter} from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
const store = configureStore();
store.dispatch(addExpense({details:"Water bill",amount:5000}))
store.dispatch(addExpense({details:"Gas bill",amount:1000}))
store.dispatch(addExpense({details:"Rent",amount:50000}))

// store.dispatch(setTextFilter("Water"))
// setTimeout(()=>{store.dispatch(setTextFilter("gas"))},3000)

const state = store.getState();
const VisibleExpenses = getVisibleExpenses(state.expenses,state.filters);


console.log(state)

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
