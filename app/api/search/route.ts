import { NextRequest, NextResponse } from "next/server";
import { SsrApi } from "../../services/Axios";

export async function GET(req: NextRequest) {
  try {
    const { data } = await SsrApi.get("/character?page=1&pageSize=8");

    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.response });
  }
}
