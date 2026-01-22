const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect(
        "mongodb://bharatkwork_db_user:NsWexDF89mox2Xsc@ac-ymvwihy-shard-00-00.zgwl6ya.mongodb.net:27017,ac-ymvwihy-shard-00-01.zgwl6ya.mongodb.net:27017,ac-ymvwihy-shard-00-02.zgwl6ya.mongodb.net:27017/devTinder?replicaSet=atlas-9ut2co-shard-0&ssl=true&authSource=admin"
    );
};

module.exports = connectDB;