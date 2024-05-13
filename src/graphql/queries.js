import { gql } from "@apollo/client";

export const GET_SUMMARY_DATA = gql`
  query GetSummary {
    rockets {
      id
    }
    ships {
      id
    }
    capsules {
      id
    }
    roadster {
      period_days
    }
  }
`;

export const GET_LAUNCHES = gql`
  query GetLaunches {
    launches {
      id
      launch_year
      upcoming
      launch_success
      rocket {
        rocket {
          cost_per_launch
        }
      }
    }
  }
`;

export const GET_PAST_LAUNCHES = gql`
  query ExampleQuery($offset: Int, $limit: Int) {
    launchesPast(offset: $offset, limit: $limit) {
      id
      launch_date_utc
      mission_name
    }
  }
`;
