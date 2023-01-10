const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  jobName: { type: String, required: true }, //İşin adı / aranan iş konumu
  jobWorkplaceName: { type: String, required: true }, //İş yerinin adı
  jobLocation: { type: String, required: true }, //Berlin Isparta vs..
  jobEmployeesCount: { type: Number, required: true }, //Çalışan sayısı
  jobDescription: { type: String, required: true }, //İş hakkında istenen ve verilecek özellikler hakkında bilgi detaylı
  jobAboutWorkplace: { type: String, required: true }, //İş yeri hakkında detaylı bilgi
  jobEmail: { type: String, required: true }, //iş email
  jobSocialLinks: { type: String, required: true }, //Facebook Instagram Linkedin Website
  jobCreateAt: { type: Date, default: Date.now }, //ilanın oluşturulduğu tarih
  jobApplicationAt: { type: Date, default: Date.now }, //İşe alımın başladığı tarih
  jobApplicationEnd: { type: Date, default: Date.now }, //İşe alımın biteceği tarih
  jobType: { type: String, required: true }, //Full time Part time Intern Other
  jobOnsiteRemote: { type: String, required: true }, //At the workplace Remote hybrid
  jobGender: { type: String, required: true }, //(m/w/d) Erkek Kadın Eşcinsel
  jobLogo: { type: String, required: true }, //İş yerinin logosu
  jobActive: { type: Number, default: 1 }, //İş aktif mi pasif mi
  createUser: { type: mongoose.Schema.Types.ObjectId }, //İşi oluşturan kişi kim
  jobLogo: {
    type: String,
    default:
      "https://media.istockphoto.com/id/1248723171/vector/camera-photo-upload-icon-on-isolated-white-background-eps-10-vector.jpg?s=612x612&w=0&k=20&c=e-OBJ2jbB-W_vfEwNCip4PW4DqhHGXYMtC3K_mzOac0=",
  }, //iş yeri logosu
  jobActive: { type: Number, default: 1 }, //iş aktif mi değil mi
});

module.exports = mongoose.model("Job", JobSchema);
