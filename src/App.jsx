import { useState } from "react";
import styles from "./App.module.css";
import tabs from "./Tabs";

function App() {
  const [activeTab, setActiveTab] = useState(
    localStorage.getItem("activeTabContent") || ""
  );
  const [content, setContent] = useState(
    localStorage.getItem("activeTab") || ""
  );

  const changeHandler = (id) => {
    const itemID = tabs.find((item) => item.id === id);
    localStorage.setItem("activeTab", id);
    localStorage.setItem("activeTabContent", itemID.description);
    setContent(id);
    setActiveTab(itemID.description);
  };

  return (
    <>
      <div className={styles.container}>
        <h1>Tabs Component With React</h1>
        <div className={styles.content}>
          <div className={styles.tabs}>
            {tabs.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  changeHandler(item.id);
                }}
              >
                {item.title}
              </button>
            ))}
          </div>
          {content ? <h2>content {content}</h2> : ""}
          <p>{activeTab}</p>
        </div>
      </div>
    </>
  );
}
export default App;
