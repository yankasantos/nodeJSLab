const express = require ('express');
const fileupload = require ('express-fileupload');

const app = express();

app.use(fileupload());

app.post('/upload', (req, res) =>{
    if(req.files === null){
        return res.status(400).json({mensagem: 'Não há upload de arquivo'});
    }

    const file = req.files.file;

    file.mv(`${__dirname}/client/public/uploads/${file.name}`, err =>{
        if(err){
            console.error(err);
            return res.status(500).send(err);
        }

    })

    res.json({ fileName: file.name, filePaph: `/upload/${file.name}`});

});

app.listen(5000,() => console.log('Server Started...'));
