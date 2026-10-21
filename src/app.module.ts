import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { StatsService } from "./stats.service";

@Module({ controllers: [AppController], providers: [StatsService] })
export class AppModule {}
