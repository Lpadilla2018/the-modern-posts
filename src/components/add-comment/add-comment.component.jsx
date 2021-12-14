import './add-comment.styles.scss';

const AddComment = ({
  handleNameChange,
  handleEmailChange,
  handleCommentChange,
}) => (
  <div className='add-comment'>
    <input onChange={handleNameChange} placeholder='Name'></input>
    <input onChange={handleEmailChange} placeholder='Email'></input>
    <textarea
      label='comments'
      onChange={handleCommentChange}
      placeholder='Enter your comment here..'
    ></textarea>
  </div>
);

export default AddComment;
