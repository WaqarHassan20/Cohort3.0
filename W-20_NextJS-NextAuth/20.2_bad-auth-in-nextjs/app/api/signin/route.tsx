import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"
export async function POST(req:NextRequest,) {
     
    const userId = 1;

    const body =  await req.json();

    const username = body.username;
    const password = body.password;

    console.log(username, password);

    const token = jwt.sign({
        userId
    },"BappaStunnin")

    return NextResponse.json({
        message: "Done!",
        token: token
    })
}
