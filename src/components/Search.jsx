import { useState, useTransition } from "react";
import SearchResults from "./SearchResult";


export function Search() {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    // Urgent: Update input field
    setInput(e.target.value);

    // Non-urgent: Update search results
    startTransition(() => {
      setQuery(e.target.value);
    });
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Type to search..."
        style={{width: "25%"}}
      />
      {isPending && <p>Loading results...</p>}
      <SearchResults query={query} />
    </div>
  );
}

// Keystroke 1: "r"
// ├── setInput("r")      → Input shows "r" immediately
// └── startTransition    → Starts rendering 1000 items...

// Keystroke 2: "re" (before rendering finishes)
// ├── setInput("re")     → Input shows "re" immediately
// └── startTransition    → CANCELS previous render, starts new one

// Keystroke 3: "rea"
// ├── setInput("rea")    → Input shows "rea" immediately
// └── startTransition    → CANCELS previous render, starts new one

// User stops typing...
// └── Final render completes → Shows 1000 results for "rea"
// Without useTransition, typing would feel laggy because React would try to render all 1000 items synchronously before updating the input field.

