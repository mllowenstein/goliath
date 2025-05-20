import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventEmitterModule } from '@nestjs/event-emitter';
// import { AuthModule } from './auth/auth.module';
// import { EventsModule } from './events/events.module';
// import { NotificationsModule } from './notifications/notifications.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'michael',
      password: 'eoml',
      database: 'universe',
      autoLoadEntities: true,
      synchronize: true, // turn off in prod.
    }),
    EventEmitterModule.forRoot(),
  ],
  // AuthModule,
  // EventsModule,
  // NotificationsModule,
})
export class AppModule {}
