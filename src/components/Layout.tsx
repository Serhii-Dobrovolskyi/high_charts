import { AppBar, Toolbar, Button } from "@mui/material";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
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
      <Outlet />
    </>
  );
};

export default Layout;
