import {BrowserRouter, Route, Routes} from "react-router-dom";
import routes from "../../Pages/router.jsx";
import HeaderComponent from "../HeaderComponent/Header.Component.jsx";

function App() {

  return (
    <BrowserRouter>
        <Routes>
          {
            routes.map((route, index) => {
                return <Route key={index} path={route.path} element={route.element} />
            })
          }
        </Routes>
        <HeaderComponent />
    </BrowserRouter>
  )
}

export default App
