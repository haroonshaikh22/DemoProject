import {View, Text} from 'react-native';
import React from 'react';
import ExpenseSummary from './ExpenseSummary';
import ExpenseList from './ExpenseList';

const ExpenseOutput = () => {
  return (
    <View>
      <ExpenseSummary />
      <ExpenseList />
    </View>
  );
};

export default ExpenseOutput;
