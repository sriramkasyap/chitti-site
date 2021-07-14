import withDB from "../../../src/middleware/withDB";
import Creator from "../../../src/models/Creator";

export default withDB(async (req, res) => {
  try {
    if (req.method === "GET") {
      let { filters, limit, page } = req.query;
      if (!filters) filters = {};

      limit = parseInt(limit, 10) || 20;
      page = parseInt(page, 10) || 0;

      console.log("f", filters);

      const creators = await Creator.find(filters, {
        _id: 1,
        profile: 1,
      })
        .limit(limit)
        .skip(page * limit);

      return res.send({
        success: true,
        creators,
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
