import storage from "redux-persist/lib/storage"; // Redux Persist Storage

// Middleware: Redux Persist Config
const persistConfig = {
  // Root
  key: "primary",
  // Storage Method
  storage: storage,
  // Whitelist (Save Specific Reducers)
  whitelist: [],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: [],
};

export default persistConfig;
