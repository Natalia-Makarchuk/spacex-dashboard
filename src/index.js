import React from "react";
import { createRoot } from "react-dom/client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import GlobalFont from "./styles/fonts";
import GlobalStyle from "./styles/globalStyle";
import { Header } from "components/Header";
import styled from "styled-components";
import { SummaryPanel } from "components/SummaryPanel";
import { LaunchesChart } from "components/LaunchesChart";

const client = new ApolloClient({
  uri: "https://spacex-production.up.railway.app/",
  cache: new InMemoryCache(),
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
`;

const DataSection = styled.div`
`;

function App() {
  return (
    <MainSection>
      <Header />
      <DataSection>
        <SummaryPanel />
        <LaunchesChart />
      </DataSection>
    </MainSection>
  );
}
