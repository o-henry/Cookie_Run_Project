import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
    // process.env.REACT_APP_GQL_API_SERVER,
    uri: "https://web-codingtest-api.devscookie.com/graphql",
    // GQL 에러 발생시 에러 체크
    onError: ({ networkError, graphQLErrors }): void => {
        console.log('graphQLErrors', graphQLErrors)
        console.log('networkError', networkError)
    }
});

ReactDOM.render(
    <ApolloProvider client={client} >
        <App />
    </ApolloProvider>,
    document.getElementById("root")
);
