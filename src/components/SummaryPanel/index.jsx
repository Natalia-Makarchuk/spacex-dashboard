import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_SUMMARY_DATA } from '../../graphql/queries'
import DataItem from './DataItem';
import { Loading } from 'components/common/Loading';
import { Error } from 'components/common/Error';
import { SummaryContainer } from './ui';

export const SummaryPanel = () => {
  const { loading, error, data } = useQuery(GET_SUMMARY_DATA);

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <SummaryContainer>
      <DataItem
        title={`${data.rockets.length} Rockets`}
        details="View details on the rocket fleet"
      />
      <DataItem
        title={`${data.ships.length} Ships`}
        details="View details on the ship fleet"
      />
      <DataItem
        title={`${data.capsules.length} Capsules`}
        details="View details on the capsules"
      />
      <DataItem
        title="Roadster"
        details={`View details in its ${Math.round(data.roadster.period_days)} day journey`}
      />
    </SummaryContainer>
  );
};
