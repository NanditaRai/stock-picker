
const BASE_URL = "https://www.alphavantage.co"
const commonHeaders = {'Content-Type': 'application/json'}

export const APIS = {
    getBlogs: {
      url:
        `${BASE_URL}/query?function=OVERVIEW&symbol=IBM&apikey=demo`,
      options: {
        method: "GET",
        headers: commonHeaders
      }
    }
  };