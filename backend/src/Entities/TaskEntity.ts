import {BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {TrackingType} from "../Schema/TypeDefs/types";
import {TrackingEntity} from "./TrackingEntity";

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
}
