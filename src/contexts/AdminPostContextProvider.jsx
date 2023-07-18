import React from 'react'
import { createContext, useEffect, useState } from 'react'
import { postApi, editPostApi } from '../api/post-api'

const PostContext = createContext()

function PostContextProvider({ children }) {
  const [post, setPost] = useState(null)

  useEffect(() => {}, [])
  async function postFn(postInput) {
    const res = await postApi(postInput)
  }
  async function editFn(editInput) {
    const res = await editPostApi(editInput)
    await postFn(editInput)
  }

  return (
    <PostContext.Provider value={{ post, postFn, editFn }}>
      {children}
    </PostContext.Provider>
  )
}

export { PostContext }
export default PostContextProvider
