module.exports = {
    create: (req, res) => {
        let db = req.app.get('db')
        let { name, description, price, image_url } = req.body
        db.create_product([name, description, price, image_url]).then(response => {
            res.status(200).send(response)
        }).catch(err => {
            console.error('error creating product', err)
            res.status(500).send(err)
        })
    },

    getOne: (req, res) => {
        let db = req.app.get('db')
        let { id } = req.params
        db.read_product(id).then(response => {
            res.status(200).send(response)
        }).catch(err => {
            console.error('error getting one product', err)
            res.status(500).send(err)
        })
    },

    getAll: (req, res) => {
        let db = req.app.get('db')
        db.read_products().then(response => {
            res.status(200).send(response)
        }).catch(err => {
            console.error('error getting all products', err)
            res.status(500).send(err)
        })
    },

    update: (req, res) => {
        let db = req.app.get('db')
        let { id } = req.params
        let { desc } = req.query
        db.update_product(id, desc).then(response => {
            res.status(200).send(response)
        }).catch(err => {
            console.error('error updating products', err)
            res.status(500).send(err)
        })
    },

    delete: (req, res) => {
        let db = req.app.get('db')
        let { id } = req.params
        db.delete_product(id).then(response => {
            res.status(200).send(response)
        }).catch(err => {
            console.error('error deleting products', err)
            res.status(500).send(err)
        })
    }
}