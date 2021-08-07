import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class TrackingEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  description!: string;

  @Column()
  starttime!: string;

  @Column()
  endtime!: string;

  @Column()
  timestampCreated!: string;

  @Column()
  timestampUpdated!: string;

  @Column()
  timeSpent!: string;

/*  @ManyToOne(() => TaskEntity, task => task.trackings)
  task!: TaskEntity;*/
  @Column()
  taskid!:string;
}
