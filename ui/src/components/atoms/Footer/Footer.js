import React from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faInstagram,
  faWhatsapp,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import s from "./Footer.module.scss";

class Footer extends React.Component {
  render() {
    return (
      <div id={"footer"} className={s["footer-container"]}>
        <div className={s["kontak"]}>
          <Container className={s["footer"]} fluid>
            <Row className={s["cp"]}>
              <Col lg="3">
                <a
                  href="https://api.whatsapp.com/send?phone=6282282512539"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faWhatsapp} /> <p>0822-825-12539</p>{" "}
                </a>
              </Col>
              <Col lg="3">
                <a
                  href="https://www.instagram.com/palembang_digital/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} />{" "}
                  <p>palembang_digital</p>
                </a>
              </Col>
              <Col lg="3">
                <a
                  href="https://www.youtube.com/channel/UCc2Wluk3SISRSNzNlxaQ1Fw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faYoutubeSquare} />{" "}
                  <p>palembang_digital</p>
                </a>
              </Col>
              <Col lg="3" className="ig">
                <a
                  href="mailto:palembangdigital01@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faEnvelopeSquare} />{" "}
                  <p>palembangdigital01@gmail.com</p>
                </a>
              </Col>
            </Row>
            <hr></hr>
            <p>Palembang Digital © 2020</p>
          </Container>
        </div>
      </div>
    );
  }
}

export default Footer;
