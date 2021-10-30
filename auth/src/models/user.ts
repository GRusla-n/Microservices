import mongoose from 'mongoose';
import { Password } from '../services/password';

interface UserAttrs {
    email: string,
    password: string;
}

const userSchema = new mongoose.Schema<UserAttrs>({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
}, {
  toJSON: {
    transform(doc, ret) {
      /* eslint-disable */
      ret.id = ret._id;
      delete ret.password;
      delete ret.__v;
      delete ret._id;
      /* eslint-enable */
    },
  },
});

userSchema.pre('save', async function (done) {
  if (this.isModified('password')) {
    const hashed = await Password.toHash(this.get('password'));
    this.set('password', hashed);
  }
  done();
});

const User = mongoose.model<UserAttrs>('User', userSchema);

export { User };
