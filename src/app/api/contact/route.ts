import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  const { nombre, email, telefono, rubro, tamano, necesidad, modalidad } = body;

  if (!nombre || !email || !necesidad) {
    return NextResponse.json({ error: "Faltan campos requeridos." }, { status: 400 });
  }

  const tamanoLabels: Record<string, string> = {
    micro: "Micro (1-5 personas)",
    pequeno: "Pequeño (5-20 personas)",
    mediano: "Mediano (20-100 personas)",
    grande: "Grande (+100 personas)",
  };

  const { error } = await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: "nicolassilverak@gmail.com",
    replyTo: email,
    subject: `Nueva consulta de diagnóstico — ${nombre}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #FF8C00; padding: 24px 32px; border-radius: 8px 8px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 22px;">Nueva solicitud de diagnóstico</h1>
          <p style="color: rgba(255,255,255,0.85); margin: 6px 0 0; font-size: 14px;">Desde tu portfolio — nicolassilvera.com</p>
        </div>

        <div style="background: #ffffff; padding: 32px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; width: 40%;">
                <strong style="color: #2D2D2D; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Nombre</strong>
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #444; font-size: 15px;">
                ${nombre}
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                <strong style="color: #2D2D2D; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Email</strong>
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                <a href="mailto:${email}" style="color: #FF8C00; text-decoration: none; font-size: 15px;">${email}</a>
              </td>
            </tr>
            ${
              telefono
                ? `<tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                <strong style="color: #2D2D2D; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Teléfono</strong>
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #444; font-size: 15px;">
                ${telefono}
              </td>
            </tr>`
                : ""
            }
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                <strong style="color: #2D2D2D; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Rubro</strong>
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #444; font-size: 15px;">
                ${rubro || "No especificado"}
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                <strong style="color: #2D2D2D; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Tamaño</strong>
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #444; font-size: 15px;">
                ${tamanoLabels[tamano] || "No especificado"}
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                <strong style="color: #2D2D2D; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Reunión</strong>
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #444; font-size: 15px; text-transform: capitalize;">
                ${modalidad}
              </td>
            </tr>
          </table>

          <div style="margin-top: 24px; background: #F5F5F5; border-left: 4px solid #FF8C00; padding: 16px 20px; border-radius: 0 6px 6px 0;">
            <strong style="color: #2D2D2D; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 8px;">Necesidad</strong>
            <p style="color: #444; font-size: 15px; line-height: 1.6; margin: 0;">${necesidad}</p>
          </div>

          <div style="margin-top: 28px; text-align: center;">
            <a
              href="mailto:${email}"
              style="background: #FF8C00; color: white; padding: 12px 28px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 15px; display: inline-block;"
            >
              Responder a ${nombre.split(" ")[0]}
            </a>
          </div>
        </div>
      </div>
    `,
  });

  if (error) {
    return NextResponse.json({ error: "Error al enviar el email." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
