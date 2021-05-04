import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GeneradorService } from '../services/generador.service';

@Component({
    selector: 'app-generador',
    templateUrl: '../templates/generador.component.html',
    styleUrls: ['../styles/generador.component.scss']
})

export class GeneradorComponent  {

    actividades = [
        { codigo: '1', descripcion: 'DESARROLO' },
        { codigo: '2', descripcion: 'PRUEBAS E2E' }
    ];

    tareas = [
        { codigo: '1', descripcion: 'DESARROLO', codigoActividad: '1' },
        { codigo: '2', descripcion: 'PRUEBAS E2E', codigoActividad: '2' }
    ];

    tipos = ['CERRADA', 'ABIERTA'];

    componentForm: FormGroup;
    colsSize = 2;
    params = null;
    @ViewChild('formTemplate', { read: false, static: true }) formTemplate: any;

    constructor(
        private formBuiler: FormBuilder,

    ) {
        this.onResize();
        this.initForm();


    }


    /**
     * Inicializa el formulario con los atributos del form
     * @param data datos a completar en el formulario (opcional, solamente para casos de edicion)
     */
    initForm(data = null) {
        this.componentForm = this.formBuiler.group({
            actividad: [data ? data.descripcion : '', Validators.required],
            tarea: [data ? data.tarea : '', Validators.required],
            tipo: [data ? data.tipo : '', Validators.required],
            descripcion: [data ? data.descripcion : '', Validators.required],
        });
    }

    /**
     * pone los campos del grid en vertical (col = 1, una sola columna)
     * para dispositivos móviles.
     */
    onResize() {
        this.colsSize = window.innerWidth <= 400 ? 1 : 2;
    }

    getErrorMessage(controlName: string) {
        return this.componentForm.controls[controlName].hasError('required') ? 'EL CAMPO NO PUEDE ESTAR VACIO' : '';
    }

    generar(){

    }

    limpiar(){
        
    }

}
