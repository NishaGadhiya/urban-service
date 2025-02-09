const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors')
app.use(cors())
const PORT = 4000



//...Config...
app.use(express.json())






//Connetion to db.....
var db = mongoose.connect("mongodb://127.0.0.1:27017/urbanservices")
db.then(()=>{
    console.log("connected to mongodb")
}).catch((err)=>{
    console.log(err)
})







// Routes
const roleRoutes = require('./routes/RoleRoutes.js')
const userRoutes = require('./routes/UserRoutes.js')
const categoryRoutes = require('./routes/CategoryRoutes.js')
const typeRoutes = require('./routes/TypeRoutes.js')
const subCategoryRoutes = require('./routes/SubControllerRoutes.js')
const serviceProviderRoutes = require('./routes/ServiceProviderRoutes.js')
const serviceRoutes = require('./routes/ServiceRoutes.js')
const fileUplaodRoutes = require('./routes/FileUploadRoutes.js')
const bookingRoutes = require('./routes/BookingRoutes.js')
const addressRoutes = require('./routes/AddressRoutes.js')





//App allocation to routes
app.use("/roles",roleRoutes)
app.use("/users",userRoutes)
app.use("/categories",categoryRoutes)
app.use("/types",typeRoutes)
app.use("/subcategories",subCategoryRoutes)
app.use("/serviceproviders",serviceProviderRoutes)
app.use("/services",serviceRoutes)
app.use("/upload",fileUplaodRoutes)
app.use('/bookings',bookingRoutes)
app.use('/address',addressRoutes)


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})