import "./index.css";

interface InfoLabelsProps {
    tecnologiasCriadas: number;
    tecnologiasConcluidas: number;
  }

function InfoLabels({ tecnologiasCriadas, tecnologiasConcluidas }: InfoLabelsProps) {
    return (
      <div className="infoLabels">
        <div className="tecInfo">
          <p>Tecnologias criadas</p>
          <p className="number">{tecnologiasCriadas}</p>
        </div>

        <div className={tecnologiasCriadas > 0
            ? "tecInfo great" 
            :  "tecInfo"}>
          <p>Concluídas</p>
          <p className="number"> {tecnologiasCriadas > 0
            ? `${tecnologiasConcluidas} de ${tecnologiasCriadas}`
            : `${tecnologiasConcluidas}`}</p>
        </div>
      </div>
    );
}

export default InfoLabels;