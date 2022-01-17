import Button from "./Button";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>드디어 시작이다</h1>
      <Button text="save" />
    </div>
  );
}

export default App;
