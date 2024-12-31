import feathersClient from "./feathersClient";

export async function fetchAgencies() {
  return feathersClient.service("agencies").find();
}

export async function fetchBlocks() {
  return feathersClient.service("blocks").find();
}

export async function fetchUnits() {
  return feathersClient.service("units").find();
}
