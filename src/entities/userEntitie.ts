import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Contact } from './contact.entities';


@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string;

  @Column({unique: true})
  email: string;
  

  @Column()
  password: string;

  @Column()
  phones: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  registrationDate: Date;
  @ManyToOne(() => Contact, (contact) => contact.user)
  contacts: Contact[];

}
