import { serializeObject } from "../utils";

export const getCreators = async (params) => {
  return fetch(`/api/creators?${serializeObject(params)}`).then((r) => r.json());
};

export const getCreator = async (creatorId) => {
  return fetch(`/api/creators/${creatorId}`).then((r) => r.json());
};
