export type ProductFamily = 'M' | 'Q' | 'A' | 'B';
export type ToolHolderTypeCategory = 'ER' | 'HSK' | 'ISO';
export type Application = 'Wood' | 'Stone' | 'Aluminum' | 'Composites' | 'Plastic' | 'Glass';
export type ToolHolder = 'ER20' | 'ER25' | 'ER32' | 'ER40' | 'HSK-E50' | 'HSK-F63' | 'HSK-A63' | 'ISO30' | 'ISO40';
export type ProductLine = 'Standard' | 'Premium';
export type AccessoryCategory = 'Cooling' | 'Tool Holders' | 'VFD' | 'Collets' | 'Tools';

export type ProductImageType = 'spindle' | 'drawing' | 'graph';

export interface ProductImageAsset {
  type: ProductImageType;
  url: string;
  alt: string;
  width: number;
  height: number;
}

export interface ProductImageSet {
  spindle: ProductImageAsset;
  drawing: ProductImageAsset;
  graph: ProductImageAsset;
}

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
  voltage: string; // Voltage (e.g., '220V', '380V', '220V, 380V')
  toolHolder: ToolHolder;
  applications: Application[];
  description: string;
  features: string[];
  technicalSpecs: {
    dutyCycle: string;
    bearingType: string;
    coolingSystem: string;
    lubricationType: string;
    motorType: string;
    insulationClass: string;
    protectionClass: string;
    weight: number; // in kg
    bodyDiameter: {
      width: number; // in mm
      height: number; // in mm
      length: number; // in mm
    };
  };
  imageUrl: string;
  additionalImageUrls?: string[];
  images?: ProductImageSet;
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
