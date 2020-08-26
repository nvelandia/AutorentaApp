import { actionNames } from '../utils/constants/actionConstants';

const defaultState = {
  // result: {
  //   locations: [],
  //   cars: [],
  //   companies: [],
  //   carFeatures: [],
  //   rates: [],
  // },
  // filters: {},
  // searchParams: {
  //   pickup_location: '',
  //   pickup_date: '',
  //   pickup_time: '',
  //   dropoff_location: '',
  //   dropoff_date: '',
  //   dropoff_time: '',
  //   passenger_country_id: '',
  //   passenger_age: '',
  // },
  filters: {
    companies: {
      total: 42,
      Payless: 16,
      Alamo: 26,
    },
    types: {
      total: 42,
      Económico: 3,
      '2/4 Door': 2,
      Intermedio: 7,
      Standard: 8,
      Grande: 8,
      Premium: 5,
      Minivan: 2,
      'De lujo': 3,
      'Standard Elite': 1,
      'Station Wagon': 1,
      Oversize: 1,
      Especial: 1,
    },
    seats: {
      '4': 4,
      '5': 18,
      '7': 7,
      '8': 2,
      '12': 1,
      '15': 1,
      '': 9,
    },
    gears: {
      manual: 42,
    },
    bags: {
      '0': 9,
      '1': 1,
      '2': 1,
      '3': 15,
      '4': 7,
      '5': 8,
      '7': 1,
    },
  },
  result: {
    cars: [
      {
        company: {
          company_id: 3,
          name: 'Payless',
          logo: 'http://pg01.cubiq.digital/assets/uploads/companies/payless.png',
          guid: 'b3f7a031-47c5-497b-b406-e02ede7f5003',
          code: 'ZA',
          visible: false,
          color: '#111fe4',
        },
        type: 'ECAR',
        typeLetter: 'E',
        image: 'http://pg01.cubiq.digital/assets/images/car-unavailable.png',
        name: 'HYUNDAI ACCENT',
        doors: '4',
        seats: '5',
        bags_small: '2',
        bags_big: '1',
        bags_total: 3,
        gear: 'manual',
        rating: null,
        featured: false,
        air: false,
        extras: [{ code: 'NAV', name: 'NAV', base_amount: '50.97', plan: 'B', status: 'CNF' }],
        rates: [
          {
            rate_code: '3D',
            availability_status: 'S',
            guarantee_ind: 'G',
            rate_plan_returned: 'D',
            name: 'Rate 3D',
            rate_plan_change_indicator: true,
            price: '166.60',
            charges: [
              {
                name: '',
                charge_type: 'BaseRateTotal',
                currency_code: 'USD',
                amount: '21.93',
                mileage_allowance: 'UNL',
                extra_mileage_charge: '.00',
                uom: 'MI',
              },
              {
                name: '',
                charge_type: 'ExtraDay',
                currency_code: '',
                amount: '21.93',
                mileage_allowance: 'UNL',
                extra_mileage_charge: '.00',
                uom: 'MI',
              },
              {
                name: '',
                charge_type: 'ExtraHour',
                currency_code: '',
                amount: '7.32',
                mileage_allowance: 'UNL',
                extra_mileage_charge: '.00',
                uom: 'MI',
              },
              {
                name: '',
                charge_type: 'ApproximateTotalPrice',
                currency_code: '',
                amount: '166.60',
                mileage_allowance: 'UNL',
                extra_mileage_charge: '.00',
                uom: 'MI',
              },
            ],
          },
        ],
        typeCar: { level: '1', code: 'E', priority: 15, name: 'Económico' },
      },

      {
        company: {
          company_id: 3,
          name: 'Payless',
          logo: 'http://pg01.cubiq.digital/assets/uploads/companies/payless.png',
          guid: 'b3f7a031-47c5-497b-b406-e02ede7f5003',
          code: 'ZA',
          visible: false,
          color: '#111fe4',
        },
        type: 'CCAR',
        typeLetter: 'C',
        image: 'http://pg01.cubiq.digital/assets/images/car-unavailable.png',
        name: 'NISSAN VERSA',
        doors: '4',
        seats: '5',
        bags_small: '2',
        bags_big: '1',
        bags_total: 3,
        gear: 'manual',
        rating: null,
        featured: false,
        air: false,
        extras: [{ code: 'NAV', name: 'NAV', base_amount: '50.97', plan: 'B', status: 'CNF' }],
        rates: [
          {
            rate_code: '3D',
            availability_status: 'S',
            guarantee_ind: 'G',
            rate_plan_returned: 'D',
            name: 'Rate 3D',
            rate_plan_change_indicator: true,
            price: '166.60',
            charges: [
              {
                name: '',
                charge_type: 'BaseRateTotal',
                currency_code: 'USD',
                amount: '21.93',
                mileage_allowance: 'UNL',
                extra_mileage_charge: '.00',
                uom: 'MI',
              },
              {
                name: '',
                charge_type: 'ExtraDay',
                currency_code: '',
                amount: '21.93',
                mileage_allowance: 'UNL',
                extra_mileage_charge: '.00',
                uom: 'MI',
              },
              {
                name: '',
                charge_type: 'ExtraHour',
                currency_code: '',
                amount: '7.32',
                mileage_allowance: 'UNL',
                extra_mileage_charge: '.00',
                uom: 'MI',
              },
              {
                name: '',
                charge_type: 'ApproximateTotalPrice',
                currency_code: '',
                amount: '166.60',
                mileage_allowance: 'UNL',
                extra_mileage_charge: '.00',
                uom: 'MI',
              },
            ],
          },
        ],
        typeCar: { level: '2', code: 'C', priority: 5, name: '2/4 Door' },
      },

      {
        company: {
          company_id: 3,
          name: 'Payless',
          logo: 'http://pg01.cubiq.digital/assets/uploads/companies/payless.png',
          guid: 'b3f7a031-47c5-497b-b406-e02ede7f5003',
          code: 'ZA',
          visible: false,
          color: '#111fe4',
        },
        type: 'ICAR',
        typeLetter: 'I',
        image: 'http://pg01.cubiq.digital/assets/images/car-unavailable.png',
        name: 'HYUNDAI ELENTRA',
        doors: '4',
        seats: '5',
        bags_small: '2',
        bags_big: '1',
        bags_total: 3,
        gear: 'manual',
        rating: null,
        featured: false,
        air: false,
        extras: [{ code: 'NAV', name: 'NAV', base_amount: '50.97', plan: 'B', status: 'CNF' }],
        rates: [
          {
            rate_code: '3D',
            availability_status: 'S',
            guarantee_ind: 'G',
            rate_plan_returned: 'D',
            name: 'Rate 3D',
            rate_plan_change_indicator: true,
            price: '167.59',
            charges: [
              {
                name: '',
                charge_type: 'BaseRateTotal',
                currency_code: 'USD',
                amount: '22.21',
                mileage_allowance: 'UNL',
                extra_mileage_charge: '.00',
                uom: 'MI',
              },
              {
                name: '',
                charge_type: 'ExtraDay',
                currency_code: '',
                amount: '22.21',
                mileage_allowance: 'UNL',
                extra_mileage_charge: '.00',
                uom: 'MI',
              },
              {
                name: '',
                charge_type: 'ExtraHour',
                currency_code: '',
                amount: '7.41',
                mileage_allowance: 'UNL',
                extra_mileage_charge: '.00',
                uom: 'MI',
              },
              {
                name: '',
                charge_type: 'ApproximateTotalPrice',
                currency_code: '',
                amount: '167.59',
                mileage_allowance: 'UNL',
                extra_mileage_charge: '.00',
                uom: 'MI',
              },
            ],
          },
        ],
        typeCar: { level: '1', code: 'I', priority: 35, name: 'Intermedio' },
      },

      {
        company: {
          company_id: 3,
          name: 'Payless',
          logo: 'http://pg01.cubiq.digital/assets/uploads/companies/payless.png',
          guid: 'b3f7a031-47c5-497b-b406-e02ede7f5003',
          code: 'ZA',
          visible: false,
          color: '#111fe4',
        },
        type: 'FCAR',
        typeLetter: 'F',
        image: 'http://pg01.cubiq.digital/assets/images/car-unavailable.png',
        name: 'HYUNDAI SONATA',
        doors: '4',
        seats: '5',
        bags_small: '2',
        bags_big: '2',
        bags_total: 4,
        gear: 'manual',
        rating: null,
        featured: false,
        air: false,
        extras: [{ code: 'NAV', name: 'NAV', base_amount: '50.97', plan: 'B', status: 'CNF' }],
        rates: [
          {
            rate_code: '3D',
            availability_status: 'S',
            guarantee_ind: 'G',
            rate_plan_returned: 'D',
            name: 'Rate 3D',
            rate_plan_change_indicator: true,
            price: '170.45',
            charges: [
              {
                name: '',
                charge_type: 'BaseRateTotal',
                currency_code: 'USD',
                amount: '23.01',
                mileage_allowance: 'UNL',
                extra_mileage_charge: '.00',
                uom: 'MI',
              },
              {
                name: '',
                charge_type: 'ExtraDay',
                currency_code: '',
                amount: '23.01',
                mileage_allowance: 'UNL',
                extra_mileage_charge: '.00',
                uom: 'MI',
              },
              {
                name: '',
                charge_type: 'ExtraHour',
                currency_code: '',
                amount: '7.68',
                mileage_allowance: 'UNL',
                extra_mileage_charge: '.00',
                uom: 'MI',
              },
              {
                name: '',
                charge_type: 'ApproximateTotalPrice',
                currency_code: '',
                amount: '170.45',
                mileage_allowance: 'UNL',
                extra_mileage_charge: '.00',
                uom: 'MI',
              },
            ],
          },
        ],
        typeCar: { level: '1', code: 'F', priority: 55, name: 'Grande' },
      },

      {
        company: {
          company_id: 3,
          name: 'Payless',
          logo: 'http://pg01.cubiq.digital/assets/uploads/companies/payless.png',
          guid: 'b3f7a031-47c5-497b-b406-e02ede7f5003',
          code: 'ZA',
          visible: false,
          color: '#111fe4',
        },
        type: 'PCAR',
        typeLetter: 'P',
        image: 'http://pg01.cubiq.digital/assets/images/car-unavailable.png',
        name: 'VOLKSWAGEN PASSAT',
        doors: '4',
        seats: '5',
        bags_small: '2',
        bags_big: '2',
        bags_total: 4,
        gear: 'manual',
        rating: null,
        featured: false,
        air: false,
        extras: [{ code: 'NAV', name: 'NAV', base_amount: '50.97', plan: 'B', status: 'CNF' }],
        rates: [
          {
            rate_code: '00',
            availability_status: 'S',
            guarantee_ind: 'G',
            rate_plan_returned: 'D',
            name: 'Rate 00',
            rate_plan_change_indicator: true,
            price: '289.01',
            charges: [
              {
                name: '',
                charge_type: 'BaseRateTotal',
                currency_code: 'USD',
                amount: '56.25',
                mileage_allowance: 'UNL',
                extra_mileage_charge: '.00',
                uom: 'MI',
              },
              {
                name: '',
                charge_type: 'ExtraDay',
                currency_code: '',
                amount: '28.13',
                mileage_allowance: 'UNL',
                extra_mileage_charge: '.00',
                uom: 'MI',
              },
              {
                name: '',
                charge_type: 'ExtraHour',
                currency_code: '',
                amount: '28.13',
                mileage_allowance: 'UNL',
                extra_mileage_charge: '.00',
                uom: 'MI',
              },
              {
                name: '',
                charge_type: 'ApproximateTotalPrice',
                currency_code: '',
                amount: '289.01',
                mileage_allowance: 'UNL',
                extra_mileage_charge: '.00',
                uom: 'MI',
              },
            ],
          },
        ],
        typeCar: { level: '1', code: 'P', priority: 65, name: 'Premium' },
      },

      {
        company: {
          company_id: 3,
          name: 'Payless',
          logo: 'http://pg01.cubiq.digital/assets/uploads/companies/payless.png',
          guid: 'b3f7a031-47c5-497b-b406-e02ede7f5003',
          code: 'ZA',
          visible: false,
          color: '#111fe4',
        },
        type: 'IFAR',
        typeLetter: 'I',
        image: 'http://pg01.cubiq.digital/assets/images/car-unavailable.png',
        name: 'JEEP RENEGADE',
        doors: '4',
        seats: '5',
        bags_small: '2',
        bags_big: '2',
        bags_total: 4,
        gear: 'manual',
        rating: null,
        featured: false,
        air: false,
        extras: [{ code: 'NAV', name: 'NAV', base_amount: '50.97', plan: 'B', status: 'CNF' }],
        rates: [
          {
            rate_code: '3D',
            availability_status: 'S',
            guarantee_ind: 'G',
            rate_plan_returned: 'D',
            name: 'Rate 3D',
            rate_plan_change_indicator: true,
            price: '188.29',
            charges: [
              {
                name: '',
                charge_type: 'BaseRateTotal',
                currency_code: 'USD',
                amount: '28.01',
                mileage_allowance: 'UNL',
                extra_mileage_charge: '.00',
                uom: 'MI',
              },
              {
                name: '',
                charge_type: 'ExtraDay',
                currency_code: '',
                amount: '28.01',
                mileage_allowance: 'UNL',
                extra_mileage_charge: '.00',
                uom: 'MI',
              },
              {
                name: '',
                charge_type: 'ExtraHour',
                currency_code: '',
                amount: '9.34',
                mileage_allowance: 'UNL',
                extra_mileage_charge: '.00',
                uom: 'MI',
              },
              {
                name: '',
                charge_type: 'ApproximateTotalPrice',
                currency_code: '',
                amount: '188.29',
                mileage_allowance: 'UNL',
                extra_mileage_charge: '.00',
                uom: 'MI',
              },
            ],
          },
        ],
        typeCar: { level: '1', code: 'I', priority: 35, name: 'Intermedio' },
      },

      {
        company: {
          company_id: 3,
          name: 'Payless',
          logo: 'http://pg01.cubiq.digital/assets/uploads/companies/payless.png',
          guid: 'b3f7a031-47c5-497b-b406-e02ede7f5003',
          code: 'ZA',
          visible: false,
          color: '#111fe4',
        },
        type: 'STAR',
        typeLetter: 'S',
        image: 'http://pg01.cubiq.digital/assets/images/car-unavailable.png',
        name: 'FORD MUSTANG CONVERTIBLE',
        doors: '2',
        seats: '4',
        bags_small: '1',
        bags_big: '1',
        bags_total: 2,
        gear: 'manual',
        rating: null,
        featured: false,
        air: false,
        extras: [{ code: 'NAV', name: 'NAV', base_amount: '50.97', plan: 'B', status: 'CNF' }],
        rates: [
          {
            rate_code: '00',
            availability_status: 'S',
            guarantee_ind: 'G',
            rate_plan_returned: 'D',
            name: 'Rate 00',
            rate_plan_change_indicator: true,
            price: '374.07',
            charges: [
              {
                name: '',
                charge_type: 'BaseRateTotal',
                currency_code: 'USD',
                amount: '80.10',
                mileage_allowance: 'UNL',
                extra_mileage_charge: '.00',
                uom: 'MI',
              },
              {
                name: '',
                charge_type: 'ExtraDay',
                currency_code: '',
                amount: '40.05',
                mileage_allowance: 'UNL',
                extra_mileage_charge: '.00',
                uom: 'MI',
              },
              {
                name: '',
                charge_type: 'ExtraHour',
                currency_code: '',
                amount: '40.05',
                mileage_allowance: 'UNL',
                extra_mileage_charge: '.00',
                uom: 'MI',
              },
              {
                name: '',
                charge_type: 'ApproximateTotalPrice',
                currency_code: '',
                amount: '374.07',
                mileage_allowance: 'UNL',
                extra_mileage_charge: '.00',
                uom: 'MI',
              },
            ],
          },
        ],
        typeCar: { level: '1', code: 'S', priority: 45, name: 'Standard' },
      },

      {
        company: {
          company_id: 4,
          name: 'Alamo',
          logo: 'http://pg01.cubiq.digital/assets/uploads/companies/alamo.png',
          guid: 'b3f7a031-47c5-497b-b406-e02ede7f5008',
          code: 'AL',
          visible: false,
          color: '#bae486',
        },
        type: 'ICAR',
        typeLetter: 'I',
        image:
          'http://vcmp-cars.sabre.com/image/upload/f_auto,q_auto:best,t_vcmp_large/car/i/31299/dlqid026bzid1vrdsot7.png',
        name: 'HYUNDAI ELANTRA OR SIMILA',
        doors: '4',
        seats: '5',
        bags_small: '2',
        bags_big: '1',
        bags_total: 3,
        gear: 'manual',
        rating: null,
        featured: false,
        air: false,
        extras: [{ code: 'NAV', name: 'NAV', base_amount: '41.97', plan: 'B', status: 'CNF' }],
        rates: [
          {
            rate_code: 'AELA1',
            availability_status: 'S',
            guarantee_ind: 'G',
            rate_plan_returned: 'D',
            name: 'Rate AELA1',
            rate_plan_change_indicator: true,
            price: '165.67',
            charges: [
              {
                name: '',
                charge_type: 'BaseRateTotal',
                currency_code: 'USD',
                amount: '25.25',
                mileage_allowance: 'UNL',
                extra_mileage_charge: '.00',
                uom: 'MI',
              },
              {
                name: '',
                charge_type: 'ExtraDay',
                currency_code: '',
                amount: '25.25',
                mileage_allowance: 'UNL',
                extra_mileage_charge: '.00',
                uom: 'MI',
              },
              {
                name: '',
                charge_type: 'ExtraHour',
                currency_code: '',
                amount: '8.42',
                mileage_allowance: 'UNL',
                extra_mileage_charge: '.00',
                uom: 'MI',
              },
              {
                name: '',
                charge_type: 'ApproximateTotalPrice',
                currency_code: '',
                amount: '165.67',
                mileage_allowance: 'UNL',
                extra_mileage_charge: '.00',
                uom: 'MI',
              },
            ],
          },
        ],
        typeCar: { level: '1', code: 'I', priority: 35, name: 'Intermedio' },
      },

      {
        company: {
          company_id: 4,
          name: 'Alamo',
          logo: 'http://pg01.cubiq.digital/assets/uploads/companies/alamo.png',
          guid: 'b3f7a031-47c5-497b-b406-e02ede7f5008',
          code: 'AL',
          visible: false,
          color: '#bae486',
        },
        type: 'FCAR',
        typeLetter: 'F',
        image:
          'http://vcmp-cars.sabre.com/image/upload/f_auto,q_auto:best,t_vcmp_large/car/i/31289/gli853rdwndmjxuggi8v.png',
        name: 'FORD FUSION OR SIMILAR',
        doors: '4',
        seats: '5',
        bags_small: '3',
        bags_big: '2',
        bags_total: 5,
        gear: 'manual',
        rating: null,
        featured: false,
        air: false,
        extras: [{ code: 'NAV', name: 'NAV', base_amount: '41.97', plan: 'B', status: 'CNF' }],
        rates: [
          {
            rate_code: 'AELA1',
            availability_status: 'S',
            guarantee_ind: 'G',
            rate_plan_returned: 'D',
            name: 'Rate AELA1',
            rate_plan_change_indicator: true,
            price: '161.43',
            charges: [
              {
                name: '',
                charge_type: 'BaseRateTotal',
                currency_code: 'USD',
                amount: '24.06',
                mileage_allowance: 'UNL',
                extra_mileage_charge: '.00',
                uom: 'MI',
              },
              {
                name: '',
                charge_type: 'ExtraDay',
                currency_code: '',
                amount: '24.06',
                mileage_allowance: 'UNL',
                extra_mileage_charge: '.00',
                uom: 'MI',
              },
              {
                name: '',
                charge_type: 'ExtraHour',
                currency_code: '',
                amount: '8.02',
                mileage_allowance: 'UNL',
                extra_mileage_charge: '.00',
                uom: 'MI',
              },
              {
                name: '',
                charge_type: 'ApproximateTotalPrice',
                currency_code: '',
                amount: '161.43',
                mileage_allowance: 'UNL',
                extra_mileage_charge: '.00',
                uom: 'MI',
              },
            ],
          },
        ],
        typeCar: { level: '1', code: 'F', priority: 55, name: 'Grande' },
      },

      {
        company: {
          company_id: 4,
          name: 'Alamo',
          logo: 'http://pg01.cubiq.digital/assets/uploads/companies/alamo.png',
          guid: 'b3f7a031-47c5-497b-b406-e02ede7f5008',
          code: 'AL',
          visible: false,
          color: '#bae486',
        },
        type: 'MVAR',
        typeLetter: 'M',
        image:
          'http://vcmp-cars.sabre.com/image/upload/f_auto,q_auto:best,t_vcmp_large/car/i/31309/tr7ghuhwvuq99jroafsk.png',
        name: '',
        doors: '',
        seats: '',
        bags_small: 0,
        bags_big: 0,
        bags_total: 0,
        gear: 'manual',
        rating: null,
        featured: false,
        air: false,
        extras: [{ code: 'NAV', name: 'NAV', base_amount: '41.97', plan: 'B', status: 'CNF' }],
        rates: [
          {
            rate_code: 'AELA1',
            availability_status: 'S',
            guarantee_ind: 'G',
            rate_plan_returned: 'D',
            name: 'Rate AELA1',
            rate_plan_change_indicator: true,
            price: '199.31',
            charges: [
              {
                name: '',
                charge_type: 'BaseRateTotal',
                currency_code: 'USD',
                amount: '34.68',
                mileage_allowance: 'UNL',
                extra_mileage_charge: '.00',
                uom: 'MI',
              },
              {
                name: '',
                charge_type: 'ExtraDay',
                currency_code: '',
                amount: '34.68',
                mileage_allowance: 'UNL',
                extra_mileage_charge: '.00',
                uom: 'MI',
              },
              {
                name: '',
                charge_type: 'ExtraHour',
                currency_code: '',
                amount: '11.56',
                mileage_allowance: 'UNL',
                extra_mileage_charge: '.00',
                uom: 'MI',
              },
              {
                name: '',
                charge_type: 'ApproximateTotalPrice',
                currency_code: '',
                amount: '199.31',
                mileage_allowance: 'UNL',
                extra_mileage_charge: '.00',
                uom: 'MI',
              },
            ],
          },
        ],
        typeCar: { level: '1', code: 'M', priority: 5, name: 'Minivan' },
      },

      {
        company: {
          company_id: 4,
          name: 'Alamo',
          logo: 'http://pg01.cubiq.digital/assets/uploads/companies/alamo.png',
          guid: 'b3f7a031-47c5-497b-b406-e02ede7f5008',
          code: 'AL',
          visible: false,
          color: '#bae486',
        },
        type: 'SFAR',
        typeLetter: 'S',
        image:
          'http://vcmp-cars.sabre.com/image/upload/f_auto,q_auto:best,t_vcmp_large/car/i/31329/gkfc9im9gqpr5dh9untq.png',
        name: 'FORD EDGE OR SIMILAR',
        doors: '4',
        seats: '5',
        bags_small: '3',
        bags_big: '2',
        bags_total: 5,
        gear: 'manual',
        rating: null,
        featured: false,
        air: false,
        extras: [{ code: 'NAV', name: 'NAV', base_amount: '41.97', plan: 'B', status: 'CNF' }],
        rates: [
          {
            rate_code: 'AELA1',
            availability_status: 'S',
            guarantee_ind: 'G',
            rate_plan_returned: 'D',
            name: 'Rate AELA1',
            rate_plan_change_indicator: true,
            price: '197.09',
            charges: [
              {
                name: '',
                charge_type: 'BaseRateTotal',
                currency_code: 'USD',
                amount: '34.06',
                mileage_allowance: 'UNL',
                extra_mileage_charge: '.00',
                uom: 'MI',
              },
              {
                name: '',
                charge_type: 'ExtraDay',
                currency_code: '',
                amount: '34.06',
                mileage_allowance: 'UNL',
                extra_mileage_charge: '.00',
                uom: 'MI',
              },
              {
                name: '',
                charge_type: 'ExtraHour',
                currency_code: '',
                amount: '11.35',
                mileage_allowance: 'UNL',
                extra_mileage_charge: '.00',
                uom: 'MI',
              },
              {
                name: '',
                charge_type: 'ApproximateTotalPrice',
                currency_code: '',
                amount: '197.09',
                mileage_allowance: 'UNL',
                extra_mileage_charge: '.00',
                uom: 'MI',
              },
            ],
          },
        ],
        typeCar: { level: '1', code: 'S', priority: 45, name: 'Standard' },
      },

      {
        company: {
          company_id: 4,
          name: 'Alamo',
          logo: 'http://pg01.cubiq.digital/assets/uploads/companies/alamo.png',
          guid: 'b3f7a031-47c5-497b-b406-e02ede7f5008',
          code: 'AL',
          visible: false,
          color: '#bae486',
        },
        type: 'STAR',
        typeLetter: 'S',
        image:
          'http://vcmp-cars.sabre.com/image/upload/f_auto,q_auto:best,t_vcmp_large/car/i/31337/lfkuarnytrpmjuawhiby.png',
        name: 'FORD MUSTANG OR SIMILAR',
        doors: '2',
        seats: '4',
        bags_small: '1',
        bags_big: 0,
        bags_total: 1,
        gear: 'manual',
        rating: null,
        featured: false,
        air: false,
        extras: [{ code: 'NAV', name: 'NAV', base_amount: '41.97', plan: 'B', status: 'CNF' }],
        rates: [
          {
            rate_code: 'AELA1',
            availability_status: 'S',
            guarantee_ind: 'G',
            rate_plan_returned: 'D',
            name: 'Rate AELA1',
            rate_plan_change_indicator: true,
            price: '218.28',
            charges: [
              {
                name: '',
                charge_type: 'BaseRateTotal',
                currency_code: 'USD',
                amount: '40.00',
                mileage_allowance: 'UNL',
                extra_mileage_charge: '.00',
                uom: 'MI',
              },
              {
                name: '',
                charge_type: 'ExtraDay',
                currency_code: '',
                amount: '40.00',
                mileage_allowance: 'UNL',
                extra_mileage_charge: '.00',
                uom: 'MI',
              },
              {
                name: '',
                charge_type: 'ExtraHour',
                currency_code: '',
                amount: '13.33',
                mileage_allowance: 'UNL',
                extra_mileage_charge: '.00',
                uom: 'MI',
              },
              {
                name: '',
                charge_type: 'ApproximateTotalPrice',
                currency_code: '',
                amount: '218.28',
                mileage_allowance: 'UNL',
                extra_mileage_charge: '.00',
                uom: 'MI',
              },
            ],
          },
        ],
        typeCar: { level: '1', code: 'S', priority: 45, name: 'Standard' },
      },
    ],
    companies: [
      {
        company_id: 1,
        name: 'Avis',
        logo: 'http://pg01.cubiq.digital/assets/uploads/companies/avis.png',
        guid: '3e5caefc-18bd-4825-822f-cac5b637f0e7',
        code: 'ZI',
        visible: false,
        color: '#e41111',
      },
      {
        company_id: 3,
        name: 'Payless',
        logo: 'http://pg01.cubiq.digital/assets/uploads/companies/payless.png',
        guid: 'b3f7a031-47c5-497b-b406-e02ede7f5003',
        code: 'ZA',
        visible: false,
        color: '#111fe4',
      },
      {
        company_id: 4,
        name: 'Alamo',
        logo: 'http://pg01.cubiq.digital/assets/uploads/companies/alamo.png',
        guid: 'b3f7a031-47c5-497b-b406-e02ede7f5008',
        code: 'AL',
        visible: false,
        color: '#bae486',
      },
      {
        company_id: 2,
        name: 'Budget',
        logo: 'http://pg01.cubiq.digital/assets/uploads/companies/budget.png',
        guid: 'b3f7a031-47c5-497b-b406-e02ede7f5005',
        code: 'ZD',
        visible: false,
        color: '#e47711',
      },
    ],
    locations: {
      pickup: { date: '2020-08-25', time: '12:00', location: 'Miami, Florida, Estados Unidos', iata: 'MIA' },
      dropoff: { date: '2020-08-28', time: '12:00', location: 'Miami, Florida, Estados Unidos', iata: 'MIA' },
    },
    carFeatures: [
      { level: '1', code: 'M', priority: 5, name: 'Minivan' },
      { level: '2', code: 'W', priority: 5, name: 'Station Wagon' },
      { level: '2', code: 'C', priority: 5, name: '2/4 Door' },
      { level: '2', code: 'D', priority: 5, name: '4-5 Door' },
      { level: '2', code: 'V', priority: 5, name: 'Passenger Van' },
      { level: '2', code: 'B', priority: 5, name: '2-3 Door' },
      { level: '1', code: 'N', priority: 10, name: 'Superior Mini' },
      { level: '1', code: 'E', priority: 15, name: 'Económico' },
      { level: '1', code: 'H', priority: 20, name: 'Superior Economy' },
      { level: '1', code: 'C', priority: 25, name: 'Compacto' },
      { level: '1', code: 'D', priority: 30, name: 'Superior Compact' },
      { level: '1', code: 'I', priority: 35, name: 'Intermedio' },
      { level: '1', code: 'J', priority: 40, name: 'Superior Intermediate' },
      { level: '1', code: 'S', priority: 45, name: 'Standard' },
      { level: '1', code: 'R', priority: 50, name: 'Standard Elite' },
      { level: '1', code: 'F', priority: 55, name: 'Grande' },
      { level: '1', code: 'G', priority: 60, name: 'Superior Full Size' },
      { level: '1', code: 'P', priority: 65, name: 'Premium' },
      { level: '1', code: 'L', priority: 70, name: 'De lujo' },
      { level: '1', code: 'O', priority: 75, name: 'Oversize' },
      { level: '1', code: 'X', priority: 80, name: 'Especial' },
      { level: '2', code: 'T', priority: 10, name: 'Convertible' },
      { level: '2', code: 'F', priority: 15, name: 'SUV' },
      { level: '2', code: 'J', priority: 20, name: 'All terrain' },
      { level: '2', code: 'X', priority: 25, name: 'Especial' },
      { level: '2', code: 'Z', priority: 30, name: 'Especial' },
      { level: '2', code: 'E', priority: 5, name: 'Coupe' },
    ],
  },
  searchParams: {
    pickup_location: 'MIA',
    pickup_date: '2020-08-22',
    pickup_time: '12:00',
    dropoff_location: 'MIA',
    dropoff_date: '2020-08-28',
    dropoff_time: '12:00',
    passenger_country_id: 1,
    passenger_age: 22,
  },
  filterBy: {
    companies: [],
    types: [],
    seats: [],
    bags: '',
    gears: [],
    price: [],
  },
};

const searchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionNames.searchFleetSuccessfully:
      return {
        ...state,
        result: {
          cars: action.cars,
          locations: action.locations,
          companies: action.companies,
          carFeatures: action.carFeatures,
          rates: action.rates,
        },
        filters: action.filters,
        searchParams: action.searchParams,
      };
    case actionNames.addFilter:
      return {
        ...state,
        filterBy: action.filter,
      };
    default:
      return state;
  }
};

export default searchReducer;
