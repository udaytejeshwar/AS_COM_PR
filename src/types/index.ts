export type ProductFamily = 'ER' | 'HSK' | 'ATC' | 'Blade';
export type Application = 'Wood' | 'Stone' | 'Aluminum' | 'Composites';
export type ToolHolder = 'ER20' | 'ER25' | 'ER32' | 'ER40' | 'HSK-E50' | 'HSK-F63' | 'HSK-A63' | 'ISO30' | 'ISO40' | 'Blade-Mount';
export type ProductLine = 'Standard' | 'Premium';
export type AccessoryCategory = 'Cooling' | 'Tool Holders' | 'VFD' | 'Collets' | 'Tools';

export interface Product {
  id: string;
  name: string;
  family: ProductFamily;
  line: ProductLine;
  power: number; // in kilowatts
  minSpeed: number; // in RPM
  maxSpeed: number; // in RPM
  nominalSpeed: number; // in RPM
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

export interface Accessory {
  id: string;
  name: string;
  category: AccessoryCategory;
  description: string;
  features: string[];
  specifications: Record<string, string>;
  imageUrl: string;
  compatibleWith?: ProductFamily[];
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
  productName: string;
}
