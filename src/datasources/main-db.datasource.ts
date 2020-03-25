import {
  inject,
  lifeCycleObserver,
  LifeCycleObserver,
  ValueOrPromise,
} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './main-db.datasource.config.json';

@lifeCycleObserver('datasource')
export class MainDbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'main_db';

  constructor(
    @inject('datasources.config.main_db', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }

  /**
   * Start the dataSource when application is started
   */
  start(): ValueOrPromise<void> {
    // Add your logic here to be invoked when the application is started
  }

  /**
   * Disconnect the dataSource when application is stopped. This allows the
   * application to be shut down gracefully.
   */
  stop(): ValueOrPromise<void> {
    return super.disconnect();
  }
}
