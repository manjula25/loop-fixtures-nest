import { Controller, Get, Header } from "@nestjs/common";
import { StatsService } from "./stats.service";
import { renderPage } from "./page";

const VALUES = [1, 2, 3, 4];

@Controller()
export class AppController {
  constructor(private readonly stats: StatsService) {}

  @Get()
  @Header("Content-Type", "text/html")
  page(): string {
    return renderPage(this.stats, VALUES);
  }

  @Get("api/summarize")
  summarize(): { count: number; sum: number } {
    return this.stats.summarize(VALUES);
  }

  @Get("api/average")
  average(): { average: number } {
    return { average: this.stats.average(VALUES) };
  }
}
