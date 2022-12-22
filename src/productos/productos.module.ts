import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Productos,
  ProductSchema,
} from 'src/interfaces/productos/productos.interface';
import { ProductosController } from './productos.controller';
import { ProductosService } from './productos.service';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.URL),
    MongooseModule.forFeature([
      {
        name: Productos.name,
        schema: ProductSchema,
      },
    ]),
    ConfigModule,
  ],
  controllers: [ProductosController],
  providers: [ProductosService],
})
export class ProductosModule {}
