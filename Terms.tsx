import { ArrowLeft } from 'lucide-react';

function Terms() {
  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <a href="/" className="inline-flex items-center text-amber-500 hover:text-amber-600 mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Volver al inicio
        </a>

        <h1 className="text-4xl font-bold text-slate-900 mb-8">Términos y Condiciones</h1>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-6 text-slate-700">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Información General</h2>
            <p className="mb-4">
              El presente sitio web es propiedad de <strong>GO ENERGY</strong>, CUIT: 30-71812075-2, con domicilio en Torres Sarmiento. Rawson 1869, Martínez, San Isidro, Buenos Aires y San Martín esq. España, Corrientes Capital.
            </p>
            <p className="mb-4">
              El uso de este sitio web implica la aceptación plena de los presentes Términos y Condiciones.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Objeto</h2>
            <p className="mb-4">
              Este sitio web tiene como objetivo proporcionar información sobre servicios de instalación, mantenimiento y asesoramiento en sistemas de energía solar para hogares y empresas en Argentina.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Servicios</h2>
            <p className="mb-4">Los servicios ofrecidos incluyen:</p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Instalación de sistemas fotovoltaicos</li>
              <li>Cálculo y diseño de proyectos solares</li>
              <li>Mantenimiento preventivo y correctivo</li>
              <li>Asesoramiento técnico especializado</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Presupuestos y Contrataciones</h2>
            <p className="mb-4">
              Los presupuestos solicitados a través del formulario de contacto son informativos y no constituyen una oferta vinculante. Los precios y condiciones finales se confirmarán mediante un presupuesto formal escrito.
            </p>
            <p className="mb-4">
              La contratación de servicios se formalizará mediante un contrato que detallará las condiciones específicas de cada proyecto.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Garantías</h2>
            <p className="mb-4">
              Los productos y servicios ofrecidos cuentan con garantías según lo establecido por el Código Civil y Comercial de la Nación Argentina y la Ley de Defensa del Consumidor (Ley 24.240).
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Garantía legal de conformidad</li>
              <li>Garantía de los paneles solares según especificaciones del fabricante</li>
              <li>Garantía de instalación por 12 meses</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Derechos de Propiedad Intelectual</h2>
            <p className="mb-4">
              Todo el contenido de este sitio web (textos, imágenes, logotipos, diseños) es propiedad de GO ENERGY o de terceros que han autorizado su uso. Queda prohibida la reproducción, distribución o modificación del contenido sin autorización expresa.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Limitación de Responsabilidad</h2>
            <p className="mb-4">
              GO ENERGY no se hace responsable de los daños que pudieran derivarse del uso de este sitio web, incluyendo pero no limitado a:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Errores u omisiones en el contenido</li>
              <li>Problemas técnicos de acceso al sitio</li>
              <li>Acciones de terceros</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Modificaciones</h2>
            <p className="mb-4">
              GO ENERGY se reserva el derecho de modificar los presentes Términos y Condiciones en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en el sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Jurisdicción y Ley Aplicable</h2>
            <p className="mb-4">
              Estos Términos y Condiciones se rigen por las leyes de la República Argentina. Para cualquier controversia, las partes se someten a la jurisdicción de los Tribunales Ordinarios en lo Comercial de la Ciudad Autónoma de Buenos Aires.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Contacto</h2>
            <p className="mb-4">
              Para cualquier consulta sobre estos Términos y Condiciones, puede contactarnos a:
            </p>
            <p><strong>GO ENERGY</strong></p>
            <p>Email: go.energy@go-energysolar.com</p>
            <p>Teléfono: 3794-527424</p>
            <p>Horarios: Lunes a Sábados de 8 a 17hs</p>
          </section>

          <div className="border-t border-slate-200 pt-6 mt-8">
            <p className="text-sm text-slate-500">
              Última actualización: Enero 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terms;
