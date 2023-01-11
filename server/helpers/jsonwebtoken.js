const jwt = require('jsonwebtoken');
const secretCode = process.env.SECRET_CODE || 'pocong';

const tokenGenerator = (data) => {
    const { id, name, level, image, email, classId, partyId } = data;
    return jwt.sign({
        id, name, level, image, email, classId, partyId
    }, secretCode);
}

const tokenVerifier = (data) => {
    return jwt.verify(data, secretCode);
}

module.exports = {
    tokenGenerator, tokenVerifier
}