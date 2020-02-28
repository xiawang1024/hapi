/*
 * @Description:
 * @Version: 0.0.1
 * @Company: hNdt
 * @Author: xiaWang1024
 * @Date: 2020-02-26 16:42:26
 * @LastEditTime: 2020-02-26 17:03:21
 */


module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: (req, res) => {
            res('hapi')
        },
        config: {
            tags: ['api', 'tests'],
            description: '测试hello-hapi'
        }
    }
]