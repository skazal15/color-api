import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ColorModule } from './color/color.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'host.docker.internal',
    port: 5455,
    username: 'root',
    password: 'root',
    database: 'color',
    synchronize: true, // Caution: Set to false in production.
    logging: true, // Enable logging for debugging. //set false on production
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
  }),ColorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
