import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    bookingAvailable: { type: Number, required: true },
    specialty: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Doctor = mongoose.model("appointmentdoctors", doctorSchema);

export default Doctor;
