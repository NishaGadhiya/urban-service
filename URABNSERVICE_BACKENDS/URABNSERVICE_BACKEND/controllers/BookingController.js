const bookingSchema = require('../models/BookingModel')
const ServiceModel = require('../models/ServiceModel');

const createBooking = async(req,res)=>{
    try{
        const savedbooking = await bookingSchema.create(req.body)
        res.status(201).json({
            message:"Booking created Successfully",
            data:savedbooking,
            flag:1
        })

    }catch(error){
        res.status(500).json({
            message:"Internal Server Error",
            data:error.message,
            flag:-1
        })
    }
}

const getBookingById = async(req,res)=>{
    try{
        const booking = await bookingSchema.findById(req.params.id).populate("address")
        if(booking==null){
            res.status(404).json({
                message:"Booking not found",
                flag:-1
            })
        }else{
            res.status(200).json({
                message:"Booking fetched",
                data:booking,
                flag:1
            })
        }

    }catch(error){
        res.status(500).json({
            message: 'Error in Fetching Data',
            data:error,
            flag:-1
        })
    }
}

const getAllBooking = async(req,res)=>{
    try{
        const bookings =  await bookingSchema.find().populate('serviceprovider').populate('user').populate('service').populate('address')
        res.status(200).json({
            message:"Booking fetched successfully",
            data:bookings,
            flag:1
        })
    }catch(error){
        res.status(500).json({
            message:"Error",
            data:error,
            flag:-1
        })
    }
}

const updateBookingById = async(req,res)=>{
    const newBooking = req.body
    try{
        const updatedBooking = await bookingSchema.findByIdAndUpdate(req.params.id,newBooking)
        if(updatedBooking===null){
            res.status(404).json({
                message:"Booking not found",
                flag:-1
            })
        }else{
            res.status(200).json({
                message: "Booking has been updated!",
                flag: 1
            })
        }
    }catch(error){
        res.status(500).json({
            message:"Error In Updating Booking",
            data: error,
            flag:-1
        })
    }
}

const updateBookingStatus = async(req,res) =>{
   
    // const newStatus = req.body;
    try {
        const id = req.params.id;
        console.log(id);
        const updateStatus = await bookingSchema.findByIdAndUpdate(id, {
          status: req.body.status,
          address: req.body.address,
        });
        console.log(updateStatus);
        res.status(201).json({
          message: "Status Updated Successfully",
          flag: 1,
          data: updateStatus,
        });
      } catch (error) {
        res.status(500).json({
          message: "Server Error",
          flag: -1,
          data: error,
        });
      }
}

const getBookingByUserId = async (req, res) => {
    try {
        const bookings = await bookingSchema.find({ user: req.params.id }).populate("service").populate("user").populate("serviceprovider").populate('address');
        res.status(200).json({
            message: "Bookings fetched successfully by user ID",
            data: bookings,
            flag: 1
        });
    } catch (error) {
        res.status(500).json({
            message: "Error",
            data: error,
            flag: -1
        });
    }
};

const getPendingBooking = async (req, res) => {
    try {
        const bookings = await bookingSchema.find({ status: 'pending', user: req.params.id }).populate("service").populate("user").populate("serviceprovider");
        res.status(200).json({
            message: "Pending bookings fetched successfully",
            data: bookings,
            flag: 1
        });
    } catch (error) {
        res.status(500).json({
            message: "Error",
            data: error,
            flag: -1
        });
    }
};

const getDoneBooking = async (req, res) => {
    try {
        const bookings = await bookingSchema.find({ status: 'Booked', user: req.params.id }).populate("service").populate("user").populate("serviceprovider").populate('address');
        res.status(200).json({
            message: "Done bookings fetched successfully",
            data: bookings,
            flag: 1
        });
    } catch (error) {
        res.status(500).json({
            message: "Error",
            data: error,
            flag: -1
        });
    }
};

const getBookingByServiceProviderId = async (req,res) => {
    const serviceProviderId = req.params.id

    try{
        const booking = await bookingSchema.find({serviceprovider:serviceProviderId,}).populate('address').populate('service').populate('serviceprovider').populate('user')
        console.log("Booking....",booking)
        if(booking && booking.length>0){
            res.status(200).json({
                message:"Booking Found",
                flag:1,
                data:booking,
            })
        }else{
            res.status(404).json({
                message:'No Booking Found',
                flag:-1,
                data:[]            
            })
        }
    }catch(error){
        res.status(500).json({
            message:"No Booking Found",
            flag:-1,
            data:[]
        })
    }
}

const getDoneBookingByServiceProviderId = async (req,res) => {
    const serviceProviderId = req.params.id
    try{
        const doneStatus = await bookingSchema.find({serviceprovider:serviceProviderId,status:"Done"}).populate('address').populate('service').populate('serviceprovider').populate('user')
        if(doneStatus && doneStatus.length > 0 ){
            res.status(200).json({
                message:"Status Updated to done",
                flag:1,
                data:doneStatus
            })
        }else{
            res.status(404).json({
                message:" Status is not done",
                flag:-1,
                data:[]
            })
        }
    }catch(error){
        res.status(500).json({
            message:'Internal Server Error',
            flag:-1,
            data:[]
        })
    }
}




module.exports = {
    createBooking,
    getBookingById,
    getAllBooking,
    updateBookingById,
    updateBookingStatus,
    getBookingByUserId,
    getPendingBooking,
    getDoneBooking,
    getBookingByServiceProviderId,
    getDoneBookingByServiceProviderId,
    // updateStatusById
};