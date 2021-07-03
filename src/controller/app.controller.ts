import { Controller, Get, Param } from "@nestjs/common";

import { PinService } from "../service/pin.service";

@Controller("/boom-boom-box/api")
export class AppController {
  constructor(private pin: PinService) {}

  @Get("/fire/:id")
  public async fire(@Param("id") id: number): Promise<any> {
    return await this.pin.fire(id);
  }
}
