import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaPadrao from "./components/PaginaPadrao";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaPadrao />} >
                    <Route index element={<Home />}/>
                    <Route path="/categoria/:nomeCategoria" element={<Categoria />}/>
                    <Route  path="carrinho" element={<Carrinho />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;