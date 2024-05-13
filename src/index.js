import React from "react";
import { createRoot } from "react-dom/client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import GlobalFont from "./styles/fonts";
import GlobalStyle from "./styles/globalStyle";
import { Header } from "components/Header";
import styled from "styled-components";
import { SummaryPanel } from "components/SummaryPanel";
import { LaunchesChart } from "components/LaunchesChart";
import { LaunchesHistory } from "components/LaunchesHistory";

const client = new ApolloClient({
  uri: "https://spacex-production.up.railway.app/",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          launchesPast: {
            keyArgs: false,
  
            merge(existing = [], incoming) {
              return [...existing, ...incoming];
            },
          }
        }
      }
    }
  }),
});

createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <App />
    <GlobalFont />
    <GlobalStyle />
  </ApolloProvider>,
);

const MainSection = styled.div`
  padding: 2em 1em;
  height: 100vh; 
`;

const DashboardSection = styled.div`
  display: grid;
  grid-template-columns: 69% 30%;
  height: auto;
  grid-gap: 1%;

  @media (max-width: 768px) {
    grid-template-columns: 100%;
  }
`;

export const LaunchesChartSection = styled.div`
  }
`;


function App() {
  return (
    <MainSection>
      <Header />
      <DashboardSection>
        <LaunchesChartSection>
          <SummaryPanel />
          <LaunchesChart />
        </LaunchesChartSection>
          <LaunchesHistory />
      </DashboardSection>
    </MainSection>
  );
}
