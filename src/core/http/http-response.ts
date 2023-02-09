import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { responseHttp } from 'src/utils/message';
import { Request } from 'express';

export interface Response<T> {
  statusCode: number;
  message: string;
  data: T;
}

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  intercept(ctx: ExecutionContext, next: CallHandler): Observable<any> {
    const { path } = ctx.switchToHttp().getRequest<Request>();
    const { statusCode } = ctx.switchToHttp().getResponse();

    return next.handle().pipe(
      map((data) => {
        return responseHttp(statusCode, data.message, path, data);
      }),
    );
  }
}
