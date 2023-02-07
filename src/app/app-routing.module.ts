import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: TodoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./components/auth/auth.module').then((m) => m.AuthModule),
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: NotFoundComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
