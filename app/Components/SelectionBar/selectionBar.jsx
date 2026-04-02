import "./selectionBar.css";

export default function SelectionBar({ options, selected, setSelected }) {
  return (
    <div className="bar">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => setSelected(option)}
          className={selected === option ? "bar-btn active" : "bar-btn"}
        >
          {option}
        </button>
      ))}
    </div>
  );
}