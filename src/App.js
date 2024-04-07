import './App.css';

import './App.css';

export default function App() {
  const myClass = 'bg-salmon';
  const num = 30;
  const myPath = '/example/123';

  const path = 'example';
  const id = '123';
  const url = `https://example.com/${path}/${id}`;
  console.log(url); // 👉️ "https://example.com/example/123"

  return (
    <div>
      <a
        href={`https://example.com/${myPath}`}
        target="_blank"
        rel="noreferrer"
      >
        Example
      </a>

      <div className={`text-white ${myClass}`}>Apple</div>

      <br />

      <div
        className={`some-class ${
          'hi'.length === 2 ? 'bg-yellow' : ''
        }`}
      >
        Banana
      </div>

      <h2
        style={{
          padding: `${num + num}px`,
          backgroundColor: 'lime',
        }}
      >
        Kiwi
      </h2>
    </div>
  );
}
