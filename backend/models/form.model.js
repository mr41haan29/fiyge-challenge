import mongoose, { Model } from "mongoose";
const { Schema } = mongoose;

const formSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    form_name: {
      type: String,
      required: true,
    },
    form_data: {
      type: Object,
      required: true,
    },
  },
  {
    timestamps: true, //createdAt, updatedAt
  }
);

const Form = mongoose.model("Form", formSchema);

export default Form;
