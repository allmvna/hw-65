import {Route, Routes} from "react-router-dom";
import EditContent from "../EditContent/EditContent.tsx";
import MainPage from "../MainPage/MainPage.tsx";
import Navbar from "../../components/Navbar/Navbar.tsx";


const MyApp = () => {
    return (
        <>
            <header>
                <Navbar/>
            </header>
            <Routes>
                <Route path="/pages/admin" element={<EditContent/>}/>
                <Route path="/pages/:pageName" element={<MainPage/>}/>
            </Routes>
        </>
    );
};

export default MyApp;