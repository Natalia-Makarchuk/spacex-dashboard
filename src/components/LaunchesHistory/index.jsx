import { Loading } from "components/common/Loading";
import { LauchIcon, LaunchItem, LaunchList, LaunchesMain, LoadMore } from "./ui";
import { TextRegular, TitleMedium, TitleSemiBold } from "components/common";
import { NetworkStatus, useQuery } from "@apollo/client";
import { GET_PAST_LAUNCHES } from "graphql/queries";
import { Error } from "components/common/Error";
import moment from "moment";

export const LaunchesHistory = () => {
  const { loading, error, data, fetchMore, networkStatus } = useQuery(GET_PAST_LAUNCHES, {
    variables: { offset: 0, limit: 10 },
    notifyOnNetworkStatusChange: true,
  });

  const isLoadingMore = networkStatus === NetworkStatus.fetchMore;

  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    if (scrollHeight - scrollTop === clientHeight && networkStatus !== NetworkStatus.fetchMore) {
      fetchMore({
        variables: {
          offset: data.launchesPast.length,
        },
      });
    }
  };

  if (loading  && !data) return <Loading />;
  if (error) return <Error dataName="launches history" />;

  return (
    <LaunchesMain>
      <TitleSemiBold>Past launches</TitleSemiBold>
      <TextRegular>All launches that have taken place since the beginning</TextRegular>
      <LaunchList onScroll={handleScroll}>
        {data?.launchesPast.map((launch) => (
          <LaunchItem key={launch.id}>
            <LauchIcon />
            <div>
              <TitleMedium>{launch.mission_name}</TitleMedium>
              <TextRegular>{moment(launch.launch_date_utc).format('LL')}</TextRegular>
            </div>
          </LaunchItem>
        ))}
        {isLoadingMore && <Loading />}
      </LaunchList>
    </LaunchesMain>
  )
};