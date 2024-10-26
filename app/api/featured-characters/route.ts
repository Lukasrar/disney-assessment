import { NextRequest, NextResponse } from "next/server";
import { SsrApi } from "../../services/Axios";

export async function GET(req: NextRequest) {
  try {
    const { data } = await SsrApi.get("/character?page=1&pageSize=50");

    const characters = data.data;

    const randomCharacters = [];
    const selectedIndices = new Set<number>();

    while (
      randomCharacters.length < 4 &&
      selectedIndices.size < characters.length
    ) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      if (!selectedIndices.has(randomIndex)) {
        randomCharacters.push(characters[randomIndex]);
        selectedIndices.add(randomIndex);
      }
    }

    return NextResponse.json({ ...data, data: randomCharacters });
  } catch (error: any) {
    console.error("Error fetching characters:", error);
    const errorMessage = error.response?.data || {
      message: "An error occurred",
    };

    return NextResponse.json(
      { error: errorMessage },
      { status: error.response?.status || 500 }
    );
  }
}
