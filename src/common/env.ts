export default (): any => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    host: process.env.NEST_MONGO_CONNECTION_STRING
  },
});
