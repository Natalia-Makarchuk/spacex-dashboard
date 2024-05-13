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
