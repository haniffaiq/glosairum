const mongoose = require('mongoose');

const glosariumSchema = mongoose.Schema({
    kana : String,
    romaji : String,
    bindo : String,
    conKana : String,
    conRomaji : String,
    conBindo : String,
});

module.exports = mongoose.model("glosarium", glosariumSchema);