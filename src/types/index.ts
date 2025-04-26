export type ProductFamily = 'ER' | 'HSK';
export type Application = 'Wood' | 'Stone' | 'Aluminum' | 'Composites';
export type ToolHolder = 'ER20' | 'ER25' | 'ER32' | 'ER40' | 'HSK-E50' | 'HSK-F63' | 'HSK-A63';
export type ProductLine = 'Standard' | 'Premium';

export interface Product {
  id: string;
  name: string;
  family: ProductFamily;
  line: ProductLine;
  power: number; // in kilowatts
  minSpeed: number; // in RPM
  maxSpeed: number; // in RPM
  torque: number; // in Newton meters
  toolHolder: ToolHolder;
  applications: Application[];
  description: string;
  features: string[];
  technicalSpecs: {
    runout: string;
    bearingType: string;
    coolingSystem: string;
    lubricationType: string;
    motorType: string;
    insulationClass: string;
    protectionClass: string;
    axialStiffness: string;
    radialStiffness: string;
    weight: number; // in kg
    dimensions: {
      length: number; // in mm
      diameter: number; // in mm
    };
  };
  imageUrl: string;
}

export interface FilterOptions {
  family: ProductFamily | 'All';
  line: ProductLine | 'All';
  minPower: number | null;
  maxPower: number | null;
  minSpeed: number | null;
  maxSpeed: number | null;
  minTorque: number | null;
  maxTorque: number | null;
  toolHolder: ToolHolder | 'All';
  application: Application | 'All';
}

export interface QuoteFormData {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  productId: string;
  quantity: number;
  application: string;
  message: string;
}