// const ipUrl = 'http://127.0.0.1:7001/default/';
const ipUrl = 'http://39.106.108.23/default/';

const servicePath = {
  getArticleList: `${ipUrl}getArticleList`, //首页接口
  getArticleById: `${ipUrl}getArticleById/`, //详细页接口
  getTypeInfo: `${ipUrl}getTypeInfo`, //文章类别接口
  getListById: `${ipUrl}getListById/`, //根据ID获取文章列表
};

export default servicePath;
