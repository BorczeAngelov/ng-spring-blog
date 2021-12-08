import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'ngx-webstorage';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpClientInterceptor implements HttpInterceptor {

    constructor(private localStorage: LocalStorageService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token = this.localStorage.retrieve("authenticationToken");
        console.log('jwt token ' + token);

        if (token) {
            //token is valid. Set Authorization header with "Bearer" token

            const cloned = req.clone({
                headers: req.headers.set("Authorization",
                    "Bearer " + token)
            });

            return next.handle(cloned); //forward modified request to server
        }
        else {
            //token is invalid. Forward the request as it is.
            return next.handle(req);
        }
    }
}