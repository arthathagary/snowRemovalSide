import React,{useState} from "react";

const CustomRates = () => {
    const [allchecked, setAllChecked] = useState([]);

    function handleChange(e) {
        if (e.target.checked) {
           setAllChecked([...allchecked, e.target.value]);
        } else {
           setAllChecked(allchecked.filter((item) => item !== e.target.value));
        }
     }
  return (
    <>
      <form>
      <label>Select Driveway and Front Porch</label>
        <select>
          <option value="someOption">1</option>
          <option value="otherOption">2</option>
          <option value="otherOption">4</option>
        </select>
        <label>Sidewalk</label>
        <input value="150" type="checkbox" onChange={handleChange}/>
        <label>Boulder</label>
        <input value="150" type="checkbox" onChange={handleChange}/>
        <button>Checkout</button>
      </form>
      <div>
        <h1>Display Total</h1>
        <div>The all checked values are {allchecked[0]+allchecked[1]}</div>
      </div>
    </>
  );
};

export default CustomRates;
