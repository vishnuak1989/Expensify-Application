import moment from 'moment'
const expenses = [{
  id:"1",
  details:"Hello",
  note:"This is a note",
  amount:100,
  createdAt:0
},
{
  id:"2",
  details:"Hello2",
  note:"This is a note2",
  amount:1000,
  createdAt:moment(0).subtract(4, 'days').valueOf()
},
{
  id:"3",
  details:"Ola",
  note:"This is a note3",
  amount:350,
  createdAt:moment(0).add(4, 'days').valueOf()
}];

export default expenses;
