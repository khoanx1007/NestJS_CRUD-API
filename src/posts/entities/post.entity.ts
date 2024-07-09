import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'posts' })
export class Post {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 255 })
  title: string;
  @Column({ type: 'text' })
  content: string;
  @Column()
  createdAt: Date;
  @ManyToOne(() => User, (user) => user.posts)
  user: User;
}
