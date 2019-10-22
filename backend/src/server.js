const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');//Acesso para outros ip=> Frontend


const server = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-e2ymb.gcp.mongodb.net/omnistack?retryWrites=true&w=majority',{
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);
