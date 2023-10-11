import { useState } from 'react';
import DivMain from './components/DivMainText/DivMain';
import FormLabel from './components/DivForm/FormLabel';
import DivInfo from './components/DivInfo/DivInfo';

interface Tecnologia {
  informacao: string;
  checado: boolean;
}

function App() {
  const [tecnologias, setTecnologias] = useState<Tecnologia[]>([]);

  const handleFormSubmit = (informacao: string) => {
    const obj: Tecnologia = { informacao, checado: false };
    setTecnologias([...tecnologias, obj]);
  };

  const atualizarLista = (index: number) => {
    const updatedList: Tecnologia[] = tecnologias.map((tecnologia, id) => {
      if (index === id) {
        return { ...tecnologia, checado: !tecnologia.checado };
      }
      return tecnologia;
    });
    setTecnologias(updatedList);
  };

  const deleteTecnologia = (index: number) => {
    const updatedList = tecnologias.filter((_, id) => id !== index);
    setTecnologias(updatedList);
  };

  return (
    <>
      <DivMain />
      <FormLabel onFormSubmit={handleFormSubmit} />
      <DivInfo
        tecnologias={tecnologias}
        onDelete={deleteTecnologia}
        atualizarLista={atualizarLista}
      />
    </>
  );
}

export default App;
