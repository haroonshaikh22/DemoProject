import {View, Text} from 'react-native';
import React from 'react';
import ExpenseOutput from '../components/expenses/ExpenseOutput';

const AllExpenses = () => {
  return <ExpenseOutput expensesPeriod="total" />;
};

export default AllExpenses;
