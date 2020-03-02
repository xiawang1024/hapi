/*
 * @Description: 
 * @Version: 0.0.1
 * @Company: hNdt
 * @Author: xiaWang1024
 * @Date: 2020-02-26 16:27:20
 * @LastEditTime: 2020-03-02 15:03:51
 */

const hapi = require('hapi')
require('env2')('./.env')
//引入身份认证
const hapiAuthJWT2 = require('hapi-auth-jwt2')
const pluginHapiAuthJWT2 = require('./plugins/hapi-auth-jwt2')
//引入自定义的hapi-swagger插件配置
const pluginHapiSwagger = require('./plugins/hapi-swagger')
//引入路由
const routesHelloHapi = require('./routes/hello-hapi')
const routesShops = require('./routes/shops')
const routesOrders = require('./routes/orders')
const routesUsers = require('./routes/users')



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
        hapiAuthJWT2
    ])

    pluginHapiAuthJWT2(server)
    /**
     * 路由
     */
    server.route([
        ...routesHelloHapi,
        ...routesShops,
        ...routesOrders,
        ...routesUsers
    ])

    await server.start()
    console.log(`Server running at: ${server.info.uri}`)
}

init()

