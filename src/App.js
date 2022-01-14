import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GloabalProvider } from './context/GlobalState'

function App() {
  return (
    <GloabalProvider>
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GloabalProvider>
  );
}

export default App;
