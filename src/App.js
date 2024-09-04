import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useState } from 'react';
import { Execuse } from './components/Execuse';

function App() {
  const client = new QueryClient();
  const [category, setCategory] = useState();

  return (
    <QueryClientProvider client={client}>
      <Execuse category={category} setCategory={setCategory} />
    </QueryClientProvider>
  );
}

export default App;
