import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarTareasComponent } from './components/listar-tareas/listar-tareas.component';
import { CrearTareaComponent } from './components/crear-tarea/crear-tarea.component';

const routes: Routes = [
  {path: '', component: ListarTareasComponent},
  {path: 'crear-tarea', component: CrearTareaComponent},
  {path : 'editar-tarea/:id', component: CrearTareaComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
