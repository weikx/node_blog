const { getList,
  getDetail,
  newBlog,
  updataBlog,
  deleteBlog
} = require('../controller/blog')

const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleBlogRouter = (req, res) => {
  const method = req.method,
    id = req.query.id

  if (method === 'GET' && req.path === '/api/blog/list') {
    const author = req.query.author || '',
      keyword = req.query.keyword || '',
      listData = getList(author, keyword)

    return new SuccessModel(listData)
  }

  if (method === 'GET' && req.path === '/api/blog/detail') {
    const data = getDetail(id)
    return new SuccessModel(data)
  }

  if (method === 'POST' && req.path === '/api/blog/new') {
    const blogBody = req.body
    const data = newBlog(blogBody)
    return new SuccessModel(data)
  }

  if (method === 'POST' && req.path === '/api/blog/update') {
    const result = updataBlog(id, req.body)
    if (result) {
      return new SuccessModel()
    } else {
      return new ErrorModel('更新失败')
    }
  }

  if (method === 'DELETE' && req.path === '/api/blog/delete') {
    const result = deleteBlog(id)
    if (result) {
      return new SuccessModel()
    } else {
      return new ErrorModel('删除失败')
    }
  }
}

module.exports = handleBlogRouter