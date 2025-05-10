function Tab({title, onClick}) {
    return (
      <div>
          <button onClick={onClick}>{title}</button>
      </div>
    );
}

export default Tab;
