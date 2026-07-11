import { ApiResponse } from "../utils/api-response.js";
import { asyncHandler } from "../utils/async-handler.js";

/*
const healthCheck = async (req, res) => {
  try {
    const user = await getUserFromDB(); // db is somewhere else , so connection may take
    res
      .status(200)
      .json(new ApiResponse(200, { message: "server is running" }));
  } catch (error) {
    next(error); // passing error to express builtin error handler
  }
};
*/

const healthCheck = asyncHandler(async (req, res) => {
  res.status(200).json(new ApiResponse(200, { message: "Server is Running" }));
});
export { healthCheck };
