export type ProductFamily = 'M' | 'Q' | 'A' | 'B';
export type ToolHolderTypeCategory = 'ER' | 'HSK' | 'ISO';
export type Application = 'Wood' | 'Stone' | 'Aluminum' | 'Composites' | 'Plastic' | 'Glass';
export type ToolHolder = 'ER20' | 'ER25' | 'ER32' | 'ER40' | 'HSK-E50' | 'HSK-F63' | 'HSK-A63' | 'ISO30' | 'ISO40';
export type ProductLine = 'Standard' | 'Premium';
export type AccessoryCategory = 'Cooling' | 'Tool Holders' | 'VFD' | 'Collets' | 'Tools';

export interface Product {
  id: string;
  name: string;
  family: ProductFamily;
  toolHolderTypeCategory: ToolHolderTypeCategory;
  line: ProductLine;
  power: number; // in kilowatts (S1 - continuous duty)
  powerS6?: number; // in kilowatts (S6 - intermittent duty at 40%)
  minSpeed: number; // in RPM
  maxSpeed: number; // in RPM
  nominalSpeed: number; // in RPM
  torque: number; // in Newton meters (S1 - continuous duty)
  torqueS6?: number; // in Newton meters (S6 - intermittent duty at 40%)
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
  additionalImageUrls?: string[];
  deliveryTime: string;
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
  toolHolderTypeCategory: ToolHolderTypeCategory | 'All';
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
