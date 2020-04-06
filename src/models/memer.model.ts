import {Entity, model, property} from '@loopback/repository';

export class Memer extends Entity {
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
    required: true,
  })
  email: string;

  @property({
    type: 'date',
    required: true,
  })
  creationTime: Date;

  @property({
    type: 'date',
    required: true,
  })
  publishedTime: Date;

  @property({
    type: 'number',
    required: true,
  })
  memeStatus: number;

  @property({
    type: 'string',
    required: true,
  })
  memeUrl: string;
  @property({
    type: 'string',
    required: true,
  })
  likes: string;

  constructor(data?: Partial<Memer>) {
    super(data);
  }
}
