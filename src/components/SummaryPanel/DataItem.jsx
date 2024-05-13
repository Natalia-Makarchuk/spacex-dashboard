import React from 'react';
import { Item } from './ui';
import { TextBold, TextRegular } from 'components/common';

const DataItem = ({ title, details }) => (
  <Item>
    <TextBold>{title}</TextBold>
    <TextRegular>{details}</TextRegular>
  </Item>
);

export default DataItem;
