import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Aviso Legal | Centro Veterinario Cania",
  description: "Aviso legal, política de cookies y protección de datos del Centro Veterinario Cania en Telde, Las Palmas.",
}

export default function AvisoLegalPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" size="sm" className="mb-6 text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10" asChild>
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al inicio
            </Link>
          </Button>
          <h1 className="text-4xl md:text-5xl font-serif font-bold">Aviso Legal y Cookies</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          
          {/* LSSI Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
              Ley de los Servicios de la Sociedad de la Información (LSSI)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              CANIA LA PARDILLA S.L., responsable del sitio web, en adelante RESPONSABLE, pone a disposición de los usuarios el presente documento, con el que pretende dar cumplimiento a las obligaciones dispuestas en la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSICE), BOE N.º 166, así como informar a todos los usuarios del sitio web respecto a cuáles son las condiciones de uso.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Toda persona que acceda a este sitio web asume el papel de usuario, comprometiéndose a la observancia y cumplimiento riguroso de las disposiciones aquí dispuestas, así como a cualquier otra disposición legal que fuera de aplicación.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              CANIA LA PARDILLA S.L. se reserva el derecho de modificar cualquier tipo de información que pudiera aparecer en el sitio web, sin que exista obligación de preavisar o poner en conocimiento de los usuarios dichas obligaciones, entendiéndose como suficiente la publicación en el sitio web de CANIA LA PARDILLA S.L.
            </p>
          </section>

          {/* Datos Identificativos */}
          <section className="mb-12 p-6 bg-muted/50 rounded-xl">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
              1. Datos Identificativos
            </h2>
            <div className="grid gap-3 text-muted-foreground">
              <p><strong className="text-foreground">Nombre de dominio:</strong> www.cania.es</p>
              <p><strong className="text-foreground">Nombre comercial:</strong> CENTRO VETERINARIO CANIA</p>
              <p><strong className="text-foreground">Denominación social:</strong> CANIA LA PARDILLA S.L.</p>
              <p><strong className="text-foreground">NIF:</strong> B76124627</p>
              <p><strong className="text-foreground">Domicilio social:</strong> Calle Raimundo Lulio 19, Local 2 - 35213 Telde (Las Palmas de Gran Canaria)</p>
              <p><strong className="text-foreground">Teléfono:</strong> 928 70 14 57</p>
              <p><strong className="text-foreground">E-mail:</strong> cvcania@cania.es</p>
              <p><strong className="text-foreground">Registro Mercantil:</strong> Las Palmas T 2143, F 178, S 8, H GC 51487, I/A 1ª</p>
            </div>
          </section>

          {/* Propiedad Intelectual */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
              2. Derechos de Propiedad Intelectual e Industrial
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              El sitio web, incluyendo a título enunciativo pero no limitativo su programación, edición, compilación y demás elementos necesarios para su funcionamiento, los diseños, logotipos, texto y/o gráficos, son propiedad del RESPONSABLE o, si es el caso, dispone de licencia o autorización expresa por parte de los autores.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Todos los contenidos del sitio web se encuentran debidamente protegidos por la normativa de propiedad intelectual e industrial, así como inscritos en los registros públicos correspondientes.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Independientemente de la finalidad para la que fueran destinados, la reproducción total o parcial, uso, explotación, distribución y comercialización, requiere en todo caso la autorización escrita previa por parte del RESPONSABLE. Cualquier uso no autorizado previamente se considera un incumplimiento grave de los derechos de propiedad intelectual o industrial del autor.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Para realizar cualquier tipo de observación respecto a posibles incumplimientos de los derechos de propiedad intelectual o industrial, así como sobre cualquiera de los contenidos del sitio web, puede hacerlo a través del correo electrónico cvcania@cania.es.
            </p>
          </section>

          {/* Exención de Responsabilidades */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
              3. Exención de Responsabilidades
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              El RESPONSABLE se exime de cualquier tipo de responsabilidad derivada de la información publicada en su sitio web siempre que no tenga conocimiento efectivo de que esta información haya sido manipulada o introducida por un tercero ajeno al mismo o, si lo tiene, haya actuado con diligencia para retirar los datos o hacer imposible el acceso a ellos.
            </p>
            
            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Uso de Cookies</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Este sitio web puede utilizar cookies técnicas (pequeños archivos de información que el servidor envía al ordenador de quien accede a la página) para llevar a cabo determinadas funciones que son consideradas imprescindibles para el correcto funcionamiento y visualización del sitio.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Las cookies utilizadas tienen, en todo caso, carácter temporal, con la única finalidad de hacer más eficaz la navegación, y desaparecen al terminar la sesión del usuario. En ningún caso, estas cookies proporcionan por sí mismas datos de carácter personal y no se utilizarán para la recogida de los mismos.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              El usuario tiene la posibilidad de configurar su navegador para ser alertado de la recepción de cookies y para impedir su instalación en su equipo. Por favor, consulte las instrucciones de su navegador para ampliar esta información.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Política de Enlaces</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Desde el sitio web, es posible que se redirija a contenidos de terceros sitios web. Dado que el RESPONSABLE no puede controlar siempre los contenidos introducidos por terceros en sus respectivos sitios web, no asume ningún tipo de responsabilidad respecto a dichos contenidos.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              En todo caso, procederá a la retirada inmediata de cualquier contenido que pudiera contravenir la legislación nacional o internacional, la moral o el orden público, procediendo a la retirada inmediata de la redirección a dicho sitio web, poniendo en conocimiento de las autoridades competentes el contenido en cuestión.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Direcciones IP</h3>
            <p className="text-muted-foreground leading-relaxed">
              Los servidores del sitio web podrán detectar de manera automática la dirección IP y el nombre de dominio utilizados por el usuario. Una dirección IP es un número asignado automáticamente a un ordenador cuando este se conecta a Internet. Toda esta información se registra en un fichero de actividad del servidor que permite el posterior procesamiento de los datos con el fin de obtener mediciones únicamente estadísticas que permitan conocer el número de impresiones de páginas, el número de visitas realizadas a los servidores web, el orden de visitas, el punto de acceso, etc.
            </p>
          </section>

          {/* Ley Aplicable */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
              4. Ley Aplicable y Jurisdicción
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Para la resolución de todas las controversias o cuestiones relacionadas con el presente sitio web o de las actividades en él desarrolladas, será de aplicación la legislación española, a la que se someten expresamente las partes, siendo competentes para la resolución de todos los conflictos derivados o relacionados con su uso los Juzgados y Tribunales del domicilio del USUARIO o el lugar del cumplimiento de la obligación.
            </p>
          </section>

          {/* Política de Cookies */}
          <section className="mb-12 p-6 bg-muted/50 rounded-xl">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
              Política de Cookies
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Conforme con la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico (LSSI), en relación con el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, General de Protección de Datos (GDPR) y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos y Garantía de los Derechos Digitales (LOPDGDD), es obligado obtener el consentimiento expreso del usuario de todas las páginas web que usan cookies prescindibles, antes de que este navegue por ellas.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">¿Qué son las cookies?</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Las cookies y otras tecnologías similares tales como local shared objects, flash cookies o píxeles, son herramientas empleadas por los servidores Web para almacenar y recuperar información acerca de sus visitantes, así como para ofrecer un correcto funcionamiento del sitio.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Mediante el uso de estos dispositivos se permite al servidor Web recordar algunos datos concernientes al usuario, como sus preferencias para la visualización de las páginas de ese servidor, nombre y contraseña, productos que más le interesan, etc.
            </p>
          </section>

          {/* Tipos de Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
              Tipos de Cookies
            </h2>
            
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">Según la finalidad:</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li><strong className="text-foreground">Cookies de seguridad:</strong> almacenan información cifrada para evitar que los datos guardados en ellas sean vulnerables a ataques maliciosos de terceros.</li>
              <li><strong className="text-foreground">Cookies de afiliados:</strong> permiten hacer un seguimiento de las visitas procedentes de otras webs, con las que el sitio web establece un contrato de afiliación.</li>
              <li><strong className="text-foreground">Cookies sociales:</strong> son establecidas por las plataformas de redes sociales en los servicios para permitirle compartir contenido con sus amigos y redes.</li>
              <li><strong className="text-foreground">Cookies de publicidad comportamental:</strong> recogen información sobre las preferencias y elecciones personales del usuario (retargeting).</li>
              <li><strong className="text-foreground">Cookies publicitarias:</strong> permiten la gestión de los espacios publicitarios que el editor haya incluido en una página web.</li>
              <li><strong className="text-foreground">Cookies analíticas:</strong> permiten el seguimiento y análisis del comportamiento de los usuarios de los sitios web.</li>
              <li><strong className="text-foreground">Cookies técnicas y funcionales:</strong> permiten la navegación a través de una página web y la utilización de las diferentes opciones o servicios.</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">Según la propiedad:</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li><strong className="text-foreground">Cookies de terceros:</strong> se envían al equipo terminal del usuario desde un equipo o dominio que no es gestionado por el editor.</li>
              <li><strong className="text-foreground">Cookies propias:</strong> se envían al equipo terminal del usuario desde un equipo o dominio gestionado por el propio editor.</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">Según el plazo de conservación:</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong className="text-foreground">Cookies persistentes:</strong> los datos siguen almacenados en el terminal y pueden ser accedidos durante un período definido por el responsable de la cookie.</li>
              <li><strong className="text-foreground">Cookies de sesión:</strong> diseñadas para recabar y almacenar datos mientras el usuario accede a una página web.</li>
            </ul>
          </section>

          {/* Tratamiento de Datos */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
              Tratamiento de Datos Personales
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              CANIA LA PARDILLA S.L. es el Responsable del tratamiento de los datos personales del Interesado y le informa de que estos datos serán tratados de conformidad con lo dispuesto en el Reglamento (UE) 2016/679, de 27 de abril de 2016 (GDPR).
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li><strong className="text-foreground">Comunicación de los datos:</strong> no se comunicarán los datos a terceros, excepto en cookies propiedad de terceros o por obligación legal.</li>
              <li><strong className="text-foreground">Criterios de conservación de los datos:</strong> según se especifica en el apartado de cookies utilizadas en la web.</li>
              <li><strong className="text-foreground">Legitimación del tratamiento:</strong> salvo en los casos en los que resulte necesario para la navegación por la web, por consentimiento del interesado (art. 6.1 GDPR).</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">Derechos que asisten al Interesado:</h3>
            <p className="text-muted-foreground leading-relaxed">
              CANIA LA PARDILLA S.L. - Calle Raimundo Lulio 19, Local 4-5, 35213 Telde (Las Palmas). E-mail: cvcania@cania.es
            </p>
          </section>

          {/* Gestionar Cookies */}
          <section className="mb-12 p-6 bg-muted/50 rounded-xl">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
              Cómo Gestionar las Cookies desde el Navegador
            </h2>
            
            <h3 className="text-xl font-semibold text-foreground mt-4 mb-4">Eliminar las cookies del dispositivo:</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Las cookies que ya están en un dispositivo se pueden eliminar borrando el historial del navegador, con lo que se suprimen las cookies de todos los sitios web visitados. Sin embargo, también se puede perder parte de la información guardada (por ejemplo, los datos de inicio de sesión o las preferencias de sitio web).
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">Bloquear las cookies:</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Aunque la mayoría de los navegadores modernos se pueden configurar para evitar que se instalen cookies en los dispositivos, eso puede obligar al ajuste manual de determinadas preferencias cada vez que se visite un sitio o página. Además, algunos servicios y características pueden no funcionar correctamente.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">Cómo eliminar las cookies de los navegadores más comunes:</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong className="text-foreground">Chrome:</strong> support.google.com/chrome/answer/95647</li>
              <li><strong className="text-foreground">Firefox:</strong> mozilla.org/es-ES/privacy/websites/#cookies</li>
              <li><strong className="text-foreground">Safari:</strong> support.apple.com/es-es/guide/safari/sfri11471/mac</li>
              <li><strong className="text-foreground">Edge:</strong> support.microsoft.com/es-es/microsoft-edge</li>
              <li><strong className="text-foreground">Opera:</strong> help.opera.com/en/latest/security-and-privacy</li>
            </ul>
          </section>

          {/* Protocolo Acoso Laboral */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
              Protocolo de Prevención del Acoso Laboral
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              CANIA LA PARDILLA S.L., hace público su compromiso de fomentar y mantener un entorno de trabajo seguro y respetuoso con la dignidad, la integridad física y moral, la libertad individual y los derechos fundamentales de todas las personas que forman parte y/o colaboran con nuestra empresa. A este fin, CANIA LA PARDILLA S.L., cuenta con un protocolo de prevención y actuación frente al acoso laboral, en cualquier de sus formas, con el fin de prevenir y erradicar estas formas de violencia, no ignorándolas, no tolerándolas, reafirmando su deber de tolerancia cero frente al acoso y prestando apoyo a las personas que lo sufren.
            </p>
          </section>

          {/* Contacto */}
          <section className="p-6 bg-primary/5 rounded-xl border border-primary/20">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
              Contacto
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Calle Raimundo Lulio 19, 35213 Telde (Las Palmas), Spain<br />
              Teléfono: +34 928 70 14 57<br />
              Email: cvcania@cania.es
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Copyright © {new Date().getFullYear()} Centro Veterinario Cania. Todos los derechos reservados.
            </p>
          </section>

        </div>

        {/* Back Button */}
        <div className="mt-12 pt-8 border-t border-border">
          <Button variant="outline" asChild>
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al inicio
            </Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
