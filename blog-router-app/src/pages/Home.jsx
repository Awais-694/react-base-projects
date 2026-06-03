import { useSearchParams, Link } from 'react-router-dom';

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // URL se '?category=value' pakarna
  const categoryFilter = searchParams.get('category');

  // Fake Blog Data Setup
  const blogs = [
    { id: 1, title: 'React Router v6 Guide', category: 'tech', desc: 'Learn advanced routing.' },
    { id: 2, title: 'MERN Stack Tips', category: 'tech', desc: 'How to structure Node/Express APIs.' },
    { id: 3, title: 'Fitness Routine Overview', category: 'health', desc: 'Keep your body active.' }
  ];

  // Agar URL mein category filter laga hai toh data filter karo, nahi toh saare dikhao
  const filteredBlogs = categoryFilter 
    ? blogs.filter(blog => blog.category === categoryFilter)
    : blogs;

  return (
    <div style={{ padding: '20px' }}>
      <h2>📖 Public Blog Explorer</h2>
      
      {/* Query Parameters Controllers */}
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setSearchParams({ category: 'tech' })} style={{ marginRight: '10px' }}>Tech Only</button>
        <button onClick={() => setSearchParams({ category: 'health' })} style={{ marginRight: '10px' }}>Health Only</button>
        <button onClick={() => setSearchParams({})}>Clear Filters</button>
      </div>

      <div style={{ display: 'grid', gap: '15px' }}>
        {filteredBlogs.map(blog => (
          <div key={blog.id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '5px' }}>
            <h3>{blog.title} <span style={{ fontSize: '0.8rem', background: '#eee', padding: '2px 6px' }}>{blog.category}</span></h3>
            <p>{blog.desc}</p>
            {/* Dynamic Routing Parameter link (/blog/1, /blog/2) */}
            <Link to={`/blog/${blog.id}`} style={{ color: 'blue' }}>Read Full Article &rarr;</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;