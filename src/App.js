import { useState } from "react";
import { v4 as uuid } from "uuid";

import "./App.css";

import { Header } from "./components/Header/Header";
import { Formulario } from "./components/Formulario/Formulario";
import { MiORG } from "./components/MiORG/MiORG";
import { Equipo } from "./components/Equipo/Equipo";
import { Footer } from "./components/Footer/Footer";

function App() {
    const [mostrarFormulario, actualizarMostrar] = useState(false);
    const [colaboradores, actualizarColaboradores] = useState([
        {
            id: uuid(),
            nombre: "Jose Garcia",
            puesto: "Configurador",
            foto: "https://github.com/holajose2.png",
            equipo: "Data Science",
            fav:true,
        },
        {
            id: uuid(),
            nombre: "Jose Garcia",
            puesto: "Configurador",
            foto: "https://github.com/holajose2.png",
            equipo: "UX y Diseño",
            fav:false,

        },
        {
            id: uuid(),
            nombre: "Jose Garcia",
            puesto: "Configurador",
            foto: "https://github.com/holajose2.png",
            equipo: "DevOps",
            fav:false,
        },
        {
            id: uuid(),
            nombre: "Jose Garcia",
            puesto: "Configurador",
            foto: "https://github.com/holajose2.png",
            equipo: "Front End",
            fav:false,
        },
        {
            id: uuid(),
            nombre: "Jose Garcia",
            puesto: "Configurador",
            foto: "https://github.com/holajose2.png",
            equipo: "Programación",
            fav:false,
        },
        {
            id: uuid(),
            nombre: "Jose Garcia",
            puesto: "Configurador",
            foto: "https://github.com/holajose2.png",
            equipo: "Programación",
            fav:false,
        },
    ]);

    const [equipos, actualizarEquipos] = useState([
        {
            id: uuid(),
            titulo: "Programación",
            colorPrimario: "#57C278",
            colorSecundario: "#D9F7E9",
        },
        {
            id: uuid(),
            titulo: "Front End",
            colorPrimario: "#82CFFA",
            colorSecundario: "#E8F8FF",
        },
        {
            id: uuid(),
            titulo: "Data Science",
            colorPrimario: "#A6D157",
            colorSecundario: "#F0F8E2",
        },
        {
            id: uuid(),
            titulo: "DevOps",
            colorPrimario: "#E06B69",
            colorSecundario: "#FDE7E8",
        },
        {
            id: uuid(),
            titulo: "UX y Diseño",
            colorPrimario: "#DB6EBF",
            colorSecundario: "#FAE9F5",
        },
        {
            id: uuid(),
            titulo: "Móvil",
            colorPrimario: "#FFBA05",
            colorSecundario: "#FFF5D9",
        },
        {
            id: uuid(),
            titulo: "Innovación y Gestión",
            colorPrimario: "#FF8A29",
            colorSecundario: "#FFEEDF",
        },
    ]);

    const cambiarMostrar = () => {
        actualizarMostrar(!mostrarFormulario);
    };

    //Registrar Colaborador
    const registrarColaborador = (colaborador) => {
        actualizarColaboradores([...colaboradores, colaborador]);
    };

    //Eliminar Colaborador
    const eliminarColaborador = (id) => {
        console.log(id);
        const nuevosColaboradores = colaboradores.filter(
            (colaborador) => colaborador.id !== id
        );
        console.log(nuevosColaboradores);
    };

    //ActualizarColor de equipo
    const actualizarColor = (color, id) => {
        const equiposActualizados = equipos.map((equipo) => {
            if (equipo.id === id) {
                equipo.colorPrimario = color;
            }
            return equipo;
        });

        actualizarEquipos(equiposActualizados);
    };

    //Crear Equipo
    const crearEquipo = (nuevoEquipo) => {
        actualizarEquipos([...equipos,{...nuevoEquipo, id:uuid()}])
    };

    const like = (id)=>{
        console.log("Like: ",id);
        const colaboradoresActualizados = colaboradores.map((colaborador)=>{
            if(colaborador.id === id){
                colaborador.fav = !colaborador.fav
            }
            return colaborador
        })
        actualizarColaboradores(colaboradoresActualizados)
    }

    return (
        <div>
            <Header />
            {mostrarFormulario && (
                <Formulario
                    equipos={equipos.map((equipo) => equipo.titulo)}
                    registrarColaborador={registrarColaborador}
                    crearEquipo={crearEquipo}
                />
            )}

            <MiORG cambiarMostrar={cambiarMostrar} />

            {equipos.map((equipo) => (
                <Equipo
                    datos={equipo}
                    key={equipo.titulo}
                    colaboradores={colaboradores.filter(
                        (colaborador) => colaborador.equipo === equipo.titulo
                    )}
                    eliminarColaborador={eliminarColaborador}
                    actualizarColor={actualizarColor}
                    like={like}
                />
            ))}

            <Footer />
        </div>
    );
}

export default App;
