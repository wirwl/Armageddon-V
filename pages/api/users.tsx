import { NextApiRequest, NextApiResponse } from "next";

const faker = require("faker");

/** Generate Fake user data */
const fakeUsers: any[] = [];
// Generate 300 users with fake names
for (let i = 0; i < 300; i++) {
  fakeUsers.push({ name: faker.name.findName() });
}

// Limit users to return per page
const getLimitedUsers = (limit: number) => {
  const refinedUsers = [];
  for (let i = 0; i < limit; i++) {
    refinedUsers.push(fakeUsers[i]);
  }
  return refinedUsers;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const curPage: number = parseInt(req.query.page as string) || 1;
  // Display 30 users per page load
  const perPage = 10;

  try {
    const totalUsers = fakeUsers.length;
    const refinedUsers = getLimitedUsers(perPage * curPage);

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        message: "Fetched users",
        users: refinedUsers,
        curPage: curPage,
        maxPage: Math.ceil(totalUsers / perPage),
      })
    );
  } catch (err) {
    console.log(err);
  }
}
