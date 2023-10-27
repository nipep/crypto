import Card from "../../components/Card/Card";
import CoinsList from "../../components/CoinsList/CoinsList";
import FilterBlock from "../../components/FilterBlock/FilterBlock";
import styles from "./styles.module.css";

const Main = ({ balance, setBalance, coins , setCoins }) => {
  // const filterExpensiveCoins = () => {
  //   return coins.filter((coin) => coin.price > 1000);
  // };

  // const expensiveCoins = useMemo(() => filterExpensiveCoins(), [filteredCoins]);

  return (
    <main className={styles.main}>
      <Card balance={balance} setBalance={setBalance} />
      <FilterBlock setCoins={setCoins} />
      {coins.length > 0 ? <CoinsList /> : <div>Loading...</div>}
    </main>
  );
};
export default Main;
