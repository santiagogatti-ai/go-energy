import { ArrowLeft } from 'lucide-react';

function Privacy() {
  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <a href="/" className="inline-flex items-center text-amber-500 hover:text-amber-600 mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Volver al inicio
        </a>

        <h1 className="text-4xl font-bold text-slate-900 mb-8">Política de Privacidad</h1>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-6 text-slate-700">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Responsable del Tratamiento</h2>
            <p className="mb-4">
              <strong>GO ENERGY</strong>, CUIT: 30-71812075-2, con domicilio en Torres Sarmiento. Rawson 1869, Martínez, San Isidro, Buenos Aires y San Martín esq. España, Corrientes Capital, es responsable del tratamiento de los datos personales recogidos a través de este sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Datos que Recopilamos</h2>
            <p className="mb-4">Recopilamos los siguientes datos personales:</p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Nombre completo</li>
              <li>Dirección de correo electrónico</li>
              <li>Número de teléfono</li>
              <li>Ubicación del proyecto</li>
              <li>Mensajes o consultas enviadas a través del formulario de contacto</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Finalidad del Tratamiento</h2>
            <p className="mb-4">Los datos personales serán utilizados para:</p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Responder consultas y solicitudes de presupuesto</li>
              <li>Brindar asesoramiento sobre sistemas de energía solar</li>
              <li>Contactar a los usuarios para ofrecer nuestros servicios</li>
              <li>Enviar información comercial relacionada con energía solar (solo si el usuario lo autoriza)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Base Legal</h2>
            <p className="mb-4">
              El tratamiento de sus datos personales se basa en el consentimiento del interesado, otorgado al enviar el formulario de contacto, y en la necesidad de ejecutar medidas precontractuales a petición del interesado.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Conservación de los Datos</h2>
            <p className="mb-4">
              Los datos personales se conservarán durante el tiempo necesario para cumplir con la finalidad para la que se recogieron y para determinar las posibles responsabilidades que pudieran derivarse de dicha finalidad y del tratamiento de los datos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Derechos del Usuario</h2>
            <p className="mb-4">Los usuarios tienen derecho a:</p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Acceder a sus datos personales</li>
              <li>Rectificar datos inexactos</li>
              <li>Solicitar la supresión de sus datos</li>
              <li>Oponerse al tratamiento de sus datos</li>
              <li>Solicitar la portabilidad de sus datos</li>
            </ul>
            <p className="mb-4">
              Para ejercer estos derechos, puede contactarnos a: <strong>go.energy@go-energysolar.com</strong>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Seguridad</h2>
            <p className="mb-4">
              Adoptamos las medidas técnicas y organizativas necesarias para proteger sus datos personales contra acceso no autorizado, alteración, divulgación o destrucción.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Contacto</h2>
            <p className="mb-4">
              Para cualquier consulta sobre esta Política de Privacidad, puede contactarnos a:
            </p>
            <p><strong>GO ENERGY</strong></p>
            <p>Email: go.energy@go-energysolar.com</p>
            <p>Teléfono: 3794-527424</p>
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

export default Privacy;
