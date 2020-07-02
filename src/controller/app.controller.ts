import { Controller, Get } from "@nestjs/common";
import { AppService } from "../service/app.service";

@Controller("/boom-boom-box/api")
export class SessionController {
  constructor(private appService: AppService) {}

  @Get("/start")
  public async start(): Promise<void> {
    return await this.appService.beginSequence();
  }
}
