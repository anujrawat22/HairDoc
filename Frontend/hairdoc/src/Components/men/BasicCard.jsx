import { Card } from 'antd';
const { Meta } = Card;
const BasicCard = (props) => (
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src={props.item.poster} />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
);
export default BasicCard;