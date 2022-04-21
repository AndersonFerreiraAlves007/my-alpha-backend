module.exports = {
  SERVER_PORT: 3333,
  API_VERSION: '1.0.0',
  DATABASE_PORT: parseInt(process.env.DATABASE_PORT, 10),
  DATABASE_HOST: process.env.DATABASE_HOST,
  DATABASE_USER: process.env.DATABASE_USER,
  DATABASE_DATABASE: process.env.DATABASE_DATABASE,
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
  EXPIRE_IN_JWT_ACCESS_TOKEN: 24 * 60 * 60,
  SECRET_JWT_ACCESS_TOKEN: process.env.SECRET_JWT_ACCESS_TOKEN
}
