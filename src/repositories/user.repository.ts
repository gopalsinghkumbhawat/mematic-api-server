import {DefaultCrudRepository} from '@loopback/repository';
import {User} from '../models';
import {MainDbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id
> {
  constructor(
    @inject('datasources.main_db') dataSource: MainDbDataSource,
  ) {
    super(User, dataSource);
  }
}
