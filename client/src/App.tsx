import AuthenticationPage from './pages/Authentication/AuthenticationPage';
import { Outlet, Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/Login/LoginPage';

function App() {
  return (
    <Routes>
      <Route path="/register" element={<AuthenticationPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route
        path="conversation"
        element={
          <div>
            <div>Conversations</div>
            <Outlet />
          </div>
        }
      >
        <Route path=":id" element={<div>Conversations, ID page</div>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
