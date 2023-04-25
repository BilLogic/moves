const allWeeks = ["Week 0", "Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8", "Week 9", "Week 10", "Week 11", "Week 12"]

const stepCountAll = {
    chart: {
      id: "Step Count"
    },
    xaxis: {
      categories: allWeeks
    },
    colors: ["#fbaf5d", "#fbaf5d", "#52c41a", "#f37f89", "#52c41a"],
  }

const stepCountAnnotated = {
  chart: {
    id: "Step Count"
  },
  xaxis: {
    categories: allWeeks
  },
  annotations: {
    xaxis: [{
      x: "Week 3",
      borderColor: '#00E396',
      label: {
        borderColor: '#00E396',
        style: {
          color: '#fff',
          background: '#00E396',
        },
        text: 'First Check-in',
        }
      }, {
      x: "Week 6",
      borderColor: '#FEB019',
      label: {
        borderColor: '#FEB019',
        style: {
          color: '#fff',
          background: '#FEB019',
        },
        text: 'Second Check-in',
        }
      }, {
        x: "Week 11",
        borderColor: '#775DD0',
        label: {
          borderColor: '#775DD0',
          style: {
            color: '#fff',
            background: '#775DD0',
          },
          text: 'Third Check-in',
          }
        }, 
    ],
  }
}

// const stepCount1 = {
//     chart: {
//       id: "Step Count"
//     },
//     xaxis: {
//       categories: allWeeks.slice(0, 3)
//     }
//   }
// const stepCount2 = {
//     chart: {
//       id: "Step Count"
//     },
//     xaxis: {
//       categories: allWeeks.slice(3, 6)
//     }
//   }
// const stepCount3 = {
//     chart: {
//       id: "Step Count"
//     },
//     xaxis: {
//       categories: allWeeks.slice(6, 9)
//     }
//   }
// const stepCount4 = {
//     chart: {
//       id: "Step Count"
//     },
//     xaxis: {
//       categories: allWeeks.slice(9, 12)
//     }
//   }

  const heartRateAll = {
    chart: {
      id: "Heart Rate"
    },
    xaxis: {
      categories: allWeeks
    },
    colors: ["#fbaf5d", "#fbaf5d", "#52c41a", "#f37f89", "#52c41a"],
  }

  const heartRateAnnotated = {
    chart: {
      id: "Heart Rate"
    },
    xaxis: {
      categories: allWeeks
    },
    annotations: {
      xaxis: [{
        x: "Week 3",
        borderColor: '#00E396',
        label: {
          borderColor: '#00E396',
          style: {
            color: '#fff',
            background: '#00E396',
          },
          text: 'First Check-in',
          }
        }, {
        x: "Week 6",
        borderColor: '#FEB019',
        label: {
          borderColor: '#FEB019',
          style: {
            color: '#fff',
            background: '#FEB019',
          },
          text: 'Second Check-in',
          }
        }, {
          x: "Week 11",
          borderColor: '#775DD0',
          label: {
            borderColor: '#775DD0',
            style: {
              color: '#fff',
              background: '#775DD0',
            },
            text: 'Third Check-in',
            }
          }, 
      ],
    }
  }

  // const heartRate1 = {
  //   chart: {
  //     id: "Heart Rate"
  //   },
  //   xaxis: {
  //     categories: allWeeks.slice(0, 3)
  //   }
  // }

  // const heartRate2 = {
  //   chart: {
  //     id: "Heart Rate"
  //   },
  //   xaxis: {
  //     categories: allWeeks.slice(3, 6)
  //   }
  // }

  // const heartRate3 = {
  //   chart: {
  //     id: "Heart Rate"
  //   },
  //   xaxis: {
  //     categories: allWeeks.slice(6, 9)
  //   }
  // }

  // const heartRate4 = {
  //   chart: {
  //     id: "Heart Rate"
  //   },
  //   xaxis: {
  //     categories: allWeeks.slice(9, 12)
  //   }
  // }

