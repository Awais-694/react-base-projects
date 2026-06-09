import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AddPostForm from './components/AddPostForm';
import PostList from './components/PostList';

// 1. Query Client instance create kiya (The Central Engine)
const queryClient = new QueryClient();

const App = () => {
  return (
    // 2. Provider se wrap kiya taake saare child components query cache tool use kar sakein
    <QueryClientProvider client={queryClient}>
      <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', padding: '40px 20px', fontFamily: 'system-ui' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          
          {/* Top Header Dashboard Banner */}
          <header style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h1 style={{ color: '#0f172a', fontSize: '2.2rem', marginBottom: '8px' }}>🚀 Data Caching Admin Dashboard</h1>
            <p style={{ color: '#64748b', margin: 0 }}>
              Optimized Server State Integration using Axios, Try-Catch UI States, and React Query Caching
            </p>
          </header>

          {/* Main Content Dashboard Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '30px', alignItems: 'start' }}>
            {/* Left Column: Form component to write server data */}
            <AddPostForm />

            {/* Right Column: Server data controller view */}
            <PostList />
          </div>

        </div>
      </div>
    </QueryClientProvider>
  );
};

export default App;