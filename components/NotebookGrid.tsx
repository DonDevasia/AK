export default function NotebookGrid() {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0"
      style={{ 
        backgroundColor: '#FFFDF1',
        backgroundImage: `
          linear-gradient(to right, rgba(40, 50, 124, 0.15) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(40, 50, 124, 0.15) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }}
    />
  );
}
