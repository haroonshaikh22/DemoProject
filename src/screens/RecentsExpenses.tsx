import {View, Text} from 'react-native';
import React from 'react';
import ExpenseOutput from '../components/expenses/ExpenseOutput';

const RecentsExpenses = () => {
  return <ExpenseOutput expensesPeriod="last expense" />;
};

export default RecentsExpenses;
