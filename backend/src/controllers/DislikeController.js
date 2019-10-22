const Dev = require('../models/Dev');

module.exports = {
    async store(req, res){
        const { user } = req.headers;//usuario logado
        const { devId } = req.params;
        //Acessar parametro que vem pela rota

        const loggedDev = await Dev.findById(user);//usuario logado
        const targetDev = await Dev.findById(devId);//usuario recebendo like

        if(!targetDev){//tentando dar like em usuarios que nao existe
            return res.status(400).json({ error: 'Dev not exists' });
        }

        loggedDev.dislikes.push(targetDev._id);
        //push adiciona uma informacao nova dentro do array de likes
        await loggedDev.save();

        return res.json(loggedDev);
    }
}