'use strict';
module.exports = (sequelize, DataTypes) => {
  var grandprix = sequelize.define('grandprix', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    number_km: DataTypes.INTEGER,
    difficulty: DataTypes.INTEGER,
    date: DataTypes.DATE
  });

  grandprix.associate = (models) => {
    console.log("-> grandprix has many tickets,teams");
    grandprix.belongsToMany(models.team, {
      through: {
        model: models.grandprixteam,
        unique: false,
      }, foreignKey: 'team_id'
    });
    grandprix.hasMany(models.ticket, { foreignKey: 'grandprix_id' });
  }

  return grandprix;
};