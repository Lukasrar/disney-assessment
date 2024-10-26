import { NextRequest, NextResponse } from "next/server";
import { SsrApi } from "../../../services/Axios";

export async function GET(
  req: NextRequest,
  { params }: { params: { name: string } }
) {
  try {
    const { name } = params;

    const endpoint = name
      ? `/character?name=${name}&page=1&pageSize=8`
      : "/character?page=1&pageSize=8";

    const { data } = await SsrApi.get(endpoint);

    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.response?.data || "An error occurred" },
      { status: error.response?.status || 500 }
    );
  }
}
