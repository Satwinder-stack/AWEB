import { Register } from './register/register';
import { Routes } from '@angular/router';
import { TemplateDemo } from './template-demo/template-demo';
import { ReactiveDemo } from './reactive-demo/reactive-demo';
import { CustomFormDemo } from './custom-form/custom-form';

export const routes: Routes = [
  { path: 'register', component: Register },
  { path: 'template', component: TemplateDemo },
  { path: 'reactive', component: ReactiveDemo },
  { path: 'custom-form', component: CustomFormDemo },
  { path: '', redirectTo: 'template', pathMatch: 'full' }
];
