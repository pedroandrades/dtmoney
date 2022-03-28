import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api.get("http://localhost:3000/api/transactions").then(response => console.log(response.data));
  });

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>19/05/1999</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">R$1.100</td>
            <td>Casa</td>
            <td>25/05/1999</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
