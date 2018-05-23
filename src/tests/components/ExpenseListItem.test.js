import React from 'react'
import { ExpenseListItem } from '../../components/ExpenseListItem'
import Reactshallowrenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme'
import expenses from '../fixtures/expenses'

test("Should render expense list item with expenses",()=>{
  const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>);
  expect(wrapper).toMatchSnapshot();
})
