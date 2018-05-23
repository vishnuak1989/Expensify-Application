import React from 'react'
import  ExpenseForm  from '../../components/ExpenseForm'
import { shallow } from 'enzyme'
import moment from 'moment'
import expenses from '../fixtures/expenses'
import 'react-dates/initialize'

test("Should render expense form correctly",()=>{
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();

})

test("Should render expense form correctly when data is provided",()=>{
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
  expect(wrapper).toMatchSnapshot();

})

test("Should render error instead of form for invalid submission",()=>{
  const wrapper = shallow(<ExpenseForm  />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('form').simulate('submit',{preventDefault:()=>{}});
  expect(wrapper.state("error").length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
})

test("set details on input change",()=>{
  const value ="New detail";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("input").at(0).simulate('change',{
    target:{value}
  });
  expect(wrapper.state("details")).toBe(value);
})

test("should set note on text area change",()=>{
  const value ="New textarea text";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("textarea").simulate('change',{
    target:{value}
  });
  expect(wrapper.state("note")).toBe(value);
})

test("should set amount if valid input",()=>{
  const value = "23.50";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("input").at(1).simulate('change',{
    target:{value}
  });
  expect(wrapper.state("amount")).toBe(value);
})

test("should not set amount if invalid input",()=>{
  const value = "23.550";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("input").at(1).simulate('change',{
    target:{value}
  });
  expect(wrapper.state("amount")).toBe("");
})

test("should call onSubmit prop on sucessfull submission",()=>{
 const onSubmitSpy = jest.fn();
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>)
  wrapper.find('form').simulate('submit',{preventDefault:()=>{}});
  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    details:expenses[0].details,
    amount:expenses[0].amount,
    createdAt:expenses[0].createdAt,
    note:expenses[0].note
  });
})
test("should set new date on datechange",()=>{
    const now = moment()
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('withStyles(SingleDatePicker)').prop("onDateChange")(now)
    expect(wrapper.state("createdAt")).toEqual(now)
})

test("should set calender Focused",()=>{
  const focused = true;
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('withStyles(SingleDatePicker)').prop("onFocusChange")({focused})
    expect(wrapper.state("calenderFocused")).toBe(focused)
})
