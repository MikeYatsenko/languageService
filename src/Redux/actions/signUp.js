import axios from "axios";

export const SIGN_UP = "SIGN_UP";

export const signUpAction = (data) => {
  return (dispatch) => { // TODO async ?
    return axios
      .post("http://localhost:3001/users", { ...data })
      .then(
        (response) => (
          (data["accessToken"] = response.data.accessToken),
          dispatch({
            type: SIGN_UP,
            data,
          })
        )
      )
      .catch((error) => {
        console.log(error);
      });
  };
};
