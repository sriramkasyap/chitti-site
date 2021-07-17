import { isValidObjectId } from "mongoose";
import withDB from "../../../src/middleware/withDB";
import Creator from "../../../src/models/Creator";

export default withDB(async (req, res) => {
  try {
    if (req.method === "GET") {
      const { creatorId } = req.query;

      if (!isValidObjectId(creatorId)) throw { statusCode: 404, message: "Creator Not found" };

      const creator = await Creator.findById(creatorId, {
        _id: 1,
        profile: 1,
        plans: 1,
      }).lean();

      if (!creator || !creator._id) throw { statusCode: 404, message: "Creator Not found" };

      return res.send({
        success: true,
        creator,
      });
    }
    throw { message: "Invalid Request", statusCode: 404 };
  } catch (error) {
    console.error(error);
    res.status(error.statusCode || 501).send({
      error: true,
      message: error.message,
    });
  }
});
