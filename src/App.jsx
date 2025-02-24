//Importar um arquivo exportado por Named Export
import { Post } from "./Post";

export function App() {
  return (
    // Eu não posso retornar mais de um elemento dentro do return(), devo sempre envolver os demais elementos dentro de um container
    <div>
      {/* Como o React mostra essa estrutura no browser? */}
      <h1>Olá mundo</h1>
      <Post
        author="Pedro Lucas"
        content="Estudanto React com Diego Fernandes da Rocketseat"
      />
      <Post author="Paulo Muzy" content="Roberta" />
      <Post author="Renato Cariani" content="Eu quero eu posso" />
    </div>
  );
}
