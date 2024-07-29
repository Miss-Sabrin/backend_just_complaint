// Assuming this is in ComplaintsControl.js

import ComplaintCateg from "../models/CompCategoryData.js";

export const CompliantsUser = async (req, res) => {
    try {
      const { description, category, status,stdId } = req.body;

      // Validate required fields
    if (!description) {
      return res.status(400).json({ message: 'description fields are required' });
    }

      const newComplaint = new ComplaintCateg({
        description,
        category,
        status,
        stdId
      });

      await newComplaint.save();

      res.status(201).json(newComplaint);
    } catch (error) {
      console.error('Error saving complaint:', error); // Log error details
      res.status(500).json({ message: 'Internal Server Error', details: error.message });
    }
  };



  export const getComplaintsByCategory = async (req, res) => {
    try {
        const { category } = req.params;
        const complaints = await ComplaintCateg.find({ category: new RegExp('^' + category + '$', 'i') }).sort({ createdAt: -1 }); // Case-insensitive search
        res.json(complaints);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const updateStatus = async(req, res) => {
  try {
    const { id} = req.params;
    const { status } = req.body;
    const updateData = await ComplaintCateg.findByIdAndUpdate(id, {status}, {new: true});
    if(!updateData){
       res.status(404).json({message:"Status not found"})
    }
    res.status(200).json(updateData);  
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


// Get Student Complaints
export const getStudentComplaints = async (req, res) => {
  try {
    const { stdId } = req.params;
    const complaints = await ComplaintCateg.find({ stdId });
    res.status(200).json(complaints);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//delete student info data
export const deleteStudentdata = async(req, res) => {
  try {
    const { id } = req.params;
    const complaint = await ComplaintCateg.findByIdAndDelete(id);

    if (!complaint) {
      return res.status(404).json({ message: 'Complaint not found' });
    }

    res.status(200).json({ message: 'Complaint deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting complaint', error });
  }
}

















