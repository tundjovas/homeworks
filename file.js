const fs = require('fs/promises');

module.exports.writeToFile = async(data, path) => {
    await fs.writeFile(path, data);
}

module.exports.readFromFile = async(path) => {
    const data = await fs.readFile(path);
    return data.toString();
}