/**
 * Created by 47166 on 2017/7/31.
 */
module.exports = {
  dev: {
    username: 'YOLO',
    interface: {
      signin: '/api/signIn',
      register: '/api/register'
    }
  },
  build: {
    username: 'production',
    interface: {
      signin: '/api/signIn',
      register: '/api/register'
    }
  }
}
