import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PricesComponent } from './components/prices/prices.component';
import { ProtectedPageComponent } from './components/protectedPage/protected-page.component';
import { CallbackComponent } from './components/callback/callback.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'prices', component: PricesComponent},
    {
        path: 'protectedPage',
        component: ProtectedPageComponent,
        canActivate: [AuthGuard]
    },
    {path: 'callback', component: CallbackComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
