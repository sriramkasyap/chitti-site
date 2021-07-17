import { serializeObject } from "../utils";

export const getCreators = async (params) => {
  return fetch(`/api/creators?${serializeObject(params)}`).then((r) => r.json());
};

export const subscribeToCreatorPlan = async (emailId, planId) => {
  return fetch("/api/subscribe", {
    method: "POST",
    body: JSON.stringify({
      emailId,
      planId,
    }),
    headers: {
      "content-type": "application/json",
    },
  }).then((r) => r.json());
};
