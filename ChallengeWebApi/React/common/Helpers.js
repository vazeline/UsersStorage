import React from 'react';
import axios from 'axios';
import * as qs from 'qs';
import CircularProgress from '@material-ui/core/CircularProgress';


const genericRequest = function (method, payload, onsuccess, url, setMessage, message) {
    var self = this;
    setMessage = setMessage ? setMessage : (err) => err;
    self.setState({ message: message ? message : <CircularProgress /> });
    let args = [url];
    if (payload)
       args.push(qs.stringify(payload));
    
    var headers = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };

    args.push(headers);
    (axios[method]).apply(this, args)
       .then(function (response) {
           console.log(response);
           var err = response.data && response.statusText ? response.statusText : "Network error";
           if (((response.status >= 200 && response.status < 400) || response.statusText === "OK") && onsuccess) {
               onsuccess(response);
           }
           else if (response.status >= 400) {
               if (response.statusText)
                   self.setState({ message: setMessage(response.statusText, payload) });
           }
           else {
               console.log("some error ocurred", response.statusText || response.status);
               if (response.statusText)
                   self.setState({ message: setMessage(response.statusText, payload) });
           }
       })
       .catch(function (error) {
           console.log(error);
           var msg = error.response && error.response.data && error.response.data.err ? error.response.data.err : "Network error";
           self.setState({ message: setMessage(msg, payload) });
       });
}

const genericPostRequest = function (payload, onsuccess, url, setMessage, message) {
    genericRequest.call(this, "post", payload, onsuccess, url, setMessage, message);
}

const genericGetRequest = function (onsuccess, url, setMessage, message) {
   genericRequest.call(this, "get", undefined, onsuccess, url, setMessage, message);
}

const genericPutRequest = function (payload, onsuccess, url, setMessage, message) {
    genericRequest.call(this, "put", payload, onsuccess, url, setMessage, message);
 }
 
const genericDeleteRequest = function (onsuccess, url, setMessage, message) {
    genericRequest.call(this, "delete", undefined, onsuccess, url, setMessage, message);
 }

export { genericPostRequest, genericGetRequest, genericDeleteRequest, genericPutRequest }