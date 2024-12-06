import { Card } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Loading from './Loading'
import Error from './Error'
import '../App.css'

function MeteoCard({ locat, apiKey }) {
  const [weather, setWeather] = useState({})
  const [bgColor, setBgColor] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${locat}&appid=${apiKey}`
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
        setBgColor(data.weather[0].main)
        console.log(bgColor)
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
        <Card
          className={bgColor}
          role="button"
          onClick={(e) => {
            navigate('/details/' + locat)
          }}
        >
          <Card.Body className="d-flex justify-content-between">
            <div className="d-flex flex-column justify-content-between">
              <h3 className="mb-0">{locat}</h3>
              <p className="mb-0">{weather.weather[0].description}</p>
            </div>
            <div>
              <div className="text-end mb-4">
                <img
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  alt="meteo icon"
                  width="40px"
                />
                <h3 className="d-inline">
                  {Math.round(Number(weather.main.temp) - 273)}°
                </h3>
              </div>
              <p className="mb-0">
                Max:{Math.round(Number(weather.main.temp_max) - 273)}° Min:
                {Math.round(Number(weather.main.temp_min) - 273)}°
              </p>
            </div>
          </Card.Body>
        </Card>
      )}
    </>
  )
}

export default MeteoCard
