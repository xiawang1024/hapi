/*
 * @Description: 
 * @Version: 0.0.1
 * @Company: hNdt
 * @Author: xiaWang1024
 * @Date: 2020-02-26 16:27:20
 * @LastEditTime: 2020-02-26 17:17:20
 */

const hapi = require('hapi')
require('env2')('./.env')
//引入自定义的hapi-swagger插件配置
const pluginHapiSwagger = require('./plugins/hapi-swagger')
//引入路由
const routesHelloHapi = require('./routes/hello-hapi')
const routesShops = require('./routes/shops')
const routesOrders = require('./routes/orders')



const server = new hapi.Server()

/**
 * 配置服务器启动的port和host
 */
const { env } = process
server.connection({
    port: env.PORT,
    host: env.HOST
})


const init = async () => {

    await server.register([
        //为系统使用hapi-swagger
        ...pluginHapiSwagger,

    ])
    /**
     * 路由
     */
    server.route([
        ...routesHelloHapi,
        ...routesShops,
        ...routesOrders
    ])

    await server.start()
    console.log(`Server running at: ${server.info.uri}`)
}

init()

