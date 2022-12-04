const fakeFetch = (callback, timeout = 2000) => {
  return new Promise(resolve => {
    setTimeout(async () => {
      if (typeof callback === 'function') {
        await callback();
      }
      resolve();
    }, timeout);
  });
}

export default fakeFetch;