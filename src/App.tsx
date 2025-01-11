import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ViewMode from "./pages/ViewMode";

import ROUTES from "./constants/routes";
import Settings from "./pages/Settings";
import { ChartsProvider } from "./context/chartsContext";

function App() {  
  return (
    <ChartsProvider>
      <Router>
        <Routes>
          <Route path={ROUTES.VIEW_MODE} element={<Layout />}>
            <Route index element={<ViewMode />} />
            <Route path={ROUTES.SETTINGS} element={<Settings />} />
          </Route>
        </Routes>
      </Router>
    </ChartsProvider>
  );
}

export default App;
