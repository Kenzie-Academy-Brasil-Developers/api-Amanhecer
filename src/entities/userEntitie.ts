// User.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Phone } from '../entities/phoneEntities';
import { Email } from '../entities/emailEntities';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Phone, phone => phone.user)
  phones: Phone[];

  @Column({unique: true})
  username: string;

  @OneToMany(() => Email, email => email.user)
  emails: Email[];

}
