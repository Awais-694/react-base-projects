
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createPost } from '../api/postsApi';
import { PlusCircle } from 'lucide-react';

const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const queryClient = useQueryClient(); // Cache manager tool

  // useMutation hook server par data bhejne ke liye
  const mutation = useMutation({
    mutationFn: createPost,
    onSuccess: (createdPost) => {
      // JSONPlaceholder data permanently save nahi karta, is liye UI cache ko manually update kar rahe hain.
      queryClient.setQueryData(['adminPosts'], (oldPosts = []) => [createdPost, ...oldPosts]);
      setTitle('');
      setBody('');
      alert('Post Created successfully! Cache updated on screen.');
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) return;
    mutation.mutate({ title, body, userId: 1 });
  };

  return (
    <div style={{ background: '#ffffff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1e293b', marginBottom: '15px' }}>
        <PlusCircle size={20} color="#2563eb" /> Create Server Content
      </h3>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '12px' }}>
          <input 
            type="text" 
            placeholder="Post Title..." 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <textarea 
            placeholder="Write post content here..." 
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows="3"
            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1' }}
          />
        </div>
        <button 
          type="submit" 
          disabled={mutation.isPending}
          style={{ width: '100%', background: '#2563eb', color: 'white', padding: '10px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}
        >
          {mutation.isPending ? 'Connecting Server... ⏳' : 'Publish & Sync Cache'}
        </button>
      </form>
    </div>
  );
};

export default AddPostForm;
