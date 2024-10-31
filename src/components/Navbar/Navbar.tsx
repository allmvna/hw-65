import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import CategoryIcon from '@mui/icons-material/Category';
import CreateIcon from '@mui/icons-material/Create';
import RecentActorsIcon from "@mui/icons-material/RecentActors";

const Navbar = () => {
  const buttonStyles = {
    borderColor: "inherit",
    marginRight: "8px",
    color: "white",
    "&:hover": {
      borderColor: "#00ff1f",
      color: "#00ff1f",
    },
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, mb: 5 }}>
        <AppBar
          position="static"
          sx={{
            padding: "10px",
            backgroundColor: "#000000",
            borderBottom: "1px solid",
          }}
        >
          <Toolbar>
            <Container
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                to="/"
                variant="h5"
                component={NavLink}
                sx={{ flexGrow: 1, textDecoration: "none", color: "#ffff" }}
              >
                My App
              </Typography>
              <Box>
                <Button
                  to="/pages/about"
                  sx={buttonStyles}
                  variant="outlined"
                  component={NavLink}
                  endIcon={<HomeIcon />}
                >
                  About
                </Button>
                <Button
                  to="/pages/contacts"
                  sx={buttonStyles}
                  variant="outlined"
                  component={NavLink}
                  endIcon={<RecentActorsIcon />}
                >
                  Contacts
                </Button>
                <Button
                  to="/pages/products"
                  sx={buttonStyles}
                  variant="outlined"
                  component={NavLink}
                  endIcon={<CategoryIcon />}
                >
                  Products
                </Button>
                <Button
                  to="/pages/services"
                  sx={buttonStyles}
                  variant="outlined"
                  component={NavLink}
                  endIcon={<DesignServicesIcon />}
                >
                  Services
                </Button>
                <Button
                  to="/pages/technologies"
                  sx={buttonStyles}
                  variant="outlined"
                  component={NavLink}
                  endIcon={<MiscellaneousServicesIcon />}
              >
                  Technologies
              </Button>
                <Button
                    to="/pages/admin"
                    sx={{ ...buttonStyles, marginRight: 0, color: "#00ffd0"}}
                    variant="outlined"
                    component={NavLink}
                    endIcon={<CreateIcon />}
                >
                  Admin

                </Button>
              </Box>
            </Container>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
