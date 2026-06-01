
import { useState, useRef } from 'react';
import { Copy, Plus } from 'lucide-react'; // Icons

const FormBuilder = () => {
  const [fields, setFields] = useState(['Name Input', 'Email Input']);
  const [newFieldName, setNewFieldName] = useState('');
  
  // 1. Direct Input DOM control karne ke liye Ref
  const inputRef = useRef(null);
  // 2. Invisible textarea ko target karne ke liye copy operation ke liye Ref
  const jsonRef = useRef(null);

  const handleAddField = (e) => {
    e.preventDefault();
    if (!newFieldName.trim()) return;

    setFields([...fields, newFieldName]);
    setNewFieldName('');

    // useRef Magic: Field add hote hi main input par focus wapas lana
    inputRef.current.focus();
  };

  const handleCopyToClipboard = () => {
    // useRef Magic: Textarea se value select karna aur copy karna
    jsonRef.current.select();
    document.execCommand('copy');
    alert("Form Schema JSON copied to clipboard!");
  };

  return (
    <div style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '6px', background: '#fafafa' }}>
      <h3>🛠️ Live Form Builder (useRef Demo)</h3>
      
      <form onSubmit={handleAddField} style={{ marginBottom: '15px' }}>
        <input 
          ref={inputRef} // Ref attached
          type="text" 
          value={newFieldName}
          onChange={(e) => setNewFieldName(e.target.value)}
          placeholder="New Field Name (e.g., Age)"
          style={{ padding: '8px', marginRight: '8px' }}
        />
        <button type="submit" style={{ padding: '8px' }}><Plus size={16} /></button>
      </form>

      <h4>Preview Form:</h4>
      {fields.map((field, idx) => (
        <div key={idx} style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', fontWeight: 'bold' }}>{field}:</label>
          <input type="text" disabled placeholder={`Enter ${field}...`} style={{ width: '100%', padding: '6px' }} />
        </div>
      ))}

      <hr />
      
      {/* Invisible/Hidden Textarea schema backup copy karne ke liye */}
      <textarea 
        ref={jsonRef} 
        value={JSON.stringify(fields)} 
        readOnly 
        style={{ position: 'absolute', left: '-9999px' }} 
      />
      <button onClick={handleCopyToClipboard} style={{ padding: '8px 12px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
        <Copy size={16} /> Copy Form Schema JSON
      </button>
    </div>
  );
};

export default FormBuilder;