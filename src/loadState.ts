export const loadState = () => {
  try {
    const item = localStorage.getItem("items");
    console.log(item);
    return JSON.parse(item);
  } catch (e) {
    return undefined;
  }
};

export const saveState = (state) => {
  console.log("state", state);
  localStorage.setItem("items", JSON.stringify(state));
};
