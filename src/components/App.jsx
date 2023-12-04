import React from "react";
import Header from "./Header";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

// function createEntry(emojielement) {
//     return <Entry 
//             key={emojielement.id}
//             emoji={emojielement.emoji}
//             name={emojielement.name}
//             meaning={emojielement.meaning}
//         />;
// }

function App() {
  return (
    <div>
      <Header/>
      <dl className="dictionary">
        {/* emojipedia.map(createEntry) */}
        {emojipedia.map(emojielement => 
        <Entry 
            key={emojielement.id}
            emoji={emojielement.emoji}
            name={emojielement.name}
            meaning={emojielement.meaning}
        />
          )};        
      </dl>
    </div>
  );
}

export default App;
