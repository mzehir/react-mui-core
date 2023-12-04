export const verifySignInRequestBeforeDataSettings = async (values) => {
  let requestData = {
    token: values.token,
    verificationCode: values.verificationCode.trim(),
  };

  return { requestData };
};

export const verifySignInRequestAfterDataSettings = async (response) => {
  let responseCriticalUserData = {
    accessToken: response.accessToken,
    bypassVerifyToken: response.bypassVerifyToken, // Verify olmadan login olma anahtarı
    idleTimeOut: response.idleTimeOut, // Boşta kalma zaman aşımı
    isPaswordExpired: response.isPaswordExpired, // Parolanın süresi doldu mu?
    createPaswordToken: response.createPaswordToken, // Parola süresi dolduysa, yeni parola için kullanılacak token
    isRequiredToChangePassword: response.isRequiredToChangePassword,
  };

  let responseAuthendicatedUserData = {
    name: response.authendicatedUser.name,
    surname: response.authendicatedUser.surname,
    image: response.authendicatedUser.userImageUrl,
    email: response.authendicatedUser.email,
    phone: response.authendicatedUser.phone,
    birthDate: response.authendicatedUser.birthDate,
    lang: response.authendicatedUser.lang,
    theme: response.authendicatedUser.theme,

    id: response.authendicatedUser.id,
  };

  return { responseCriticalUserData, responseAuthendicatedUserData };
};
