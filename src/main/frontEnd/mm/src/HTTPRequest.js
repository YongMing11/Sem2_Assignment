const url = "http://192.168.99.100";
const port = ":8081/"
const sendHttpRequest = (method, url, data) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = 'json';
    if (data) {
      xhr.setRequestHeader('Content-Type', 'application/json');
    }

    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };

    xhr.onerror = () => {
      reject('Something went wrong!');
    };

    xhr.send(JSON.stringify(data));
  });
  return promise;
};

const getProfile = (username) => {
  return sendHttpRequest('GET', url + port + "profile/" + username);
};

const getSearchResult = (dist, gender) => {
  return sendHttpRequest('GET', url + port + `search/dad?dist=${dist}&gender=${gender}`);
};

const postRegister = (data) => {
  return sendHttpRequest('POST', url + port + 'register', data
  ).catch(err => {
    console.log(err)
  });
};

const getTantan = () => {
  return sendHttpRequest('GET', url + port + 'adapter/tantan');
}
const getTinder = () => {
  return sendHttpRequest('GET', url + port + 'adapter/tinder'
  ).then(responseData => {
    console.log(responseData);
  });
}
const postTantan = (data) => {
  console.log("in post tantan");
  return sendHttpRequest('POST', url + port + 'adapter/tantan', data
  ).catch(err => {
    console.log(err)
  });
}
const postTinder = (data) => {
  console.log("in post tinder");
  return sendHttpRequest('POST', url + port + 'adapter/tinder', data
  ).catch(err => {
    console.log(err)
  });
}

export { getSearchResult, getProfile, postRegister, getTantan, getTinder, postTantan, postTinder};
// const sendHttpRequest = (method, url, data) => {
//   const xhr = new XMLHttpRequest();
//   xhr.open(method, url);

//   //if send JSON to server
//   if (data) {
//     xhr.setRequestHeader('Content-Type', 'application/json');
//   }

//   xhr.onload = () => {
//     if (xhr.status >= 200 && xhr.status < 300) {
//       // parse JSON
//       const response = JSON.parse(xhr.response);
//       console.log(response);
//     } else {
//       console.log("Error, get (xhr.status >= 200 && xhr.status < 300) === false");
//     }
//   };

//   xhr.onerror = () => {
//     console.log('Something went wrong. xhr.onerror() called!');
//   };

//   xhr.send(JSON.stringify(data));
// };