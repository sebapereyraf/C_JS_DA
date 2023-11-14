const Usuarios = require('../models/usuarios_models');
const bcrypt = require('bcrypt');

module.exports = {

  createUsuarios: async (req, res) => {
    try {
      // Obténgo los datos JSON del cuerpo de la solicitud
      const { nombre, apellido, edad, email, ciudad, provincia, pais, usuario, password, rol } = req.body;

      // Verifico si el usuario ya está registrado
      const qExisteUsuario = await Usuarios.findOne({ usuario });

      if (qExisteUsuario) {
          return res.status(400).json({ message: 'Ya existe un usuario registrado con ese nombre' });
      }

      // Verifico si el correo ya está registrado
      const qExisteEmail = await Usuarios.findOne({ email });

      if (qExisteEmail) {
          return res.status(400).json({ message: 'Este email ya se encuentra registrado' });
      }

      // Encripto la contraseña antes de guardarla
      const hashedPassword = await bcrypt.hash(password, 10); // Recomiendan utilizar 10 como número de saltRounds

      // Creo un nuevo objeto en la base de datos
      const nuevoUsuario = new Usuarios({
        
        nombre,
        apellido,
        edad,
        email,
        ciudad,
        provincia,
        pais,
        usuario,
        password: hashedPassword, 
        rol,
      });

      // Guarda el nuevo objeto en la base de datos
      await nuevoUsuario.save();

      res.status(201).json({ message: 'Elemento creado con éxito' });
    } catch (error) {
      console.error('Error al crear el elemento:', error);
      res.status(500).json({ message: 'Error interno del servidor. Intentelo mas tarde' });
    }
  },

  loginUser: async (req, res) => {
    try {
        const { usuario, password } = req.body;

        const user = await Usuarios.findOne({ usuario });
        //const rol = await Usuarios.findOne(user);

        if (!user) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
            req.session.user = user; // Establesco la sesión del usuario
            console.log('Config de user session:', req.session.user);
            
            //req.session.rol = user.rol;
            //console.log(req.session.user);
            //console.log(req.session.rol);
            //console.log(req.session);
            res.status(200).json({ message: 'Inicio de sesión exitoso' });
        } else {
            res.status(401).json({ message: 'Credenciales inválidas' });
        }
    } catch (error) {
        console.error('Error en inicio de sesión:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
  },

  logoutUser: (req, res) => {
    try {
        if (req.session) {
            req.session.destroy((err) => {
                if (err) {
                    console.error('Error al cerrar sesión:', err);
                    res.status(500).json({ message: 'Error al cerrar sesión' });
                } else {
                    res.status(200).json({ message: 'Sesión cerrada exitosamente' });
                }
            });
        } else {
            res.status(200).json({ message: 'No hay sesión activa' });
        }
    } catch (error) {
        console.error('Error al cerrar sesión:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
},

getSession: async (req, res) => {
    try {
        if (req.session.user) {
            const usuario = req.session.user.usuario;
            let tipo = 0; 

            // Si es administrador cambio el tipo
            if (req.session.user.rol === 'admin') {
                tipo = 1; 
            }

            const infoSession = {
                nombreUsuario:usuario,
                tipo: tipo
            }
            console.log(infoSession)
            res.json(infoSession);
        } else {
             /*  /// Codigo que utilice para probar la llegada del objeto al servidor
            const infoSession = {
                nombreUsuario:'usuarioPrueba',
                tipo: 'tipo'
            }
            res.json(infoSession);  */


            res.status(200).json({ message: 'No hay sesión activa' });
        }
    } catch (error) {
        console.error('Error al obtener session:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
}
  
  
};


