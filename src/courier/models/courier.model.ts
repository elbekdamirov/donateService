import { Column, DataType, Model, Table } from "sequelize-typescript";

export enum VehicleType {
  FOOT = "foot",
  BIKE = "bike",
  CAR = "car",
  MOTORCYCLE = "motorcycle",
}

interface ICourierCreationAttr {
  full_name: string;
  phone_number: string;
  vehicle_type: VehicleType;
  vehicle_plate_number: string;
  is_active: boolean;
}

@Table({ tableName: "courier", timestamps: true })
export class Courier extends Model<Courier, ICourierCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  full_name: string;

  @Column({
    type: DataType.STRING(15),
    allowNull: false,
  })
  phone_number: string;

  @Column({
    type: DataType.ENUM(...Object.values(VehicleType)),
    allowNull: false,
  })
  vehicle_type: VehicleType;

  @Column({
    type: DataType.STRING(10),
    allowNull: false,
  })
  vehicle_plate_number: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  is_active: boolean;
}
