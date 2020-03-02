/*
 * @Description:
 * @Version: 0.0.1
 * @Company: hNdt
 * @Author: xiaWang1024
 * @Date: 2020-03-02 15:12:46
 * @LastEditTime: 2020-03-02 15:14:16
 */
const Joi = require('joi')
const jwtHeaderDefine = {
    headers: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}

module.exports = {
    jwtHeaderDefine
}