import { Routes } from '@angular/router';
import { FormControlDemoComponent } from './form-control-demo/form-control-demo.component';
import { FormGroupDemoComponent } from './form-group-demo/form-group-demo.component';
import { FormArrayDemoComponent } from './form-array-demo/form-array-demo.component';
import { CustomControlDemoComponent } from './custom-control-demo/custom-control-demo.component';
import { HomeComponent } from './home/home.component';
import { AsyncPipeDemoComponent } from './async-pipe-demo/async-pipe-demo.component'; // New import
import { TemplateDrivenFormsDemoComponent } from './template-driven-forms-demo/template-driven-forms-demo.component'; // New import


export const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'form-control', component: FormControlDemoComponent },
  { path: 'form-group', component: FormGroupDemoComponent },
  { path: 'form-array', component: FormArrayDemoComponent },
  { path: 'custom-control', component: CustomControlDemoComponent },
  { path: 'async-pipe', component: AsyncPipeDemoComponent }, // New route
  { path: 'template-driven', component: TemplateDrivenFormsDemoComponent },  // New route
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirect unknown routes to Home
];
