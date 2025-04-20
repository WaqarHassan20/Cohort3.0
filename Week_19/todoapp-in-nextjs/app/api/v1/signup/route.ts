import { NextRequest, NextResponse } from "next/server";

import { PrismaClient } from "../../../../app/generated/prisma";

const client = new PrismaClient();

export async function POST(req: NextRequest) {
  const data = await req.json();
  console.log(data);
  client..create({
    data: {
      username: data.username,
      password: data.password,
    },
  });

  return NextResponse.json({ message: "User Signed Up successfully!" });
}
