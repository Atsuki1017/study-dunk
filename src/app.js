import React, { useState } from "react";

function App() {
  const [points, setPoints] = useState(0);
  const [skills, setSkills] = useState({
    agility: 0,
    physical: 0,
    judgment: 0,
    freethrow: 0,
    middleshot: 0,
    pass: 0,
  });
  const [items, setItems] = useState([]);

  const handleStudy = (subject) => {
    const newSkills = { ...skills };
    switch (subject) {
      case "漢字":
        newSkills.agility += 1;
        break;
      case "英単語":
        newSkills.physical += 1;
        break;
      case "国語":
        newSkills.judgment += 1;
        break;
      case "理科":
        newSkills.middleshot += 1;
        break;
      case "社会":
        newSkills.pass += 1;
        break;
      case "英語長文":
        newSkills.freethrow += 1;
        break;
      default:
        break;
    }
    setSkills(newSkills);
    setPoints(points + 10);
  };

  const handleReward = () => {
    if (points >= 50) {
      const rewardItems = [
        "バッシュ",
        "リストバンド",
        "バスケットボール",
        "ヘアーバンド",
        "ユニフォーム",
      ];
      const newItem =
        rewardItems[Math.floor(Math.random() * rewardItems.length)];
      setItems([...items, newItem]);
      setPoints(points - 50);
    } else {
      alert("50ポイント必要です！");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🏀 Study Dunk</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {["漢字", "英単語", "国語", "理科", "社会", "英語長文"].map((subject) => (
          <button key={subject} onClick={() => handleStudy(subject)}>
            {subject} を勉強！
          </button>
        ))}
      </div>

      <h2>📊 現在のステータス</h2>
      <ul>
        <li>アジリティ：{skills.agility}</li>
        <li>フィジカル：{skills.physical}</li>
        <li>判断力：{skills.judgment}</li>
        <li>フリースロー成功率：{skills.freethrow}</li>
        <li>ミドルシュート成功率：{skills.middleshot}</li>
        <li>パス精度：{skills.pass}</li>
      </ul>
      <p>合計ポイント：{points}</p>

      <button onClick={handleReward}>🎁 ご褒美アイテムをゲット！（50pt）</button>

      {items.length > 0 && (
        <>
          <h2>🎒 持っているアイテム</h2>
          <ul>
            {items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default App;