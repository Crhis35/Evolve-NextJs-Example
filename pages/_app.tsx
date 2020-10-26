import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../utils/apollo";
import Router from "next/router";

function MyApp({ Component, pageProps }) {
  const client = useApollo(pageProps.initialApolloState);
  Router.events.on("routeChangeStart", (url) => {
    console.log(`Loading: ${url}`);
  });
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
