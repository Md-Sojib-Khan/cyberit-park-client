import clientPromise from "@/lib/db";
import bcrypt from "bcrypt";

export async function POST(req) {
  const { name, email, password, image } = await req.json();

  const client = await clientPromise;
  const users = client.db().collection("users");

  const exist = await users.findOne({ email });
  if (exist) return new Response("User already exists", { status: 400 });

  const hashedPassword = await bcrypt.hash(password, 10);

  await users.insertOne({
    name,
    email,
    password: hashedPassword,
    image,
  });

  return new Response("Success", { status: 201 });
}
