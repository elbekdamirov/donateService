import { Module } from "@nestjs/common";
import { WithdrawsService } from "./withdraws.service";
import { WithdrawsController } from "./withdraws.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Withdraw } from "./model/withdraw.model";

@Module({
  imports: [SequelizeModule.forFeature([Withdraw])],
  controllers: [WithdrawsController],
  providers: [WithdrawsService],
})
export class WithdrawsModule {}
