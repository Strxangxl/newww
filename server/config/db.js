import mongoose from "mongoose";

const connect = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })

        console.log(`MongoDB connection successfull ${conn.connection.host}!!!`)
    } catch (error) {
       console.log(`Error: ${error.message}`) 
       process.exit(1)
    }
}

export default connect;