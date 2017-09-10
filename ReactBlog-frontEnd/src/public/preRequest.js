import { message } from 'antd';
import { hashHistory } from 'react-router';

module.exports = function http (url, options) {
  return fetch(url, options).then((res) => {
    switch (res.status) {
      case 200:
        return res.text();
      case 404:
        return message.error('啊哦~请求的资源丢失, 请与工作人员联系解决, 5秒后即将为您跳回首页', 5, () => {
          hashHistory.push('/index');
        });
      default:
        return message.warning('服务器暂时出现了一些小故障, 试试与工作人员联系吧');
    }
  });
};
