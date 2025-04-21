import { useEffect, useState } from "react";

function UseFetchHook(URL) {
  const [finalData, setFinalData] = useState({});

  async function getDetails() {
    const response = await fetch(URL);
    const data = await response.json();
    setFinalData(data);
  }

  useEffect(() => {
    getDetails();
  }, [URL]);

  return { finalData: finalData };
}

export default UseFetchHook;
