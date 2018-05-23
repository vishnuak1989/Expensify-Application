import React from 'react'
import  ExpenseDashboardPage  from '../../components/ExpenseDashboardPage'
import Reactshallowrenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme'
import expenses from '../fixtures/expenses'

test("Should render  Expense Dashboard Page",()=>{
  const wrapper = shallow(<ExpenseDashboardPage />);
  expect(wrapper).toMatchSnapshot();
})
