import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ViewMode from "./pages/ViewMode";

import ROUTES from "./routes";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.VIEW_MODE} element={<Layout />}>
          <Route index element={<ViewMode />} />
          <Route path={ROUTES.SETTINGS} element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
