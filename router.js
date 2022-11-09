import express from "express"
import bookModel from "./bookModel.js";
const router = express.Router();

router.get('/', async (req, res) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    try {
        const books = await bookModel.find();
        return res.status(200).json(books);
    } catch (error) {
        return res.status(404).json({message: error.message});
    }
})

router.post('/', async (req, res) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    try {
        const book =await bookModel.create(req.body);
        return res.status(201).json(book);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
});

router.put('/update/:id', async (req, res) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    try {
        const {id} = req.params;
        const {name, author, price, image, status} = req.body;
        const updatedBooks = await bookModel.findByIdAndUpdate(id,
            {name, author, price, image, status}, {new: true});
        return res.status(200).json(updatedBooks);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
})

router.delete('/delete/:id', async (req, res) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    try {
        const {id} = req.params;
        const deleteBook = await bookModel.findByIdAndDelete(id);

        return res.status(202).json(deleteBook);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
})

export default router;