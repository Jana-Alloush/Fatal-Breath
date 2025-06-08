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

export const createRoom = async (name, house_id,type) => {
  try {
    const response = await sendRequest({
      method: requestMethods.POST,
      route: "/user/admin/add-room",
      body: {
        name,
        house_id,
        type,
      },
    });

    return response;
  } catch (error) {
    throw error;
  }
};
export const loadRooms = async () => {
  try {
    const response = await sendRequest({
      method: requestMethods.GET,
      route: "/user/admin/get-rooms",
   
    });

    return response;
  } catch (error) {
    throw error;
  }
};
export const deleteRoom = async (roomId) => {
  try {
    const response = await sendRequest({
      method: requestMethods.DELETE,
      route: `/user/admin/room/${roomId}`,
    });

    return response;
  } catch (error) {
    throw error;
  }
};
export const deleteHouse = async (houseId) => {
  try {
    const response = await sendRequest({
      method: requestMethods.DELETE,
      route: `/user/admin/house/${houseId}`,
    });

    return response;
  } catch (error) {
    throw error;
  }
};
