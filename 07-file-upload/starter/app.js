require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const fileUpload = require('express-fileupload')

// database
const connectDB = require('./db/connect');
//product router 
const productRouter = require('./routes/productRoutes')
// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.get('/', (req, res) => {
  res.send('<h1>File Upload Starter</h1>');
});
app.use(express.static('./public'))

app.use(express.json()) // built in middleware which is wee need  to use to have access to all the data from req.body
app.use(fileUpload()) // you will have access to file in req.files
app.use('/api/v1/products',productRouter)
// middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;



const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);

    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
