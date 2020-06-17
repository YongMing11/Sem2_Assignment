const url = "http://192.168.99.100";
const port = ":8081/";
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

const getSearchResult = (username,dist, gender) => {
  // console.log(url + port + `search/${username}?dist=${100000}&gender=${gender}`);
  return sendHttpRequest('GET', url + port + `search/${username}?dist=${dist*10}&gender=${gender}`);
};

const postRegister = (data) => {
  return sendHttpRequest('POST', url + port + 'register', data
  ).catch(err => {
    console.log(err)
  });
};

const login = (username, pw) => {
  return sendHttpRequest('GET',url + port + `login/${username}?pw=${pw}`);
}
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

const getPreviousChats = (username,uuid) => {
  // 0358375f-d627-4e65-b497-8e93f013752c
  return sendHttpRequest('GET', url + port + `chat/${username}?key=${uuid}`)
  .catch(err => {
    console.log(err)
  });
}

// const getSocket = () => {
//   const socket = new WebSocket("ws://192.168.99.100:8081/socket");
//     socket.onopen = function (event) {
//       console.log("ws opened");
//     };

//     socket.onmessage = function (event) {
//       if (event.data instanceof ArrayBuffer) {
//         // addMessageToWindow('Got Image:');
//         // addImageToWindow(event.data);
//       } else {
//         // addMessageToWindow(`Got Message: ${event.data}`);
//         console.log(`Got Message: ${event.data}`);
//       }
//     };
//     function sendMessage(message) {
//       socket.send(message);
//       console.log("Msg sent");
//       // addMessageToWindow("Sent Message: " + message);
//     }
// }

export { getSearchResult, getProfile, postRegister, getTantan, getTinder, postTantan, postTinder, login, getPreviousChats};