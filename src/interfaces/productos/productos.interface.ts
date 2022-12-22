import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Productos>;

@Schema()
export class Productos {
  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true })
  descripcion: string;

  @Prop({ required: true })
  stock: string;

  @Prop({ required: true })
  precio: number;

  @Prop({ required: true })
  codigo: string;
}

export const ProductSchema = SchemaFactory.createForClass(Productos);
