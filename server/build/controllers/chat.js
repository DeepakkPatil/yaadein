import User from '../models/user.js';
import Message from '../models/message.js';

export const sendMessage = async (req, res) => {
  const { fromUserId, toUserId } = req.params;
  const { content } = req.body;

  try {
    // Create new message document
    const message = await Message.create({ fromUserId, toUserId, content });

    // Update sender and receiver user documents
    await User.updateMany({ _id: { $in: [fromUserId, toUserId] } }, { $push: { messages: message._id } });

    res.status(201).json(message);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong.' });
  }
};