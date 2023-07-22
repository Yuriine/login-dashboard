import React from "react";

function Teacher() {
  return (
    <tr className="hover">
      <td>Hart Hagerty</td>
      <td>Zemlak, Daniel and </td>
      <td>96588451</td>
      <td>jhondoe@gmail.com</td>
      <td>45</td>
      <td>12545645</td>

      <th className="flex gap-2">
        <button className="btn  btn-xs">Editar</button>
        <button className="btn btn-error btn-outlined btn-xs">Eliminar</button>
      </th>
    </tr>
  );
}

export default Teacher;
