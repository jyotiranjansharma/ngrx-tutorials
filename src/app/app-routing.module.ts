import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './parent/parent.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ModelDrivenComponent } from './model-driven/model-driven.component';
import { AngularlifecycleComponent } from './angularlifecycle/angularlifecycle.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'counter',
        loadChildren: () => import('./counter/counter.module').then(m => m.CounterModule)
    },
    {
        path: 'posts',
        loadChildren: () => import('./posts/posts.module').then(p => p.PostsModule)
    },
    {
        path: 'customers',
        loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
    },
    {
        path: 'parent',
        component: ParentComponent
    },
    {
        path: 'template',
        component: TemplateDrivenComponent
    },
    {
        path: 'model',
        component: ModelDrivenComponent
    },
    {
        path: 'lifecycle',
        component: AngularlifecycleComponent
    },
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

