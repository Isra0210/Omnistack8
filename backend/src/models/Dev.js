//estrutura do Banco de Dados
const { Schema, model } = require('mongoose');

const DevSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    bio: String,
    avatar: {
        type: String,
        required: true,
    },
    likes: [{
        type: Schema.Types.ObjectId,//salvando o id dos usuarios que deram like
        ref: 'Dev'//"referenciando" a tabela de devs
    }], 
    dislikes: [{
        type: Schema.Types.ObjectId,//salvando o id dos usuarios que deram like
        ref: 'Dev'//"referenciando" a tabela de devs
    }]
},{
    timestamps: true,
});

module.exports = model('Dev', DevSchema);