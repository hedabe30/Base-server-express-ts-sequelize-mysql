import { Request, Response } from "express";
import User from "../db/models/user";


export const getUsers = async (req: Request, res: Response) => {

  const users = await User.findAll();

  res.json({
    msg: 'Usuarios',
    users,
  });
}

export const getUser = async (req: Request, res: Response) => {

  const { id } = req.params;
  const user = await User.findByPk(id);

  if (!user) {
    return res.status(404).json({msg: `El usuario con id ${id} no existe en base de datos`});
  }

  res.json({
    msg: 'Usuario',
    user
  });
}

export const createUser = async (req: Request, res: Response) => {

  const { body } = req;

  try {
    const emailExists = await User.findOne({
      where: { email: body.email }
    });

    if (emailExists) {
      return res.status(400).json({
        msg: 'Ya existe un usuario con el email',
      });
    }

    const user = new User(body);
    await user.save();
    
    res.json({
      msg: 'Usuario creado',
      body
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'Error interno',
    });
  }

}

export const updateUser = async (req: Request, res: Response) => {
  
  const { id } = req.params;
  const { body } = req;

  try {
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({
        msg: `El usuario con id ${id} no existe en base de datos`
      });
    }

    await user.update( body );
    
    res.json({
      msg: 'Usuario actualziado',
      user
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'Error interno',
    });
  }

}

export const deleteUser = async (req: Request, res: Response) => {

  const { id } = req.params;

  try {
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({
        msg: `El usuario con id ${id} no existe en base de datos`
      });
    }

    await user.update( { status: false } );
    
    res.json({
      msg: 'Usuario eliminado',
    });
  } catch (error) {
    
  }
}