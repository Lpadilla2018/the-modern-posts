import { useNavigate } from 'react-router-dom';

import './back-button.styles.scss';

/**
 * BackButton Component is used to navigate back to the homepage
 * @returns
 */
const BackButton = () => {
  const navigate = useNavigate();
  return (
    <div className='back-button'>
      <button onClick={() => navigate('/the-modern-posts')}>
        <p>Back to Posts</p>
      </button>
    </div>
  );
};

export default BackButton;
