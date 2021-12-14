import './add-comment.styles.scss';

const AddComment = () => (
  <div className='add-comment'>
    <input placeholder='Name'></input>
    <input placeholder='Email'></input>
    <textarea
      label='comments'
      placeholder='Enter your comment here..'
    ></textarea>
  </div>
);

export default AddComment;
