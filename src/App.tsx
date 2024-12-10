import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ViewMode from "./pages/ViewMode";
import Settings from "./pages/Settings";
import { AppBar, Toolbar, Button } from "@mui/material";

function App() {
  return (
    <>
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" component={Link} to="/">
              View Mode
            </Button>
            <Button color="inherit" component={Link} to="/settings">
              Settings
            </Button>
          </Toolbar>
        </AppBar>
        <Routes>
            <Route path="/" element={<ViewMode />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
