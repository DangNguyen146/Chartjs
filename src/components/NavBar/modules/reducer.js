const sateDefault = {
  status: false,
};
const clicktogle = (state = sateDefault, action) => {
  switch (action.type) {
    case "ADD_TOGLE": {
      //cập nhật lại state
      state.status = action.status;
      return { ...state };
    }

    default: {
      return { ...state };
    }
  }
};

export default clicktogle;
