import Classes from "../model/classes.model.js";

export const getClasses = async(req, res) => {
    try {
        const classes = await Classes.find();
        res.status(200).json(classes);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};