import mongoose from "mongoose";

const careerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["BCBA", "RBT", "Therapist", "BACB"],
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Career", careerSchema);