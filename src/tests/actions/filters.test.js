import { setStartDate,setEndDate,sortByDate,sortByAmount,setTextFilter } from '../../actions/filters';
import moment from 'moment'

test("Test case for testing  Setting of Start Date action ",()=>{
  const action = setStartDate(moment(0))
  expect(action).toEqual({
    type:"SET_START_DATE",
    date:moment(0)
    }
  )
})

test("Test case for testing  Setting of End Date action ",()=>{
  const action = setEndDate(moment(0))
  expect(action).toEqual({
    type:"SET_END_DATE",
    date:moment(0)
    }
  )
})


test("Test case for testing  sortByAmount action ",()=>{
  const action = sortByAmount()
  expect(action).toEqual({
    type:"SORT_BY_AMOUNT",
    }
  )
})


test("Test case for testing  sortByDate action ",()=>{
  const action = sortByDate()
  expect(action).toEqual({
    type:"SORT_BY_DATE",
    }
  )
})

test("Test case for testing  setTextFilter action when values are provided ",()=>{
  const action = setTextFilter("abc")
  expect(action).toEqual({
    type:"SET_TEXT",
    text:"abc"
    }
  )
})

test("Test case for testing  setTextFilter action when values are not provided ",()=>{
  const action = setTextFilter()
  expect(action).toEqual({
    type:"SET_TEXT",
    text:""
    }
  )
})
