import mongoose from 'mongoose';

const complaintCategorySchema = new mongoose.Schema({
    description: String,
    category: String,
    status: {
      type: String,
      default: "Pending",
      },
    stdId: {
      type: String,
      required: true,
    },
}, {
  timestamps: true,
});

const ComplaintCateg = mongoose.model('ComplaintCategory', complaintCategorySchema);


export default ComplaintCateg;