import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    name: "Waqar Ul Hassan",
    email: "Waqarhassan@gmail.com",
    method: "GET",
  });
}
export function POST() {
  return NextResponse.json({
    name: "Waqar Ul Hassan",
    email: "Waqarhassan@gmail.com",
    method: "POST",
  });
}
export function PUT() {
  return NextResponse.json({
    name: "Waqar Ul Hassan",
    email: "Waqarhassan@gmail.com",
    method: "PUT",
  });
}
