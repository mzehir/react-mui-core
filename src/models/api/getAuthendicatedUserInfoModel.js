export const getAuthendicatedUserInfoRequestAfterDataSettings = async (
  response
) => {
  let responseAuthendicatedUserData = {
    name: response.name,
    surname: response.surname,
    image: response.userImageUrl,
    email: response.email,
    phone: response.phone,
    birthDate: response.birthDate,
    lang: response.lang,
    theme: response.theme,

    id: response.id,
  };

  return { responseAuthendicatedUserData };
};
