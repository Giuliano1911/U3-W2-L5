import { Container, Row, Col } from 'react-bootstrap'

import MeteoCard from './MeteoCard'
import LocationDetails from './LocationDetails'

function Homepage({ loc, apiKey }) {
  return (
    <Container>
      <Row>
        <Col xs={12} md={6} lg={4} className=" align-self-stretch mt-3">
          <LocationDetails apiKey={apiKey} />
        </Col>
        {loc.map((locat, i) => {
          return (
            <Col
              xs={12}
              md={6}
              lg={4}
              key={i}
              className=" align-self-stretch mt-3"
            >
              <MeteoCard locat={locat} apiKey={apiKey} />
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default Homepage
