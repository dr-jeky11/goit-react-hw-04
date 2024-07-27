import PacmanLoader from "react-spinners/GridLoader";

export default function Loader() {
  const override = {
    display: "block",
    margin: "0 auto",
    marginTop: 20,
  };

  return (
    <PacmanLoader
      color={"greenyellow"}
      speedMultiplier={0.85}
      cssOverride={override}
    />
  );
}
