const proxy = [
    {
      context: '/api',
      target: 'http://localhost:8080',
      pathRewrite: {'^/api' : ''}
    }
  ];
export default proxy;