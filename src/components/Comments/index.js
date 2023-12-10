import {useState} from 'react'
import {v4 as uuid} from 'uuid'
import CommentItem from '../CommentItem'
import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
} from './styledComponents'

const Comments = () => {
  const [name, setName] = useState('')
  const [comment, setComment] = useState('')
  const [commentList, setCommentList] = useState([])
  const onChangeName = event => {
    setName(event.target.value)
  }
  const onChangeComment = event => {
    setComment(event.target.value)
  }
  const onClickSubmitData = event => {
    event.preventDefault()
    const newComment = {
      id: uuid(),
      name,
      comment,
    }
    setCommentList(prevState => [...prevState, newComment])
    setName('')
    setComment('')
  }

  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={onClickSubmitData}>
        <NameInput
          type="text"
          placeholder="Your name"
          value={name}
          onChange={onChangeName}
        />
        <CommentTextInput
          placeholder="Your comment"
          rows="6"
          value={comment}
          onChange={onChangeComment}
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>
      {commentList.map(eachItem => (
        <CommentItem key={eachItem.id} commentDetails={eachItem} />
      ))}
    </CommentsContainer>
  )
}
export default Comments
