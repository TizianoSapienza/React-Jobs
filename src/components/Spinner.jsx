/* eslint-disable react/prop-types */
import PulseLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 auto",
}
export default function Spinner({ loading }) {
  return (
    <PulseLoader
      color="#36d7b7" loading={loading} cssOverride={{override}} size={150} />
  )
}
