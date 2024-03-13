import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/connect";
import { POSTS_PER_PAGE } from "@/constants/posts";
import { Category } from "@/components";
import { getAuthSessions } from "@/utils";

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url as string);

  const page = parseInt(searchParams.get("page") || "1");
  const postsPerPage = parseInt(
    searchParams.get("postsPerPage") || POSTS_PER_PAGE + ""
  );
  const category = searchParams.get("category");
  let sort = searchParams.get("sort");
  let popular = searchParams.get("popular");

  if (sort && sort !== "asc" && sort !== "desc") sort = null;
  if (popular && popular !== "asc" && popular !== "desc") popular = null;

  const query = {
    take: postsPerPage,
    skip: postsPerPage * (page - 1),
    where: { ...(category && { catSlug: category }) },
    orderBy: [
      {
        ...(sort && { createdAt: sort as "asc" | "desc" }),
      },
      {
        ...(popular && { views: popular as "asc" | "desc" }),
      },
    ],
    include: { user: true, cat: true },
  };
  console.log(query);

  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count({ where: query.where }),
    ]);

    return new NextResponse(JSON.stringify({ posts, count }), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }),
      { status: 500 }
    );
  }
};

// Create a Post
export const POST = async (req: NextRequest) => {
  const session = await getAuthSessions();

  if (!session) {
    return new NextResponse(JSON.stringify({ message: "Not Authenticated" }), {
      status: 401,
    });
  }

  try {
    const body = await req.json();
    const post = await prisma.post.create({
      data: { ...body, userEmail: session.user?.email },
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
