import { CanActivate, ExecutionContext, Injectable, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';
import * as request from 'supertest';

@Injectable()
export class AuthGuard implements CanActivate {
  private readonly logger = new Logger(AuthGuard.name)
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    // console.log(request);
    this.logger.log(AuthGuard.name);
    return true; //false: raise exception 403
  }
}
