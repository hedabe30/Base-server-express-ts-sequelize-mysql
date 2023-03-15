import { Request, Response } from "express";


export const getUsers = (req: Request, res: Response) => {

  res.json({
    msg: 'Usuarios'
  });
}

export const getUser = (req: Request, res: Response) => {

  const { id } = req.params;

  res.json({
    msg: 'Usuario',
    id
  });
}

export const createUser = (req: Request, res: Response) => {

  const { body } = req;

  res.json({
    msg: 'Crear usuario',
    body
  });
}

export const updateUser = (req: Request, res: Response) => {
  
  const { id } = req.params;
  const { body } = req;

  res.json({
    msg: 'Actualizar usuario',
    id,
    body
  });
}

export const deleteUser = (req: Request, res: Response) => {

  const { id } = req.params;

  res.json({
    msg: 'Crear usuario',
    id
  });
}