import {View, Text} from 'react-native';
import React from 'react';

const ExpenseSummary = ({periodName, expenses}) => {
  const expensesSum: number = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  });
  return (
    <View>
      <Text>{periodName}</Text>
      <Text>Rs{expensesSum}</Text>
    </View>
  );
};

export default ExpenseSummary;
