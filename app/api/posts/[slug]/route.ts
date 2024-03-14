import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/connect";
import { POSTS_PER_PAGE } from "@/constants/posts";
import { Category } from "@/components";

interface paramsProps {
  params: { slug: string };
}

export const GET = async (req: NextRequest, { params }: paramsProps) => {
  const { slug } = params;

  try {
    const post = await prisma.post.update({
      where: { slug },
      data: { views: { increment: 1 } },
      include: { user: true },
    });

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }),
      { status: 500 }
    );
  }
};
