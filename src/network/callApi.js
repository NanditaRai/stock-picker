const callApi = async (url, options) => {
    try {
      const response = await fetch(url, options);
      return response.json();
    } catch(e) {
      // Can write any way of formatting the error
      throw new Error(e);
    }
    
  };
  export default callApi;