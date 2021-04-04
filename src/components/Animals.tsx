import axios, { AxiosRequestConfig, AxiosInstance } from "axios";

let getDatas = function() {
  const url = 'http://acnhapi.com/v1/villagers/';
  const option : AxiosRequestConfig = {
    url : url,
    method : 'get',
    headers : {
      'Accept' : 'application/json',
      'Content-Type' : 'application/json;charset=UTF-8'
    }
  };
  axios(option).then(response => console.log(response.data));
}

function Animals() {
    getDatas();
}

export default Animals;
