const addItem = (item) => {
  return {
    type: 'ADD ITEM',
    payload: item,
  };
};

const incrementItemNumber = (item) => {
  return {
    type: 'INCREMENT ITEM NUMBER',
    payload: item,
  };
};

const decrementItemNumber = (item) => {
  return {
    type: 'DECREMENT ITEM NUMBER',
    payload: item,
  };
};

const removeItem = (item) => {
  return {
    type: 'REMOVE ITEM',
    payload: item,
  };
};

export { addItem, incrementItemNumber, decrementItemNumber, removeItem };
