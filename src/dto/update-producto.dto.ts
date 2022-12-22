import { PartialType } from '@nestjs/mapped-types';
import { CrearProductosDto } from './crear-producto.dto';

export class UpdateProductoDto extends PartialType(CrearProductosDto) {}
