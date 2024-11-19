const mongoose = require("mongoose")

const Role_model = mongoose.Schema({
    role_name: {
        type: String, required: true
    },
    Status: {
        type: String, required: true
    }
})


const Roles = mongoose.model(
    "Roles", Role_model
)

module.exports = {Roles}