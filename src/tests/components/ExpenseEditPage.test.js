import React from 'react';
import {shallow} from 'enzyme';
import { ExpenseEditPage } from '../../components/ExpenseEditPage';
import expenses from '../fixtures/expenses';


let editExpense,removeExpense,wrapper,history;

beforeEach(()=>{
   editExpense = jest.fn();
   removeExpense = jest.fn();
   history = {push: jest.fn()}
   wrapper= shallow(<ExpenseEditPage editExpense={editExpense} removeExpense={removeExpense} history={history} expense={expenses[1]}/>);

})



test("Should render edit expense page correctly",()=>{
  expect(wrapper).toMatchSnapshot();
})

test("Should handle submit",()=>{
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id,expenses[1]);
})

test("Should handle remove",()=>{
  wrapper.find('button').simulate('click')
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(removeExpense).toHaveBeenLastCalledWith({id: expenses[1].id});
})
