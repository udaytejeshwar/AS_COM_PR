import { Product } from '../types';
import { getProductImagePath } from '../config/imagePaths';

export const products: Product[] = [
  {
    id: '1',
    name: 'AME0300-1001',
    family: 'M',
    toolHolderTypeCategory: 'ER',
    line: 'Standard',
    power: 6.0,
    // powerS6: 6.3,
    minSpeed: 12000,
    maxSpeed: 24000,
    nominalSpeed: 18000,
    torque: 3.18,
    // torqueS6: 4.8,
    voltage: '220V, 380V',
    toolHolder: 'ER32',
    applications: ['Wood', 'Aluminum', 'Composites'],
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
      protectionClass: 'IP54',
      weight: 13.5,
      bodyDiameter: {
        width: 380,
        height: 120
      }
    },
    imageUrl: getProductImagePath('1', 'AME0300-1001', 'main'),
    additionalImageUrls: [
      getProductImagePath('1', 'AME0300-1001', 1),
      getProductImagePath('1', 'AME0300-1001', 2),
      getProductImagePath('1', 'AME0300-1001', 3)
    ],
    deliveryTime: '2-3 weeks'
  },
  {
    id: '2',
    name: 'AME0300-1002',
    family: 'M',
    toolHolderTypeCategory: 'ER',
    line: 'Standard',
    power: 3.75,
    // powerS6: 8.4,
    minSpeed: 6000,
    maxSpeed: 18000,
    nominalSpeed: 12000,
    torque: 8.5,
    // torqueS6: 6.0,
    voltage: '220V, 380V',
    toolHolder: 'ER32',
    applications: ['Wood', 'Stone', 'Aluminum'],
    description: 'Premium ER32 electro spindle offering exceptional versatility across wood, stone, and aluminum applications. Engineered for high material removal rates while maintaining superior surface finish quality.',
    features: [
      'High-capacity ER32 collet system',
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
      weight: 15.8,
      bodyDiameter: {
        width: 420,
        height: 150
      }
    },
    imageUrl: getProductImagePath('2', 'AME0300-1002', 'main'),
    additionalImageUrls: [
      getProductImagePath('2', 'AME0300-1002', 1),
      getProductImagePath('2', 'AME0300-1002', 2),
      getProductImagePath('2', 'AME0300-1002', 3)
    ],
    deliveryTime: '3-4 weeks'
  },
  {
    id: '3',
    name: 'AME0300-1003',
    family: 'M',
    toolHolderTypeCategory: 'ER',
    line: 'Standard',
    power: 4.5,
    minSpeed: 12000,
    maxSpeed: 24000,
    nominalSpeed: 18000,
    torque: 2.4,
    voltage: '220V, 380V',
    toolHolder: 'ER32',
    applications: ['Wood', 'Composites'],
    description: 'Compact ER32 electro spindle with exceptional speed capabilities, ideal for intricate woodworking and composite machining where precision and surface finish are paramount.',
    features: [
      'ER32 tool interface for superior runout control',
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
      weight: 10.2,
      bodyDiameter: {
        width: 340,
        height: 110
      }
    },
    imageUrl: getProductImagePath('3', 'AME0300-1003', 'main'),
    additionalImageUrls: [
      getProductImagePath('3', 'AME0300-1003', 1),
      getProductImagePath('3', 'AME0300-1003', 2)
    ],
    deliveryTime: '2-3 weeks'
  },
  {
    id: '4',
    name: 'AME0300-1004',
    family: 'M',
    toolHolderTypeCategory: 'ER',
    line: 'Premium',
    power: 5.6,
    powerS6: 10.5,
    minSpeed: 6000,
    maxSpeed: 18000,
    nominalSpeed: 12000,
    torque: 2.9,
    torqueS6: 8.5,
    voltage: '220V, 380V',
    toolHolder: 'ER32',
    applications: ['Wood', 'Aluminum', 'Composites'],
    description: 'Heavy-duty HSK-E50 electro spindle developed for demanding applications in wood, aluminum, and composite materials. Features advanced vibration dampening and superior power delivery.',
    features: [
      'ER32 interface for high precision and rigidity',
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
      weight: 18.5,
      bodyDiameter: {
        width: 460,
        height: 160
      }
    },
    imageUrl: getProductImagePath('4', 'AME0300-1004', 'main'),
    additionalImageUrls: [
      getProductImagePath('4', 'AME0300-1004', 1),
      getProductImagePath('4', 'AME0300-1004', 2),
      getProductImagePath('4', 'AME0300-1004', 3)
    ],
    deliveryTime: '4-6 weeks'
  },
  {
    id: '5',
    name: 'AME0300-1005',
    family: 'M',
    toolHolderTypeCategory: 'ER',
    line: 'Standard',
    power: 4.5,
    minSpeed: 12000,
    maxSpeed: 18000,
    nominalSpeed: 18000,
    torque: 2.4,
    voltage: '220V, 380V',
    toolHolder: 'ER32',
    applications: ['Wood', 'Aluminum', 'Composites'],
    description: 'Compact and lightweight ER25 electro spindle offering exceptional speed for precision machining of wood, aluminum, and composite materials where detailed finishing is essential.',
    features: [
      'High-speed ER32 collet system',
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
      weight: 8.5,
      bodyDiameter: {
        width: 320,
        height: 100
      }
    },
    imageUrl: getProductImagePath('5', 'AME0300-1005', 'main'),
    additionalImageUrls: [
      getProductImagePath('5', 'AME0300-1005', 1),
      getProductImagePath('5', 'AME0300-1005', 2)
    ],
    deliveryTime: 'In stock'
  },
  {
    id: '6',
    name: 'AME0300-1006',
    family: 'M',
    toolHolderTypeCategory: 'ER',
    line: 'Premium',
    power: 2.2,
    minSpeed: 6000,
    maxSpeed: 12000,
    nominalSpeed: 6000,
    torque: 3.5,
    voltage: '220V, 380V',
    toolHolder: 'ER32',
    applications: ['Stone', 'Aluminum'],
    description: 'Industrial-grade ER32 electro spindle designed for the most demanding stone and aluminum applications. Exceptional power and torque characteristics for heavy material removal.',
    features: [
      'ER32 tool interface for maximum rigidity',
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
      weight: 22.5,
      bodyDiameter: {
        width: 490,
        height: 180
      }
    },
    imageUrl: getProductImagePath('6', 'AME0300-1006', 'main'),
    additionalImageUrls: [
      getProductImagePath('6', 'AME0300-1006', 1),
      getProductImagePath('6', 'AME0300-1006', 2)
    ],
    deliveryTime: '6-8 weeks'
  },
  {
    id: '7',
    name: 'AME0300-1007',
    family: 'M',
    toolHolderTypeCategory: 'ER',
    line: 'Standard',
    power: 3.7,
    minSpeed: 6000,
    maxSpeed: 18000,
    nominalSpeed: 12000,
    torque: 2.95,
    voltage: '220V, 380V',
    toolHolder: 'ER32',
    applications: ['Wood', 'Aluminum', 'Composites', 'Glass'],
    description: 'Advanced automatic tool change spindle with ER32 interface, designed for high-productivity manufacturing environments. Features rapid tool change capabilities and exceptional precision for automated machining operations.',
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
      weight: 16.5,
      bodyDiameter: {
        width: 420,
        height: 140
      }
    },
    imageUrl: getProductImagePath('7', 'AME0300-1007', 'main'),
    additionalImageUrls: [
      getProductImagePath('7', 'AME0300-1007', 1),
      getProductImagePath('7', 'AME0300-1007', 2)
    ],
    deliveryTime: '3-4 weeks'
  },
  {
    id: '8',
    name: 'AME0300-1008',
    family: 'M',
    toolHolderTypeCategory: 'ER',
    line: 'Premium',
    power: 3.3,
    minSpeed: 6000,
    maxSpeed: 18000,
    nominalSpeed: 18000,
    torque: 1.75,
    voltage: '220V, 380V',
    toolHolder: 'ER32',
    applications: ['Stone', 'Aluminum', 'Composites'],
    description: 'Premium automatic tool change spindle with ISO40 interface for heavy-duty applications. Engineered for continuous operation in demanding production environments with superior tool holding force.',
    features: [
      'Heavy-duty ER32 tool interface',
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
      weight: 22.0,
      bodyDiameter: {
        width: 480,
        height: 160
      }
    },
    imageUrl: getProductImagePath('8', 'AME0300-1008', 'main'),
    additionalImageUrls: [
      getProductImagePath('8', 'AME0300-1008', 1),
      getProductImagePath('8', 'AME0300-1008', 2),
      getProductImagePath('8', 'AME0300-1008', 3)
    ],
    deliveryTime: '4-5 weeks'
  },
  {
    id: '9',
    name: 'AME0300-1009',
    family: 'M',
    toolHolderTypeCategory: 'ER',
    line: 'Standard',
    power: 3.7,
    minSpeed: 6000,
    maxSpeed: 18000,
    nominalSpeed: 12000,
    torque: 2.95,
    voltage: '220V, 380V',
    toolHolder: 'ER32',
    applications: ['Wood', 'Composites', 'Plastic'],
    description: 'High-speed blade technology spindle designed for precision cutting and trimming operations. Features advanced blade mounting system and optimized cooling for continuous operation.',
    features: [
      'Specialized blade mounting interface',
      'High-speed cutting capability',
      'Precision blade alignment system',
      'Enhanced cooling for continuous operation',
      'Low vibration blade technology'
    ],
    technicalSpecs: {
      runout: '< 0.001 mm',
      bearingType: 'Ultra-Precision Ceramic',
      coolingSystem: 'Advanced Liquid Cooling',
      lubricationType: 'Oil-Air Lubrication',
      motorType: 'Synchronous 3-Phase',
      insulationClass: 'Class F',
      protectionClass: 'IP65',
      weight: 9.2,
      bodyDiameter: {
        width: 350,
        height: 105
      }
    },
    imageUrl: getProductImagePath('9', 'AME0300-1009', 'main'),
    additionalImageUrls: [
      getProductImagePath('9', 'AME0300-1009', 1),
      getProductImagePath('9', 'AME0300-1009', 2)
    ],
    deliveryTime: '2-3 weeks'
  },
  {
    id: '10',
    name: 'AME0300-1010',
    family: 'M',
    toolHolderTypeCategory: 'ER',
    line: 'Premium',
    power: 5.6,
    minSpeed: 6000,
    maxSpeed: 24000,
    nominalSpeed: 18000,
    torque: 2.97,
    voltage: '220V, 380V',
    toolHolder: 'ER32',
    applications: ['Wood', 'Aluminum', 'Composites'],
    description: 'Premium blade technology spindle with advanced cutting capabilities for demanding applications. Features intelligent blade monitoring and adaptive speed control.',
    features: [
      'Intelligent blade monitoring system',
      'Adaptive speed control technology',
      'Premium blade mounting interface',
      'Advanced vibration dampening',
      'Real-time performance optimization'
    ],
    technicalSpecs: {
      runout: '< 0.0008 mm',
      bearingType: 'Ultra-Precision Ceramic Hybrid',
      coolingSystem: 'Dual Circuit Advanced Cooling',
      lubricationType: 'Oil-Air Lubrication',
      motorType: 'Synchronous 3-Phase',
      insulationClass: 'Class H',
      protectionClass: 'IP67',
      weight: 13.5,
      bodyDiameter: {
        width: 390,
        height: 125
      }
    },
    imageUrl: getProductImagePath('10', 'AME0300-1010', 'main'),
    additionalImageUrls: [
      getProductImagePath('10', 'AME0300-1010', 1),
      getProductImagePath('10', 'AME0300-1010', 2)
    ],
    deliveryTime: '3-5 weeks'
  },
  {
    id: '11',
    name: 'AME0300-1011',
    family: 'M',
    toolHolderTypeCategory: 'ER',
    line: 'Premium',
    power: 2.2,
    minSpeed: 6000,
    maxSpeed: 18000,
    nominalSpeed: 12000,
    torque: 1.75,
    voltage: '220V, 380V',
    toolHolder: 'ER32',
    applications: ['Wood', 'Stone', 'Composites'],
    description: 'Industrial-grade blade technology spindle with HSK interface for heavy-duty cutting applications. Engineered for maximum precision and durability in demanding production environments.',
    features: [
      'ER32 precision interface',
      'Heavy-duty blade cutting capability',
      'Industrial-grade construction',
      'Advanced thermal management',
      'Continuous duty operation'
    ],
    technicalSpecs: {
      runout: '< 0.0005 mm',
      bearingType: 'Ultra-Precision Ceramic Hybrid',
      coolingSystem: 'Advanced Dual Circuit',
      lubricationType: 'Oil-Air Lubrication',
      motorType: 'Synchronous 3-Phase',
      insulationClass: 'Class H',
      protectionClass: 'IP67',
      weight: 16.8,
      bodyDiameter: {
        width: 440,
        height: 140
      }
    },
    imageUrl: getProductImagePath('11', 'AME0300-1011', 'main'),
    additionalImageUrls: [
      getProductImagePath('11', 'AME0300-1011', 1),
      getProductImagePath('11', 'AME0300-1011', 2)
    ],
    deliveryTime: '4-6 weeks'
  },
  {
    id: '12',
    name: 'AME0300-1012',
    family: 'M',
    toolHolderTypeCategory: 'ER',
    line: 'Premium',
    power: 5.6,
    minSpeed: 6000,
    maxSpeed: 24000,
    nominalSpeed: 18000,
    torque: 2.97,
    voltage: '220V, 380V',
    toolHolder: 'ER32',
    applications: ['Wood', 'Stone', 'Composites'],
    description: 'Industrial-grade blade technology spindle with HSK interface for heavy-duty cutting applications. Engineered for maximum precision and durability in demanding production environments.',
    features: [
      'ER32 precision interface',
      'Heavy-duty blade cutting capability',
      'Industrial-grade construction',
      'Advanced thermal management',
      'Continuous duty operation'
    ],
    technicalSpecs: {
      runout: '< 0.0005 mm',
      bearingType: 'Ultra-Precision Ceramic Hybrid',
      coolingSystem: 'Advanced Dual Circuit',
      lubricationType: 'Oil-Air Lubrication',
      motorType: 'Synchronous 3-Phase',
      insulationClass: 'Class H',
      protectionClass: 'IP67',
      weight: 16.8,
      bodyDiameter: {
        width: 440,
        height: 140
      }
    },
    imageUrl: getProductImagePath('12', 'AME0300-1012', 'main'),
    additionalImageUrls: [
      getProductImagePath('12', 'AME0300-1012', 1),
      getProductImagePath('12', 'AME0300-1012', 2)
    ],
    deliveryTime: '4-6 weeks'
  },
  {
    id: '13',
    name: 'AME0200-1001',
    family: 'M',
    toolHolderTypeCategory: 'ER',
    line: 'Premium',
    power: 2.2,
    minSpeed: 6000,
    maxSpeed: 24000,
    nominalSpeed: 18000,
    torque: 1.17,
    voltage: '220V, 380V',
    toolHolder: 'ER25',
    applications: ['Wood', 'Stone', 'Composites'],
    description: 'Industrial-grade blade technology spindle with HSK interface for heavy-duty cutting applications. Engineered for maximum precision and durability in demanding production environments.',
    features: [
      'ER25 precision interface',
      'Heavy-duty blade cutting capability',
      'Industrial-grade construction',
      'Advanced thermal management',
      'Continuous duty operation'
    ],
    technicalSpecs: {
      runout: '< 0.0005 mm',
      bearingType: 'Ultra-Precision Ceramic Hybrid',
      coolingSystem: 'Advanced Dual Circuit',
      lubricationType: 'Oil-Air Lubrication',
      motorType: 'Synchronous 3-Phase',
      insulationClass: 'Class H',
      protectionClass: 'IP67',
      weight: 16.8,
      bodyDiameter: {
        width: 440,
        height: 140
      }
    },
    imageUrl: getProductImagePath('13', 'AME0200-1001', 'main'),
    additionalImageUrls: [
      getProductImagePath('13', 'AME0200-1001', 1),
      getProductImagePath('13', 'AME0200-1001', 2)
    ],
    deliveryTime: '4-6 weeks'
  },
  {
    id: '14',
    name: 'AME0200-1002',
    family: 'M',
    toolHolderTypeCategory: 'ER',
    line: 'Premium',
    power: 2.7,
    minSpeed: 6000,
    maxSpeed: 18000,
    nominalSpeed: 18000,
    torque: 1.43,
    voltage: '220V, 380V',
    toolHolder: 'ER25',
    applications: ['Wood', 'Stone', 'Composites'],
    description: 'Industrial-grade blade technology spindle with HSK interface for heavy-duty cutting applications. Engineered for maximum precision and durability in demanding production environments.',
    features: [
      'ER25 precision interface',
      'Heavy-duty blade cutting capability',
      'Industrial-grade construction',
      'Advanced thermal management',
      'Continuous duty operation'
    ],
    technicalSpecs: {
      runout: '< 0.0005 mm',
      bearingType: 'Ultra-Precision Ceramic Hybrid',
      coolingSystem: 'Advanced Dual Circuit',
      lubricationType: 'Oil-Air Lubrication',
      motorType: 'Synchronous 3-Phase',
      insulationClass: 'Class H',
      protectionClass: 'IP67',
      weight: 16.8,
      bodyDiameter: {
        width: 440,
        height: 140
      }
    },
    imageUrl: getProductImagePath('14', 'AME0200-1002', 'main'),
    additionalImageUrls: [
      getProductImagePath('14', 'AME0200-1002', 1),
      getProductImagePath('14', 'AME0200-1002', 2)
    ],
    deliveryTime: '4-6 weeks'
  },
  {
    id: '15',
    name: 'AME0200-1003',
    family: 'M',
    toolHolderTypeCategory: 'ER',
    line: 'Premium',
    power: 3.3,
    minSpeed: 6000,
    maxSpeed: 24000,
    nominalSpeed: 18000,
    torque: 1.75,
    voltage: '220V, 380V',
    toolHolder: 'ER25',
    applications: ['Wood', 'Stone', 'Composites'],
    description: 'Industrial-grade blade technology spindle with HSK interface for heavy-duty cutting applications. Engineered for maximum precision and durability in demanding production environments.',
    features: [
      'ER25 precision interface',
      'Heavy-duty blade cutting capability',
      'Industrial-grade construction',
      'Advanced thermal management',
      'Continuous duty operation'
    ],
    technicalSpecs: {
      runout: '< 0.0005 mm',
      bearingType: 'Ultra-Precision Ceramic Hybrid',
      coolingSystem: 'Advanced Dual Circuit',
      lubricationType: 'Oil-Air Lubrication',
      motorType: 'Synchronous 3-Phase',
      insulationClass: 'Class H',
      protectionClass: 'IP67',
      weight: 16.8,
      bodyDiameter: {
        width: 440,
        height: 140
      }
    },
    imageUrl: getProductImagePath('15', 'AME0200-1003', 'main'),
    additionalImageUrls: [
      getProductImagePath('15', 'AME0200-1003', 1),
      getProductImagePath('15', 'AME0200-1003', 2)
    ],
    deliveryTime: '4-6 weeks'
  },
  {
    id: '16',
    name: 'AME0200-1004',
    family: 'M',
    toolHolderTypeCategory: 'ER',
    line: 'Premium',
    power: 3.0,
    minSpeed: 6000,
    maxSpeed: 24000,
    nominalSpeed: 18000,
    torque: 1.69,
    voltage: '220V, 380V',
    toolHolder: 'ER25',
    applications: ['Wood', 'Stone', 'Composites'],
    description: 'Industrial-grade blade technology spindle with HSK interface for heavy-duty cutting applications. Engineered for maximum precision and durability in demanding production environments.',
    features: [
      'ER25 precision interface',
      'Heavy-duty blade cutting capability',
      'Industrial-grade construction',
      'Advanced thermal management',
      'Continuous duty operation'
    ],
    technicalSpecs: {
      runout: '< 0.0005 mm',
      bearingType: 'Ultra-Precision Ceramic Hybrid',
      coolingSystem: 'Advanced Dual Circuit',
      lubricationType: 'Oil-Air Lubrication',
      motorType: 'Synchronous 3-Phase',
      insulationClass: 'Class H',
      protectionClass: 'IP67',
      weight: 16.8,
      bodyDiameter: {
        width: 440,
        height: 140
      }
    },
    imageUrl: getProductImagePath('16', 'AME0200-1004', 'main'),
    additionalImageUrls: [
      getProductImagePath('16', 'AME0200-1004', 1),
      getProductImagePath('16', 'AME0200-1004', 2)
    ],
    deliveryTime: '4-6 weeks'
  },
  {
    id: '17',
    name: 'AME0200-1005',
    family: 'M',
    toolHolderTypeCategory: 'ER',
    line: 'Premium',
    power: 1.5,
    minSpeed: 6000,
    maxSpeed: 24000,
    nominalSpeed: 18000,
    torque: 0.8,
    voltage: '220V, 380V',
    toolHolder: 'ER25',
    applications: ['Wood', 'Stone', 'Composites'],
    description: 'Industrial-grade blade technology spindle with HSK interface for heavy-duty cutting applications. Engineered for maximum precision and durability in demanding production environments.',
    features: [
      'ER25 precision interface',
      'Heavy-duty blade cutting capability',
      'Industrial-grade construction',
      'Advanced thermal management',
      'Continuous duty operation'
    ],
    technicalSpecs: {
      runout: '< 0.0005 mm',
      bearingType: 'Ultra-Precision Ceramic Hybrid',
      coolingSystem: 'Advanced Dual Circuit',
      lubricationType: 'Oil-Air Lubrication',
      motorType: 'Synchronous 3-Phase',
      insulationClass: 'Class H',
      protectionClass: 'IP67',
      weight: 16.8,
      bodyDiameter: {
        width: 440,
        height: 140
      }
    },
    imageUrl: getProductImagePath('17', 'AME0200-1005', 'main'),
    additionalImageUrls: [
      getProductImagePath('17', 'AME0200-1005', 1),
      getProductImagePath('17', 'AME0200-1005', 2)
    ],
    deliveryTime: '4-6 weeks'
  },
  {
    id: '18',
    name: 'AME0200-1006',
    family: 'M',
    toolHolderTypeCategory: 'ER',
    line: 'Premium',
    power: 1.8,
    minSpeed: 6000,
    maxSpeed: 24000,
    nominalSpeed: 12000,
    torque: 1.43,
    voltage: '220V, 380V',
    toolHolder: 'ER25',
    applications: ['Wood', 'Stone', 'Composites'],
    description: 'Industrial-grade blade technology spindle with HSK interface for heavy-duty cutting applications. Engineered for maximum precision and durability in demanding production environments.',
    features: [
      'ER25 precision interface',
      'Heavy-duty blade cutting capability',
      'Industrial-grade construction',
      'Advanced thermal management',
      'Continuous duty operation'
    ],
    technicalSpecs: {
      runout: '< 0.0005 mm',
      bearingType: 'Ultra-Precision Ceramic Hybrid',
      coolingSystem: 'Advanced Dual Circuit',
      lubricationType: 'Oil-Air Lubrication',
      motorType: 'Synchronous 3-Phase',
      insulationClass: 'Class H',
      protectionClass: 'IP67',
      weight: 16.8,
      bodyDiameter: {
        width: 440,
        height: 140
      }
    },
    imageUrl: getProductImagePath('18', 'AME0200-1006', 'main'),
    additionalImageUrls: [
      getProductImagePath('18', 'AME0200-1006', 1),
      getProductImagePath('18', 'AME0200-1006', 2)
    ],
    deliveryTime: '4-6 weeks'
  },
  {
    id: '19',
    name: 'AME0100-1001',
    family: 'M',
    toolHolderTypeCategory: 'ER',
    line: 'Premium',
    power: 0.73,
    minSpeed: 6000,
    maxSpeed: 24000,
    nominalSpeed: 18000,
    torque: 0.39,
    voltage: '220V, 380V',
    toolHolder: 'ER20',
    applications: ['Wood', 'Stone', 'Composites'],
    description: 'Industrial-grade blade technology spindle with HSK interface for heavy-duty cutting applications. Engineered for maximum precision and durability in demanding production environments.',
    features: [
      'ER20 precision interface',
      'Heavy-duty blade cutting capability',
      'Industrial-grade construction',
      'Advanced thermal management',
      'Continuous duty operation'
    ],
    technicalSpecs: {
      runout: '< 0.0005 mm',
      bearingType: 'Ultra-Precision Ceramic Hybrid',
      coolingSystem: 'Advanced Dual Circuit',
      lubricationType: 'Oil-Air Lubrication',
      motorType: 'Synchronous 3-Phase',
      insulationClass: 'Class H',
      protectionClass: 'IP67',
      weight: 16.8,
      bodyDiameter: {
        width: 440,
        height: 140
      }
    },
    imageUrl: getProductImagePath('19', 'AME0100-1001', 'main'),
    additionalImageUrls: [
      getProductImagePath('19', 'AME0100-1001', 1),
      getProductImagePath('19', 'AME0100-1001', 2)
    ],
    deliveryTime: '4-6 weeks'
  },
  {
    id: '20',
    name: 'AME0100-1003',
    family: 'M',
    toolHolderTypeCategory: 'ER',
    line: 'Premium',
    power: 1.1,
    minSpeed: 6000,
    maxSpeed: 24000,
    nominalSpeed: 18000,
    torque: 0.58,
    voltage: '220V, 380V',
    toolHolder: 'ER20',
    applications: ['Wood', 'Stone', 'Composites'],
    description: 'Industrial-grade blade technology spindle with HSK interface for heavy-duty cutting applications. Engineered for maximum precision and durability in demanding production environments.',
    features: [
      'ER20 precision interface',
      'Heavy-duty blade cutting capability',
      'Industrial-grade construction',
      'Advanced thermal management',
      'Continuous duty operation'
    ],
    technicalSpecs: {
      runout: '< 0.0005 mm',
      bearingType: 'Ultra-Precision Ceramic Hybrid',
      coolingSystem: 'Advanced Dual Circuit',
      lubricationType: 'Oil-Air Lubrication',
      motorType: 'Synchronous 3-Phase',
      insulationClass: 'Class H',
      protectionClass: 'IP67',
      weight: 16.8,
      bodyDiameter: {
        width: 440,
        height: 140
      }
    },
    imageUrl: getProductImagePath('20', 'AME0100-1003', 'main'),
    additionalImageUrls: [
      getProductImagePath('20', 'AME0100-1003', 1),
      getProductImagePath('20', 'AME0100-1003', 2)
    ],
    deliveryTime: '4-6 weeks'
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
