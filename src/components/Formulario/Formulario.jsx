import "./Formulario.css";
import { useState } from "react";

import { Campo } from "../Campo/Campo";
import { ListaOpciones } from "../ListaOpciones/ListaOpciones";
import { Boton } from "../Boton/Boton";

export const Formulario = ({ equipos, registrarColaborador, crearEquipo }) => {
    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");

    const [titulo, setTitulo] = useState("");
    const [color, setColor] = useState("");

    const manejarEnvio = (e) => {
        e.preventDefault();
        console.log("Envio form");
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo,
        };
        registrarColaborador(datosAEnviar);
    };

    const manejarNuevoEquipo = (e) => {
        e.preventDefault();
        crearEquipo({ titulo, colorPrimario: color });
    };

    return (
        <section className="formulario">
            <form onSubmit={manejarEnvio}>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <Campo
                    label="Nombre"
                    placeholder="Ingresar nombre"
                    required
                    valor={nombre}
                    setValor={setNombre}
                />
                <Campo
                    label="Puesto"
                    placeholder="Ingresar puesto"
                    required
                    valor={puesto}
                    setValor={setPuesto}
                />
                <Campo
                    label="Foto"
                    placeholder="Ingresar enlace de foto"
                    required
                    valor={foto}
                    setValor={setFoto}
                />
                <ListaOpciones
                    valor={equipo}
                    setValor={setEquipo}
                    equipos={equipos}
                />
                <Boton descripcion={"Crear"} />
            </form>
            <form onSubmit={manejarNuevoEquipo}>
                <h2>Rellena el formulario para crear el equipo.</h2>
                <Campo
                    label="Titulo"
                    placeholder="Ingresar Titulo"
                    required
                    valor={titulo}
                    setValor={setTitulo}
                />
                <Campo
                    label="Color"
                    placeholder="Ingresar el color en hexadecimal"
                    required
                    valor={color}
                    setValor={setColor}
                    type="color"
                />
                <Boton descripcion={"Registrar Equipo"} />
            </form>
        </section>
    );
};
