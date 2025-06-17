import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { SocialModule } from "./social/social.module";
import { CategoriesModule } from './categories/categories.module';
import { CourierModule } from './courier/courier.module';
import { AdminsModule } from './admins/admins.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
    }),

    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.PG_HOST,
      port: Number(process.env.PG_PORT),
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DB,
      models: [],
      autoLoadModels: true,
      logging: false,
      sync: { alter: true },
    }),

    SocialModule,

    CategoriesModule,

    CourierModule,

    AdminsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
