import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardProp({data,title,text}) {
  return (
    <Card style={{ width: '18rem' }} data-bs-theme="dark" >
      <Card.Img variant="top" src={data} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardProp;