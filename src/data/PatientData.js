

// const patientData = [
//     {
//         key: 0,
//         name: 'Doe, John',
//         age: 32,
//         dob: "09/23/1998",
//         phone: "(981) 532-8359",
//         metricData: [
//             {
//                 metric: "Step Count",
//                 data: [ 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000 ], // by week for weeks 1-12
//                 avg: 8000,
//                 percentage: 11,
//                 decimal: 28,
//                 arrow: "up"
//             },
//             {
//                 metric: "Heart Rate",
//                 data: [ 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000 ], // by week for weeks 1-12
//                 avg: 8000,
//                 percentage: 13,
//                 decimal: 67,
//                 arrow: "down",
//             },
//             {
//                 metric: "Hrs of Sleep",
//                 data: [ 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000 ], // by week for weeks 1-12
//                 avg: 6000,
//                 percentage: 5,
//                 decimal: 45,
//                 arrow: "mid"
//             }
//         ],
//         pfTags: ['severe'],
//         piTags: ['moderate'],
//         dotColor: "#3E8DF3",
//         currentWeek: 7
//     },
//     {
//         key: 1,
//         name: 'Smith, Jane',
//         age: 53,
//         dob: "09/23/1998",
//         phone: "(981) 532-8359",
//         metricData: [
//             {
//                 metric: "Step Count",
//                 data: [ 7000, 7000, 7000, 7000, 7000, 7000, 7000, 7000, 7000, 7000, 7000, 7000 ], // by week for weeks 1-12
//                 avg: 8000,
//                 percentage: 11,
//                 decimal: 28,
//                 arrow: "up",
//             },
//             {
//                 metric: "Heart Rate",
//                 data: [ 7000, 7000, 7000, 7000, 7000, 7000, 7000, 7000, 7000, 7000, 7000, 7000 ], // by week for weeks 1-12
//                 avg: 6000,
//                 percentage: 13,
//                 decimal: 67,
//                 arrow: "down",
//             },
//             {
//                 metric: "Hrs of Sleep",
//                 data: [ 7000, 7000, 7000, 7000, 7000, 7000, 7000, 7000, 7000, 7000, 7000, 7000 ], // by week for weeks 1-12
//                 avg: 7000,
//                 percentage: 5,
//                 decimal: 45,
//                 arrow: "mid"
//             }
//         ],
//         pfTags: ['severe'],
//         piTags: ['moderate'],
//         dotColor: "#F3B344",
//         currentWeek: 7
//     },
//     {
//         key: 2,
//         name: 'Johnson, Alice',
//         age: 44,
//         dob: "09/23/1998",
//         phone: "(981) 532-8359",
//         metricData: [
//             {
//                 metric: "Step Count",
//                 data: [ 6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000 ], // by week for weeks 1-12
//                 avg: 8000,
//                 percentage: 11,
//                 decimal: 28,
//                 arrow: "up"
//             },
//             {
//                 metric: "Heart Rate",
//                 data: [ 6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000 ], // by week for weeks 1-12
//                 avg: 7000,
//                 percentage: 13,
//                 decimal: 67,
//                 arrow: "down",
//             },
//             {
//                 metric: "Hrs of Sleep",
//                 data: [ 6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000 ], // by week for weeks 1-12
//                 avg: 8000,
//                 percentage: 5,
//                 decimal: 45,
//                 arrow: "mid"
//             }
//         ],
//         pfTags: ['severe'],
//         piTags: ['moderate'],
//         dotColor: "#67E09C",
//         currentWeek: 7
//     },
// ]

