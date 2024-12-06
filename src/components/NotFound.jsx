import { Container, Alert, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <Container className="text-center">
      <Alert variant="danger">Pagina non trovata!</Alert>
      <Button
        variant="success"
        onClick={() => {
          navigate('/')
        }}
      >
        Torna alla home
      </Button>
    </Container>
  )
}

export default NotFound
