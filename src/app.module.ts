import { Module } from '@nestjs/common';
import { requireClassesSync } from './common/loader';

@Module({
  imports: [],
  controllers: requireClassesSync(__dirname, 'controller'),
  providers: [...requireClassesSync(__dirname, 'service')],
})
export class AppModule {}
