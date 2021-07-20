import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Signup from "./auth/Signup";
import Login from "./auth/Login";
import Profile from "./auth/Profile";

import Navbar from "./Navbar";

import { AuthContextComponent } from "../contexts/authContext";
import ProtectedRoute from "./auth/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <AuthContextComponent>
        <Navbar />
        <div className="container mt-5">
          <Switch>
            {/* Redirecionando para login como página principal */}
            <Redirect exact from="/" to="/login" />
            {/* Rota da página de cadastro de usuário */}
            <Route path="/signup" component={Signup} />
            {/* Rota da página de login */}
            <Route path="/login" component={Login} />
            {/* Rota da página de perfil do usuário */}
            <ProtectedRoute path="/profile" component={Profile} />
          </Switch>
        </div>
      </AuthContextComponent>
    </BrowserRouter>
  );
}

export default App;
