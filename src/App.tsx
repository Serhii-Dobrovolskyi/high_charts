import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import ViewMode from "./pages/ViewMode";
import Settings from "./pages/Settings";
import ROTES from "./rotes";
function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROTES.VIEW_MODE} element={<Layout />}>
          <Route index element={<ViewMode />} />
          <Route path={ROTES.SETTINGS} element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
