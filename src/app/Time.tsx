export default function App() { 
  const timestamp = Date.now();
  const date = new Date(timestamp);


  return ( 
    <div className="w-full p-3 flex justify-center absolute bottom-0">
        <p>Time: {date.toISOString()}</p>
    </div>
  );
}
