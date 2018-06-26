const bcrypt = require('bcrypt')
const saltRounds = 10

function hashPassword (user, options) {

  if (user.changed('password')) {
    return bcrypt
      .hash(user.password, saltRounds)
      .then(hash => user.setDataValue('password', hash))
  } else { return }
}

function comparePassword (password) {
    return bcrypt
      .compare(password, this.password)
      .then(res => { return res })
  }

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    login: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCreate: hashPassword,
      beforeUpdate: hashPassword
    }
  })

  User.prototype.comparePassword = comparePassword

  return User
}
