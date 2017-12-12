'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('grandprixteams', {
            team_id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            grandprix_id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('grandprixteams');
    }
};