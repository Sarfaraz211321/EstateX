import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const dbConnect = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);

        console.log(
            `Database connected successfully: ${conn.connection.host}`
        );
    } catch (error) {
        console.error("Database connection failed!");
        console.error("Error details:", error.message);
        process.exit(1);
    }
};

const properties = [
  {
    title: "Luxury house",
    price: "1cr",
    area: "2000",
    description: "A luxury villa",
    location: "lko Gomti Nagar",
    pic: "/images/lhouse.jpeg", // updated path
  },
  {
    title: "Luxury Living",
    price: "2cr",
    area: "2000",
    description: "Modern Apartment",
    location: "AMETHI",
    pic: "/images/apartment.jpg",
  },
  {
    title: "Elite Properties",
    price: "1.5cr",
    area: "1500",
    description: "Luxury Penthouse",
    location: "AMETHI",
    pic: "/images/villa3.jpg",
  },
  {
    title: "my house",
    price: "3500000",
    area: "1500srqt",
    description: "This is luxury villa",
    location: "AMETHI",
    pic: "/images/room3.jpg",
  },
];

