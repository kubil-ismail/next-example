import "../styles/index.scss";
import "antd/dist/antd.css";
import config from "../config";

// Use Redux
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"; // Imports: Redux Persist Persister
import { store, persistor } from "../redux/store"; // Import redux store

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Component {...pageProps} configApp={config} />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
