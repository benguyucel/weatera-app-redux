export const apiCompleter = (lat = 29.074, lon = 40.19) => {
    return `${process.env.REACT_APP_BASE_URL}onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${REACT_APP_APIKEY}`
}