import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/utube', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
const handleOpen = () => console.log('✅ Connected to DB');
const handleError = (e) => console.log('❌ DB Error', e);

db.on('error', handleError);
db.once('open', handleOpen);
