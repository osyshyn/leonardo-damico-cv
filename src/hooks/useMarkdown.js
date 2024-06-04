import { useEffect, useState } from "react";
import { marked } from "marked";

const useMarkdown = (path) => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(path)
      .then((response) => response.text())
      .then((text) => setMarkdown(marked(text)));
  }, [path]);

  return markdown;
};

export default useMarkdown;
