import axios from "axios";
import rateLimit from "axios-rate-limit";
import config from "config";

function Request() {
  // Default config options
  const defaultOptions = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Create instance
  // sets max 2 requests per 1 second, other will be delayed
  // note maxRPS is a shorthand for perMilliseconds: 1000, and it takes precedence
  // if specified both with maxRequests and perMilliseconds
  const instance = rateLimit(axios.create(defaultOptions), {
    maxRequests: 2,
    perMilliseconds: 1000,
    maxRPS: 2,
  });

  instance.defaults.baseURL = config.url.baseUrl;

  return instance;
}

export default Request;
