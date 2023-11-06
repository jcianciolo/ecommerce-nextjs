import { cookies } from "next/dist/client/components/headers"
import prisma from "./prisma";

export async function createCart() {
    const newCart = await prisma.cart.create({
        data: {}
    })

    cookies().set("localCartId", newCart.id);
}