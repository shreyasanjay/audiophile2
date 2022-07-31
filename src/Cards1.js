import { CardGroup, Container, Row } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import './Cards1.css';
function Cards1() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Alert variant="info" className="info-al">
        <Alert.Heading>Listen To Your Favourite Artists</Alert.Heading>
      </Alert>
      <Container className="card-con">
        <Row className="row">
          <Card className="artist">
            <Card.Img variant="top" src="kishore.jpg" className="im" />
            <Card.Body>
              <Card.Title>Kishore Kumar</Card.Title>
              <Card.Text className="card-text">
              Kishore Kumar was an Indian playback singer and actor. 
            Widely regarded as one of the greatest and most dynamic singers.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="artist">
            <Card.Img variant="top" src="arijit.jpg" className="im" />
            <Card.Body>
              <Card.Title>Arijit Singh</Card.Title>
              <Card.Text className="card-text">
              Arijit Singh is an Indian singer and music composer. 
            He sings predominantly in Hindustani and Bengali.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="artist">
            <Card.Img variant="top" src="lata.jpg" className="im" />
            <Card.Body>
              <Card.Title>Lata Mangeshkar</Card.Title>
              <Card.Text className="card-text">
              Lata Ji was an Indian playback singer and occasional music composer. 
            One of the greatest and most influential singers in India.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="artist">
            <Card.Img variant="top" src="shreya.jpg" className="im" />
            <Card.Body>
              <Card.Title>Shreya Ghoshal</Card.Title>
              <Card.Text className="card-text">
              Shreya Ghoshal is an Indian singer and television personality. 
            One of the most well-established playback singers of Hindi cinema. 
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="artist">
            <Card.Img variant="top" src="sonu.jpg" className="im" />
            <Card.Body>
              <Card.Title>Sonu Nigam</Card.Title>
              <Card.Text className="card-text">
              He is an Indian singer, music director and actor. 
            He has been described in the media as one of the most popular and successful singers.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="artist">
            <Card.Img variant="top" src="kk.jpg" className="im" />
            <Card.Body>
              <Card.Title>KK</Card.Title>
              <Card.Text className="card-text">
              Krishnakumar Kunnath, popularly known as KK was an Indian playback singer. Regarded as one of the best and 
              most versatile singers in India.
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default Cards1;
