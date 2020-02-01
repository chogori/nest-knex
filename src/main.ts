import { NestFactory } from "@nestjs/core";
import * as config from "config";

import { AppModule } from "./app.module";
import { AllExceptionsFilter } from "./common/filters/all-exception.filter";
import { TransformInterceptor } from "./common/interceptors/transform.interceptor";

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true
  });

  app.setGlobalPrefix("api");
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalFilters(new AllExceptionsFilter());

  await app.listen(config.get("app.port"));

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
