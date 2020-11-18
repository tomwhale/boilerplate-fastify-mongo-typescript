import {Document} from 'mongoose';

export interface User extends Document {
  _id: string;
  userId: string;
  givenName: string | undefined;
  familyName: string | undefined;
  phoneNumber: string | undefined;
}
