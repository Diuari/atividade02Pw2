import React from 'react';
import "./index.css"; // Importação do arquivo CSS

import CardTecnologia from '../CardTecnologia/CardTecnologia';
import InfoLabels from '../InfoLabels/InfoLabels';

import { type } from '../../App';

interface DivInfoProps {
  tecnologias: type[];
  onDelete: (index: number) => void;
}

function DivInfo({
  tecnologias,
  onDelete,
  atualizarLista,
}: DivInfoProps) {
  return (
    <div className="info">
      <InfoLabels
        tecnologiasCriadas={tecnologias.length}
        tecnologiasConcluidas={tecnologias.filter((el) => el.checado).length}
      />
      {tecnologias.length === 0 ? (
        <div className="listTecnologia vazio">
          <p>
            Você ainda não tem tecnologias cadastradas<br />
            <span>Crie tecnologias e organize seus itens a fazer</span>
          </p>
        </div>
      ) : (
        <div className="listTecnologia">
          {tecnologias.map((tecnologia, index) => (
            <CardTecnologia
              key={index}
              texto={tecnologia.informacao}
              checado={tecnologia.checado}
              onDelete={() => onDelete(index)}
              atualizarLista={() => atualizarLista(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default DivInfo;
