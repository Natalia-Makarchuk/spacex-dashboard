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
