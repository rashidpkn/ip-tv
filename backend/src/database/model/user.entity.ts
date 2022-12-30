import { Table, Column, Model,Default } from 'sequelize-typescript';

@Table
export class user extends Model {
  @Column
  fname: string;

  @Column
  lname:string

  @Column
  phone : string

  @Column
  address : string

  @Column
  emirates: string

  @Column
  packages : string

  @Column
  email : string

  @Column
  password : string

  @Default('user')
  @Column
  role: string
  
}