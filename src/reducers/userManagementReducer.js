const initialData = {
  user: null,
  isFetchingWhoAmI: false,
  whoAmIError: null
};

const userManagementMapping = (state = initialData, action: Action) => {
  switch (action.type) {
    case "REQUEST_WHO_AM_I":
      return Object.assign({}, state, {
        isFetchingWhoAmI: true,
        whoAmIError: null
      });
    case "RECEIVE_WHO_AM_I":
      return Object.assign({}, state, {
        isFetchingWhoAmI: false,
        whoAmIError: null,
        user: action.user
      });
    case "RECEIVE_WHO_AM_I_ERROR":
      return Object.assign({}, state, {
        isFetchingWhoAmI: false,
        whoAmIError: action.err,
        user: null
      });
    default:
      return state;
  }
};
export default userManagementMapping;
