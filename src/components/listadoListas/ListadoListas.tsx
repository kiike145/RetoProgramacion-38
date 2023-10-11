const ListadoListas = ({ listado }: { listado: Array<string> }) => {

  return (
    <table>
      <thead>
        <tr>
          <th>Listado de números</th>
        </tr>
      </thead>
      <tbody>
				<tr>
        {listado.map((e, index) => (
          <td key={index}>{e}</td>
				))}
				</tr>
      </tbody>
    </table>
  );
};

export default ListadoListas;
