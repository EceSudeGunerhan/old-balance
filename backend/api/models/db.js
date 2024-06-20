var mongoose = require("mongoose");


/* Local */
// const dbURI = "mongodb://localhost:27017/oldbalance";

/* Remote */
const dbURI = 'mongodb+srv://ecegunerhan:k2QaLsUgPg0UDtNv@cluster0.rxqhbyo.mongodb.net/'


mongoose.connect(dbURI)

// bağlandığında konsola bağlantı bilgilerini yazdırır.
mongoose.connection.on("connected", function(){
    console.log(dbURL + " Adresine Bağlandı");
});


//bağlantı hatası olduğunda konsola hata bilgilerini yazdırır.
mongoose.connection.on("error", function(){
    console.log(dbURL + " Adresine Bağlantı Başarısız");
});


//bağlantı kesildiğinde konsola kesilme bilgisini yazdırır.
mongoose.connection.on("disconnected", function(){
    console.log(dbURL + " Adresi ile Bağlantı Kesildi");
});

//Ctrl+C kesmesiyle programı ve bağlantıyı sonlandırmak için
process.on("SIGINT", function(){
    console.log("Uygulama Kapatıldı");

    mongoose.connection.close();
    process.exit(0);
});

require("./venue");

// burada mongodb veritabanına bağlanıp bağlanmadığımızı
// kontrol ediyoruz.