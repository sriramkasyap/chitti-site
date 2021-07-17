import { serializeObject } from "../utils";

export const getCreators = async (params) => {
  return fetch(`/api/creators?${serializeObject(params)}`).then((r) => r.json());
};

export const subscribeToCreatorPlan = async (name, emailId, planId) => {
  return fetch("/api/subscribe", {
    method: "POST",
    body: JSON.stringify({
      name,
      emailId,
      planId,
    }),
    headers: {
      "content-type": "application/json",
    },
  }).then((r) => r.json());
};
