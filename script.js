const rootElement = document.querySelector("#root")
const api_key = "GbfpLgNhC1yHInN9SdwBQbLzcPgxfcmwaizWcx1m"

const fetchUrl = (url) => fetch (url)
  .then(res => res.json())

const apodComponent = (apodData) => `
  <h2>${apodData.title}</h2>
  <h3>${apodData.date}</h3>
  <h4>${apodData.explanation}</h4>
  <img src=${apodData.url}>
` 

const init = async () => {
  const data = await fetchUrl(`https://api.nasa.gov/planetary/apod?api_key=${api_key}`)
  console.log(data)

  rootElement.insertAdjacentHTML("beforeend", apodComponent(data))

  const arrayData = await fetchUrl(`https://api.nasa.gov/planetary/apod?api_key=${api_key}&count=5`)
  console.log(arrayData)

  const dataByDate = await fetchUrl(`https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=2010-10-10`)
  console.log(dataByDate)
}

init()