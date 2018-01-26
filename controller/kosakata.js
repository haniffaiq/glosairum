const DataKata = require('../models/kosakata');

const kosakata = app => {
    //create
    app.post('/api/kosakata', (req, res) => {
        const newDataKata = new DataKata(req.body);
        newDataKata.save()
        .then(() =>{
            res.json({
                "info" : "kosakata sudah di post"
            });
        }); 
    });
    //Read
    app.get('/api/kosakata/', (req, res) => {
        DataKata.find()
        .then(kata => {
            res.json(kata)
        }).catch(err => {
            console.error(err)
        })
    });
    //Update
    app.put('/api/kosakata/:id', (req, res) =>{
        DataKata.update({_id : req.params.id}, req.body)
        .then(
            res.json({
                info : 'kosakata telah diubdate'
            })
        )
    })
    
    //Delete
    app.delete('/api/kosakata/:id', (req, res) => {
        DataKata.remove({ _id: req.params.id}
        )
          .then(() => {
            res.json({ info: 'kosakata removed successfully' })
          })
          .catch(err => console.error(err))
      })


}

module.exports = kosakata;