module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define('Contact', {
    'First name': {
      type: DataTypes.STRING,
      allowNull: false
    },
    Surname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Phone: {
      type: DataTypes.STRING
    },
    Email: {
      type: DataTypes.STRING
    },
    Notes: {
      type: DataTypes.TEXT('tiny')
    }
  })

  return Contact
}
