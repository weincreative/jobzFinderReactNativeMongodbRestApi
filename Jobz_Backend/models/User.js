const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userName: { type: String, required: true, min: 5, max: 50 }, //Kullanıcı adı
  userEmail: { type: String, required: true, min: 6, max: 255, unique: true }, //Kullanıcı mail adresi
  userPassword: { type: String, required: true, min: 6, max: 1024 }, //Kullanıcı şifresi
  userPhone: { type: Number, required: true }, //Kullanıcı telefonu
  userCreateAt: { type: Date, default: Date.now }, //Kullanıcı oluşturulduğu tarih
  userGender: { type: String, required: true }, //Kullanıcı cinsiyeti
  userAddress: { type: String, default: "null" }, //Kullanıcı adresi
  userBirthday: { type: Date, default: "null" }, //Kullanıcı doğum günü
  userDrivingLicence: { type: String, default: "null" }, //Kullanıcı ehliyet bilgisi
  userMarried: { type: String, default: "null" }, //Kullanıcı evli mi
  userChilderens: { type: Number, default: 0 }, //Kullanın çocuk sayısı
  userLanguages: { type: String, default: "null" }, //Kullanıcı bilgiği diller Almanca.A1-A2-B1-B2-C1-C2-CC,Türkçe.CC
  userSkills: { type: String, default: "null" }, //Kullanıcı becerileri
  userHobbies: { type: String, default: "null" }, //Kullanıcı hobileri
  userAuthority: { type: String, default: "null" }, //Kullanıcı Yetkileri
  userPhoto: {
    type: String,
    default:
      "https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png",
  },
  userBackgrounPhoto: {
    type: String,
    default:
      "https://media.istockphoto.com/id/1248723171/vector/camera-photo-upload-icon-on-isolated-white-background-eps-10-vector.jpg?s=612x612&w=0&k=20&c=e-OBJ2jbB-W_vfEwNCip4PW4DqhHGXYMtC3K_mzOac0=",
  },
  userActive: { type: Number, default: 1 },
});

module.exports = mongoose.model("User", UserSchema);

// OKUL,STAJ,İŞ TECRÜBELERİ, GEREKLİ BELGELER
