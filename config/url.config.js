/*
    -------------------------------
    BASE URL ENVIRONTMENT CONFIG
    -------------------------------
*/

// development mode
const devUrl = {
  baseUrl: "https://api.on5.co.id/v1/",
};

// production mode
const prodUrl = {
  baseUrl: "https://prod-api.on5.co.id/v1/",
};

// export url
const NODE_ENV = process.env.NODE_ENV === "development";
const url = NODE_ENV ? devUrl : prodUrl;

export default url;
