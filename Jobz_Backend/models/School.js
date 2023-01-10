const mongoose = require("mongoose");

const SchoolSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, //Hangi kullanıcıya ait
  schoolName: { type: String, required: true }, //Okulun adı
  schoolLocation: { type: String, required: true }, //Okulun konumu
  schoolDescription: { type: String, required: true }, //Okul açıklaması
  startDate: { type: Date, default: "null" }, //Okul başlangıç tarihi
  endDate: { type: Date, default: "null" }, //Okul bitiş tarihi
  schoolContinue: { type: Number, default: 0 }, //Okul halen devam ediyor
  schoolActive: { type: Number, default: 1 },
});

module.exports = mongoose.model("School", SchoolSchema);
