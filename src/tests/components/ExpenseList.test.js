import React from 'react'
import { ExpenseList } from '../../components/ExpenseList'
import Reactshallowrenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme'
import expenses from '../fixtures/expenses'

test("Should render expense list with expenses",()=>{
  const wrapper = shallow(<ExpenseList expenses={expenses}/>);
  expect(wrapper).toMatchSnapshot();
})

test("Should render expense list with empty expenses",()=>{
  const wrapper = shallow(<ExpenseList expenses={[]} />);
  expect(wrapper).toMatchSnapshot();
})
