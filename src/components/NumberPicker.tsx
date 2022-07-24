import { useState } from "react";

export default function NumberPicker(): JSX.Element {
  const [counterValueFromCurrentRender, queueRerenderWithNewCounterValue] =
    useState(0);
  const [storedValuesFromCurrentRender, queueRerenderWithNewStoredValues] =
    useState<number[]>([]);

  const handleAddOneToCounter = () => {
    queueRerenderWithNewCounterValue(counterValueFromCurrentRender + 1);
  };

  const handleSubtractOneFromCounter = () => {
    queueRerenderWithNewCounterValue(counterValueFromCurrentRender - 1);
  };

  const handleStoreCurrentCount = () => {
    queueRerenderWithNewStoredValues([
      ...storedValuesFromCurrentRender,
      counterValueFromCurrentRender,
    ]);
    // console.log(storedValuesFromCurrentRender)
  };
    // console.log(storedValuesFromCurrentRender)
  return (
    <>
      <h1>Number picker</h1>
      {/* <p>Your stored numbers: {storedValuesFromCurrentRender.join(", ")}</p> */}
      <p>Your stored numbers: {storedValuesFromCurrentRender.slice(-5).map((element, idx) =>(<li key={idx}>{element}</li>))}</p>
      <p>Counter: {counterValueFromCurrentRender}</p>
      <button onClick={handleSubtractOneFromCounter}>-1</button>
      <button onClick={handleAddOneToCounter}>+1</button>
      <hr />
      <button onClick={handleStoreCurrentCount}>Store current count</button>
    </>
  );
}


{/* <p>Your stored numbers: {storedValuesFromCurrentRender.map(element, inx) =>(<li> key={inx}{element}</li>}</p>
const mappedShoppingListElements = shoppingList.map((item, idx) => (
  <li key={idx}>{shoppingListItemToString(item)}</li> */}