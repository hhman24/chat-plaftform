import AuthenticationPage from './pages/authentication/AuthenticationPage';
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/login/LoginPage';
import ConversationPage from './pages/conversations/ConversationPage';
import { ConversationChanelPage } from './pages/conversations/ConversationChanelPage';

function App() {
  return (
    <Routes>
      <Route path="/register" element={<AuthenticationPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="conversation" element={<ConversationPage />}>
        <Route path=":id" element={<ConversationChanelPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
