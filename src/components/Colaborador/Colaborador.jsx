import "./Colaborador.css";
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export const Colaborador = (props) => {
    const { nombre, puesto, foto, equipo, id, fav } = props.datos;
    const { colorPrimario, eliminarColaborador, like } = props;

    return (
        <div className="colaborador">
            <AiFillCloseCircle
                onClick={() => {
                    eliminarColaborador(id);
                }}
                className="eliminar"
            />
            <div
                className="encabezado"
                style={{ backgroundColor: colorPrimario }}
            >
                <img src={foto} alt={nombre} />
            </div>
            <div className="info">
                <h4>{nombre}</h4>
                <h5>{puesto}</h5>

                {fav ? (
                    <AiFillHeart
                        onClick={() => {
                            like(id);
                        }}
                        color="red"
                        className="like"
                    />
                ) : (
                    <AiOutlineHeart
                        onClick={() => {
                            like(id);
                        }}
                        color="red"
                        className="like"
                    />
                )}
            </div>
        </div>
    );
};
