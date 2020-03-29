const connection = require('../database/connections');
const crypto = require('crypto');

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    },

    async create(request, response) {
        /* captura dados da requisicao (body) */
        const { nome, email, whatsapp, city, uf } = request.body;
        /* cria um ID randomico utilizando uma funcao da Lib crypto */
        const id = crypto.randomBytes(4).toString('HEX');

        /* gravar dados no BD  
           async + await = utilizados pois o comando insert por demorar um pouco pra retornar
                           desta forma, precisamos informar que queremos aguardar a finalizacao
                           do comando para poder fazer o retorno (response)
        */

        await connection('ongs').insert({
            id,
            nome,
            email,
            whatsapp,
            city,
            uf,
        })

        /* retorno somente o ID gerado automaticamente */
        return response.json({ id });
    }
}