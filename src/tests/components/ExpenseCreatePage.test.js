import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseCreatePage} from '../../components/ExpenseCreatePage';
import expenses from '../fixtures/expenses';

let addExpense, history, wrapper;

beforeEach(()=>{
   addExpense = jest.fn();
   history = { push:jest.fn() };
   wrapper= shallow(<ExpenseCreatePage addExpense={addExpense} history={history}/>);

})



test("Should render create expense page correctly",()=>{
  expect(wrapper).toMatchSnapshot();
})

test("Should handle submit",()=>{
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
})
