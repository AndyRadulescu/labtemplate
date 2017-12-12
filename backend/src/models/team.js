'use strict';
module.exports = (sequelize, DataTypes) => {
  var team = sequelize.define('team', {
    team_name: DataTypes.STRING,
    team_points: DataTypes.INTEGER,
    pilot: DataTypes.STRING
  });

  team.associate = (models) => {
    console.log("-> teams belongs to grandprix");
    team.belongsToMany(models.grandprix, {
      through: {
        model: models.grandprixteam,
        unique: false,
      }, foreignKey: 'grandprix_id', onDelete: 'CASCADE'
    });
  }
  return team;
};