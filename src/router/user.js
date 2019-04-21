const { login } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')
const handleUserRouter = (req, res) => {
  const method = req.method

  if (method === 'POST' && req.path === '/api/user/login') {
    const { userName, password } = req.body,
      result = login(userName, password)
    if (result) {
      return new SuccessModel()
    } else {
      return new ErrorModel('账号或密码错误')
    }
  }
}

 module.exports = handleUserRouter