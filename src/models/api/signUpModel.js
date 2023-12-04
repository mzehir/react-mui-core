export const signUpRequestBeforeDataSettings = async (values) => {
  let requestData = {
    name: values.name,
    surname: values.surname,
    email: values.email,
    phone: values.phoneNumber,
    password: values.password,
  };

  return { requestData };
};

export const signUpRequestAfterDataSettings = async (response) => {
  let responseData = { isSuccess: response.isSuccess };
  return { responseData };
};
