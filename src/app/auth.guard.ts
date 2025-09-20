import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { environment } from '../environments/environment';

export const authGuard: CanActivateFn = (route, state) => {

const auth = inject(AuthService);
const router = inject(Router);

if (environment.bypassAuthGuard) {
    return true;
}
  
if (auth.isLoggedIn) {
    return true;
} else {
    router.navigate(['/login']);
    return false;
}
};
