import { Entity,Column,PrimaryColumn } from "typeorm";

@Entity("user")
class Usuario{
  @PrimaryColumn()
  id:string;

  @Column()
  name:string

  @Column()
  email:string
}

export{Usuario}