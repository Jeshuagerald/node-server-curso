//========================
//Puerto
//========================
process.env.PORT = process.env.PORT || 3000;

// =============================
// Entorno
// =============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// =============================
// Vencimiento del token
// =============================
// 60 segundos
// 60 minutos
// 24 horas
// 30 dias
process.env.CADUCIDAD_TOKEN = '48h'; //60 * 60 * 24 * 30'';

// =============================
// SEED de autenticación
// =============================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

// =============================
// Entorno
// =============================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI; //'mongodb+srv://jeshuagerald:PdR0mFiR58LujORC@cluster0.rqnev.mongodb.net/cafe';
}

process.env.URLDB = urlDB;

// =============================
// Google client ID
// =============================
process.env.CLIENT_ID = process.env.CLIENT_ID || '954312775484-errdipgu2a8bv2iejde311a6qt7j4b8v.apps.googleusercontent.com';