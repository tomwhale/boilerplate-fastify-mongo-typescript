import {Document} from 'mongoose';

export interface User extends Document {
  _id: string;
  userId: string;
  givenName: string | undefined;
  familyName: string | undefined;
  defaultVisibility?: string;
  phoneNumber: string | undefined;
}
