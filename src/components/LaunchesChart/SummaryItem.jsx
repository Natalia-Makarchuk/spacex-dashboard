import React from 'react';
import { TitleMedium } from "components/common"
import { DataItem, DataValue } from './ui';

export const SummaryItem = ({ title, value }) => {
  return (
    <DataItem>
      <TitleMedium>{title}</TitleMedium>
      <DataValue>{value}</DataValue>
    </DataItem>
  )
}