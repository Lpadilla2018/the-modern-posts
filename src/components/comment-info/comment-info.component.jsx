import './comment-info.component.styles.scss';

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
