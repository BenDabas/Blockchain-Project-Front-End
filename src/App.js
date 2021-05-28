import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';

import WelcomePage from './Components/WelcomePage/welcomePage';
import VerifyTransaction from './Components/VerifyTransaction/verifyTransaction';
import CreatingTransaction from './Components/CreatingTransaction/creatingTransaction';
import Balance from './Components/Balance/balance';
import GetTransactions from './Components/GetTransactions/getTransactions';
import GetBlockTrie from './Components/GetBlockTrie/getBlockTrie';
import GetBlockStateTrie from './Components/GetBlockStateTrie/getBlockStateTrie';
import Interpreter from './Components/Interpreter/interpreter';
import GetBlockchainTrie from './Components/GetBlockchainTrie/GetBlockchainTrie';

const App = () => {
	return (
		<div className="app">
			<BrowserRouter>
				<Route exact path="/" component={WelcomePage} />
				<Route path="/verify-transaction" component={VerifyTransaction} />
				<Route path="/create-transaction" component={CreatingTransaction} />
				<Route path="/get-balance" component={Balance} />
				<Route path="/get-transactions" component={GetTransactions} />
				<Route path="/get-block-trie" component={GetBlockTrie} />
				<Route path="/interpreter" component={Interpreter} />
				<Route path="/get-block-state-trie" component={GetBlockStateTrie} />
				<Route path="/get-blockchain-trie" component={GetBlockchainTrie} />
			</BrowserRouter>
		</div>
	);
};

export default App;
