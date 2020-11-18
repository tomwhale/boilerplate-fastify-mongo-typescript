import users from './users';

import {Model, Document} from 'mongoose';

interface Models {
  [k: string]: Model<Document> | undefined;
}

const models: Models = {
  users,
};

export default models;
