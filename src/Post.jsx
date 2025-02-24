import PropTypes from "prop-types";

// Exportar um arquivo com Named Export
export function Post(props) {
  return (
    <div>
      <strong>{props.author}</strong>
      <p>{props.content}</p>
    </div>
  );
}
/*
Aqui é um código para passar a tipagem das propriedades do componente, fiz isso por que sem ela o código fica informando um erro. 
 */
Post.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
/* 
Exportar um arquivo com Default Export
export default Post
*/
