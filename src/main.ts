// HTTP server for the fixture. `npm start` builds and listens on PORT (default 8767).
//   GET /              -> the dashboard page for VALUES   (UI surface)
//   GET /api/summarize -> summarize(VALUES)               (API surface)
//   GET /api/average   -> { average: average(VALUES) }    (API surface)
import "reflect-metadata";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule, { logger: false });
  const port = Number(process.env.PORT ?? 8767);
  await app.listen(port, "0.0.0.0");
  console.log(`serving on http://0.0.0.0:${port}`);
}

void bootstrap();
