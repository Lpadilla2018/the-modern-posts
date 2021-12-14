import './comment-list.styles.scss';

// Components
import CommentInfo from '../comment-info/comment-info.component';

const CommentList = ({ comments }) => (
  <div className='comment-list'>
    <h2>Comments ({getCommentsCount(comments)})</h2>
    {comments.map((comment, index) => (
      <CommentInfo key={index} {...comment} />
    ))}
  </div>
);

/**
 * Get how many comments are in the array
 * @param comments Array of comments
 * Determines the length of the array and dynamically updates number on the UI
 * @returns number of comments
 */
function getCommentsCount(comments) {
  return comments.length;
}

export default CommentList;
