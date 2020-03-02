/*
 * @Description: 
 * @Version: 0.0.1
 * @Company: hNdt
 * @Author: xiaWang1024
 * @Date: 2020-02-26 17:06:36
 * @LastEditTime: 2020-03-02 15:05:16
 */
const Joi = require('joi')
const GROUP_NAME = 'shops'

module.exports = [
    {
        method: 'GET',
        path: `/${GROUP_NAME}`,
        handler: async (req, reply) => {
            reply()
        },
        config: {
            tags: ['api', GROUP_NAME],
            description: '获取店铺列表',
            validate: {
                query: {
                    limit: Joi.number().integer().min(1).default(10).description('每页的条目数'),
                    page: Joi.number().integer().min(1).default(1).description('页码数')
                }
            },
            auth: false
        }
    },
    {
        method: 'GET',
        path: `/${GROUP_NAME}/{shopId}/goods`,
        handler: async (req, reply) => {
            reply()
        },
        config: {
            tags: ['api', GROUP_NAME],
            description: '获取店铺的商品列表'
        }
    }
]