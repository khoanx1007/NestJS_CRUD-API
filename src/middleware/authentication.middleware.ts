import { Injectable, Logger, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";
import { RequestService } from "src/request.service";

@Injectable()
export class AuthenticationMidlleware implements NestMiddleware{
  private readonly logger = new Logger(AuthenticationMidlleware.name)

  constructor(private readonly requestService: RequestService){}

  use(req: any, res: any, next: NextFunction) {
    //Logging
    this.logger.log(AuthenticationMidlleware.name);
    //Authenticate
    const userID = '1';
    console.log(`Request...`);
    this.requestService.setUserId(userID);
    next();
  }
}
