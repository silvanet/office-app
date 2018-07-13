module.exports = {
  PORT: process.env.PORT || 8080,
  MORGAN: process.env.MORGAN || 'dev',
};

// exports.DATABASE_URL = process.env.DATABASE_URL ||
//                        global.DATABASE_URL ||
//                        (process.env.NODE_ENV === 'production' ?
//                             'mongodb://officeAdmin:bravo357@ds131511.mlab.com:31511/office_db' :
//                             'mongodb://localhost:27017/testOffice');
// 	exports.PORT = process.env.PORT || 8080;
// 	exports.MORGAN = process.env.MORGAN || 'dev';
