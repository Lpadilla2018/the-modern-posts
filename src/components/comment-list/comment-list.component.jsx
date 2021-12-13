import './comment-list.styles.scss';

// Components
import CommentInfo from '../comment-info/comment-info.component';

const CommentList = ({ comments }) => (
  <div className='comment-list'>
  <h2>Comments ({getCommentsCount(comments)})</h2>
    {comments.map((comment, index) => (
      <CommentInfo key={index} {...comment}/>
    ))}
  </div>
);

function getCommentsCount(comments) {
  return comments.length;
}

export default CommentList;