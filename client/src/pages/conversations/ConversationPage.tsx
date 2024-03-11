import { Outlet } from 'react-router-dom';
import ConversationSidebar from '../../components/sidebar/ConversationSidebar';
import './conversation.scss';

function ConversationPage() {
  return (
    <div className="Conversation__container">
      <ConversationSidebar />
      <Outlet />
    </div>
  );
}

export default ConversationPage;
