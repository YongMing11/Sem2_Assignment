const url = "http://192.168.99.100";
const port = ":8081/"
const sendHttpRequest = (method, url, data) => {
  let response = "g";
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);

  //in case we will end json to server
  if (data) {
    xhr.setRequestHeader('Content-Type', 'application/json');
  }

  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      // parse JSON
      response = JSON.parse(xhr.response);
      console.log(response);
      return response;
    } else {
      console.log("Error, get (xhr.status >= 200 && xhr.status < 300) === false");
      return "";
    }
  };

  xhr.onerror = () => {
    console.log('Something went wrong. xhr.onerror() called!');
    return "";
  };
  
  xhr.send(JSON.stringify(data));
  return response;
};

// const getProfile = (username) => {
//   sendHttpRequest('GET', url + port + "profile/" + username).then(responseData => {
//     console.log(responseData);
//   });
// };
const getSearchResult = (dist, gender) => {

  console.log(sendHttpRequest('GET', url + port + `/search/dad?dist=${dist}&gender=${gender}`));
};

// const sendData = () => {
//   sendHttpRequest('POST', 'https://reqres.in/api/register', {
//     email: 'eve.holt@reqres.in',
//     // password: 'pistol'
//   }).then(responseData => {
//     console.log(responseData);
//   }).catch(err => {
//     console.log(err)
//   });
// };

// export {getProfile};
export { getSearchResult };