import './comment-info.component.styles.scss';

/**
 * @param object Takes input values name, body, and email
 * Displays title, body, and email of the current comment
 */
const CommentInfo = ({ name, body, email }) => {
  return (
    <div className='comment-info'>
      <h4>{name}</h4>
      <p>{email}</p>
      <p>{body}</p>
    </div>
  );
};

export default CommentInfo;
