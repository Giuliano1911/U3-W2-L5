import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card } from 'react-bootstrap'

import Error from './Error'
import Loading from './Loading'

function LocationDetails({ apiKey }) {
  const [weather, setWeather] = useState({})
  const [bgColor, setBgColor] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [lat, setLat] = useState('')
  const [lon, setLon] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLat(position.coords.latitude)
        setLon(position.coords.longitude)
      },
      () => {
        alert('could not get your position')
      }
    )
    if (!lat) return
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
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
  }, [lat])

  return (
    <>
      {isError && <Error />}
      {isLoading && <Loading />}
      {!isError && !isLoading && (
        <Card
          className={bgColor}
          role="button"
          onClick={(e) => {
            navigate('/details/' + weather.name)
          }}
        >
          <Card.Body className="d-flex justify-content-between">
            <div className="d-flex flex-column justify-content-between">
              <h3 className="mb-0">📍{weather.name}</h3>
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

export default LocationDetails
