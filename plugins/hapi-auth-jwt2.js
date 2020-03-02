/*
 * @Description: 
 * @Version: 0.0.1
 * @Company: hNdt
 * @Author: xiaWang1024
 * @Date: 2020-03-02 14:56:02
 * @LastEditTime: 2020-03-02 15:00:52
 */
const config = require('../config')

const validate = (decoded, request, callback) => {
    let error
    // decoded 为 JWT payload 被解码后的数据
    const { userId } = decoded
    if (!userId) {
        return callback(error, false, userId)
    }

    const credentials = {
        userId
    }
    // 在路由接口的 handler 通过 request.auth.credentials 获取 jwt decoded 的值
    return callback(error, true, credentials)
}

module.exports = (server) => {
    server.auth.strategy('jwt', 'jwt', {
        key: process.env.JWT_SECRET,
        validateFunc: validate
    })
    server.auth.default('jwt')
}