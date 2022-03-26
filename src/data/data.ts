export type Task = { id?: string | number; title?: string; description?: string };
export type ChapterI = { id?: string | number; title?: string; description?: string; tasks: Task[] };
//@Todo перейти на провайдер
export const tasks: Task[] = [
  { id: 1, title: 'Критериальная задачи о назначениях произвольной размерности', description: '' },
  { id: 2, title: 'критериальная задачи о назначениях произвольной размерности', description: '' },
  {
    id: 3,
    title: 'Многокритериальной задачи в условиях определенности на примере реальной проблемы выбора',
    description: '',
  },
];
export const chapters: ChapterI[] = [{ id: 1, title: 'Раздел 1', tasks: tasks }];

export const defaultWorkerValue = 10;

export const defaultWorkValue = 10;

export const dataGeneration = (columnsCount: number, rowCount: number) => {};
