import { prisma } from "@/lib/prisma";
import { log } from "console";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (!user) {
      return Response.json({ message: "Invalid credentials" }, { status: 404 });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return Response.json({ message: "Invalid credentials" }, { status: 404 });
    }
    return Response.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    return Response.json({ message: "Internal server error. Please try again later!" }, { status: 500 });
  }
}
