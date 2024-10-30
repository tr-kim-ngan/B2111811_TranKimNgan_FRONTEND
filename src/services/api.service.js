import axios from "axios";

const commonConfig = {
    headers: {
        "Content-Type": "application/json",//gửi đi là JSON
        Accept: "application/json",//nhận lại dữ liệu ở định dạng JSON
    },
};

export default (baseURL) => {
    return axios.create({
        baseURL,
        ...commonConfig,
    });
};





