/*
    -------------------------------
    ENVIRONTMENT VARIABLE CONFIG
    -------------------------------
*/

// development mode
const devEnv = {};

// production mode
const prodEnv = {};

// export env
const NODE_ENV = process.env.NODE_ENV === "development";
const env = NODE_ENV ? devEnv : prodEnv;

export default env;
