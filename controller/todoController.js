const List = require('../model/List');

const getList = async (req, res) => {
    //check if there's a request body
    if (!req?.body) {
        return res.status(400).json({ 'message': 'No request found.' })
    }
    const items = await List.find({});
    //check if there are items on the list
if (!items) { 
    return res.status(404).json({ 'message': 'You have no enlisted activities!'})
}
    return res.status(200).json(items);
};

const addItem = async (req, res) => {
    //check if there is an item in the request body
    if (!req?.body?.item) {
        return res.status(400).json({ 'message': 'You have to add an activity to your todo list.' })
    }
    const { item } = req.body;
    const duplicate = await List.findOne({ item: item });
    //check if the item already exists
    if (duplicate) {
        return res.status(409).json({ 'message': 'Activity already exists on the list.' })
    }
    //if there's no duplicate, continue...
    try {
            const newList = await List.create({
                item: item
            })
            return res.status(200).json(newList);
    } catch(err) {
        throw err;
    }
}


const deleteItem = async (req, res) => {
    //confirm if there's a request body
    if (!req.body || !req?.params?.item ) {
        return res.status(400).json({ message: "No request found." });
    }
    //get the item parameter
    const { item } = req.params;
    //replace the hyphens in the item name with spaces
    const modifiedItem = item.replace(/-/g, " ");

    //check if the item exists on the todo list
    const existing = await List.findOne({ item: modifiedItem })
    if (!existing) {
        return res.status(404).json({ message: 'Item not found on the list.' });
    }
    try {
            const newList = await List.deleteOne({ item: modifiedItem });
            return res.status(200).json(newList)
    } catch (err) {
        throw err;
    }
}


module.exports = { getList, addItem, deleteItem };