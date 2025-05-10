import Tab from "../tab/tab.jsx";

function Tabs({items, onChange}) {
    const tabsItem = items.map(({name, id}) =>
        <Tab key={id} title={name} onClick={() => onChange(id)}/>
    );

    return (
        <div>
            {tabsItem}
        </div>
    );
}

export default Tabs;
