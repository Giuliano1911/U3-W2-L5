import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function MyNav({ addLoc }) {
  const [newLoc, setNewLoc] = useState('')

  const location = useLocation()

  const submitNewLoc = (e) => {
    e.preventDefault()
    addLoc(newLoc)
    setNewLoc('')
  }

  return (
    <Container className="py-4">
      <Row>
        <Col xs={12} md={5}>
          <Link className=" navbar-brand" to="/">
            <h1 className="mb-0">Torres Meteo</h1>
          </Link>
        </Col>
        <Col xs={12} md={7}>
          <Form
            className={location.pathname === '/' ? 'd-flex' : 'd-none'}
            onSubmit={submitNewLoc}
          >
            <Form.Group className=" flex-grow-1 mt-2">
              <Form.Control
                type="search"
                placeholder="Add a City"
                value={newLoc}
                onChange={(e) => {
                  setNewLoc(e.target.value)
                }}
              />
            </Form.Group>
            <Button type="submit" variant="dark" className="mt-2">
              Search
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default MyNav
