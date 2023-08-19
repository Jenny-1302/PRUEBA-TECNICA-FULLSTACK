import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { TareaService } from 'src/app/services/tarea.service';

@Component({
  selector: 'app-crear-tarea',
  templateUrl: './crear-tarea.component.html',
  styleUrls: ['./crear-tarea.component.css']
})
export class CrearTareaComponent {

  tareaForm: FormGroup;
  title = 'Agregar tarea';
  id: string | null;



  constructor(private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _tareaService: TareaService,
    private aRoute: ActivatedRoute) {
    this.tareaForm = this.fb.group({

      tarea: ['', Validators.required],
      descripcion: ['', Validators.required],
      status: ['Pendiente', Validators.required] // Default value is "Pendiente"
    });
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  onSwitchChange(event: any) {
    const newValue = event.target.checked ? 'Completada' : 'Pendiente';
    this.tareaForm.get('status')?.setValue(newValue);
  }

  ngOnInit(): void {
    this.isEdit();
  }

  agregarTarea() {
    console.log(this.tareaForm);
    console.log(this.tareaForm.get('tarea')?.value);

    const TAREA: Producto = {
      element: this.tareaForm.get('tarea')?.value,
      descripcion: this.tareaForm.get('descripcion')?.value,
      status: this.tareaForm.get('status')?.value
    }

    if (this.id !== null) {
      // Editar tarea
      this._tareaService.editTarea(this.id, TAREA).subscribe(data => {
        this.toastr.info('La tarea fue actualizada con éxito', 'Tarea actualizada');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.tareaForm.reset();
      });
    } else {
      console.log(TAREA);
      this._tareaService.saveTarea(TAREA).subscribe(data => {
        this.toastr.success('La tarea fue registrada con éxito', 'Tarea agregada');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.tareaForm.reset();
      });
    }




  }

  isEdit() {

    if (this.id !== null) {
      this.title = 'Editar tarea';
      this._tareaService.getOneTarea(this.id).subscribe(data => {
        this.tareaForm.setValue({
          tarea: data.element,
          descripcion: data.descripcion,
          status: data.status
        })
      })
    }

  }

}
