import './comment-info.component.styles.scss';

const CommentInfo = ({ name, body }) => {
  return (
    <div className='comment-info'>
      <h4>{name}</h4>
      <p>{body}</p>
    </div>
  );
};

export default CommentInfo;
