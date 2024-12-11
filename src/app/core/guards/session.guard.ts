import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const sessionGuard: CanActivateFn = (route, state) => {
  return checkToken();
};

const checkToken = () => {
  try {
    const tokenSpotify = localStorage.getItem('tokenSpotify');
    console.log('Token existe = ', tokenSpotify);
    // TODO: Inyectar el servicio para navegar
    const router = inject(Router);

    // TODO: Verificar si tokenSpotify existe o no es null
    if (tokenSpotify === null) {
      console.log('Token es null = ', tokenSpotify);
      
      router.navigate(['auth']);
      return false;
    }
    console.log('Devería de navegar a home');
    
    return true;
  } catch (error) {
    console.log('Error = ', error);
    return false;
  }
}

