// import callApi from "./callApi";
// import { APIS } from "./config";
import { stockArray } from './mockedData'

export const getStocks = () => {
    // const {url, options} = APIS.getBlogs
    // return callApi(url, options)
   return new Promise((resolve) => {
       setTimeout(() => {
           resolve(stockArray)
       }, 1000)
   })
};

