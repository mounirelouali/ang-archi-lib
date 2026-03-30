import { HttpInterceptorFn } from '@angular/common/http';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const clonedRequest = req.clone({
    setHeaders: {
      Authorization: 'Bearer MOCK_TOKEN_123'
    }
  });

  return next(clonedRequest);
};
