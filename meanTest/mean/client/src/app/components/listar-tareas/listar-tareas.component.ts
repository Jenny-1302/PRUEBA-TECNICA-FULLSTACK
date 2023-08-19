import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { TareaService } from 'src/app/services/tarea.service';


@Component({
  selector: 'app-listar-tareas',
  templateUrl: './listar-tareas.component.html',
  styleUrls: ['./listar-tareas.component.css']
})
export class ListarTareasComponent {
  listTareas: Producto[] = [];
  selectedFilter: string = 'all';

  constructor(private _tareaService: TareaService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerTareas();
  }

  obtenerTareas() {
    this._tareaService.getTareas().subscribe(data => {
      this.listTareas = data;
  
      // Aplica el filtro
      if (this.selectedFilter === 'pendientes') {
        this.listTareas = this.listTareas.filter(tarea => tarea.status === 'Pendiente');
      } else if (this.selectedFilter === 'completadas') {
        this.listTareas = this.listTareas.filter(tarea => tarea.status === 'Completada');
      }
    }, error => {
      console.log(error);
    });
  }

  deleteTarea(id: any) {
    this._tareaService.deleteTarea(id).subscribe(data => {
      this.toastr.error('La tarea fue eliminada con exito', 'Tarea Eliminada');
      this.obtenerTareas();

    }, error => {
      console.log(error);
    })
  }




}
