import patientData from "../PatientData"

// idea for aggregate, make it the last index for each data and then add that to the series on Patient.js

const stepCountData = [
    {
        name: patientData[0].name,
        data: patientData[0].metricData[0].data
    },
    {
        name: patientData[1].name,
        data: patientData[1].metricData[0].data
    },
    {
        name: patientData[2].name,
        data: patientData[2].metricData[0].data
    },
    {
        name: patientData[3].name,
        data: patientData[3].metricData[0].data
    },
    {
        name: patientData[4].name,
        data: patientData[4].metricData[0].data
    },
    // {
    //     name: patientData[5].name,
    //     data: patientData[5].metricData[0].data
    // },
    // {
    //     name: patientData[6].name,
    //     data: patientData[6].metricData[0].data
    // },
    // {
    //     name: patientData[7].name,
    //     data: patientData[7].metricData[0].data
    // },
    // {
    //     name: patientData[8].name,
    //     data: patientData[8].metricData[0].data
    // },
    // {
    //     name: patientData[9].name,
    //     data: patientData[9].metricData[0].data
    // },
    // {
    //     name: patientData[10].name,
    //     data: patientData[10].metricData[0].data
    // },
    // {
    //     name: patientData[11].name,
    //     data: patientData[11].metricData[0].data
    // },
    // {
    //     name: patientData[12].name,
    //     data: patientData[12].metricData[0].data
    // },
    // {
    //     name: patientData[13].name,
    //     data: patientData[13].metricData[0].data
    // },
    // {
    //     name: patientData[14].name,
    //     data: patientData[14].metricData[0].data
    // },
    // {
    //     name: patientData[15].name,
    //     data: patientData[15].metricData[0].data
    // },
    // {
    //     name: patientData[16].name,
    //     data: patientData[16].metricData[0].data
    // },
    // {
    //     name: patientData[17].name,
    //     data: patientData[17].metricData[0].data
    // },
    // {
    //     name: patientData[18].name,
    //     data: patientData[18].metricData[0].data
    // },
    // {
    //     name: patientData[19].name,
    //     data: patientData[19].metricData[0].data
    // },
]

const heartRateData = [
    {
        name: patientData[0].name,
        data: patientData[0].metricData[1].data
    },
    {
        name: patientData[1].name,
        data: patientData[1].metricData[1].data
    },
    {
        name: patientData[2].name,
        data: patientData[2].metricData[1].data
    },
    {
        name: patientData[3].name,
        data: patientData[3].metricData[1].data
    },
    {
        name: patientData[4].name,
        data: patientData[4].metricData[1].data
    },
    // {
    //     name: patientData[5].name,
    //     data: patientData[5].metricData[1].data
    // },
    // {
    //     name: patientData[6].name,
    //     data: patientData[6].metricData[1].data
    // },
    // {
    //     name: patientData[7].name,
    //     data: patientData[7].metricData[1].data
    // },
    // {
    //     name: patientData[8].name,
    //     data: patientData[8].metricData[1].data
    // },
    // {
    //     name: patientData[9].name,
    //     data: patientData[9].metricData[1].data
    // },
    // {
    //     name: patientData[10].name,
    //     data: patientData[10].metricData[1].data
    // },
    // {
    //     name: patientData[11].name,
    //     data: patientData[11].metricData[1].data
    // },
    // {
    //     name: patientData[12].name,
    //     data: patientData[12].metricData[1].data
    // },
    // {
    //     name: patientData[13].name,
    //     data: patientData[13].metricData[1].data
    // },
    // {
    //     name: patientData[14].name,
    //     data: patientData[14].metricData[1].data
    // },
    // {
    //     name: patientData[15].name,
    //     data: patientData[15].metricData[1].data
    // },
    // {
    //     name: patientData[16].name,
    //     data: patientData[16].metricData[1].data
    // },
    // {
    //     name: patientData[17].name,
    //     data: patientData[17].metricData[1].data
    // },
    // {
    //     name: patientData[18].name,
    //     data: patientData[18].metricData[1].data
    // },
    // {
    //     name: patientData[19].name,
    //     data: patientData[19].metricData[1].data
    // },
]

const hrsOfSleepData = [
    {
        name: patientData[0].name,
        data: patientData[0].metricData[2].data
    },
    {
        name: patientData[1].name,
        data: patientData[1].metricData[2].data
    },
    {
        name: patientData[2].name,
        data: patientData[2].metricData[2].data
    },
    {
        name: patientData[3].name,
        data: patientData[3].metricData[2].data
    },
    {
        name: patientData[4].name,
        data: patientData[4].metricData[2].data
    },
    // {
    //     name: patientData[5].name,
    //     data: patientData[5].metricData[2].data
    // },
    // {
    //     name: patientData[6].name,
    //     data: patientData[6].metricData[2].data
    // },
    // {
    //     name: patientData[7].name,
    //     data: patientData[7].metricData[2].data
    // },
    // {
    //     name: patientData[8].name,
    //     data: patientData[8].metricData[2].data
    // },
    // {
    //     name: patientData[9].name,
    //     data: patientData[9].metricData[2].data
    // },
    // {
    //     name: patientData[10].name,
    //     data: patientData[10].metricData[2].data
    // },
    // {
    //     name: patientData[11].name,
    //     data: patientData[11].metricData[2].data
    // },
    // {
    //     name: patientData[12].name,
    //     data: patientData[12].metricData[2].data
    // },
    // {
    //     name: patientData[13].name,
    //     data: patientData[13].metricData[2].data
    // },
    // {
    //     name: patientData[14].name,
    //     data: patientData[14].metricData[2].data
    // },
    // {
    //     name: patientData[15].name,
    //     data: patientData[15].metricData[2].data
    // },
    // {
    //     name: patientData[16].name,
    //     data: patientData[16].metricData[2].data
    // },
    // {
    //     name: patientData[17].name,
    //     data: patientData[17].metricData[2].data
    // },
    // {
    //     name: patientData[18].name,
    //     data: patientData[18].metricData[2].data
    // },
    // {
    //     name: patientData[19].name,
    //     data: patientData[19].metricData[2].data
    // },
]

const physicalFuncData = [
    {
        name: patientData[0].name,
        data: patientData[0].pfScore
    },
    {
        name: patientData[1].name,
        data: patientData[1].pfScore
    },
    {
        name: patientData[2].name,
        data: patientData[2].pfScore
    },
    {
        name: patientData[3].name,
        data: patientData[3].pfScore
    }
]

const painInterData = [
    {
        name: patientData[0].name,
        data: patientData[0].piScore
    },
    {
        name: patientData[1].name,
        data: patientData[1].piScore
    },
    {
        name: patientData[2].name,
        data: patientData[2].piScore
    },
    {
        name: patientData[3].name,
        data: patientData[3].piScore
    }
]

export {
    stepCountData,
    heartRateData,
    hrsOfSleepData,
    physicalFuncData,
    painInterData
}
