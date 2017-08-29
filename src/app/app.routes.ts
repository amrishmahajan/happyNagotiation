import { LoginComponent } from "./features/login.component";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./features/home/home.component";
import { UserSetupComponent } from "./features/user/user-setup.component";

const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {
                path: 'usersetup',
                component: UserSetupComponent,
                outlet: 'layout'
            }]
    },
    { path: '**', redirectTo: 'login', pathMatch: 'full' }
];
export let AppRouterModule = RouterModule.forRoot(appRoutes, { useHash: false });