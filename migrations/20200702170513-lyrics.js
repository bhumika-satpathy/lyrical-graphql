module.exports = {
  up: async (queryInterface, Sequelize) => Promise.all([
    queryInterface.changeColumn(
      'lyrics',
      'song',
      {
        type: Sequelize.STRING,
        allowNull: true,
      },
    ),
  ]), /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
