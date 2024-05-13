# SpaceX Dashboard

In this repository, you can find changes that have been made to the SpaceX Dashboard application.

## Application Overview

The application is built with React and uses GraphQL and Apollo Client for data handling. For charting, it incorporates Recharts, and styled-components are used for styling. Moment.js serves as a data formatting helper.

[Application production link](https://spacex-dashboard-eosin.vercel.app/)

## App Code Structure

The code structure includes main components organized as follows:

- **Header**: The primary navigation and branding component.
- **Summary Panel**: Displays a summary of key data.
- **Launches Chart**: Visual representation of launches over time.
- **Launches History**: A detailed list of past launches.

Each component contains a main `index.jsx` file. The `ui.js` file is used to store UI parts created via styled-components.

### Shared Components

All shared components are located in the `common` folder, making it easy to reuse components across different parts of the application. Design colors were moved into `colors.js`, which you can find in the `styles` folder.

### Helper Utilities

In the `helpers` folder, the `utils.js` file contains the `formatCost` function, which is used to display formatted average cost values.

## Implementation Approaches

A few words about specific approaches used in this application:

**Launches History**: 
- Implements an infinite scrolling mechanism to load more data as the user scrolls down (I just like this approach more, then load data with Load more button).
- Uses the `fetchMore` method provided by the `useQuery` hook from Apollo Client.
- `InMemoryCache` was extended with additional configurations to ensure the whole list is updated correctly after each `fetchMore` operation.

**Launches Chart**: 
- To ensure a responsive UI, the `ResponsiveContainer` component from the Recharts library is used. This component automatically adjusts the chart size to fit its container's dimensions.

## Areas for Improvement

Suggestions for future enhancements include:

- **Responsive Styles**: These can definitely be improved with more dedicated time.
- **TypeScript Integration**: While initially omitted to save time, adding TypeScript would enhance code reliability and maintainability as development progresses.
- **Consolidation of Shared Styles**: More shared styles, especially for consistent indents and dimensions, could be established.
- **UI Enhancements**: Implementing skeletons for loading states instead of just displaying a "Loading..." text would improve user experience.
- **Error Handling**: Showing errors as toasters (pop-ups) rather than simple "Error" texts could make the UI more interactive and informative.
