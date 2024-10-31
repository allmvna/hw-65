import { Route, Routes } from "react-router-dom";
import EditContent from "../EditContent/EditContent.tsx";
import MainPage from "../MainPage/MainPage.tsx";
import Navbar from "../../components/Navbar/Navbar.tsx";
import { Container, Typography } from "@mui/material";

const MyApp = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Container maxWidth="lg" sx={{ color: "white" }}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/pages/admin/:id" element={<EditContent />} />
          <Route path="/pages/admin" element={<EditContent />} />
          <Route path="/pages/:pageName" element={<MainPage />} />
          <Route
            path="*"
            element={<Typography variant="h2">Not found</Typography>}
          />
        </Routes>
      </Container>
    </>
  );
};

export default MyApp;
