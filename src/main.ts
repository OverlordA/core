import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const http_server_port = process.env.HTTP_SERVER_PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(http_server_port || 3000);
}
const startServerMessage = `servers started at port: ${http_server_port}`;

bootstrap().then(() => {
  // todo need to use outside logger to provide ability write logs in file not only console.
  console.log(startServerMessage);
});
