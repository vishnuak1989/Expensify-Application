import React from 'react'
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import Reactshallowrenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme'
import {filters,altFilters} from '../fixtures/filters'
import moment from 'moment'

let sortByDate, sortByAmount, setStartDate, setEndDate, setTextFilter, wrapper;
beforeEach(()=>{
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(<ExpenseListFilters
  filters = {filters}
  setTextFilter = {setTextFilter}
  sortByDate={sortByDate}
  sortByAmount={sortByAmount}
  setStartDate={setStartDate}
  setEndDate={setEndDate}
/>
)
})

test("Should render ExpenseListFilters correctly",()=>{
  expect(wrapper).toMatchSnapshot();
});

test("Should render ExpenseListFilters with alt data correctly",()=>{
  wrapper.setProps({
    filters:altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

test("Should handle test change",()=>{
  const value = "rent"
  wrapper.find('input').simulate("change",{
    target: {
      value
    }
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);


});
//handle text change
// sort by Date
//sort by Amount
//handle date changes
// handle on focus changes
test("Should sort by date",()=>{
  const value = "date";
  wrapper.setProps({
    filters:altFilters
  });
  wrapper.find('select').simulate("change",{
    target:{
      value
    }
  });

expect(sortByDate).toHaveBeenLastCalled;
});


test("should sort by amount",()=>{
  const value = "amount";

  wrapper.find('select').simulate("change",{
    target:{
      value
    }
    });
expect(sortByAmount).toHaveBeenLastCalled;
});

test("should handle date change",()=>{
  const startDate = moment(0).add(4,"years");
  const endDate = moment(0).add(8,"years");
  wrapper.find('withStyles(DateRangePicker)').prop("onDatesChange")({ startDate,endDate });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);

});
test("should handle date focus change",()=>{
  const calenderFocused = "endDate";
wrapper.find('withStyles(DateRangePicker)').prop("onFocusChange")(calenderFocused);
expect(wrapper.state("calenderFocused")).toEqual(calenderFocused);
});
