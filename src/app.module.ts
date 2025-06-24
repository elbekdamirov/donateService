import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { SocialModule } from "./social/social.module";
import { CategoriesModule } from "./categories/categories.module";
import { CourierModule } from "./courier/courier.module";
import { AdminsModule } from "./admins/admins.module";
import { UsersModule } from "./users/users.module";
import { Social } from "./social/models/social.model";
import { Categories } from "./categories/models/categories.model";
import { Courier } from "./courier/models/courier.model";
import { Admins } from "./admins/models/admins.model";
import { Users } from "./users/models/user.model";
import { SocialUserModule } from "./social-user/social-user.module";
import { SocialUser } from "./social-user/models/social-user.model";
import { DonationsModule } from "./donations/donations.module";
import { Donations } from "./donations/models/donation.model";
import { NotificationsModule } from "./notifications/notifications.module";
import { RolesModule } from "./roles/roles.module";
import { AdminRole } from "./admins/models/admin-role.model";
import { Role } from "./roles/models/role.model";
import { ProductsModule } from "./products/products.module";
import { Product } from "./products/models/product.model";
import { ProductImagesModule } from "./product-images/product-images.module";
import { ProductImage } from "./product-images/models/product-image.model";
import { CreatorStatisticsModule } from "./creator-statistics/creator-statistics.module";
import { CreatorStatistic } from "./creator-statistics/models/creator-statistic.model";
import { SavedItemsModule } from "./saved-items/saved-items.module";
import { SavedItem } from "./saved-items/models/saved-item.model";
import { ProductOrdersModule } from "./product-orders/product-orders.module";
import { ProductOrder } from "./product-orders/models/product-order.model";
import { PaymentsModule } from "./payments/payments.module";
import { Payment } from "./payments/models/payment.model";

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
      models: [
        Social,
        Categories,
        Courier,
        Admins,
        Users,
        SocialUser,
        Donations,
        Role,
        AdminRole,
        Product,
        ProductImage,
        CreatorStatistic,
        SavedItem,
        ProductOrder,
        Payment,
      ],
      autoLoadModels: true,
      logging: false,
      sync: { alter: true },
    }),

    SocialModule,

    CategoriesModule,

    CourierModule,

    AdminsModule,

    UsersModule,

    SocialUserModule,

    DonationsModule,

    NotificationsModule,

    RolesModule,

    ProductsModule,

    ProductImagesModule,

    CreatorStatisticsModule,

    SavedItemsModule,

    ProductOrdersModule,

    PaymentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
