import { useParams } from 'react-router-dom';
import './conversation.scss';

export const ConversationChanelPage = () => {
  const params = useParams();

  return <div className="chanelConversation__container">Chanel Conversation</div>;
};
