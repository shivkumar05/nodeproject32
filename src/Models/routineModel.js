const mongoose = require("mongoose");

const routineSchema = new mongoose.Schema({
    userId: { type: String },
    routineId: { type: String },
    drills: { type: String, require: true },
    date: { type: String, require: true },
    time: { type: String, require: true },
    category: { type: Number, require: true },
    repetation: { type: Number, require: true },
    sets: { type: Number, require: true },
    comment: { type: String },
    drill_id: { type: String, require: true },
    isCompleted: { type: Boolean, default: false },
    end_date: { type: String, require: true },
    // dates: [{
    //     date: { type: String, require: true },
    //     available: { type: Boolean, default: false }
    // }]

}, { timestamps: true });

module.exports = mongoose.model("routine", routineSchema)




// let result = [];
// dateRange.forEach((date) => {
//     let dateObj = { date: date, categories: [] };
//     // console.log(dateObj, "22222")
//     routines.forEach((routine) => {
//         let date = routine.date;
//         // console.log(routine.category, "111")
//         if (date) {
//             dateObj.categories.push(routine.category);
//         } else {
//             date = {
//                 date: date,
//                 categories: [routine.category],
//             };
//         }
//     });
//     result.push(dateObj);
// });