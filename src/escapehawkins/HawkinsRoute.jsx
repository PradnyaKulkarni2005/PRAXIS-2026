import { useState } from "react";
import Preloader from "./Preloader";
import Hawkins from "./Hawkins";

const HawkinsRoute = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onFinish={() => setLoading(false)} />}
      {!loading && <Hawkins />}
    </>
  );
};

export default HawkinsRoute;
