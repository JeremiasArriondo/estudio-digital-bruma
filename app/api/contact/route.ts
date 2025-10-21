import { EmailTemplate } from "@/components/email-template";
import { ReactNode } from "react";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2).max(50),
  emailOrPhone: z.string().min(2),
  message: z.string().min(10).max(500),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const validatedData = contactSchema.parse(body);

    const sanitizedData = {
      name: validatedData.name.trim(),
      emailOrPhone: validatedData.emailOrPhone.trim(),
      message: validatedData.message.trim(),
    };

    const { data, error } = await resend.emails.send({
      from: "Website Estudio digital Bruma Jeremias Arriondo <onboarding@resend.dev>",
      to: ["jeremiasarriondo98@gmail.com"],
      subject: `Nuevo mensaje de ${sanitizedData.name}`,
      react: EmailTemplate(sanitizedData) as ReactNode,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json(
        { error: "Error interno del servidor" },
        { status: 500 }
      );
    }

    return Response.json({ success: true, data });
  } catch (error) {
    console.error("API error:", error);

    if (error instanceof z.ZodError) {
      return Response.json(
        { error: "Datos de entrada inválidos" },
        { status: 400 }
      );
    }

    return Response.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
