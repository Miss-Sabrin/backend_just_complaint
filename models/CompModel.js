import mongoose from "mongoose";

const CompSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    // validate: {
    //   validator: function (v) {
    //     return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
    //   },
    //   message: (props) => `${props.value} is not a valid email address!`,
    // },
  },
  password: {
    type: String,
    required: true,
    // minlength: 8,
    // maxlength: 100,
  },
  role: {
    type: String,
    enum: ['fcadmin','acadmin', 'eqadmin','user', 'admin'],
    default: 'user'
  }
});

const CompliantModel = mongoose.model("Compliants", CompSchema);

export default CompliantModel;
