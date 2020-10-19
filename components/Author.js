import { Avatar, Divider } from 'antd';
import '../static/style/components/author.css';

const Author = () => {
  return (
    <div className="author-div comm-box">
      <div>
        {' '}
        <Avatar
          size={100}
          src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2543649392,1591184509&fm=26&gp=0.jpg"
        />
      </div>
      <div className="author-introduction">
        Only
        <Divider>社交账号</Divider>
        <Avatar size={28} icon="github" className="account" />
        <Avatar size={28} icon="qq" className="account" />
        <Avatar size={28} icon="wechat" className="account" />
      </div>
    </div>
  );
};

export default Author;
