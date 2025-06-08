/* eslint-disable no-useless-catch */
import { localStorageAction } from "../core/config/localstorage";
import { sendRequest } from "../core/config/request";
import { requestMethods } from "../core/enums/requestMethods";

export const RegisterUser = async (company_name, email, password, phone_nb) => {
  try {
    const response = await sendRequest({
      route: "/guest/register",
      method: requestMethods.POST,
      body: {
        company_name,
        email,
        phone_nb,
        password,
      },
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export const Login = async (email, password) => {
  try {
    const response = await sendRequest({
      method: requestMethods.POST,
      route: "/auth/login",
      body: {
        email,
        password,
      },
    });

    localStorageAction("access_token", response.user.token);
    localStorageAction("user_data", response.user);

    return response;
  } catch (error) {
    throw error;
  }
};

export const createHouse = async (name, city,country) => {
  try {
    const response = await sendRequest({
      method: requestMethods.POST,
      route: "/user/admin/add-house",
      body: {
        name,
        city,
        country,
      },
    });

    return response;
  } catch (error) {
    throw error;
  }
};
export const loadHouses = async () => {
  try {
    const response = await sendRequest({
      method: requestMethods.GET,
      route: "/user/admin/get-houses",
   
    });

    return response;
  } catch (error) {
    throw error;
  }
};