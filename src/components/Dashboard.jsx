import React from "react";
import Teacher from "./Teacher";

export default function Dashboard() {
  return (
    <div>
      DashBoard
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Telefono</th>
              <th>Email</th>
              <th>Edad</th>
              <th>DNI</th>

              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <Teacher />
          </tbody>
        </table>
      </div>
    </div>
  );
}
