import {BaseEntity, Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {TrackingEntity} from "./TrackingEntity";
import {LabelEntity} from "./LabelEntity";
import {JoinTable} from "typeorm";

@Entity()
export class TaskEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @Column()
  timestampCreated!: string;

  @Column()
  timestampUpdated!: string;

/*  @OneToMany(() => TrackingEntity, tracking => tracking.task)
  trackings!: TrackingEntity[];*/

  @ManyToMany(() => LabelEntity)
  @JoinTable()
  labels!: LabelEntity[]
}
