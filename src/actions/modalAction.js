export const triggerModal =
  (flag = false) =>
  (dispatch) => {
    dispatch({
      type: "TRIGGER_MODAL",
      data: flag,
    });
  };
