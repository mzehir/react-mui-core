export const signInRequestBeforeDataSettings = async (values) => {
  let requestData = {
    email: values.email,
    password: values.password,
    rememberMe: values.rememberMe,
    bypassVerifyToken: values.bypassVerifyToken,
  };

  return { requestData };
};

export const signInRequestAfterDataSettings = async (response) => {
  let responseTokenData = {};
  let responseCriticalUserData = {};
  let responseAuthendicatedUserData = {};

  if (response.token) {
    responseTokenData = { token: response.token };
  } else {
    responseCriticalUserData = {
      accessToken: response.accessToken,
      bypassVerifyToken: response.bypassVerifyToken, // Verify olmadan login olma anahtarı
      idleTimeOut: response.idleTimeOut, // Boşta kalma zaman aşımı
      isPaswordExpired: response.isPaswordExpired, // Parolanın süresi doldu mu?
      createPaswordToken: response.createPaswordToken, // Parola süresi dolduysa, yeni parola için kullanılacak token
      isRequiredToChangePassword: response.isRequiredToChangePassword,
    };

    responseAuthendicatedUserData = {
      name: response.authendicatedUser.name,
      surname: response.authendicatedUser.surname,
      image: response.authendicatedUser.userImageUrl,
      email: response.authendicatedUser.email,
      phone: response.authendicatedUser.phone,
      birthDate: response.authendicatedUser.birthDate,
      lang: response.authendicatedUser.lang,
      theme: response.authendicatedUser.theme,

      id: response.authendicatedUser?.id,
    };
  }

  return {
    responseTokenData,
    responseCriticalUserData,
    responseAuthendicatedUserData,
  };
};
