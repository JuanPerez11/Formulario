// Definir un formulario de registro de usuarios que contenga varias entradas: Nombre de usuario, correo electrónico, contraseña y confirmación de confirmación de contraseña.
// 1. Realización simple.
// 2. Aumentando la complejidad

// ** 1. Impedir el registro si alguno de los campos está vacío..
// ** 2. Cómo podemos agregar validaciones a cada una de las entradas?
// ** 3. Mostrar feedback al usuario respecto a las validaciones realizadas.

import { useState } from "react";
import "./style.css"

function Formulario() {

  const [user, setUser] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")


  const [form, setForm] = useState({
    user: "",
    email: "",
    password: "",
    passwordConfirm: "",
  })

  function handleOnChangeUser(event) {
    const val = event.target.value
    const name = event.target.name
    const type = event.target.type

    console.log({ val, name, type })

    setUser(val)
  }
  function handleOnChangeEmail(event) {
    const val = event.target.value
    const name = event.target.name
    const type = event.target.type

    console.log({ val, name, type })

    setEmail(val)
  }

  function handleOnChangePassword(event) {
    const val = event.target.value
    const name = event.target.name
    const type = event.target.type

    console.log({ val, name, type })

    setPassword(val)
  }

  function handleOnChangePasswordConfirm(event) {
    const val = event.target.value
    const name = event.target.name
    const type = event.target.type

    console.log({ val, name, type })

    setPasswordConfirm(val)
  }


  function handleSubmit(event) {
    event.preventDefault()

    if (user === "" || email === "" || password === "" || passwordConfirm === "") {
        alert("Por favor, completa todos los campos.");
        return;
  }

    if (password !== passwordConfirm) {
        alert("Las contraseñas no coinciden");
        return;
      }
  
      // Crear un objeto con los datos del formulario
      const form = {
        user: user,
        email: email,
        password: password,
      };
  
      console.log("Datos del formulario:", form);
  
      // Limpiar el formulario después del envío
      setUser("");
      setEmail("");
      setPassword("");
      setPasswordConfirm("");

  }

  return (
    <>
    <div>
      <h3>FORMULARIO</h3>
    </div>
    
    <form onSubmit={(event) => handleSubmit(event)}>
    <div>
        <label htmlFor="user">Usuario</label>
        <input type="text" id="user" name="user" value={user} onChange={handleOnChangeUser} />
    </div>
    <div>
        <label htmlFor="email">Correo electrónico</label>
        <input type="text" id="email" name="email" value={email} onChange={handleOnChangeEmail} />
    </div>
    <div>
        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" name="password" value={password} onChange={handleOnChangePassword} />
    </div>
    <div>
        <label htmlFor="passwordConfirm">Confirmar contraseña</label>
        <input type="password" id="passwordConfirm" name="passwordConfirm" value={passwordConfirm} onChange={handleOnChangePasswordConfirm} />
    </div>
      <input type="submit" value="Enviar" />
    </form>
    </>
  )
}

export default Formulario