/*
 * @Description:
 * @Version: 0.0.1
 * @Company: hNdt
 * @Author: xiaWang1024
 * @Date: 2020-02-28 18:12:19
 * @LastEditTime: 2020-02-28 18:30:22
 */

const JWT = require('jsonwebtoken')

const GROUP_NAME = 'users'

module.exports = [{
    method: 'POST',
    path: `/${GROUP_NAME}/createJWT`,
    handler: async (req, reply) => {
        const generateJWT = (jwtInfo) => {
            const payload = {
                userId: jwtInfo.userId,
                exp: Math.floor(new Date().getTime() / 1000) + 7 * 24 * 3600
            }

            return JWT.sign(payload, process.env.JWT_SECRET)
        }
        reply(generateJWT({
            userId: 1,
        }));
    },
    config: {
        tags: ['api', GROUP_NAME],
        description: '用于测试的用户 JWT 签发',
        auth: false, // 约定此接口不参与 JWT 的用户验证，会结合下面的 hapi-auth-jwt 来使用
    }
}]