const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
    MongoClient.connect('mongodb+srv://thanhson:bo123654789@cluster0.suhpz.mongodb.net/Cluster0?retryWrites=true&w=majority')
    .then(client => {
        _db = client.db();

        console.log('Connected',client);
        callback();
    })
    .catch(err => {
        console.log('err');
        throw err;

    });
}
const getDb = () => {
    if (_db) {
      return _db;
    }
    throw 'No database found!';
  };

module.exports = {
    mongoConnect: mongoConnect,
    getDb: getDb
};



