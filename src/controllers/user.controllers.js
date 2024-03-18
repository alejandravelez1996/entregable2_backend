const catchError = require('../utils/catchError');
const User = require('../models/User');
// traer usuarios
const getAll = catchError(async(req, res) => {
    const users = await User.findAll()
    return res.json(users)
});
// create users
const create = catchError(async(req, res)=>{
    const {first_name, last_name, email, password, birthday } =req.body
    const user = await User.create({ 
        first_name:first_name, 
        last_name:last_name, 
        email:email, 
        password:password, 
        birthday:birthday,
    })
    return res.status(201).json(user)
})
//traer usuario de acuerdo a su id 
const getOneUser = catchError(async(req, res) => {
    const { id } = req.params
    const user = await User.findByPk(id)
return res.json(user)
});

//eliminar un usuario de acuerdo a su id 
const removeUser = catchError(async(req, res) => {
    const { id } = req.params;
    await User.destroy({ where: {id}});
return res.sendStatus(204);
});

//actualizar un usuario de acuerdo a su id 
const updateUser = catchError(async(req, res) => {
    const { id } = req.params;
    const { first_name, last_name, email, password, birthday } = req.body;
    const user = await User.update(
            { 
                    first_name: first_name, 
                    last_name: last_name,
                    email: email,
                    password: password,
                    birthday: birthday
            }, { where: {id:id}, returning: true }
    );
return res.json(user);
});



module.exports = {
    getAll,
    create,
    getOneUser,
    removeUser,
    updateUser
}
