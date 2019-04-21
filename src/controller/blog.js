const getList = (author, keyword) => {
  return [
    {
      id: 1,
      title: '标题a',
      content: '内容a',
      createTime: 1222121211,
      author: 'zhangsan'
    },
    {
      id: 2,
      title: '标题b',
      content: '内容b',
      createTime: 1222211221,
      author: 'lisi'
    }
  ]
}

const getDetail = (id) => {
  return {
    id: 1,
    title: '标题a',
    content: '内容a',
    createTime: 1222121211,
    author: 'zhangsan'
  }
}

const newBlog = (blogData = {}) => {
  console.log(blogData)
  return {
    id: 3
  }
}

const updataBlog = (id, blogData = {}) => {
  return true
}

const deleteBlog = (id) => {
  return true
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updataBlog,
  deleteBlog
}