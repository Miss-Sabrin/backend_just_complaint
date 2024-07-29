import Response from "../models/ResponseModel.js";

// POST a response to a complaint
export const addResponse = async (req, res) => {
    const {inboxId, text ,responderId} = req.body;

    // if (!mongoose.Types.ObjectId.isValid(complaintId) || !mongoose.Types.ObjectId.isValid(responderId)) {
    //     return res.status(400).send('Invalid IDs.');
    // }

    const newResponse = new Response({
        responderId,
        inboxId,
        text
    });

    try {
        await newResponse.save();
        res.status(201).json(newResponse);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


// GET all responses for a specific complaint
export const getResponsesByComplaint = async (req, res) => {
    const { UsertId } = req.params;
 

    try {
        const responses = await Response.find({ responderId: UsertId }).populate('responderId');

        res.status(200).json(responses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//delete respomse in the inbox page
export const deleteInboxdata = async(req, res) => {
    try {
      const { id } = req.params;
      const Inbox = await Response.findByIdAndDelete(id);
  
      if (!Inbox) {
        return res.status(404).json({ message: 'Response not found' });
      }
  
      res.status(200).json({ message: 'Response deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting Response', error });
    }
  }
  