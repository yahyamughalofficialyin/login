const mongoose = require('mongoose');
const { Roles } = require('../Controllers/RoleController');

const Role_model = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Role Name is Required"],
            unique: true,
            trim: true,
        },
        Status:{
            type: String,
            required: [true, "Status is Required"],
            enum: ['active', 'inactive'],
            default: 'active',
        }
    },
    {
        timestamps: true,
    }
);

const Roles = mongoose.model('Role', Role_model);
module.exports = Roles