import { Container, Row, Col, Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Loading from './Loading'
import Error from './Error'
import '../App.css'

function Details({ removeLoc, apiKey }) {
  const [weather, setWeather] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [bgColor, setBgColor] = useState('')

  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${params.city}&appid=${apiKey}`
    )
      .then((response) => {
        console.log(response)
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('No ok')
        }
      })
      .then((data) => {
        console.log(data)
        setBgColor(data.list[0].weather[0].main)
        setWeather(data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log('errore', err)
        setIsLoading(false)
        setIsError(true)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {isError && <Error />}
      {isLoading && <Loading />}
      {!isError && !isLoading && (
        <Container fluid className={bgColor}>
          <Row className="justify-content-center pt-5 mx-1">
            <Col xs={12} md={8} lg={6} className="text-center">
              <h2 className="bigg">{params.city}</h2>
              <h1 className="bigg">
                {Math.round(Number(weather.list[0].main.temp) - 273)}°
              </h1>
              <h4>{weather.list[0].weather[0].description}</h4>
              <p className="mb-0">
                Max:{Math.round(Number(weather.list[0].main.temp_max) - 273)}°
                Min:
                {Math.round(Number(weather.list[0].main.temp_min) - 273)}°
              </p>
              <Row className="border rounded mt-5">
                <Col xs={12} className="text-start p-2">
                  <p className="mb-0">
                    Forecasted {weather.list[1].weather[0].description} at{' '}
                    {weather.list[1].dt_txt.split(' ')[1].slice(0, 5)}
                  </p>
                  <p className="mb-0">
                    Wind up to{' '}
                    {Math.round(Number(weather.list[0].wind.speed) * 1.852)}{' '}
                    km/h
                  </p>
                </Col>
                <hr />
                <Col xs={3}>
                  <p>Now</p>
                  <p className="mb-0">
                    <img
                      src={`https://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}@2x.png`}
                      alt="meteo icon"
                      width="40px"
                    />
                  </p>
                  <p className="mb-1">
                    {Math.round(Number(weather.list[0].main.temp) - 273)}°
                  </p>
                </Col>
                <Col xs={3}>
                  <p>{weather.list[1].dt_txt.split(' ')[1].slice(0, 5)}</p>
                  <p className="mb-0">
                    <img
                      src={`https://openweathermap.org/img/wn/${weather.list[1].weather[0].icon}@2x.png`}
                      alt="meteo icon"
                      width="40px"
                    />
                  </p>
                  <p className="mb-1">
                    {Math.round(Number(weather.list[1].main.temp) - 273)}°
                  </p>
                </Col>
                <Col xs={3}>
                  <p>{weather.list[2].dt_txt.split(' ')[1].slice(0, 5)}</p>
                  <p className="mb-0">
                    <img
                      src={`https://openweathermap.org/img/wn/${weather.list[2].weather[0].icon}@2x.png`}
                      alt="meteo icon"
                      width="40px"
                    />
                  </p>
                  <p className="mb-1">
                    {Math.round(Number(weather.list[2].main.temp) - 273)}°
                  </p>
                </Col>
                <Col xs={3}>
                  <p>{weather.list[3].dt_txt.split(' ')[1].slice(0, 5)}</p>
                  <p className="mb-0">
                    <img
                      src={`https://openweathermap.org/img/wn/${weather.list[3].weather[0].icon}@2x.png`}
                      alt="meteo icon"
                      width="40px"
                    />
                  </p>
                  <p className="mb-1">
                    {Math.round(Number(weather.list[3].main.temp) - 273)}°
                  </p>
                </Col>
              </Row>
              <Row className="border rounded mt-5">
                <Col xs={12}>
                  <p className="my-2">PREVISIONI PER 5 GIORNI</p>
                </Col>
                <hr className="m-0" />
                <Row className="my-3 p-0">
                  <Col xs={4}>
                    <Button
                      className="nav-link border border-0 mx-auto"
                      variant="light"
                      onClick={(e) => {
                        navigate('/singleDay/' + params.city + '/0')
                      }}
                    >
                      Today
                    </Button>
                  </Col>
                  <Col xs={4}>
                    <img
                      src={`https://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}@2x.png`}
                      alt="meteo icon"
                      width="40px"
                    />
                    {weather.list[0].weather[0].description}
                  </Col>
                  <Col xs={4}>
                    <p className="mb-0">
                      Max:
                      {Math.round(Number(weather.list[0].main.temp_max) - 273)}°
                      Min:
                      {Math.round(Number(weather.list[0].main.temp_min) - 273)}°
                    </p>
                  </Col>
                </Row>
                <hr />
                <Row className="my-3 p-0">
                  <Col xs={4}>
                    <Button
                      className="nav-link border border-0 mx-auto"
                      variant="light"
                      onClick={(e) => {
                        navigate('/singleDay/' + params.city + '/8')
                      }}
                    >
                      Tomorrow
                    </Button>
                  </Col>
                  <Col xs={4}>
                    <img
                      src={`https://openweathermap.org/img/wn/${weather.list[8].weather[0].icon}@2x.png`}
                      alt="meteo icon"
                      width="40px"
                    />
                    {weather.list[8].weather[0].description}
                  </Col>
                  <Col xs={4}>
                    <p className="mb-0">
                      Max:
                      {Math.round(Number(weather.list[8].main.temp_max) - 273)}°
                      Min:
                      {Math.round(Number(weather.list[8].main.temp_min) - 273)}°
                    </p>
                  </Col>
                </Row>
                <hr />
                <Row className="my-3 p-0">
                  <Col xs={4}>
                    <Button
                      className="nav-link border border-0 mx-auto"
                      variant="light"
                      onClick={(e) => {
                        navigate('/singleDay/' + params.city + '/16')
                      }}
                    >
                      {weather.list[16].dt_txt.slice(0, 11)}
                    </Button>
                  </Col>
                  <Col xs={4}>
                    <img
                      src={`https://openweathermap.org/img/wn/${weather.list[16].weather[0].icon}@2x.png`}
                      alt="meteo icon"
                      width="40px"
                    />
                    {weather.list[16].weather[0].description}
                  </Col>
                  <Col xs={4}>
                    <p className="mb-0">
                      Max:
                      {Math.round(Number(weather.list[16].main.temp_max) - 273)}
                      ° Min:
                      {Math.round(Number(weather.list[16].main.temp_min) - 273)}
                      °
                    </p>
                  </Col>
                </Row>
                <hr />
                <Row className="my-3 p-0">
                  <Col xs={4}>
                    <Button
                      className="nav-link border border-0 mx-auto"
                      variant="light"
                      onClick={(e) => {
                        navigate('/singleDay/' + params.city + '/24')
                      }}
                    >
                      {weather.list[24].dt_txt.slice(0, 11)}
                    </Button>
                  </Col>
                  <Col xs={4}>
                    <img
                      src={`https://openweathermap.org/img/wn/${weather.list[24].weather[0].icon}@2x.png`}
                      alt="meteo icon"
                      width="40px"
                    />
                    {weather.list[24].weather[0].description}
                  </Col>
                  <Col xs={4}>
                    <p className="mb-0">
                      Max:
                      {Math.round(Number(weather.list[24].main.temp_max) - 273)}
                      ° Min:
                      {Math.round(Number(weather.list[24].main.temp_min) - 273)}
                      °
                    </p>
                  </Col>
                </Row>
                <hr />
                <Row className="my-3 p-0">
                  <Col xs={4}>
                    <Button
                      className="nav-link border border-0 mx-auto"
                      variant="light"
                      onClick={(e) => {
                        navigate('/singleDay/' + params.city + '/32')
                      }}
                    >
                      {weather.list[32].dt_txt.slice(0, 11)}
                    </Button>
                  </Col>
                  <Col xs={4}>
                    <img
                      src={`https://openweathermap.org/img/wn/${weather.list[32].weather[0].icon}@2x.png`}
                      alt="meteo icon"
                      width="40px"
                    />
                    {weather.list[24].weather[0].description}
                  </Col>
                  <Col xs={4}>
                    <p className="mb-0">
                      Max:
                      {Math.round(Number(weather.list[32].main.temp_max) - 273)}
                      ° Min:
                      {Math.round(Number(weather.list[32].main.temp_min) - 273)}
                      °
                    </p>
                  </Col>
                </Row>
              </Row>
              <Row className="my-3">
                <Col>
                  <Button
                    variant="danger"
                    onClick={(e) => {
                      removeLoc(params.city)
                      navigate('/')
                    }}
                  >
                    Remove Location
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      )}
    </>
  )
}

export default Details
