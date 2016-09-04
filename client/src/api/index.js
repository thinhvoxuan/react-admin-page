import axios from 'axios';
import cookie from 'react-cookie';
import { logoutUser } from './auth';
import { STATIC_ERROR, FETCH_USER } from './types';
//================================
// Utility actions
//================================

export function fetchUser(uid) {
  return getData(true, `${API_URL}/user/${uid}`)
}

export function errorHandler(error) {
  let errorMessage = (error.data.error) ? error.data.error : error.data;
   if(error.status === 401) {
     errorMessage = 'You are not authorized to do this.';
   }
   alert(errorMessage);
}

// Get Request
export function getData(isAuthReq, url) {
  const requestUrl = API_URL + url;
  let headers = {};

  if(isAuthReq) {
    headers = {headers: { 'Authorization': cookie.load('token') }};
  }

  return axios.get(requestUrl, headers)
  .catch((error) => {
    errorHandler(error.response)
  });
}

// Post Request
export function postData(isAuthReq, url, data) {
  const requestUrl = API_URL + url;
  let headers = {};

  if(isAuthReq) {
    headers = {headers: { 'Authorization': cookie.load('token') }};
  }
  return axios.post(requestUrl, data, headers)
  .catch((error) => {
    errorHandler(error.response)
  });
}



// Put Request
export function putData(isAuthReq, url, data) {
  const requestUrl = API_URL + url;
  let headers = {};

  if(isAuthReq) {
    headers = {headers: { 'Authorization': cookie.load('token') }};
  }

  return axios.put(requestUrl, data, headers)
  .catch((error) => {
    errorHandler(error.response)
  });
}

// Delete Request
export function deleteData(isAuthReq, url) {
  const requestUrl = API_URL + url;
  let headers = {};

  if(isAuthReq) {
    headers = {headers: { 'Authorization': cookie.load('token') }};
  }

  return axios.delete(requestUrl, headers)
  .catch((error) => {
    errorHandler(error.response)
  });
}
