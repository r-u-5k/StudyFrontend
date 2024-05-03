const BACKEND_SERVER = 'http://192.168.15.7:8080';

export const userWriteAction = async (sendJsonObject) => {
  const response = await fetch(`${BACKEND_SERVER}/user`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(sendJsonObject),
  });
  const resultJsonObject = await response.json();
  return resultJsonObject;
};

export const userLoginAction = async (sendJsonObject) => {
  const response = await fetch(`${BACKEND_SERVER}/user/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(sendJsonObject),
  });
  const resultJsonObject = await response.json();
  return resultJsonObject;
};

export const userView = async (userId) => {
  const response = await fetch(`${BACKEND_SERVER}/user/${userId}`, {
    method: 'GET',
  });
  const resultJsonObject = await response.json();
  return resultJsonObject;
};

export const userModifyAction = async (sendJsonObject, userId) => {
  const response = await fetch(`${BACKEND_SERVER}/user/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(sendJsonObject),
  });
  const responseJsonObject = await response.json();
  return responseJsonObject;
};
