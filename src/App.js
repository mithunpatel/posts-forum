// All CSS
import './App.css';

import MainPage from "./components/MainPage";
import StoreProvider from "./store/storeProvider";
import configureStore from "./store/configStore";

const store = configureStore();
function App() {
  return (
    <StoreProvider store={store}>
      <MainPage />
      </StoreProvider>
      )
}

export default App;
