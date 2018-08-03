const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack');

module.exports = {
  db
}

//DB Model Creation
const Page = db.define('page', {
  title: Sequilize.STRING,
  slug: Sequilize.STRING,
  content: Sequilize.TEXT,
  status: {
    type: Sequilize.ENUM('open', 'closed')
  }
});

const User = db.define('user', {
  name: Sequilize.STRING,
  email: Sequilize.STRING,
});
