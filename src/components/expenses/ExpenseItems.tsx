import {View, Text, Pressable} from 'react-native';
import React from 'react';

export type Expense = {
  description: string;
  date: any;
  amount: number;
};

const ExpenseItems = ({description, date, amount}: Expense) => {
  return (
    <Pressable>
      <View>
        <Text>{description}</Text>
        <Text>{date.toString()}</Text>
      </View>
      <View>
        <Text>{amount}</Text>
      </View>
    </Pressable>
  );
};

export default ExpenseItems;
