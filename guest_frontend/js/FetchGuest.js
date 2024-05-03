const BACKEND_SERVER = 'http://192.168.15.7:8080';

const listGuest = async () => {
  const response = await fetch(`${BACKEND_SERVER}/guests`);
  const resultJsonObject = await response.json();
  return resultJsonObject;
};

const viewGuest = async (guest_no) => {
  const response = await fetch(`${BACKEND_SERVER}/guests/${guest_no}`, {
    method: 'GET',
  });
  const resultJsonObject = await response.json();
  return resultJsonObject;
};

const removeGuest = async (guest_no) => {
  const response = await fetch(`${BACKEND_SERVER}/guests/${guest_no}`, {
    method: 'DELETE',
  });
  const responseJsonObject = await response.json();
};

const writeFormGuest = async (sendJsonObject) => {
  const response = await fetch(`${BACKEND_SERVER}/guests`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(sendJsonObject),
  });
  const resultJsonObject = await response.json();
  return resultJsonObject;
};

const modifyGuest = async (sendJsonObject, guest_no) => {
  const response = await fetch(`${BACKEND_SERVER}/guests/${guest_no}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(sendJsonObject),
  });
  const responseJsonObject = await response.json();
  return responseJsonObject;
};

const modifyFormGuest = async (guest_no) => {
  const response = await fetch(`${BACKEND_SERVER}/guests/${guest_no}`);
  const responseJsonObject = await response.json();
  return responseJsonObject;
};

export { listGuest, viewGuest, removeGuest, writeFormGuest, modifyGuest, modifyFormGuest };
