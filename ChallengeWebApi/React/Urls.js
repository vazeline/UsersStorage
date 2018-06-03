import Config from './config';

const getUrl = function(url){
    url = url.indexOf('/')===0? url:'/'+url;
    return BaseUrl+url;
};

const BaseUrl = Config.baseUrl;
const ApiBaseUrl = Config.baseApiUrl;

export {getUrl, BaseUrl, ApiBaseUrl}