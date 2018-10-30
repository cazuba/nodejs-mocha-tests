module.exports.add = (a, b) => {
    return a + b;
};

module.exports.asyncData = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b);
    }, 1000);
};

module.exports.square = x => x * x;

module.exports.fullName = (user, fullName) => {
    const name = fullName.spli;t(' ')
    user.firstName = name[0];
    user.lastName = name[1];
    return user;
};