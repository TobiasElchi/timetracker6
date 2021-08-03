import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Trackings extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  description!: string;

  @Column()
  starttime!: number;

  @Column()
  endtime!: number;

  @Column()
  timestampCreated!: string;

  @Column()
  timestampUpdated!: string;
}
