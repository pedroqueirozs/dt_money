import { useContext } from "react";
import { TransactionsContext } from "../context/TransactionContex";

export function useSummary() {
  const { transactions } = useContext(TransactionsContext);

  /*  Utilização do reduce =  Reduzir o meu array de transactions a uma estrutrura de 
dados que sera um array da seguinte forma: {income: 0, outcome: 0, total: 0} */
  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "income") {
        acc.income += transaction.price;
        acc.total += transaction.price;
      } else {
        acc.outcome += transaction.price;
        acc.total -= transaction.price;
      }

      return acc;
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  );

  return summary;
}
