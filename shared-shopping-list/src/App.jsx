import { ShoppingProvider } from './context/ShoppingContext';
import ItemInput from './components/ItemInput';
import ItemList from './components/ItemList';
import ListStats from './components/ListStats';

function App() {
  return (
    <ShoppingProvider>
      <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
        <h1>🛒 Shared Shopping List</h1>
        <ItemInput />
        <ListStats />
        <hr />
        <ItemList />
      </div>
    </ShoppingProvider>
  );
}

export default App;