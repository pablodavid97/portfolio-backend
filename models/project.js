module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define(
        'Project',
        {
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            image: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            order: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            url: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            tableName: 'project',
            timestamps: true, // This ensures created_at and updated_at are automatically managed
        }
    );

    return Project;
};
