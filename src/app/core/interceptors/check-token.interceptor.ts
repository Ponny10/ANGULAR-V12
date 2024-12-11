import { HttpInterceptorFn } from '@angular/common/http';

export const checkTokenInterceptor: HttpInterceptorFn = (req, next) => {
  try {
    const token = JSON.stringify(localStorage.getItem('tokenSpotify'));
    let newRequest = req;

    newRequest = req.clone({
      setHeaders: {
        authorization: `Bearer ${token}`
      }
    });

    return next(newRequest);
  } catch (error) {
    return next(req);
  }
};