const patientData = [
{
    key: 0,
    name: 'Smith, Alice',
    age: 64,
    dob: "05/01/1958",
    phone: "(917) 223-4455",
    metricData: [
      {
        metric: 'Step Count',
        data: [804, 1342, 3000],
        avg: 3000,
        percentage: 123,
        decimal: 6,
        arrow: 'up'
      },
      {
        metric: 'Heart Rate',
        data: [81, 80, 75],
        avg: 75,
        percentage: 6,
        decimal: 25,
        arrow: 'down'
      },
      {
        metric: 'Hrs of Sleep',
        data: [5, 6, 7],
        avg: 7,
        percentage: 16,
        decimal: 67,
        arrow: 'up'
      },
    ],
    pfTags: ['poor'], // should just be one
    pfScore: [34, 31, 22], // array
    piTags: ['poor'], // should just be one
    piScore: [68, 72, 76], // array
    dotColor: '#fbaf5d',
    currentWeek: 3,
  },
  {
    key: 1,
    name: 'White, Ethan',
    age: 59,
    dob: "08/22/1963",
    phone: "(412) 878-9988",
    metricData: [
        {
            metric: "Step Count",
            data: [435, 1500, 2000, 2121, 1800], // by week for weeks 1-12
            avg: 1800,
            percentage: 15,
            decimal: 0,
            arrow: "down"
        },
        {
            metric: "Heart Rate",
            data: [80, 80, 78, 78, 76], // by week for weeks 1-12
            avg: 76,
            percentage: 2,
            decimal: 56,
            arrow: "mid",
        },
        {
            metric: "Hrs of Sleep",
            data: [5.6, 6.5, 6.7, 6.9, 6.1], // by week for weeks 1-12
            avg: 6.1,
            percentage: 9,
            decimal: 38,
            arrow: "up"
        }
    ],
    pfTags: ['poor'], // should just be one
    pfScore: [31, 28, 32, 36, 40], // array
    piTags: ['poor'], // should just be one
    piScore: [72, 72, 68, 64, 62], // array
    dotColor: '#fbaf5d',
    currentWeek: 5,
},
{
    key: 2,
    name: "Martin, Mia",
    age: 62,
    dob: "02/14/1959",
    phone: "(717) 724-3344",
    metricData: [
      {
        metric: "Step Count",
        data: [340, 533, 639, 729, 894, 2789, 3493],
        avg: 3493,
        percentage: 25,
        decimal: 31,
        arrow: "up"
      },
      {
        metric: "Heart Rate",
        data: [80, 82, 86, 88, 89, 91, 90],
        avg: 90,
        percentage: 1,
        decimal: 12,
        arrow: "mid"
      },
      {
        metric: "Hrs of Sleep",
        data: [4.3, 4.5, 4.6, 4.7, 6.4, 7.2, 6.8],
        avg: 6.8,
        percentage: 5,
        decimal: 56,
        arrow: "down"
      }
    ],
    pfTags: ["moderate"],
    pfScore: [22, 29, 31, 37, 39, 42, 43],
    piTags: ["good"],
    piScore: [75, 72, 69, 67, 63, 60, 58],
    dotColor: "#52c41a",
    currentWeek: 7
  },
  {
    key: 3,
    name: 'Johnson, Bob',
    age: 67,
    dob: "10/30/1954",
    phone: "(223) 412-5566",
    metricData: [
    {
        metric: "Step Count",
        data: [533, 1243, 1530, 2305, 2623, 3135, 3253, 3120, 3091], // by week for weeks 1-7
        avg: 3091,
        percentage: 3,
        decimal: 9,
        arrow: "down"
    },
    {
        metric: "Heart Rate",
        data: [80, 90, 88, 85, 82, 79, 72, 76, 78], // by week for weeks 1-7
        avg: 78,
        percentage: 16,
        decimal: 67,
        arrow: "up",
    },
    {
        metric: "Hrs of Sleep",
        data: [5, 5, 5, 5, 5.5, 6, 6.5, 7, 7.5], // by week for weeks 1-7
        avg: 7.5,
        percentage: 8,
        decimal: 57,
        arrow: "up"
    }
    ],
     pfTags: ["moderate"],
        pfScore: [34, 36, 39, 42, 46, 47, 49, 34, 32],
        piTags: ["moderate"],
        piScore: [76, 72, 68, 64, 62, 60, 58, 75, 78],
        dotColor: "#f37f89",
        currentWeek: 9
},
{
    key: 4,
    name: 'Davis, Layla',
    age: 69,
    dob: "07/11/1952",
    phone: "(724) 878-7788",
    metricData: [
    {
        metric: "Step Count",
        data: [340, 533, 639, null, 894, 2789, 3493, null, 3784, 3678, 3890, null, 3786], // by week for weeks 1-7
        avg: 2382,
        percentage: 2,
        decimal: 67,
        arrow: "down"
    },
    {
        metric: "Heart Rate",
        data: [80, 82, 86, null, 86, 84, 85, null, 82, 86, 88, null, 91],
        avg: 85,
        percentage: 3,
        decimal: 41,
        arrow: "up",
    },
    {
        metric: "Hrs of Sleep",
        data: [6.4, 6.7, 6.8, null, 6.4, 7.2, 6.8, null, 7.4, 6.9, 7.2, null, 8.1]
        avg: 6.9,
        percentage: 12,
        decimal: 5,
        arrow: "up"
    }
    ],
     pfTags: ["moderate"],
        pfScore: [22, 29, 31, null, 39, 42, 43, null, 46, 48, 53, null, 56],
        piTags: ["good"],
        piScore: [75, 72, 69, null, 63, 60, 58, null, 55, 50, 45, null, 40],
        dotColor: "#52c41a",
        currentWeek: 12
},
// {
//     key: 4,
//     name: 'Davis, Layla',
//     age: 69,
//     metricData: [
//         {
//             metric: "Step Count",
//             data: [2000, 2500, 3000, 3200, 3300, 3650, 3350],
//             avg: 1971.4,
//             percentage: 48,
//             decimal: 28,
//             arrow: "down"
//         },
//         {
//             metric: "Heart Rate",
//             data: [85, 82, 79, 78, 77, 75, 76],
//             avg: 79.4,
//             percentage: 0,
//             decimal: 0,
//             arrow: "up"
//         },
//         {
//             metric: "Hrs of Sleep",
//             data: [6, 6.5, 7, 7.5, 7.5, 7.8, 7.5],
//             avg: 7.125,
//             percentage: 8,
//             decimal: 25,
//             arrow: "up"
//         }
//     ],
//     pfTags: ['poor'],
//     piTags: ['moderate'],
//     dotColor: "#F7DC6F"
// },
// {
//     key: 5,
//     name: "Martin, Michael",
//     age: 61,
//     metricData: [
//     {
//         metric: "Step Count",
//         data: [1000, 1500, 2000, 2500, 3000, 4050],
//         avg: 2183.33,
//         percentage: 117,
//         decimal: 65,
//         arrow: "up"
//     },
//     {
//         metric: "Heart Rate",
//         data: [90, 87, 84, 81, 78, 74],
//         avg: 83.5,
//         percentage: 8,
//         decimal: 38,
//         arrow: "down"
//     },
//     {
//         metric: "Hrs of Sleep",
//         data: [5, 5.5, 6, 6.5, 7, 7.5],
//         avg: 6.25,
//         percentage: 25,
//         decimal: 1.25,
//         arrow: "up"
//     }
//     ],
//     pfTags: ["moderate"],
//     piTags: ["mild"],
//     dotColor: "#F6BB42"
// },
// {
//     key: 6,
//     name: 'Thompson, Noah',
//     age: 56,
//     metricData: [
//         {
//             metric: "Step Count",
//             data: [ 1500, 1800, 2100, 2400, 1900, 2200, 4422 ],
//             avg: 2383,
//             percentage: 148,
//             decimal: 18,
//             arrow: "up"
//         },
//         {
//             metric: "Heart Rate",
//             data: [ 85, 83, 81, 79, 83, 85, 72 ],
//             avg: 81.29,
//             percentage: 116,
//             decimal: 6,
//             arrow: "up"
//         },
//         {
//             metric: "Hrs of Sleep",
//             data: [ 6, 6.5, 7, 7.5, 6, 6.5, 7.3 ],
//             avg: 6.61,
//             percentage: 11,
//             decimal: 0,
//             arrow: "up"
//         }
//     ],
//     pfTags: ['severe'],
//     piTags: ['moderate'],
//     dotColor: "#3E8DF3"
// },
// {
//     key: 7,
//     name: "Brown, Charlie",
//     age: 58,
//     metricData: [
//         {
//             metric: "Step Count",
//             data: [1500, 1200, 800, 400, 600, 1000, 1500, 5043, 2000],
//             avg: 1615.89,
//             percentage: 7,
//             decimal: 28,
//             arrow: "down"
//         },
//         {
//             metric: "Heart Rate",
//             data: [85, 87, 89, 91, 93, 95, 97, 71, 100],
//             avg: 90.22,
//             percentage: 5,
//             decimal: 53,
//             arrow: "down"
//         },
//         {
//             metric: "Hrs of Sleep",
//             data: [6, 5.5, 5, 4.5, 5, 5.5, 6, null, 6.5],
//             avg: 5.44,
//             percentage: 19,
//             decimal: 85,
//             arrow: "up"
//         }
//     ],
//     pfTags: ["moderate"],
//     piTags: ["severe"],
//     dotColor: "#EA526F"
// },
// {
//     key: 8,
//     name: 'Sanders, Amelia',
//     age: 53,
//     metricData: [
//     {
//         metric: 'Step Count',
//         data: [2234, 3021, 3876, 4532, 5265, 6024, 6655, 7032, 5711, 7421],
//         avg: 4833.2,
//         percentage: 32,
//         decimal: 24,
//         arrow: 'up'
//     },
//     {
//         metric: 'Heart Rate',
//         data: [79, 78, 76, 74, 72, 70, 69, 68, 69, 67],
//         avg: 72.2,
//         percentage: 8,
//         decimal: 5.8,
//         arrow: 'down'
//     },
//     {
//         metric: 'Hrs of Sleep',
//         data: [7.2, 7.5, 7.3, 7.1, 7, 7.2, 7.5, 7.8, 7.5, 8],
//         avg: 7.45,
//         percentage: 13,
//         decimal: 95,
//         arrow: 'up'
//     }
//     ],
//     pfTags: ['moderate'],
//     piTags: ['severe'],
//     dotColor: '#6E68FF'
// },
// {
//     key: 9,
//     name: "Thomas, Ryan",
//     age: 53,
//     metricData: [
//         {
//             metric: "Step Count",
//             data: [1842, 2763, 3852, 4824, 5841, 6912, 8028, 9216, 10404, 6123, 11763],
//             avg: 7158.09,
//             percentage: 31,
//             decimal: 48,
//             arrow: "down"
//         },
//         {
//             metric: "Heart Rate",
//             data: [76, 74, 72, 70, 68, 70, 72, 74, 76, 70, 78],
//             avg: 72.36,
//             percentage: 12,
//             decimal: 36,
//             arrow: "up"
//         },
//         {
//             metric: "Hrs of Sleep",
//             data: [6.2, 6.5, 6.8, 6.5, 6.2, 6.1, 6, 6.1, 6.2, 7.8],
//             avg: 6.55,
//             percentage: 19,
//             decimal: 8,
//             arrow: "up"
//         }
//     ],
//     pfTags: ["moderate"],
//     piTags: ["moderate"],
//     dotColor: "#F5A623"
// },
// {
//     key: 10,
//     name: 'Davis, David',
//     age: 63,
//     metricData: [
//         {
//             metric: "Step Count",
//             data: [2076, 3124, 4278, 5376, 6312, 7362, 8454, 9504, 10608, 11706, 6599, 12546],
//             avg: 7567,
//             percentage: 115,
//             decimal: 11,
//             arrow: "up"
//         },
//         {
//             metric: "Heart Rate",
//             data: [70, 68, 72, 76, 80, 82, 84, 86, 88, 90, 68, 92],
//             avg: 79,
//             percentage: 107,
//             decimal: 82,
//             arrow: "up"
//         },
//         {
//             metric: "Hrs of Sleep",
//             data: [70, 68, 72, 76, 80, 82, 84, 86, 88, 90, 68, 92],
//             avg: 79,
//             percentage: 107,
//             decimal: 82,
//             arrow: "up"
//         }
//     ],
//     pfTags: [],
//     piTags: [],
//     dotColor: "#B6B6B6"
// },
// {
//     key: 11,
//     name: 'Garcia, Emily',
//     age: 51,
//     metricData: [
//     {
//         metric: 'Step Count',
//         data: [7022, 0],
//         avg: 3511,
//         percentage: 0,
//         decimal: 0,
//         arrow: 'down'
//     },
//     {
//         metric: 'Heart Rate',
//         data: [0, 0],
//         avg: 0,
//         percentage: 0,
//         decimal: 0,
//         arrow: 'none'
//     },
//     {
//         metric: 'Hrs of Sleep',
//         data: [0, 0],
//         avg: 0,
//         percentage: 0,
//         decimal: 0,
//         arrow: 'none'
//     }
//     ],
//     pfTags: [],
//     piTags: [],
//     dotColor: '#808080'
// },
// {
//     key: 12,
//     name: 'Evans, Alexander',
//     age: 55,
//     metricData: [
//     {
//         metric: 'Step Count',
//         data: [8643, 5912, 0, 0, 0, 0],
//         avg: 2425,
//         percentage: 35,
//         decimal: 0,
//         arrow: 'up'
//     },
//     {
//         metric: 'Heart Rate',
//         data: [0, 0, 0, 0, 0, 0],
//         avg: 0,
//         percentage: 0,
//         decimal: 0,
//         arrow: 'right'
//     },
//     {
//         metric: 'Hrs of Sleep',
//         data: [0, 0, 0, 0, 0, 0],
//         avg: 0,
//         percentage: 0,
//         decimal: 0,
//         arrow: 'right'
//     }
//     ],
//     pfTags: [],
//     piTags: [],
//     dotColor: '#B92B2B'
// },
// {
//     key: 13,
//     name: 'Green, Benjamin',
//     age: 54,
//     metricData: [
//         {
//             metric: 'Step Count',
//             data: [7843, 9412, 11013, 6745, 12345, 8921],
//             avg: 9168.166666666666,
//             percentage: 119,
//             decimal: 21,
//             arrow: 'up'
//         },
//         {
//             metric: 'Heart Rate',
//             data: [71, 79, 75, 83, 68, 81],
//             avg: 76.16666666666667,
//             percentage: 100,
//             decimal: 0,
//             arrow: 'right'
//         },
//         {
//             metric: 'Hrs of Sleep',
//             data: [6.5, 7.2, 8.1, 6.9, 7.8, 6.7],
//             avg: 7.25,
//             percentage: 0,
//             decimal: 0,
//             arrow: 'right'
//         }
//     ],
//     pfTags: [],
//     piTags: [],
//     dotColor: '#F78C6C'
// },
// {
//     key: 14,
//     name: 'Parker, Henry',
//     age: 59,
//     metricData: [
//         {
//             metric: 'Step Count',
//             data: [0, 0, 0, 0, 14209, 10010],
//             avg: 3679.8333333333335,
//             percentage: 385,
//             decimal: 28,
//             arrow: 'up'
//         },
//         {
//             metric: 'Heart Rate',
//             data: [83, 72, 76, 89, 70, 84],
//             avg: 79,
//             percentage: 100,
//             decimal: 0,
//             arrow: 'right'
//         },
//         {
//             metric: 'Hrs of Sleep',
//             data: [ 6.3, 7.1, 8.2, 5.9, 7.9, 6.8 ],
//             avg: 7.016666666666667,
//             percentage: 10,
//             decimal: 69,
//             arrow: 'down'
//         }
//     ],
//     pfTags: [],
//     piTags: [],
//     dotColor: '#F6D155'
// },
// {
//     key: 15,
//     name: "Scott, Dylan",
//     age: 63,
//     metricData: [
//         {
//             metric: "Step Count",
//             data: [7213, 8123, 13322, 9467, 6521, 11412],
//             avg: 9372.666666666666,
//             percentage: 122,
//             decimal: 23,
//             arrow: "up"
//         },
//         {
//             metric: "Heart Rate",
//             data: [76, 82, 69, 0, 91, 73],
//             avg: 67.66666666666667,
//             percentage: 0,
//             decimal: 0,
//             arrow: "down"
//         },
//         {
//             metric: "Hrs of Sleep",
//             data: [7.4, 7.9, 8, 6.8, 8.3, 7.6],
//             avg: 7.733333333333333,
//             percentage: 14,
//             decimal: 92,
//             arrow: "up"
//         }
//     ],
//     pfTags: [],
//     piTags: [],
//     dotColor: "#56C596"
// },
// {
//     key: 16,
//     name: "Walker, Abigail",
//     age: 64,
//     metricData: [
//     {
//         metric: "Step Count",
//         data: [8132, 9785, 0, 5209, 13912, 7721],
//         avg: 8776.5,
//         percentage: 127,
//         decimal: 27,
//         arrow: "up"
//     },
//     {
//         metric: "Heart Rate",
//         data: [80, 74, 68, 0, 71, 85],
//         avg: 64.66666666666667,
//         percentage: 0,
//         decimal: 0,
//         arrow: "right"
//     },
//     {
//         metric: "Hrs of Sleep",
//         data: [7.1, 8.5, 0, 0, 0, 0],
//         avg: 2.2666666666666666,
//         percentage: 0,
//         decimal: 0,
//         arrow: "right"
//     }
//     ],
//     pfTags: [],
//     piTags: [],
//     dotColor: "#5CDB95"
// },
// {
//     key: 17,
//     name: "Cooper, Olivia",
//     age: 57,
//     metricData: [
//         {
//             metric: "Step Count",
//             data: [0, 9445, 11002, 5830, 12843, 8923],
//             avg: 8056.666666666667,
//             percentage: 105,
//             decimal: 18,
//             arrow: "up"
//         },
//         {
//             metric: "Heart Rate",
//             data: [84, 77, 73, 0, 69, 82],
//             avg: 71.0,
//             percentage: 0,
//             decimal: 0,
//             arrow: "right"
//         },
//         {
//             metric: "Hrs of Sleep",
//             data: [0, 0, 0, 6.7, 8.0, 6.3],
//             avg: 5.0,
//             percentage: 0,
//             decimal: 0,
//             arrow: "right"
//         }
//     ],
//     pfTags: [],
//     piTags: [],
//     dotColor: "#F78C6C"
// },
// {
//     key: 18,
//     name: "Baker, Caroline",
//     age: 60,
//     metricData: [
//         {
//             metric: "Step Count",
//             data: [7212, 8799, 13212, 9821, 6245, 11413],
//             avg: 9090.333333333334,
//             percentage: 117,
//             decimal: 16,
//             arrow: "up"
//         },
//         {
//             metric: "Heart Rate",
//             data: [77, 83, 70, 0, 89, 74],
//             avg: 64.16666666666667,
//             percentage: 0,
//             decimal: 0,
//             arrow: "right"
//         },
//         {
//             metric: "Hrs of Sleep",
//             data: [0, 7.2, 0, 6.8, 0, 7.6],
//             avg: 3.433333333333333,
//             percentage: 0.0,
//             decimal: 0.0,
//             arrow: 'right'
//         }
//     ],
//     pfTags: [],
//     piTags: [],
//     dotColor: "#3E8DF3"
// },
// {
//     key: 19,
//     name: 'Young, Patrick',
//     age: 53,
//     metricData: [
//     {
//         metric: 'Step Count',
//         data: [0, 0, 0, 5421, 14210, 9123],
//         avg: 5668.333333333333,
//         percentage: 93,
//         decimal: 6,
//         arrow: 'down'
//     },
//     {
//         metric: 'Heart Rate',
//         data: [0, 0, 0, 88, 70, 81],
//         avg: 46.5,
//         percentage: 0,
//         decimal: 0,
//         arrow: 'right'
//     },
//     {
//         metric: "Hrs of Sleep",
//         data: [0, 0, 0, 5.9, 8.3, 6.8],
//         avg: 5.666666666666667,
//         percentage: 100,
//         decimal: 0,
//         arrow: "right"
//         }
//     ],
//     pfTags: [],
//     piTags: [],
//     dotColor: '#FABC3C'
//     }

]

export default patientData;
