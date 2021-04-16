import "./pages.scss";
import "../components/Header/Header.scss";
import "../components/Footer/Footer.scss";
import "../components/SettingsPanel/SettingsPanel.scss";
import "../components/Button/Button.scss";
import "../components/DataField/DataField.scss";
import "../components/DataFieldList/DataFieldList.scss";
import "../components/AsteroidCardList/AsteroidCardList.scss";
import "../components/AsteroidCard/AsteroidCard.scss";
import "../components/ResizableAsteroid/ResizableAsteroid.scss";

// import App from 'next/app'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
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

export default MyApp;
