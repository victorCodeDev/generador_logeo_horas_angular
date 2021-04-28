import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneradorComponent } from './generador/components/generador.component';

const routes: Routes = [
    { path: 'generador-logeo', component: GeneradorComponent },
    { path: '', redirectTo: '/generador-logeo', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
