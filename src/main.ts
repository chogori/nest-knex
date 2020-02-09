import { NestFactory } from "@nestjs/core";
import * as config from "config";
import * as cluster from "cluster";
import * as os from "os";
import * as EventEmitter from "events";

import { AppModule } from "./app.module";
import { AllExceptionsFilter } from "./shared/filters/all-exception.filter";
import { TransformInterceptor } from "./shared/interceptors/transform.interceptor";

const clusterEmitter = new EventEmitter();
const numCPUs = os.cpus().length - 1;
const minWorkers = numCPUs;
const workers = {};

declare const module: any;

const createWorker = () => {
  const worker = cluster.fork();
  workers[worker.id] = worker;
};

clusterEmitter.on("worker", () => {
  createWorker();
});

const createWorkers = () => {
  console.log(workers);
  while (Object.keys(workers).length < minWorkers) {
    clusterEmitter.emit("worker");
  }
};

const workerInitialize = () => {
  const worketBootstrap = async function bootstrap() {
    const app = await NestFactory.createMicroservice(AppModule);
    const id = cluster.worker.id;
    const timeOut = 1000 * 15 * id;

    console.log(`Worker ${id}: START ${process.pid} for ${timeOut} seconds`);

    setTimeout(() => {
      console.log(`Worker ${id}: DONE ${process.pid} after ${timeOut} seconds`);
      process.exit();
    }, timeOut);
    // await app.listen(process.env.PORT || 3000);
  };
  worketBootstrap();
};

const masterInitialize = () => {
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
    cluster.settings;
    // app.clusterEmitter = clusterEmitter
  }

  bootstrap();
  createWorkers();
};

cluster.isWorker ? workerInitialize() : masterInitialize();
