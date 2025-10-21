import { Accessory } from '../types';
import { getAccessoryImagePath } from '../config/imagePaths';

export const accessories: Accessory[] = [
  {
    id: 'fan-dc-1',
    name: 'High-Performance DC Cooling Fan',
    category: 'Cooling',
    description: 'Industrial-grade DC cooling fan designed for optimal spindle temperature control. Features variable speed control and quiet operation.',
    features: [
      'Variable speed control (0-3000 RPM)',
      'Low noise operation',
      'Long service life',
      'Easy installation',
      'IP54 protection rating'
    ],
    specifications: {
      'Voltage': '24V DC',
      'Power Consumption': '45W',
      'Air Flow': '220 CFM',
      'Noise Level': '< 45 dB',
      'Dimensions': '120 x 120 x 38 mm'
    },
    imageUrl: getAccessoryImagePath('fan-dc-1', 'High-Performance DC Cooling Fan', 'main')
  },
  {
    id: 'er32-set',
    name: 'ER32 Collet Set',
    category: 'Tool Holders',
    description: 'Premium quality ER32 collet set covering the most common tool diameters. Manufactured to high precision standards for excellent concentricity.',
    features: [
      'Complete set of 13 collets',
      'Size range: 2-20mm',
      'High precision grade',
      'Hardened and ground construction',
      'Supplied in fitted case'
    ],
    specifications: {
      'Accuracy': '0.008mm',
      'Material': 'Hardened Steel',
      'Surface Treatment': 'Black Oxide',
      'Clamping Range': '2-20mm',
      'Runout': '≤ 0.005mm'
    },
    imageUrl: getAccessoryImagePath('er32-set', 'ER32 Collet Set', 'main'),
    compatibleWith: ['ER']
  },
  {
    id: 'vfd-7500',
    name: 'VFD-7500 Drive Controller',
    category: 'VFD',
    description: 'Advanced variable frequency drive designed specifically for high-speed spindle control. Features precise speed control and comprehensive protection functions.',
    features: [
      'Vector control capability',
      'Built-in PID controller',
      'Comprehensive protection features',
      'RS485 communication interface',
      'User-friendly programming'
    ],
    specifications: {
      'Power Range': '7.5kW',
      'Input Voltage': '380-480V',
      'Output Frequency': '0-400Hz',
      'Control Mode': 'V/F & Vector Control',
      'Protection Class': 'IP20'
    },
    imageUrl: getAccessoryImagePath('vfd-7500', 'VFD-7500 Drive Controller', 'main')
  },
  {
    id: 'er-wrench-set',
    name: 'Professional ER Wrench Set',
    category: 'Tools',
    description: 'Professional-grade wrench set for ER collet nuts. Includes both hook and pin spanners for secure collet nut tightening.',
    features: [
      'Hardened steel construction',
      'Ergonomic grip design',
      'Complete set for all ER sizes',
      'Anti-slip coating',
      'Fitted storage case'
    ],
    specifications: {
      'Material': 'Chrome Vanadium Steel',
      'Finish': 'Chrome Plated',
      'Sizes Included': 'ER11-ER40',
      'Handle Type': 'Dual Component',
      'Storage': 'Blow Molded Case'
    },
    imageUrl: getAccessoryImagePath('er-wrench-set', 'Professional ER Wrench Set', 'main'),
    compatibleWith: ['ER']
  }
];

export const getAccessoryById = (id: string): Accessory | undefined => {
  return accessories.find(accessory => accessory.id === id);
};
