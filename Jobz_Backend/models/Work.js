const mongoose = require("mongoose");

const WorkSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, //Hangi kullanıcıya ait
  workTitle: { type: String, required: true }, //İş tecrübesinin adı
  workCompany: { type: String, required: true }, //İş tecrübesindeki işyerinin adı
  workLocation: { type: String, required: true }, //İş tecrübesinin yeri
  workDescription: { type: String, required: true }, //İş tecrübesinin açıklaması
  startDate: { type: Date, default: "null" }, //İş başlangıç tarihi
  endDate: { type: Date, default: "null" }, //İş bitiş tarihi
  workContinue: { type: Number, default: 0 }, //İş halen devam ediyor
  workActive: { type: Number, default: 1 },
});

module.exports = mongoose.model("Work", WorkSchema);
