/*
 * @Description:
 * @Version: 0.0.1
 * @Company: hNdt
 * @Author: xiaWang1024
 * @Date: 2020-02-26 17:12:16
 * @LastEditTime: 2020-02-26 17:47:05
 */
const Joi = require('joi')
const GROUP_NAME = 'orders'

module.exports = [
    {
        method: 'POST',
        path: `/${GROUP_NAME}`,
        handler: async (req, reply) => {
            reply()
        },
        config: {
            tags: ['api', GROUP_NAME],
            description: '创建订单',
            validate: {
                payload: {
                    goodsList: Joi.array().items(
                        Joi.object().keys({
                            goods_id: Joi.number().integer(),
                            count: Joi.number().integer()
                        })
                    )
                }
            }
        }
    },
    {
        method: 'POST',
        path: `/${GROUP_NAME}/{orderId}/pay`,
        handler: async (req, reply) => {
            reply()
        },
        config: {
            tags: ['api', GROUP_NAME],
            description: '支付某条订单',
            validate: {
                params: {
                    orderId: Joi.string().required()
                }
            }
        }
    }
]