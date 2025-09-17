import { Outlet } from "react-router-dom";
import NavBarPanel from "./NavBarPanel";
import { Provider } from "react-redux";
import { store,persistor } from "../store/store";
import { PersistGate } from 'redux-persist/integration/react';
const RootLayout = () => {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={<div>Loading..</div>} persistor={persistor}>
        <NavBarPanel />
        <main>
          <Outlet />
        </main>
        </PersistGate>
      </Provider>
    </div>
  );
};

export default RootLayout;
