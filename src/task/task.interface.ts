export interface ITaskDTO {
  description: string;
  idDone: boolean;
}

export interface ITask {
  id?: string;
  description: string;
  isDone: boolean;
}