export function isSpecialCharacter(inputValue) {
  const rSpecialCharacter = /[^가-힣ㄱ-하-ㅣ0-9]/;
  return rSpecialCharacter.test(inputValue);
}

export function isValidLength(inputValue) {
  const validLength = 2;
  const inputValueLength = inputValue.length;
  return (inputValueLength >= validLength);
}

export function isDuplicated(inputValue) {
  return (localStorage.getItem(inputValue));
}

export function isRegisteredStation(stationName) {
  const stations = JSON.parse(localStorage.getItem("station"));
  let i;
  for (i = 0; i < stations.length; i++) {
    if (stations[i].name === stationName) {
      return (stations[i].registered !== 0)
    }
  }
}

export function isInLine(selectInputValue, lineStations) {
  let i;
  for (i = 0; i < lineStations.length; i++) {
    if (lineStations[i] === selectInputValue) {
      return true
    }
  }
}

export function isValidNumber(orderInputValue, lineLength) {
  return (lineLength > orderInputValue > 0)
}

export function isValidArrayLength(key, lineName) {
  const objects = JSON.parse(localStorage.getItem(key));
  const validLength = 2
  let i;
  for (i = 0; i < objects.length; i++) {
    if (objects[i].name === lineName) {
      return (objects[i].line.length > validLength)
    }
  }
}

export function removeData(key, dataName) {
  let objects = JSON.parse(localStorage.getItem(key));
  let i;
  for (i = 0; i < objects.length; i++) {
    if (objects[i].name === dataName) {
      const dataIndex = objects.indexOf(objects[i])
      objects.splice(dataIndex, 1)
      localStorage.setItem(key, JSON.stringify(objects))
    }
  }
}

export function removeStation(key, stationName, lineName, stationList) {
  let objects = JSON.parse(localStorage.getItem(key));
  let i;
  for (i = 0; i < objects.length; i++) {
    if (objects[i].name === lineName) {
      const dataIndex = objects[i].line.indexOf(stationName)
      objects[i].line.splice(dataIndex, 1)
      localStorage.setItem(key, JSON.stringify(objects))
    }
  }
}