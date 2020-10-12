import React from 'react';

interface TitleProps {
  text: string;
}

function Title (props: TitleProps) {
  return (
    <div className="App">
     <h1>{props.text}</h1>
    </div>
  );
}

function App() {
  return (
    <div className="App">
     <Title text="Titulo 1" />
     <Title text="Titulo 2" />
     <Title text="Titulo 3" />
     <Title text="Titulo 4" />
    </div>
  );
}

export default App;