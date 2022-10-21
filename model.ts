export interface Car {
  make: string;
  model: string;
  year: string;
  engine_displacement: number; // CC?
  top_speed: number; //mph?
  horse_power: number;
  horse_power_rpm: number;
  torque: number;
  torque_rpm: number;
  image_link: string;

  created_at: Date;
  updated_at: Date;
}
