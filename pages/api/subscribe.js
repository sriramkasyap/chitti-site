import { isValidObjectId } from "mongoose";
import withDB from "../../src/middleware/withDB";
import Subscriber from "../../src/models/Subscriber";
import SubscriptionPlan from "../../src/models/SubscriptionPlan";

export default withDB(async (req, res) => {
  try {
    if (req.method === "POST") {
      const { emailId, planId, name } = req.body;

      if (!emailId || !name || !planId || !isValidObjectId(planId)) throw { message: "Invalid Request", statusCode: 501 };

      const existing = await Subscriber.findOne({
        email: emailId,
      });

      if (existing && existing._id) {
        if (existing.subscriptions.includes(planId)) throw { message: "You are already Subscribed to this newsletter", statusCode: 501 };

        //   Update existing Subscriber
        await Subscriber.findByIdAndUpdate(existing._id, {
          $push: {
            subscriptions: planId,
          },
        });

        await SubscriptionPlan.findByIdAndUpdate(planId, {
          $push: {
            subscribers: existing._id,
          },
        });

        return res.send({ success: true });
      }
      const subscriber = new Subscriber({
        name,
        email: emailId,
        subscriptions: [planId],
        payments: [],
        registeredAt: Date.now(),
      });

      const saved = await subscriber.save();

      await SubscriptionPlan.findByIdAndUpdate(planId, {
        $push: {
          subscribers: saved._id,
        },
      });

      return res.send({
        success: true,
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

export const runtime = "edge";
