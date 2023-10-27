import { WithRuBalance } from "../../helpers/hock/withRuBalance";
import "./styles.css";

const Card = ({ balance, setBalance, ruBalance }) => {
  return (
    <div className="card">
      <div className="card-block">
        <p>CRYPTO_FINANCE</p>
        <button onClick={setBalance}>
          AddMoney
        </button>
      </div>
      <div className="card-block">
        <p>Name</p>
        <p>{balance} $</p>
      </div>
    </div>
  );
};

export default WithRuBalance(Card);
