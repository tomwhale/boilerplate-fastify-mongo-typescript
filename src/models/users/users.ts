import mongoose, { Schema } from 'mongoose'
import { User } from './types'

const User: Schema = new mongoose.Schema(
    {
      userId: {
      type: String,
      required: true,
      },
      givenName: String,
      familyName: String,
      phoneNumber: String,
      defaultVisibility: {
            type: String,
            default: 'FRIENDS'
      },
      remindedDate: Date,
      remindedCount: {
        type: Number,
        default: 0,
      }
    },
    {
      timestamps: true
    }
)

User.index({ userId: -1 })
User.index({ phoneNumber: -1 }, { unique: true})
User.index({ givenName: -1 })
User.index({remindedCount: -1});
User.index({remindedDate: -1, remindedCount: -1});


export default mongoose.model<User>('User',User)
