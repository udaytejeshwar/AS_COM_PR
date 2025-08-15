import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'ES-9000 ER32',
    family: 'M',
    toolHolderTypeCategory: 'ER',
    line: 'Standard',
    power: 9.0,
    minSpeed: 6000,
    maxSpeed: 24000,
    nominalSpeed: 24000,
    torque: 6.8,
    current: 2.0,
    voltage: '220/380',  
    toolHolder: 'ER32',
    applications: ['Wood', 'Aluminum'],
    description: 'High-performance ER32 electro spindle designed for precision woodworking and aluminum machining. Features advanced cooling system and premium bearing technology for extended service life.',
    features: [
      'Precision balanced rotor',
      'Ceramic hybrid bearings',
      'Water cooling system',
      'Manual tool change compatibility',
      'Low vibration design'
    ],
    technicalSpecs: {
      runout: '< 0.002 mm',
      bearingType: 'Ceramic Hybrid Angular Contact',
      coolingSystem: 'Liquid Cooling',
      lubricationType: 'Grease Lubrication',
      motorType: 'Asynchronous 3-Phase',
      insulationClass: 'Class F',
      protectionClass: 'IP65',
      axialStiffness: '180 N/μm',
      radialStiffness: '220 N/μm',
      weight: 12.5,
      dimensions: {
        length: 380,
        diameter: 120
      }
    },
    imageUrl: 'https://images.pexels.com/photos/2526105/pexels-photo-2526105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    additionalImageUrls: [
      'https://images.pexels.com/photos/3846517/pexels-photo-3846517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  {
    id: '2',
    name: 'ES-12000 ER40',
    family: 'Q',
    toolHolderTypeCategory: 'ER',
    line: 'Premium',
    power: 12.0,
    minSpeed: 5000,
    maxSpeed: 22000,
    nominalSpeed: 24000,
    torque: 8.5,
    current: 2.0,
    voltage: '220/380', 
    toolHolder: 'ER40',
    applications: ['Wood', 'Stone', 'Aluminum'],
    description: 'Premium ER40 electro spindle offering exceptional versatility across wood, stone, and aluminum applications. Engineered for high material removal rates while maintaining superior surface finish quality.',
    features: [
      'High-capacity ER40 collet system',
      'Liquid cooling with enhanced thermal efficiency',
      'Heavy-duty bearings for increased radial loads',
      'Integrated temperature monitoring',
      'Balanced for high-speed operation'
    ],
    technicalSpecs: {
      runout: '< 0.003 mm',
      bearingType: 'High-Precision Ceramic Hybrid',
      coolingSystem: 'Dual Circuit Liquid Cooling',
      lubricationType: 'Oil-Air Lubrication',
      motorType: 'Asynchronous 3-Phase',
      insulationClass: 'Class H',
      protectionClass: 'IP66',
      axialStiffness: '220 N/μm',
      radialStiffness: '280 N/μm',
      weight: 15.8,
      dimensions: {
        length: 420,
        diameter: 150
      }
    },
    imageUrl: 'https://images.pexels.com/photos/3822927/pexels-photo-3822927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    additionalImageUrls: [
      'https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/210158/pexels-photo-210158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/5975507/pexels-photo-5975507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  {
    id: '3',
    name: 'ES-7500 HSK-F63',
    family: 'M',
    toolHolderTypeCategory: 'HSK',
    line: 'Standard',
    power: 7.5,
    minSpeed: 8000,
    maxSpeed: 28000,
    nominalSpeed: 24000,
    torque: 5.4,
    current: 2.0,
    voltage: '220/380',
    toolHolder: 'HSK-F63',
    applications: ['Wood', 'Composites'],
    description: 'Compact HSK-F63 electro spindle with exceptional speed capabilities, ideal for intricate woodworking and composite machining where precision and surface finish are paramount.',
    features: [
      'HSK-F63 tool interface for superior runout control',
      'Compact design for tight installation spaces',
      'Liquid cooling system',
      'Low thermal expansion characteristics',
      'High-frequency compatible electronics'
    ],
    technicalSpecs: {
      runout: '< 0.002 mm',
      bearingType: 'Angular Contact Ceramic',
      coolingSystem: 'Liquid Cooling',
      lubricationType: 'Grease Lubrication',
      motorType: 'Synchronous 3-Phase',
      insulationClass: 'Class F',
      protectionClass: 'IP65',
      axialStiffness: '160 N/μm',
      radialStiffness: '190 N/μm',
      weight: 10.2,
      dimensions: {
        length: 340,
        diameter: 110
      }
    },
    imageUrl: 'https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    additionalImageUrls: [
      'https://images.pexels.com/photos/2526105/pexels-photo-2526105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3822927/pexels-photo-3822927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  {
    id: '4',
    name: 'ES-15000 HSK-E50',
    family: 'Q',
    toolHolderTypeCategory: 'HSK',
    line: 'Premium',
    power: 15.0,
    minSpeed: 4000,
    maxSpeed: 20000,
    nominalSpeed: 24000,
    torque: 12.2,
    current: 2.0,
    voltage: '220/380',
    toolHolder: 'HSK-E50',
    applications: ['Stone', 'Aluminum', 'Composites'],
    description: 'Heavy-duty HSK-E50 electro spindle developed for demanding applications in stone, aluminum, and composite materials. Features advanced vibration dampening and superior power delivery.',
    features: [
      'HSK-E50 interface for high precision and rigidity',
      'Robust construction for demanding applications',
      'Advanced cooling system for continuous operation',
      'Vector control drive compatibility',
      'Enhanced sealing against dust and moisture'
    ],
    technicalSpecs: {
      runout: '< 0.001 mm',
      bearingType: 'Ultra-Precision Ceramic Hybrid',
      coolingSystem: 'Advanced Dual Circuit',
      lubricationType: 'Oil-Air Lubrication',
      motorType: 'Synchronous 3-Phase',
      insulationClass: 'Class H',
      protectionClass: 'IP67',
      axialStiffness: '250 N/μm',
      radialStiffness: '310 N/μm',
      weight: 18.5,
      dimensions: {
        length: 460,
        diameter: 160
      }
    },
    imageUrl: 'https://images.pexels.com/photos/210158/pexels-photo-210158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    additionalImageUrls: [
      'https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3846517/pexels-photo-3846517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  {
    id: '5',
    name: 'ES-5500 ER25',
    family: 'M',
    toolHolderTypeCategory: 'ER',
    line: 'Standard',
    power: 5.5,
    minSpeed: 10000,
    maxSpeed: 30000,
    nominalSpeed: 24000,
    torque: 3.8,
    current: 2.0,
    voltage: '220/380',
    toolHolder: 'ER25',
    applications: ['Wood', 'Aluminum', 'Composites'],
    description: 'Compact and lightweight ER25 electro spindle offering exceptional speed for precision machining of wood, aluminum, and composite materials where detailed finishing is essential.',
    features: [
      'High-speed ER25 collet system',
      'Compact footprint for tight spaces',
      'Low inertia rotor design',
      'Efficient cooling for extended operation',
      'Optimized for high-speed finishing operations'
    ],
    technicalSpecs: {
      runout: '< 0.002 mm',
      bearingType: 'Ceramic Hybrid Angular Contact',
      coolingSystem: 'Liquid Cooling',
      lubricationType: 'Grease Lubrication',
      motorType: 'Asynchronous 3-Phase',
      insulationClass: 'Class F',
      protectionClass: 'IP65',
      axialStiffness: '140 N/μm',
      radialStiffness: '170 N/μm',
      weight: 8.5,
      dimensions: {
        length: 320,
        diameter: 100
      }
    },
    imageUrl: 'https://images.pexels.com/photos/5975507/pexels-photo-5975507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    additionalImageUrls: [
      'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  {
    id: '6',
    name: 'ES-18000 HSK-A63',
    family: 'Q',
    toolHolderTypeCategory: 'HSK',
    line: 'Premium',
    power: 18.0,
    minSpeed: 3000,
    maxSpeed: 18000,
    nominalSpeed: 24000,
    torque: 15.0,
    current: 2.0,
    voltage: '220/380',
    toolHolder: 'HSK-A63',
    applications: ['Stone', 'Aluminum'],
    description: 'Industrial-grade HSK-A63 electro spindle designed for the most demanding stone and aluminum applications. Exceptional power and torque characteristics for heavy material removal.',
    features: [
      'HSK-A63 tool interface for maximum rigidity',
      'Heavy-duty bearings for extreme radial loads',
      'Dual cooling system for optimal thermal management',
      'Integrated vibration dampening technology',
      'Enhanced sealing against harsh environments'
    ],
    technicalSpecs: {
      runout: '< 0.001 mm',
      bearingType: 'Ultra-Precision Ceramic Hybrid',
      coolingSystem: 'Advanced Dual Circuit',
      lubricationType: 'Oil-Air Lubrication',
      motorType: 'Synchronous 3-Phase',
      insulationClass: 'Class H',
      protectionClass: 'IP67',
      axialStiffness: '280 N/μm',
      radialStiffness: '350 N/μm',
      weight: 22.5,
      dimensions: {
        length: 490,
        diameter: 180
      }
    },
    imageUrl: 'https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    additionalImageUrls: [
      'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/2526105/pexels-photo-2526105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  {
    id: '7',
    name: 'ATC-9000 ISO30',
    family: 'A',
    toolHolderTypeCategory: 'ISO',
    line: 'Standard',
    power: 9.0,
    minSpeed: 5000,
    maxSpeed: 24000,
    nominalSpeed: 18000,
    torque: 7.2,
    current: 2.0,
    voltage: '220/380',
    toolHolder: 'ISO30',
    applications: ['Wood', 'Aluminum', 'Composites'],
    description: 'Advanced automatic tool change spindle with ISO30 interface, designed for high-productivity manufacturing environments. Features rapid tool change capabilities and exceptional precision for automated machining operations.',
    features: [
      'Automatic tool change system',
      'ISO30 tool interface for universal compatibility',
      'Pneumatic tool clamping mechanism',
      'Integrated tool presence detection',
      'High-speed operation with minimal vibration'
    ],
    technicalSpecs: {
      runout: '< 0.003 mm',
      bearingType: 'High-Precision Angular Contact',
      coolingSystem: 'Liquid Cooling',
      lubricationType: 'Grease Lubrication',
      motorType: 'Asynchronous 3-Phase',
      insulationClass: 'Class F',
      protectionClass: 'IP65',
      axialStiffness: '200 N/μm',
      radialStiffness: '240 N/μm',
      weight: 16.5,
      dimensions: {
        length: 420,
        diameter: 140
      }
    },
    imageUrl: 'https://images.pexels.com/photos/3846517/pexels-photo-3846517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    additionalImageUrls: [
      'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  {
    id: '8',
    name: 'ATC-12000 ISO40',
    family: 'A',
    toolHolderTypeCategory: 'ISO',
    line: 'Premium',
    power: 12.0,
    minSpeed: 4000,
    maxSpeed: 20000,
    nominalSpeed: 16000,
    torque: 9.8,
    current: 2.0,
    voltage: '220/380',
    toolHolder: 'ISO40',
    applications: ['Stone', 'Aluminum', 'Composites'],
    description: 'Premium automatic tool change spindle with ISO40 interface for heavy-duty applications. Engineered for continuous operation in demanding production environments with superior tool holding force.',
    features: [
      'Heavy-duty ISO40 tool interface',
      'Advanced pneumatic tool clamping',
      'Integrated coolant through spindle',
      'Tool breakage detection system',
      'Enhanced vibration dampening'
    ],
    technicalSpecs: {
      runout: '< 0.002 mm',
      bearingType: 'Ultra-Precision Ceramic Hybrid',
      coolingSystem: 'Advanced Dual Circuit',
      lubricationType: 'Oil-Air Lubrication',
      motorType: 'Synchronous 3-Phase',
      insulationClass: 'Class H',
      protectionClass: 'IP67',
      axialStiffness: '260 N/μm',
      radialStiffness: '300 N/μm',
      weight: 22.0,
      dimensions: {
        length: 480,
        diameter: 160
      }
    },
    imageUrl: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    additionalImageUrls: [
      'https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/210158/pexels-photo-210158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/5975507/pexels-photo-5975507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFilterLimits = () => {
  return products.reduce((limits, product) => {
    return {
      minPower: Math.min(limits.minPower, product.power),
      maxPower: Math.max(limits.maxPower, product.power),
      nominalSpeed: Math.min(limits.nominalSpeed, product.nominalSpeed),
      maxSpeed: Math.max(limits.maxSpeed, product.maxSpeed),
      minTorque: Math.min(limits.minTorque, product.torque),
      maxTorque: Math.max(limits.maxTorque, product.torque),
    };
  }, {
    minPower: Infinity,
    maxPower: -Infinity,
    nominalSpeed: Infinity,
    maxSpeed: -Infinity,
    minTorque: Infinity,
    maxTorque: -Infinity,
  });
};
