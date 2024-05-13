import React, { useMemo } from 'react';
import { useQuery } from '@apollo/client';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import { GET_LAUNCHES } from 'graphql/queries';
import { Loading } from 'components/common/Loading';
import { Error } from 'components/common/Error';
import { TextRegular, TitleSemiBold } from 'components/common';
import { ChartSection, DataContainer, DescriptionSection, MainContainer, SummarySection, TotalLaunches } from './ui';
import { colors } from 'styles/colors';
import { SummaryItem } from './SummaryItem';
import { formatCost } from 'components/helpers/utils';

const processChartData = (launches) => {
  const chartData = [];

  // Counts launches by year
  const launchesByYear = launches.reduce((acc, launch) => {
    acc[launch.launch_year] = (acc[launch.launch_year] || 0) + 1;
    return acc;
  }, {});

  // Genereta chart data array
  for (const year in launchesByYear) {
    chartData.push({
      name: year.toString(),
      launches: launchesByYear[year]
    });
  }

  return chartData;
}

export const LaunchesChart = () => {
  const { loading, error, data } = useQuery(GET_LAUNCHES);
  const launches = data?.launches || [];
  const chartData = useMemo(() => processChartData(launches), [launches]);
  const total = launches.length;

  const currentYearLaunches = useMemo(() => launches.filter(launch => launch.launch_year === new Date().getFullYear()).length, [launches]);
  
  const upcomingLaunches = useMemo(() => launches.filter(launch => launch.upcoming).length, [launches]);
  
  const averageCost = useMemo(() => {
    const totalCost = launches.reduce((sum, launch) => sum + (launch?.rocket?.rocket?.cost_per_launch || 0), 0);
    return total > 0 ? (totalCost / total).toFixed(1) : 0;
  }, [launches]);
  const avarageCostFormatted = formatCost(averageCost);

  const failures = useMemo(() => launches.filter(launch => launch.launch_success === false).length, [launches]);

  if (loading) return <Loading />;
  if (error) return <Error dataName="launches" />;

  return (
    <MainContainer>
      <DataContainer>
        <DescriptionSection>
          <TitleSemiBold>Launches</TitleSemiBold>
          <TotalLaunches>{total}</TotalLaunches>
          <TextRegular>Total number of launches that have occurred, including launches that are scheduled as upcoming.</TextRegular>
        </DescriptionSection>
        <ChartSection>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="launches" fill={colors.grey600} />
            </BarChart>
          </ResponsiveContainer>
        </ChartSection>
      </DataContainer>
      <SummarySection>
        <SummaryItem title="Current year" value={currentYearLaunches} />
        <SummaryItem title="Upcoming" value={upcomingLaunches} />
        <SummaryItem title="Average cost" value={avarageCostFormatted} />
        <SummaryItem title="Failures" value={failures} />
      </SummarySection>
    </MainContainer>
  );
}
