const userAuth = (req,res,next) => {
    const token='xyz';
    isUserauthenticated=token === 'xyz';
    if(!isUserauthenticated){
        res.status(401).send('unAutheticated!');
    }else{
        next();
    }
}

const adminAuth = (req,res,next) => {
    const token = 'xyz';
    const isAdminAuthenticated = token === 'xyz';
    if(!isAdminAuthenticated){
        res.status(401).send('unAuthenticated Admin!')
    }else{
        next();
    }
}

module.exports = {
    userAuth,
    adminAuth
}