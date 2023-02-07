import { Component } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  constructor(private todoService: TodoService) {}

  dataSource: Todo[] = [];
  displayedColumns: string[] = ['checked', 'title', 'description', 'actions'];

  globalcheckbox = false;

  toggleCheckBoxes() {
    if (this.globalcheckbox) {
      this.globalcheckbox = false;
    } else {
      this.globalcheckbox = true;
    }
  }

  ngOnInit(): void {
    this.todoService.GetTodos().subscribe((res: any) => {
      this.dataSource = res?.data as Todo[];
    });
  }

  CreateTodo(body: any) {
    if (body.valid) {
      this.todoService
        .CreateTodo({
          title: body.value.title,
          description: body.value.description,
          completed: false,
        })
        .subscribe((res: any) => {
          this.dataSource = [...this.dataSource, res?.data as Todo];
        });
    }
  }

  UpdateTodoById(id: any, todo: any) {
    this.todoService.UpdateTodoById(id, todo).subscribe((res: any) => {
      this.dataSource = this.dataSource.map((item: Todo) => {
        if (item.id === id) {
          return res?.data as Todo;
        } else {
          return item;
        }
      });
    });
  }

  DeleteTodoById(id: any) {
    this.todoService.DeleteTodoById(id).subscribe(() => {
      this.dataSource = this.dataSource.filter((item: Todo) => item.id !== id);
    });
  }
}
