export type PlantGrade = '새싹' | '나무';

export type Unit = 'mm' | 'M';

export interface User {
  name: string;
  grade: PlantGrade;
  growingStatus: number;
  unit: Unit;
}
