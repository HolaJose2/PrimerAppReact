import "./ListaOpciones.css";


export const ListaOpciones = ({ valor, setValor, equipos }) => {
    const manejarCambio = (e) => {
        setValor(e.target.value);
    };

    return (
        <div className="lista-opciones">
            <label>Equipos</label>
            <select value={valor} onChange={manejarCambio}>
                <option value="" disabled defaultValue="" hidden>
                    --Seleccionar--
                </option>
                {equipos.map((equipo, index) => (
                    <option key={index} value={equipo}>
                        {equipo}
                    </option>
                ))}
            </select>
        </div>
    );
};
