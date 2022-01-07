import { Injectable } from '@nestjs/common';
import { TaskDTO } from './dto/task.dto';
import { ITask } from './task.interface';
import { v4 as uuid } from 'uuid'

@Injectable()
export class TaskService {
  tasks: ITask[] = [];

  create(taskDTO: TaskDTO) {
    const task = {
      id: uuid(),
      ...taskDTO,
    };
    this.tasks.push(task);
    return task;
  }

  findAll(): ITask[] {
    return this.tasks;
  }

  findOne(id: string): ITask {
    return this.tasks.find((t) => t.id === id);
  }

  update(id: string, taskDTO: TaskDTO): ITask {
    const newTask = { id, ...taskDTO };
    this.tasks = this.tasks.map((t) => (t.id === id ? newTask : t));
    return newTask;

  }

  delete(id: string): string {
    this.tasks = this.tasks.filter((t) => (t.id !== id));
    return 'Tarea eliminada';
  }
}
