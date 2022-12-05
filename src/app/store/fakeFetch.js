const fakeFetch = (callback, timeout = 4000) => {
  return new Promise(resolve => {
    setTimeout(async () => {
      if (typeof callback === 'function') {
        resolve(await callback());
      } else {
        resolve();
      }
    }, timeout);
  });
}

export default fakeFetch;