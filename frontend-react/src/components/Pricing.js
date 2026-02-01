
import React, { useEffect, useState } from "react";

function Pricing() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/pricing")
      .then(res => res.json())
      .then(result => setData(result));
  }, []);

  return (
    <div>
      <h2>React Pricing</h2>
      {data && (
        <p>
          Amount: ${data.amount} <br />
          {data.description}
        </p>
      )}
    </div>
  );
}

export default Pricing;
