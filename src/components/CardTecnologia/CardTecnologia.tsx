import "./index.css";
import checkVazio from '../../assets/checkVazio.svg';
import check from '../../assets/check.svg';
import trash from '../../assets/trash.svg';

interface CardTecnologiaProps {
  texto: string;
  checado : boolean;
  onDelete: (index: number) => void;
}

function CardTecnologia({
  texto,
  checado,
  onDelete,
  atualizarLista,
}: CardTecnologiaProps) {


  return (
    <div className={`cardTecnologia ${checado ? 'check' : ''}`}>
      <button onClick={atualizarLista}>
        <img src={checado ? check : checkVazio} alt="Check" />
      </button>
      <p>{texto}</p>
      <button onClick={onDelete}>
        <img src={trash} alt="Lixeira" />
      </button>
    </div>
  );
}

export default CardTecnologia
