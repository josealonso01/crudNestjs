import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CrearProductosDto } from 'src/dto/crear-producto.dto';
import { UpdateProductoDto } from 'src/dto/update-producto.dto';
import {
  ProductDocument,
  Productos,
} from 'src/interfaces/productos/productos.interface';

@Injectable()
export class ProductosService {
  constructor(
    @InjectModel(Productos.name) private productosModel: Model<ProductDocument>,
  ) {}

  create(crearProductosDto: CrearProductosDto) {
    return this.productosModel.create(crearProductosDto);
  }
  findAll() {
    return this.productosModel.find().lean();
  }

  findOne(id: ObjectId) {
    const product = this.productosModel.findOne({ _id: id });
    return product;
  }

  update(id: ObjectId, updateProductoDto: UpdateProductoDto) {
    const modi = this.productosModel.updateOne(
      { _id: id },
      { $set: updateProductoDto },
    );
    return modi;
  }

  remove(id: ObjectId) {
    const result = this.productosModel.deleteOne({ _id: id });
    return result;
  }
}
