module.exports = (sequelize, DataTypes) => {
    const Account = sequelize.define('Account', {
        id: {
            type: DataTypes.SMALLINT,
            primaryKey: true,
            autoIncrement: true,
        },
        accountNumber: DataTypes.STRING,
        deposit: DataTypes.INTEGER,
        createdAt: {
            type: DataTypes.DATE,
        },
        updatedAt: {
            type: DataTypes.DATE,
        },
    });

    Account.associate = function(models) {
        models.Account.belongsTo(models.User, {
            onDelete: 'CASCADE',
            foreignKey: {
                allowNull: false,
            },
        });
        models.Account.hasMany(models.TransferHistory);
    };

    return Account;
};