const hrsOfSleepAll = {
    chart: {
      id: "Hrs of Sleep"
    },
    xaxis: {
      categories: allWeeks
    },
    colors: ["#fbaf5d", "#fbaf5d", "#52c41a", "#f37f89", "#52c41a"],
  }

  const hrsOfSleepAnnotated = {
    chart: {
      id: "Hrs of Sleep"
    },
    xaxis: {
      categories: allWeeks
    },
    annotations: {
      xaxis: [{
        x: "Week 3",
        borderColor: '#00E396',
        label: {
          borderColor: '#00E396',
          style: {
            color: '#fff',
            background: '#00E396',
          },
          text: 'First Check-in',
          }
        }, {
        x: "Week 6",
        borderColor: '#FEB019',
        label: {
          borderColor: '#FEB019',
          style: {
            color: '#fff',
            background: '#FEB019',
          },
          text: 'Second Check-in',
          }
        }, {
          x: "Week 11",
          borderColor: '#775DD0',
          label: {
            borderColor: '#775DD0',
            style: {
              color: '#fff',
              background: '#775DD0',
            },
            text: 'Third Check-in',
            }
          }, 
      ],
    }
  }

  // const hrsOfSleep1 = {
  //   chart: {
  //     id: "Hrs of Sleep"
  //   },
  //   xaxis: {
  //     categories: allWeeks.slice(0, 3)
  //   }
  // }

  // const hrsOfSleep2 = {
  //   chart: {
  //     id: "Hrs of Sleep"
  //   },
  //   xaxis: {
  //     categories: allWeeks.slice(3, 6)
  //   }
  // }

  // const hrsOfSleep3 = {
  //   chart: {
  //     id: "Hrs of Sleep"
  //   },
  //   xaxis: {
  //     categories: allWeeks.slice(6, 9)
  //   }
  // }

  // const hrsOfSleep4 = {
  //   chart: {
  //     id: "Hrs of Sleep"
  //   },
  //   xaxis: {
  //     categories: allWeeks.slice(9, 12)
  //   }
  // }

  const physicalFuncAnnotated = {
    chart: {
      id: "Physical Functioning"
    },
    xaxis: {
      categories: allWeeks
    },
    annotations: {
      xaxis: [{
        x: "Week 3",
        borderColor: '#00E396',
        label: {
          borderColor: '#00E396',
          style: {
            color: '#fff',
            background: '#00E396',
          },
          text: 'First Check-in',
          }
        }, {
        x: "Week 6",
        borderColor: '#FEB019',
        label: {
          borderColor: '#FEB019',
          style: {
            color: '#fff',
            background: '#FEB019',
          },
          text: 'Second Check-in',
          }
        }, {
          x: "Week 11",
          borderColor: '#775DD0',
          label: {
            borderColor: '#775DD0',
            style: {
              color: '#fff',
              background: '#775DD0',
            },
            text: 'Third Check-in',
            }
          }, 
      ],
    }
  }

  const painInterAnnotated = {
    chart: {
      id: "Pain Interference"
    },
    xaxis: {
      categories: allWeeks
    },
    annotations: {
      xaxis: [{
        x: "Week 3",
        borderColor: '#00E396',
        label: {
          borderColor: '#00E396',
          style: {
            color: '#fff',
            background: '#00E396',
          },
          text: 'First Check-in',
          }
        }, {
        x: "Week 6",
        borderColor: '#FEB019',
        label: {
          borderColor: '#FEB019',
          style: {
            color: '#fff',
            background: '#FEB019',
          },
          text: 'Second Check-in',
          }
        }, {
          x: "Week 11",
          borderColor: '#775DD0',
          label: {
            borderColor: '#775DD0',
            style: {
              color: '#fff',
              background: '#775DD0',
            },
            text: 'Third Check-in',
            }
          }, 
      ],
    }
  }

  export {
    stepCountAll,
    stepCountAnnotated,
    // stepCount1,
    // stepCount2,
    // stepCount3,
    // stepCount4,
    heartRateAll,
    heartRateAnnotated,
    // heartRate1,
    // heartRate2,
    // heartRate3,
    // heartRate4,
    hrsOfSleepAll,
    hrsOfSleepAnnotated,
    // hrsOfSleep1,
    // hrsOfSleep2,
    // hrsOfSleep3,
    // hrsOfSleep4
    physicalFuncAnnotated,
    painInterAnnotated
}
