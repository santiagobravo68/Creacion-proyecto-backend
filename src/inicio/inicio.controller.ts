import { Controller, Get } from '@nestjs/common';
 
@Controller('inicio')
export class InicioController {
  @Get('bienvenida')
  obtenerBienvenida() {
    return {
      mensaje: '¡Bienvenido al sistema de gestión!',
      sistema: 'Gestión API GET',
      version: '1.0.0',
    };
  }
}
