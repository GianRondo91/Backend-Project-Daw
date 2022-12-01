//jwt para firmar token
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'pwsSecret';

const auth = async (req, res, next) => {
    //Si estoy en login o register, no verifiques el token de autenticación
    if (req.url.endsWith('/login') ||
        (req.method === 'POST' &&
            (req.baseUrl.endsWith('/users') &&
                !req.body.isAdmin))) {
        next();
        return;
    }

    try {
        const authorization = req.headers.authorization;
        const payload = jwt.verify(authorization, secret);
        req.user = {
            id: payload.idUser,
            isAdmin: payload.isAdmin
        };
        next();
    } catch (error) {
        res.sendStatus(403);
    }
}

module.exports = auth;