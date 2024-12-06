import { useParams, useNavigate } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'

import Loading from './Loading'
import Error from './Error'
import '../App.css'

function SingleDay({ apiKey }) {
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
        setBgColor(data.list[params.day].weather[0].main)
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
        <>
          <Container fluid className={bgColor}>
            <Row className="justify-content-center pt-5 mx-1">
              <Col xs={12} md={8} lg={6} className="text-center">
                <h2 className="bigg">{params.city}</h2>
                <h2>{weather.list[params.day].dt_txt.slice(0, 11)}</h2>

                <p className="mb-0">
                  Max:
                  {Math.round(
                    Number(weather.list[Number(params.day) - 2].main.temp_max) -
                      273
                  )}
                  ° Min:
                  {Math.round(
                    Number(weather.list[Number(params.day) + 2].main.temp_min) -
                      273
                  )}
                  °
                </p>
                <Row className="border rounded mt-5">
                  <Col xs={12} className="d-flex justify-content-between pt-2">
                    <p className="mb-0 align-self-center">
                      {weather.list[params.day].dt_txt
                        .split(' ')[1]
                        .slice(0, 5)}
                    </p>
                    <p className="mb-0">
                      <img
                        src={`https://openweathermap.org/img/wn/${
                          weather.list[params.day].weather[0].icon
                        }@2x.png`}
                        alt="meteo icon"
                        width="40px"
                      />
                      {weather.list[params.day].weather[0].description}
                    </p>
                    <p className="mb-0 align-self-center">
                      {Math.round(
                        Number(weather.list[params.day].main.temp) - 273
                      )}
                      °
                    </p>
                  </Col>
                  <hr />
                  <Col xs={12} className="d-flex justify-content-between pt-2">
                    <p className="mb-0 align-self-center">
                      {weather.list[Number(params.day) + 1].dt_txt
                        .split(' ')[1]
                        .slice(0, 5)}
                    </p>
                    <p className="mb-0">
                      <img
                        src={`https://openweathermap.org/img/wn/${
                          weather.list[Number(params.day) + 1].weather[0].icon
                        }@2x.png`}
                        alt="meteo icon"
                        width="40px"
                      />
                      {
                        weather.list[Number(params.day) + 1].weather[0]
                          .description
                      }
                    </p>
                    <p className="mb-0 align-self-center">
                      {Math.round(
                        Number(weather.list[Number(params.day) + 1].main.temp) -
                          273
                      )}
                      °
                    </p>
                  </Col>
                  <hr />
                  <Col xs={12} className="d-flex justify-content-between pt-2">
                    <p className="mb-0 align-self-center">
                      {weather.list[Number(params.day) + 2].dt_txt
                        .split(' ')[1]
                        .slice(0, 5)}
                    </p>
                    <p className="mb-0">
                      <img
                        src={`https://openweathermap.org/img/wn/${
                          weather.list[Number(params.day) + 2].weather[0].icon
                        }@2x.png`}
                        alt="meteo icon"
                        width="40px"
                      />
                      {
                        weather.list[Number(params.day) + 2].weather[0]
                          .description
                      }
                    </p>
                    <p className="mb-0 align-self-center">
                      {Math.round(
                        Number(weather.list[Number(params.day) + 2].main.temp) -
                          273
                      )}
                      °
                    </p>
                  </Col>
                  <hr />
                  <Col xs={12} className="d-flex justify-content-between pt-2">
                    <p className="mb-0 align-self-center">
                      {weather.list[Number(params.day) + 3].dt_txt
                        .split(' ')[1]
                        .slice(0, 5)}
                    </p>
                    <p className="mb-0">
                      <img
                        src={`https://openweathermap.org/img/wn/${
                          weather.list[Number(params.day) + 3].weather[0].icon
                        }@2x.png`}
                        alt="meteo icon"
                        width="40px"
                      />
                      {
                        weather.list[Number(params.day) + 3].weather[0]
                          .description
                      }
                    </p>
                    <p className="mb-0 align-self-center">
                      {Math.round(
                        Number(weather.list[Number(params.day) + 3].main.temp) -
                          273
                      )}
                      °
                    </p>
                  </Col>
                  <hr />
                  <Col xs={12} className="d-flex justify-content-between pt-2">
                    <p className="mb-0 align-self-center">
                      {weather.list[Number(params.day) + 4].dt_txt
                        .split(' ')[1]
                        .slice(0, 5)}
                    </p>
                    <p className="mb-0">
                      <img
                        src={`https://openweathermap.org/img/wn/${
                          weather.list[Number(params.day) + 4].weather[0].icon
                        }@2x.png`}
                        alt="meteo icon"
                        width="40px"
                      />
                      {
                        weather.list[Number(params.day) + 4].weather[0]
                          .description
                      }
                    </p>
                    <p className="mb-0 align-self-center">
                      {Math.round(
                        Number(weather.list[Number(params.day) + 4].main.temp) -
                          273
                      )}
                      °
                    </p>
                  </Col>
                  <hr />
                  <Col xs={12} className="d-flex justify-content-between pt-2">
                    <p className="mb-0 align-self-center">
                      {weather.list[Number(params.day) + 5].dt_txt
                        .split(' ')[1]
                        .slice(0, 5)}
                    </p>
                    <p className="mb-0">
                      <img
                        src={`https://openweathermap.org/img/wn/${
                          weather.list[Number(params.day) + 5].weather[0].icon
                        }@2x.png`}
                        alt="meteo icon"
                        width="40px"
                      />
                      {
                        weather.list[Number(params.day) + 5].weather[0]
                          .description
                      }
                    </p>
                    <p className="mb-0 align-self-center">
                      {Math.round(
                        Number(weather.list[Number(params.day) + 5].main.temp) -
                          273
                      )}
                      °
                    </p>
                  </Col>
                  <hr />
                  <Col xs={12} className="d-flex justify-content-between pt-2">
                    <p className="mb-0 align-self-center">
                      {weather.list[Number(params.day) + 6].dt_txt
                        .split(' ')[1]
                        .slice(0, 5)}
                    </p>
                    <p className="mb-0">
                      <img
                        src={`https://openweathermap.org/img/wn/${
                          weather.list[Number(params.day) + 6].weather[0].icon
                        }@2x.png`}
                        alt="meteo icon"
                        width="40px"
                      />
                      {
                        weather.list[Number(params.day) + 6].weather[0]
                          .description
                      }
                    </p>
                    <p className="mb-0 align-self-center">
                      {Math.round(
                        Number(weather.list[Number(params.day) + 6].main.temp) -
                          273
                      )}
                      °
                    </p>
                  </Col>
                </Row>
                <Row className="my-3">
                  <Col>
                    <Button
                      variant="warning"
                      className="mx-auto"
                      onClick={(e) => {
                        navigate('/details/' + params.city)
                      }}
                    >
                      Go back
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  )
}

export default SingleDay
