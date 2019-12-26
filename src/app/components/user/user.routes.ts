import { Routes } from '@angular/router';
import { EditUserComponent } from './edit-user.component';
import { NewUserComponent } from './new-user.component';
import { UserDetailComponent } from './user-detail.component';

export const USER_ROUTES: Routes = [
    { path: 'new', component: NewUserComponent },
    { path: 'edit', component: EditUserComponent },
    { path: 'detail', component: UserDetailComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'new' }
];
