import User from '../models/User.js';
import fs from 'fs-extra';
import cloudinary from 'cloudinary';


export const createUser = async ( req,res ) => {
  try {
    const { username, email, password } = req.body;
    const findExistUser = await User.findOne({username});
    const findExistEmail = await User.findOne({email});
    if(findExistUser || findExistEmail) return res.status(203).json({message: 'El usuario o email ya estan registrados!'})

    const newUser = new User({
      username,
      password,
      email
    })

    if(req.file){
      if(req.file.size > 10485760) return res.status(202).json({message:'Se permiten subir archivos hasta 10.4Mb'});
        const result = await cloudinary.v2.uploader.upload(req.file.path);
        newUser.imgUrl = `${result.secure_url}`
        await fs.unlink(req.file.path)
    } else {
        newUser.imgUrl = ''
    }

    await newUser.save()
    res.status(200).json({message:'Usuario creado con exito!'})
  } catch (error) {
    res.status(400).json({error})
  }
}

export const login = async ( req,res ) => {
  try {
    const { username, password } = req.body;

    const findExistUser = await User.findOne({username});
    if(!findExistUser) return res.status(404).json({message: 'Usuario inexistente'});

    const foundUser = await User.findOne({username});
    const sendUser = await User.findOne({username},{password:0})

    const matchPassword = await User.comparePassword(password, foundUser.password);

    if(!matchPassword) return res.status(401).json({message: 'Contraseña incorrecta.'})
    
    res.status(200).json(sendUser)
  } catch (error) {
    return res.status(400).json({error}) 
  }
}