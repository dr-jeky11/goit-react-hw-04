import s from "./Welcome.module.css";

export default function Welcome() {
  return (
    <div className={s.container}>
      <p className={s.text}>We can find any image you want!</p>
    </div>
  );
}
