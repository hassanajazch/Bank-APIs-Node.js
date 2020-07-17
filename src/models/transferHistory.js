module.exports = (sequelize, DataTypes) => {
    const TransferHistory = sequelize.define('TransferHistory', {
        id: {
            type: DataTypes.SMALLINT,
            primaryKey: true,
            autoIncrement: true,
        },
        recipientId: DataTypes.INTEGER,
        amount: DataTypes.INTEGER,
        transferPurpose: DataTypes.STRING,
        createdAt: {
            type: DataTypes.DATE,
        },
        updatedAt: {
            type: DataTypes.DATE,
        },
    });

    TransferHistory.associate = function(models) {
        models.TransferHistory.belongsTo(models.Account, {
            onDelete: 'CASCADE',
            foreignKey: {
                allowNull: false,
            },
        });
    };

    return TransferHistory;
};
