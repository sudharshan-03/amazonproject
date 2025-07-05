import { Provider } from "react-redux";
import Root from "./Components/Pages/Root";
import { store } from "./store/store";
import SnackBar from "./Components/shared/SnackBar";




function App() {
  return (
    <>
      <Provider store={store}>
        <Root />
        <SnackBar />
      </Provider>
    </>
  );
}

export default App;
