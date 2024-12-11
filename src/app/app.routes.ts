import { Routes } from '@angular/router';
import { sessionGuard } from '@core/guards/session.guard';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import(`./modules/auth/auth.module`).then(a => a.AuthModule),
    },
    {
        path: '',
        component: HomePageComponent,
        loadChildren: () => import(`./modules/home/home.module`).then(m => m.HomeModule),
        canActivate: [sessionGuard],
    }
];
