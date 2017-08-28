import { LoginComponent } from "./features/login.component";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./features/home/home.component";
import { AboutComponent } from "./features/home/info/aboutus.component";

const appRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent            
    }
];
export let AppRouterModule = RouterModule.forRoot(appRoutes, { useHash: false });