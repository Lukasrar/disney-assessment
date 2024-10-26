import { NextRequest, NextResponse } from "next/server";
import { SsrApi } from "../../../services/Axios";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const { data } = await SsrApi.get(`/character/${id}`);

    return NextResponse.json(data.data);
  } catch (error: any) {
    console.error("Error fetching character:", error);
    const errorMessage = error.response?.data || {
      message: "An error occurred",
    };

    return NextResponse.json(
      { error: errorMessage },
      { status: error.response?.status || 500 }
    );
  }
}
