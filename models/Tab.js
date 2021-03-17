const mongoose = require('mongoose');



// const DataPointSchema = mongoose.Schema({
//     dataType: {
//         type: String,
//         required: true,
//     },
//     label: {
//         type: String,
//         required: true,
//     },
//     description: {
//         type: String,
//         required: true,
//     },
//     properties: {},
    
// });

const TabSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    dataPoints: [],
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
});






module.exports = mongoose.model("Tabs", TabSchema)