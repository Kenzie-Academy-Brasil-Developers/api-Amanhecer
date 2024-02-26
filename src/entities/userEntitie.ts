// User.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Phone } from '../entities/phoneEntities';
import { Email } from '../entities/emailEntities';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Phone, phone => phone.user)
  phones: Phone[];

  @OneToMany(() => Email, email => email.user)
  emails: Email[];
}
