import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    indexes: {
      uniqueEmail: {
        keys: {
          email: 1,
        },
        options: {
          unique: true,
        },
      },
    },
    hidden: ['password', 'emailVerified'],
  },
})
export class User extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id: string;

  @property({
    type: 'string',
    required: false,
  })
  name: string;

  @property({
    type: 'string',
    required: false,
  })
  username: string;

  @property({
    type: 'string',
    required: false,
  })
  mobileNumber: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'string',
    required: true,
  })
  gender: string;

  @property({
    type: 'boolean',
    required: true,
    default: false,
  })
  emailVerified: boolean;

  @property({
    type: 'date',
    required: true,
  })
  joinedOn: Date;

  @property({
    type: 'date',
    required: true,
  })
  lastLoginDate: Date;

  @property({
    type: 'date',
    required: true,
  })
  currentLoginDate: Date;

  @property({
    type: 'date',
    required: true,
  })
  lastActivityDate: Date;

  constructor(data?: Partial<User>) {
    super(data);
  }
}
