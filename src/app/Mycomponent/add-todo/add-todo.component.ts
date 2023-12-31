import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit{
  todos: any;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title!: string;
  desc!: string;
@Output() todoAdd: EventEmitter<Todo>=new EventEmitter();





onSubmit()
{
  const todo={
    sno:8,
    title:this.title,
    desc:this.desc,
    active:true
  }
  this.todoAdd.emit(todo);
}
}