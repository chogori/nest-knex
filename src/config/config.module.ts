import { Module, Global } from '@nestjs/common';
import { ConfigManagerModule } from '@nestjsplus/config';
import { ConfigService } from './config.service';
import { resolve } from 'path';


@Global()
@Module({
  imports: [
    ConfigManagerModule.register({
      useFile: resolve(__dirname, './', 'development.env'),
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
