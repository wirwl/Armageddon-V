// Fake users data
import { NextApiRequest, NextApiResponse } from "next";
import { sampleNASAData } from "../../utils/sample-data";

// https://api.nasa.gov/neo/rest/v1/feed?start_date=2021-04-16&end_date=2021-04-16&api_key=X64maaOGLjj7OiejYOWiKKjRHyC59He9NsJBukvR

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // const resdata = await fetch(
  //   `https://api.nasa.gov/neo/rest/v1/feed?start_date=2021-04-16&end_date=2021-04-16&api_key=X64maaOGLjj7OiejYOWiKKjRHyC59He9NsJBukvR`
  // );
  // res.status(200).json(await resdata.json());
  // if (req.method === "POST") {
  // } else {
  //   // Handle any other HTTP method
  //   res.status(200).json(sampleNASAData);
  // }
}
