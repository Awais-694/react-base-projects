const Dashboard = () => {
  return (
    <div style={{ padding: '20px', color: 'green' }}>
      <h2>🔒 Secure Admin Dashboard Area</h2>
      <p>Mubarak ho! Aapne Protected Route successfully bypass kar liya hai.</p>
      <div style={{ background: '#e2f0d9', padding: '15px', borderRadius: '5px', color: '#385723' }}>
        <p><strong>Backend Integration Use-Case:</strong> Real apps mein yahan par user profile data Axios ke zariye backend token header (Bearer Token) bhej kar load hota hai.</p>
      </div>
    </div>
  );
};

export default Dashboard;