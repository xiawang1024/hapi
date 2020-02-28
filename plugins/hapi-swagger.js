/*
 * @Description:
 * @Version: 0.0.1
 * @Company: hNdt
 * @Author: xiaWang1024
 * @Date: 2020-02-26 16:55:13
 * @LastEditTime: 2020-02-26 17:23:39
 */

const inert = require('inert')
const vision = require('vision')
const package = require('package')
const hapiSwagger = require('hapi-swagger')

module.exports = [
    inert,
    vision,
    {
        register: hapiSwagger,
        options: {
            info: {
                title: '接口文档',
                version: package.version
            },
            //定义接口以tags属性定义为分组
            grouping: 'tags',
            tags: [
                {
                    name: 'tests', description: '测试相关',
                },
                {
                    name: 'shops', description: '店铺相关'
                }
            ]
        }
    }
]
