import {View, Text, FlatList} from 'react-native';
import React from 'react';
import ExpenseItems from './ExpenseItems';

const renderItem = itemData => {
  console.log(itemData);

  return <ExpenseItems {...itemData.item} />;
};

const ExpenseList = ({expenses}) => {
  return (
    <FlatList
      data={expenses}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default ExpenseList;
