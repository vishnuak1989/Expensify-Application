import filterReducer from '../../reducers/filters';
import moment from 'moment';

test("should set default state for filter reducer",()=>{
const result = filterReducer(undefined,{type:'@@INIT'});
expect(result).toEqual({
  text:"",
  sortBy:"date",
  startDate: moment().startOf('month'),
  endDate:moment().endOf('month')
})
});

test("should sort by amount",()=>{
const result = filterReducer(undefined,{type:'SORT_BY_AMOUNT'});
expect(result).toEqual({
  text:"",
  sortBy:"amount",
  startDate: moment().startOf('month'),
  endDate:moment().endOf('month')
})
});

test("should sort by date",()=>{
const result = filterReducer(undefined,{type:'SORT_BY_DATE'});
expect(result).toEqual({
  text:"",
  sortBy:"date",
  startDate: moment().startOf('month'),
  endDate:moment().endOf('month')
})
});

test("should set start date",()=>{
const result = filterReducer(undefined,{type:'SET_START_DATE',date:moment(0).subtract(4, 'days').valueOf()});
expect(result).toEqual({
  text:"",
  sortBy:"date",
  startDate: moment(0).subtract(4, 'days').valueOf(),
  endDate:moment().endOf('month')
})
});

test("should set end date",()=>{
const result = filterReducer(undefined,{type:'SET_END_DATE',date:moment(0).add(4, 'days').valueOf()});
expect(result).toEqual({
  text:"",
  sortBy:"date",
  startDate: moment().startOf('month'),
  endDate:moment(0).add(4,'days').valueOf()
})
});

test("should set text filter",()=>{
const result = filterReducer(undefined,{type:"SET_TEXT",text:"Hello Darkness my old friend"});
expect(result).toEqual({
  text:"Hello Darkness my old friend",
  sortBy:"date",
  startDate: moment().startOf('month'),
  endDate:moment().endOf('month')
})
});
