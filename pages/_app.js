import "../styles/globals.css";
import config from "../aws-exports";
import Amplify from "aws-amplify";

Amplify.configure({
  ...config,
  ssr: true,
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
