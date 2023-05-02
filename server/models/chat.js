import mongoose from 'mongoose';

const messageSchema = mongoose.Schema({
  fromUserId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  toUserId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  readAt: { type: Date },
  deletedAt: { type: Date }
});

export default mongoose.model('Message', messageSchema);
