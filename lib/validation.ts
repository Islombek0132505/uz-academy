import { z } from "zod"

export const contactScheme = z.object({
    name: z.string().min(2),
    phone: z.string().length(9),
})

export const loginScheme = z.object({
    email: z.string().email("Elektron manzil xato"),
    password: z.string({
        required_error: "Parol kiritilmadi"
    }).min(8, {message: "Parol 8 ta belgidan kam bo'lmasin"})
})

export const registerScheme = z.object({
    email: z.string().email("Elektron manzil xato"),
    password: z.string({
        required_error: "Parol kiritilmadi"
    }).min(8, {message: "Parol 8 ta belgidan kam bo'lmasin"}),
    confirmPassword: z.string().min(1, {
        message: "Parol tasdig'i kiritilmadi"
    }),
    name: z.string().min(1, {
        message: "Ismingizni kiriting"
    }),
    surname: z.string().min(1, {
        message: "Familiyangizni kiriting"
    })
}).refine(data => data.confirmPassword === data.password, {
    message: "Parol tasdig'i noto'g'ri",
    path: ["confirmPassword"]
})