module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Rota de atendimentos') )

    app.post('/atendimentos', (req, res) => {
        console.log("post atendimentos")
        res.send('Você está realizando um post na rota de atendimentos') 
    })

}
