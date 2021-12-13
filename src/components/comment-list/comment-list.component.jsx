import './comment-list.styles.scss';



const CommentList = ({ comments }) => (
  <div className='comment-list'>
    {comments.map((comment) => (
      <p>{comment.name}</p>
    ))}
  </div>
);