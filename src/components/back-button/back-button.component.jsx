import { useNavigate } from 'react-router-dom';

import './back-button.styles.scss';

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <div className='back-button'>
      <button onClick={() => navigate('/')}>
        <p>Back to Posts</p>
      </button>
    </div>
  );
};

export default BackButton;
