import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'profiles' })
export class Profile {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;
  @Column()
  phoneNumber: string;
  @Column()
  address: string;
  @Column()
  dob: string;
}
