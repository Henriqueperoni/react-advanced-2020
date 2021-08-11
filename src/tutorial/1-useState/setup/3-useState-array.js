import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
    const [people, setPeople] = React.useState(data);

    const clearAll = () => {
        console.log(people.length);
        if (people.length === 4) {
            setPeople([]);
        } else {
            setPeople(data);
        }
    };

    const removeItem = (id) => {
        let newPeople = people.filter((person) => person.id !== id);
        setPeople(newPeople);
    };
    return (
        <>
            {people.map((person) => {
                const { id, name } = person;
                return (
                    <div key={id} className="item">
                        <h4>{name}</h4>
                        <button onClick={() => removeItem(id)}>Remove</button>
                    </div>
                );
            })}
            <button className="btn" onClick={() => clearAll()}>
                Delete All
            </button>
        </>
    );
};

export default UseStateArray;
