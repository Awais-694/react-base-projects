
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getPosts, deletePost } from '../api/postsApi';
import { Trash2, RefreshCw } from 'lucide-react';

const PostList = () => {
  const queryClient = useQueryClient();

  // 1. Server content fetch aur cache karna
  const { data: posts, isLoading, error, isFetching } = useQuery({
    queryKey: ['adminPosts'],
    queryFn: getPosts,
    staleTime: 30000, // 30 seconds tak data ko fresh samjha jaye
  });

  // 2. Delete operation ki mutation
  const deleteMutation = useMutation({
    mutationFn: deletePost,
    onSuccess: (_, deletedPostId) => {
      // JSONPlaceholder delete ko permanently save nahi karta, is liye UI cache ko manually update kar rahe hain.
      queryClient.setQueryData(['adminPosts'], (oldPosts = []) =>
        oldPosts.filter((post) => post.id !== deletedPostId)
      );
      alert('Post deleted from screen cache!');
    }
  });

  if (isLoading) return <div style={{ textAlign: 'center', padding: '40px' }}><h3>Loading Server Database... ⏳</h3></div>;
  if (error) return <div style={{ color: 'red', padding: '20px' }}><h3>Error loading data: {error.message}</h3></div>;

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
        <h3 style={{ color: '#1e293b' }}>📦 Cached Content Items ({posts?.length})</h3>
        {/* Manual refetch button and background sync indicator */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {isFetching && <span style={{ fontSize: '0.8rem', color: '#2563eb' }}><RefreshCw size={14} className="animate-spin" /> Background Syncing...</span>}
        </div>
      </div>

      <div style={{ display: 'grid', gap: '15px' }}>
        {posts?.map(post => (
          <div key={post.id} style={{ background: '#fff', padding: '15px', borderRadius: '8px', border: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ paddingRight: '15px' }}>
              <h4 style={{ margin: '0 0 8px 0', color: '#0f172a', textTransform: 'capitalize' }}>{post.title}</h4>
              <p style={{ margin: 0, color: '#64748b', fontSize: '0.9rem' }}>{post.body}</p>
            </div>
            <button 
              onClick={() => deleteMutation.mutate(post.id)}
              disabled={deleteMutation.isPending}
              style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', padding: '5px' }}
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
