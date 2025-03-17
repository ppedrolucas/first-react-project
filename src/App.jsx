//Importar um arquivo exportado por Named Export
import { Post } from "./Post";

// Componente é uma função que retorna htmls
export function App() {
  return (
    // Eu não posso retornar mais de um elemento dentro do return(), devo sempre envolver os demais elementos dentro de um container
    <div>
      {/* Como o React mostra essa estrutura no browser? */}
      <h1>React com a Rocketseat</h1>
      <Post
        author="Pedro Lucas"
        content="Estudanto React com Diegão da Rocketseat"
      />
      <Post
        author="Paulo Muzy"
        content="Os meus ovos pela manhã eu boto uma colher de requeijão light para ficar mais cremosinho e menos seco"
      />
      <Post author="Renato Cariani" content="Eu quero eu posso" />
    </div>
  );
}
