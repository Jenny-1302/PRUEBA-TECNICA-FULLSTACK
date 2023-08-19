const Elemento = require("../models/Elemento");

exports.createElement = async (req, res) => {
    try {

        let element;

        // Creamos nuestro elemento
        element = new Elemento(req.body);

        await element.save();
        res.send(element);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.getElements = async (req, res) => {

    try {

        const elements = await Elemento.find();
        res.json(elements);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.updateElement = async (req, res) => {
    try {

        const { element, status, descripcion } = req.body;
        let elemento = await Elemento.findById(req.params.id);

        if (!elemento) {
            res.status(404).json({ msg: 'No existe el elemento' });
        }

        elemento.element = element;
        elemento.status = status;
        elemento.descripcion = descripcion;

        elemento = await Elemento.findOneAndUpdate({ _id: req.params.id }, elemento, { new: true });
        res.json(elemento);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.getOnlyElement = async (req, res) => {
    try {

        let elemento = await Elemento.findById(req.params.id);

        if (!elemento) {
            res.status(404).json({ msg: 'No existe el elemento' });
        }


        res.json(elemento);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


exports.deleteElement = async (req, res) => {
    try {

        let elemento = await Elemento.findById(req.params.id);

        if (!elemento) {
            res.status(404).json({ msg: 'No existe el elemento' });
        }

        await Elemento.findOneAndRemove({ _id: req.params.id });


        res.json({msg: 'Elemento eliminado'});

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}