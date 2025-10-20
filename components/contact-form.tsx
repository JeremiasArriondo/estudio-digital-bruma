"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Por favor ingresa tu nombre" }),
  emailOrPhone: z
    .string()
    .min(2, { message: "Este campo no puede estar vacío" })
    .refine(
      (value) => {
        // Regex para email simple
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // Regex para teléfono (permite +, espacios y 7 a 15 dígitos)
        const phoneRegex = /^\+?\d[\d\s]{7,15}$/;
        return emailRegex.test(value) || phoneRegex.test(value);
      },
      {
        message: "Ingrese un email o número de teléfono válido",
      }
    ),
  message: z.string().min(10, {
    message: "Asegúrese de que su mensaje tenga al menos 10 caracteres.",
  }),
});

export const ContactForm = () => {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      emailOrPhone: "",
      message: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof contactFormSchema>) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Error al enviar el mensaje");
      form.reset();
      toast("El email fue enviado correctamente");
    } catch (error) {
      toast("El email no pudo ser entregado");
    }
  };

  return (
    <Form {...form}>
      <form
        className="grid grid-cols-3 items-center"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="col-span-3 flex flex-col gap-4 lg:col-span-3 lg:gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-violet-secondary dark:text-purple-400">
                  Nombre
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Tu nombre"
                    {...field}
                    className="border-2 border-purple-200 dark:border-slate-600 focus:border-purple-600 dark:focus:border-purple-500 focus:ring-purple-600 dark:focus:ring-purple-500 dark:bg-slate-900 dark:text-purple-200"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="emailOrPhone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-violet-secondary dark:text-purple-400">
                  Email o teléfono
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="email@example.com"
                    {...field}
                    className="border-2 border-purple-200 dark:border-slate-600 focus:border-purple-600 dark:focus:border-purple-500 focus:ring-purple-600 dark:focus:ring-purple-500 dark:bg-slate-900 dark:text-purple-200"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-violet-secondary dark:text-purple-400">
                  Mensaje
                </FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Tu mensaje"
                    className="border-2 border-purple-200 dark:border-slate-600 focus:border-purple-600 dark:focus:border-purple-500 focus:ring-purple-600 dark:focus:ring-purple-500 dark:bg-slate-900 dark:text-purple-200"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full bg-gradient-to-r from-[#6C668A] to-[#9A8FC0] hover:from-purple-700 hover:to-fuchsia-700 dark:from-purple-500 dark:to-fuchsia-500 dark:hover:from-purple-600 dark:hover:to-fuchsia-600 transition-colors shadow-lg hover:shadow-xl text-white">
            <Send className="mr-2 h-4 w-4" />{" "}
            {isLoading ? "Enviando....." : "Enviarme"}
          </Button>
        </div>
      </form>
    </Form>
  );
};
