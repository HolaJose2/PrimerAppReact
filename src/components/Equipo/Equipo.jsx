import { Colaborador } from "../Colaborador/Colaborador";
import hexToRgba from 'hex-to-rgba';

import "./Equipo.css";

export const Equipo = (props) => {
    const { id, titulo, colorPrimario, colorSecundario } = props.datos;
    const { colaboradores, eliminarColaborador,actualizarColor,like } = props;

    const obj = {
        backgroundColor: hexToRgba(colorPrimario,0.4),
    };

    const estiloTitulo = {
        borderColor: colorPrimario,
    };

    return (
        colaboradores.length > 0 && (
            <section className="equipo" style={obj}>
                <input
                    type="color"
                    className="input-color"
                    value={colorPrimario}
                    onChange={(e)=>{
                        actualizarColor(e.target.value,id)
                    }}
                />
                <h3 style={estiloTitulo}> {titulo} </h3>
                <div className="colaboradores">
                    {colaboradores.map((colaborador, index) => (
                        <Colaborador
                            datos={colaborador}
                            key={index}
                            colorPrimario={colorPrimario}
                            eliminarColaborador={eliminarColaborador}
                            like={like}
                        />
                    ))}
                </div>
            </section>
        )
    );
};
