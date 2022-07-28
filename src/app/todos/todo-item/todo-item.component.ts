import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo! : Todo;
  @ViewChild('inputEdit') txtInputEditRef!: ElementRef;
  chkCompletado:FormControl = new FormControl();
  txtInputEdit: FormControl = new FormControl();
  editando: boolean = false;

  constructor() { 
    
  }

  ngOnInit(): void {

    this.formSetting(); 
    
  }

  formSetting() {

    this.chkCompletado.setValue(this.todo.completado);
    this.txtInputEdit.setValue(this.todo.texto);
    this.txtInputEdit.validator =Validators.required;
    
  }

  editar(){
    this.editando = true

    setTimeout(() => {
      this.txtInputEditRef.nativeElement.select();
    }, 1);
  }

  terminarEdicion(){
    this.editando=false;
  }
}
