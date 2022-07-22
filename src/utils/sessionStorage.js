const saveToStorage = (data) => {
    sessionStorage.setItem("locate", JSON.stringify(data));
};

export { saveToStorage };

const readFromStorage = (data) => {
    return JSON.parse(sessionStorage.getItem("locate"));
};

export { readFromStorage };
