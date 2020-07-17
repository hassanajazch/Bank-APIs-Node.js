module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.SMALLINT,
            primaryKey: true,
            autoIncrement: true,
        },
        name: DataTypes.STRING,
        phone: DataTypes.STRING,
        createdAt: {
            type: DataTypes.DATE,
        },
        updatedAt: {
            type: DataTypes.DATE,
        },
    });

    User.associate = function(models) {
        models.User.hasMany(models.Account);
    };

    return User;
};
