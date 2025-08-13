const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

//product route
const productRoute = require('./routes/productRoutes');
app.use('/products', productRoute);

//order route
const orderRoutes = require('./routes/orderRoutes');
app.use('/orders', orderRoutes);

//user Routes
const userRoutes = require('./routes/userRoutes');
app.use('/user', userRoutes);

//post Routes
const postRoutes = require('./routes/postRoutes');
app.use('/post', postRoutes);

//loading Routes
const loadingRoutes = require('./routes/loadingRoutes');
app.use('/loading', loadingRoutes);

//route
app.get('/', (request, response) => {
    response.send("Hello shrtuti");
})


app.listen(port,()=>{
    console.log("server is running on port:3000");
})