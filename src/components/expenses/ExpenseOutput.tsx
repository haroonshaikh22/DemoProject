import {View, Text} from 'react-native';
import React from 'react';
import ExpenseSummary from './ExpenseSummary';
import ExpenseList from './ExpenseList';

const DUMMY_EXP = [
  {id: 'e1', description: 'food', amount: 40.0, date: new Date('2020-04-20')},
  {id: 'e2', description: 'fish', amount: 9.0, date: new Date('2020-04-20')},
  {id: 'e3', description: 'milk', amount: 10.5, date: new Date('2020-04-20')},
  {id: 'e4', description: 'fruit', amount: 20.0, date: new Date('2020-04-20')},
];

console.log('Dummy', DUMMY_EXP);

const ExpenseOutput = ({expenses, expensesPeriod}) => {
  return (
    <View>
      <ExpenseSummary expenses={DUMMY_EXP} periodName={expensesPeriod} />
      <ExpenseList expenses={DUMMY_EXP} />
    </View>
  );
};

export default ExpenseOutput;
