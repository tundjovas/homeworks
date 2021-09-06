
const fs = require('fs/promises');

exports.writeToFile = async (data, path) => {
    await fs.writeFile(path, data);
};

