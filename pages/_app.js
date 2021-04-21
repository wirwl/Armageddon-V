import { Provider } from "react-redux";
import { useStore } from "../store";

import "./pages.scss";
import "../components/Layout/Layout.scss";
import "../components/Header/Header.scss";
import "../components/Footer/Footer.scss";
import "../components/SettingsPanel/SettingsPanel.scss";
import "../components/Button/Button.scss";
import "../components/Checkbox/Checkbox.scss";
import "../components/DataField/DataField.scss";
import "../components/DataFieldList/DataFieldList.scss";
import "../components/AsteroidCardList/AsteroidCardList.scss";
import "../components/AsteroidCard/AsteroidCard.scss";
import "../components/ToggleDistanceType/ToggleDistanceType.scss";

// import App from 'next/app'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default App;
