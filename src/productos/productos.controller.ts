import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ConfigService } from '@nestjs/config';
import { ObjectId } from 'mongoose';
import { CrearProductosDto } from 'src/dto/crear-producto.dto';
import { UpdateProductoDto } from 'src/dto/update-producto.dto';

@Controller('productos')
export class ProductosController {
  constructor(
    private readonly productosService: ProductosService,
    private config: ConfigService,
  ) {}

  @Post()
  create(@Body() crearProductosDto: CrearProductosDto) {
    return this.productosService.create(crearProductosDto);
  }

  @Get()
  findAll() {
    console.log(this.config.get<string>('MODE'));
    return this.productosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: ObjectId) {
    return this.productosService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: ObjectId,
    @Body() updateProductoDto: UpdateProductoDto,
  ) {
    return this.productosService.update(id, updateProductoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: ObjectId) {
    return this.productosService.remove(id);
  }
}
