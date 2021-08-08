import {BaseEntity, Column, Entity, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {TaskEntity} from "./TaskEntity";

@Entity()
export class LabelEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  timestampCreated!: string;

  @Column()
  timestampUpdated!: string;

  @Column()
  taskid!: string;

  @ManyToMany(() => TaskEntity)
  tasks!:TaskEntity[];
}
