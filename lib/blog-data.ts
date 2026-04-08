export interface BlogPost {
  slug: string
  title: string
  author: string
  date: string
  excerpt: string
  content: string
  image: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "prolapso-vaginal",
    title: "Prolapso Vaginal",
    author: "Melania Santana",
    date: "22 de enero de 2025",
    excerpt: "El prolapso vaginal es una \"masa\" que sobresale de la vulva. Se trata de una exteriorización de la mucosa vaginal, la cual aumenta de tamaño por acción de las hormonas del celo.",
    content: `El prolapso vaginal es una "masa" que sobresale de la vulva. Se trata de una exteriorización de la mucosa vaginal (tejido que conforma la vagina), la cual aumenta de tamaño por acción de las hormonas del celo (estrógenos). Es por ello que suele producirse en esta etapa, si bien puede ocurrir también durante el embarazo limitando la posibilidad de parto natural.

Una vez ocurra, suele repetirse en los siguientes celos entre el 65-100% de los casos. Es un proceso marcado genéticamente, por lo que suele repetirse en hijas, nietas, etc, existiendo predisposición en determinadas razas (Pej. Braquicefálicas como Bulldog, Carlino, Boxer, pero también en otras razas como Gran Danés y Labradores...).

Dependiendo de la cantidad de tejido exteriorizado se clasifican en tres estadios (grado I, II o III).

El diagnóstico pasa por la valoración del veterinario, donde dependiendo de la forma de prolapso, momento en el que ocurre y pruebas diagnósticas (citología vaginal), podrá establecer si se trata de una hiperplasia/prolapso vaginal o un tumor.

El tratamiento dependerá del estado del tejido prolapsado y del valor reproductivo del animal, porque al quitar la fuente de hormonas del celo (esterilización/ovariohisterectomía), el tejido muchas veces es capaz de "recogerse" sin necesidad propiamente de extirparlo. En otros casos (grado III, tejido dañado, exposición prolongada tras haber acabado el celo) es necesario retirar también el tejido vaginal en la misma cirugía.

En cualquier caso, siempre se debe esterilizar para evitar que en futuros celos el problema se repita. Asimismo, mientras tanto el tejido vaginal debe ser tratado para evitar que se dañe.

Las complicaciones asociadas al prolapso suelen ser problemas al orinar, infecciones de orina, necrosis (muerte) del tejido vaginal, sangrado, dolor, y en casos extremos sepsis generalizada por expansión de infección.

**Caso clínico:** Paciente Carlina de 11 años que acude remitida de otro Centro Veterinario para valoración y tratamiento quirúrgico.`,
    image: "/images/blog/prolapso-vaginal.jpg"
  },
  {
    slug: "alopecia-x",
    title: "Alopecia X",
    author: "Cania La Pardilla",
    date: "6 de agosto de 2024",
    excerpt: "La Alopecia X es una enfermedad dermatológica que afecta principalmente a razas nórdicas y causa pérdida de pelo simétrica sin otros síntomas aparentes.",
    content: `La Alopecia X, también conocida como "enfermedad de la piel negra" o "alopecia sensible a hormonas de crecimiento", es una condición dermatológica que afecta principalmente a perros de razas nórdicas como el Pomerania, Husky Siberiano, Malamute de Alaska, Chow Chow y Samoyedo.

**Características principales:**
- Pérdida de pelo simétrica bilateral
- Hiperpigmentación de la piel (oscurecimiento)
- No produce picor ni inflamación
- Afecta principalmente al tronco, respetando cabeza y extremidades

**Causas:**
La causa exacta sigue siendo desconocida, aunque se cree que está relacionada con desequilibrios hormonales, particularmente de las hormonas sexuales y de crecimiento.

**Diagnóstico:**
El diagnóstico se realiza principalmente por exclusión de otras enfermedades dermatológicas y hormonales. Se realizan análisis de sangre para descartar hipotiroidismo, síndrome de Cushing y otras alteraciones hormonales.

**Tratamiento:**
Existen varias opciones de tratamiento, aunque ninguna es completamente efectiva en todos los casos:
- Esterilización (en animales no castrados)
- Melatonina
- Trilostano
- Suplementos nutricionales

Es importante destacar que esta condición es principalmente estética y no afecta la salud general del animal.`,
    image: "/images/blog/alopecia-x.jpg"
  },
  {
    slug: "proceso-uretral",
    title: "Proceso Uretral",
    author: "Cania La Pardilla",
    date: "26 de julio de 2024",
    excerpt: "El proceso uretral es una condición que puede afectar la capacidad de micción de nuestras mascotas y requiere atención veterinaria especializada.",
    content: `El proceso uretral hace referencia a diversas patologías que pueden afectar la uretra de nuestras mascotas, causando dificultades en la micción y potenciales complicaciones si no se tratan adecuadamente.

**Problemas uretrales más comunes:**

**1. Obstrucción uretral**
Es una emergencia médica, especialmente común en gatos machos debido a su uretra estrecha y larga. Puede ser causada por:
- Cálculos urinarios
- Tapones mucosos
- Tumores
- Estenosis (estrechamiento)

**2. Prolapso uretral**
Más frecuente en perros machos de razas braquicéfalas (Bulldog Inglés, Boston Terrier). Consiste en la protrusión de la mucosa uretral a través del orificio del pene.

**3. Traumatismos uretrales**
Pueden ocurrir por accidentes, peleas o procedimientos médicos.

**Síntomas de alerta:**
- Dificultad para orinar
- Esfuerzo al orinar sin producción de orina
- Sangre en la orina
- Lamido excesivo de la zona genital
- Dolor abdominal
- Vómitos (en casos de obstrucción completa)

**Diagnóstico y tratamiento:**
El diagnóstico incluye exploración física, análisis de orina, radiografías y ecografías. El tratamiento depende de la causa específica y puede incluir desde cateterización hasta cirugía.`,
    image: "/images/blog/proceso-uretral.jpg"
  },
  {
    slug: "que-es-un-espermiograma",
    title: "¿Qué es un espermiograma?",
    author: "Cania La Pardilla",
    date: "23 de julio de 2024",
    excerpt: "El espermiograma es una prueba fundamental para evaluar la fertilidad de los machos reproductores y determinar su capacidad reproductiva.",
    content: `El espermiograma, también conocido como seminograma, es un análisis de laboratorio que evalúa las características del semen y la calidad de los espermatozoides de un macho reproductor.

**¿Cuándo se realiza?**
- Evaluación pre-compra de sementales
- Antes de una monta o inseminación
- Diagnóstico de infertilidad
- Control de calidad seminal para bancos de semen
- Seguimiento post-tratamiento de patologías reproductivas

**Parámetros evaluados:**

**1. Análisis macroscópico:**
- Volumen del eyaculado
- Color (blanco opalescente normal)
- pH (6.3-7.0 en perros)
- Viscosidad

**2. Análisis microscópico:**
- Concentración espermática (millones/ml)
- Motilidad progresiva (% de espermatozoides móviles)
- Morfología (% de formas normales)
- Vitalidad (% de espermatozoides vivos)

**Interpretación de resultados:**
Un espermiograma normal en perros debería mostrar:
- Motilidad progresiva > 70%
- Morfología normal > 80%
- Concentración > 200 millones/ml

**Preparación del animal:**
Se recomienda un período de abstinencia sexual de 3-5 días antes de la recogida para obtener resultados representativos.`,
    image: "/images/blog/espermiograma.jpg"
  },
  {
    slug: "la-toxoplasmosis",
    title: "La Toxoplasmosis",
    author: "Cania La Pardilla",
    date: "2 de mayo de 2024",
    excerpt: "La toxoplasmosis es una enfermedad parasitaria causada por Toxoplasma gondii. Aprende sobre su transmisión, síntomas y prevención.",
    content: `La toxoplasmosis es una enfermedad causada por el parásito Toxoplasma gondii, un protozoo que puede infectar a la mayoría de los animales de sangre caliente, incluyendo humanos.

**El gato como huésped definitivo:**
Los felinos son los únicos huéspedes definitivos del parásito, lo que significa que solo en ellos se completa el ciclo reproductivo sexual. Sin embargo, los gatos generalmente solo eliminan ooquistes (formas infectivas) durante 1-2 semanas en toda su vida, normalmente tras la primera infección.

**Vías de transmisión:**
- Ingestión de carne cruda o poco cocinada con quistes
- Ingestión de ooquistes del ambiente (heces de gato)
- Transmisión transplacentaria (de madre a feto)
- Transfusiones o trasplantes (raro)

**Síntomas en animales:**
La mayoría de los gatos y perros infectados no muestran síntomas. Cuando aparecen, pueden incluir:
- Fiebre
- Pérdida de apetito
- Letargo
- Problemas respiratorios
- Problemas oculares
- En casos graves: signos neurológicos

**Prevención:**
- No alimentar a los gatos con carne cruda
- Limpiar el arenero diariamente (los ooquistes necesitan 1-5 días para ser infectivos)
- Lavarse las manos después de manipular el arenero
- Cocinar bien la carne
- Lavar frutas y verduras

**Toxoplasmosis y embarazo:**
La principal preocupación es la infección durante el embarazo humano, que puede causar problemas al feto. Sin embargo, con medidas higiénicas básicas, el riesgo es mínimo.`,
    image: "/images/blog/toxoplasmosis.jpg"
  },
  {
    slug: "la-vacunacion-en-perros",
    title: "La vacunación en perros",
    author: "Cania La Pardilla",
    date: "23 de abril de 2024",
    excerpt: "La vacunación es fundamental para proteger a nuestros perros de enfermedades potencialmente mortales. Conoce el calendario y las vacunas esenciales.",
    content: `La vacunación es una de las herramientas más importantes de la medicina preventiva veterinaria. Protege a nuestros perros de enfermedades graves y potencialmente mortales.

**Vacunas esenciales (Core):**
Son las que todo perro debería recibir independientemente de su estilo de vida:

**1. Moquillo canino (Distemper)**
Enfermedad viral grave que afecta sistemas respiratorio, digestivo y nervioso.

**2. Parvovirus canino**
Causa gastroenteritis hemorrágica severa, especialmente peligrosa en cachorros.

**3. Hepatitis infecciosa canina (Adenovirus tipo 1)**
Afecta principalmente al hígado y puede ser fatal.

**4. Rabia**
Obligatoria por ley. Enfermedad mortal transmisible a humanos.

**Vacunas opcionales (No-Core):**
Dependen del estilo de vida y zona geográfica:
- Leptospirosis
- Tos de las perreras (Bordetella + Parainfluenza)
- Leishmaniosis
- Enfermedad de Lyme

**Calendario de vacunación:**
- 6-8 semanas: Primera vacuna polivalente
- 10-12 semanas: Refuerzo polivalente
- 14-16 semanas: Refuerzo polivalente + Rabia
- Anualmente: Refuerzos según protocolo

**Consideraciones importantes:**
- Respetar los intervalos entre vacunas
- No vacunar animales enfermos
- Desparasitar antes de vacunar
- Evitar el contacto con otros perros hasta completar la primovacunación`,
    image: "/images/blog/vacunacion-perros.jpg"
  },
  {
    slug: "queratitis-superficial-cronica",
    title: "Queratitis superficial crónica (QSC)",
    author: "Cania La Pardilla",
    date: "23 de abril de 2024",
    excerpt: "La queratitis superficial crónica, conocida también como Pannus, es una enfermedad ocular progresiva que afecta principalmente a ciertas razas de perros.",
    content: `La queratitis superficial crónica (QSC), conocida también como "Pannus" o "Síndrome de Überreiter", es una enfermedad crónica y progresiva que afecta a la conjuntiva y la córnea de ambos ojos.

**Características de la enfermedad:**
Las lesiones empiezan típicamente en el cuadrante lateral y con el tiempo avanzan en dirección central. A veces, los perros afectados sienten ligera molestia y se presentan en consulta con enrojecimiento y lagrimeo.

**Razas predispuestas:**
Se conoce una predisposición genética para:
- Pastor Alemán
- Greyhound
- Dálmata
- Border Collie
- Pastor Belga
- Otras razas de perros de pastor

**Origen y factores agravantes:**
La QSC tiene un origen inmunitario (el propio sistema inmune ataca la córnea) y se agrava con la exposición a la radiación ultravioleta. Por esto, es más común y severa en zonas de alta altitud o con mucha exposición solar.

**Signos clínicos:**
- Vascularización corneal (vasos sanguíneos en la córnea)
- Pigmentación corneal (manchas marrones)
- Tejido de granulación
- Enrojecimiento ocular
- Lagrimeo
- Posible pérdida de visión si no se trata

**Diagnóstico:**
Antes de establecer el tratamiento adecuado hay que descartar enfermedades oculares similares como la queratitis pigmentaria. El diagnóstico se basa en la exploración oftalmológica y el historial del paciente.

**Pronóstico:**
La aparición temprana en animales jóvenes lleva un peor pronóstico por la progresión rápida que presentan. Es una enfermedad que requiere tratamiento de por vida.

**Tratamiento:**
- Inmunosupresores tópicos (ciclosporina, tacrolimus)
- Corticoides tópicos
- Protección solar (gafas para perros)
- Evitar exposición solar excesiva
- Control veterinario regular`,
    image: "/images/blog/queratitis-superficial.jpg"
  },
  {
    slug: "la-hipertension",
    title: "La hipertensión en perros y gatos",
    author: "Cania La Pardilla",
    date: "19 de marzo de 2024",
    excerpt: "La hipertensión arterial es una condición frecuente en mascotas mayores que puede causar daños graves en órganos vitales si no se detecta a tiempo.",
    content: `La hipertensión arterial sistémica es el aumento persistente de la presión sanguínea por encima de los valores normales. Es una condición relativamente frecuente en perros y gatos, especialmente en animales de edad avanzada.

**Valores normales de presión arterial:**
- Perros: 110-140 mmHg (sistólica)
- Gatos: 120-140 mmHg (sistólica)
Se considera hipertensión valores superiores a 160 mmHg.

**Causas de hipertensión:**

**Hipertensión secundaria (más común):**
- Enfermedad renal crónica
- Hipertiroidismo (en gatos)
- Síndrome de Cushing
- Diabetes mellitus
- Obesidad
- Feocromocitoma

**Hipertensión primaria o idiopática:**
Sin causa identificable, más rara.

**Órganos diana afectados:**
La hipertensión mantenida puede dañar gravemente:
- **Ojos:** Hemorragias, desprendimiento de retina, ceguera súbita
- **Riñones:** Empeoramiento de enfermedad renal
- **Corazón:** Hipertrofia cardíaca
- **Cerebro:** Accidentes cerebrovasculares, convulsiones

**Síntomas:**
- Ceguera repentina
- Sangrado ocular
- Desorientación
- Convulsiones
- Sangrado nasal
- Muchas veces es asintomática

**Diagnóstico:**
Medición de la presión arterial con doppler o oscilometría, en un ambiente tranquilo para evitar el "efecto bata blanca".

**Tratamiento:**
- Amlodipino (fármaco de elección)
- Tratamiento de la causa subyacente
- Control dietético
- Monitorización regular`,
    image: "/images/blog/hipertension.jpg"
  },
  {
    slug: "sindrome-remanente-ovarico",
    title: "Síndrome Remanente Ovárico (SRO)",
    author: "Dra. Melania Santana",
    date: "12 de enero de 2024",
    excerpt: "El síndrome remanente ovárico ocurre cuando una hembra esterilizada presenta signos de celo debido a tejido ovárico residual funcional.",
    content: `El Síndrome Remanente Ovárico (SRO) es una condición que se presenta en hembras que han sido sometidas a ovariohisterectomía (esterilización) pero que continúan mostrando signos de actividad hormonal ovárica.

**¿Por qué ocurre?**
Se produce cuando queda tejido ovárico funcional tras la cirugía. Esto puede deberse a:
- Extirpación incompleta del ovario
- Tejido ovárico accesorio (poco frecuente)
- Revascularización de fragmentos ováricos que quedaron en el abdomen

**Signos clínicos:**
- Comportamiento de celo (atracción de machos, monta, vocalización)
- Vulva inflamada
- Secreción vaginal
- Cambios de comportamiento cíclicos
- En gatos: maullidos excesivos, frotamiento, postura de lordosis

**Tiempo de aparición:**
Los signos pueden aparecer desde semanas hasta años después de la cirugía original.

**Diagnóstico:**
- Historia clínica compatible
- Citología vaginal (muestra células estrogénicas)
- Medición de hormonas (estradiol, LH)
- Ecografía abdominal
- Estimulación con GnRH o hCG y posterior medición hormonal

**Tratamiento:**
El tratamiento definitivo es quirúrgico: exploración abdominal para localizar y extirpar el tejido ovárico remanente. La cirugía puede ser más compleja que la original debido a adherencias.

**Prevención:**
- Técnica quirúrgica meticulosa en la esterilización original
- Visualización completa de ambos ovarios
- Experiencia del cirujano`,
    image: "/images/blog/sindrome-remanente-ovarico.jpg"
  },
  {
    slug: "la-vasectomia",
    title: "La vasectomía, la esterilización alternativa",
    author: "Dra. Melania Santana",
    date: "12 de enero de 2024",
    excerpt: "La vasectomía es una alternativa de esterilización que mantiene las hormonas del animal pero impide la reproducción. Conoce sus ventajas y desventajas.",
    content: `La vasectomía es un procedimiento quirúrgico de esterilización que consiste en cortar o ligar los conductos deferentes, impidiendo que los espermatozoides lleguen al eyaculado, pero manteniendo la producción hormonal testicular.

**Diferencia con la castración tradicional:**
- **Castración:** Se extirpan los testículos. Elimina la producción de espermatozoides Y de testosterona.
- **Vasectomía:** Se cortan los conductos deferentes. Elimina solo la capacidad reproductiva, manteniendo las hormonas.

**Ventajas de la vasectomía:**
- Mantiene el comportamiento natural del animal
- Conserva la masa muscular y el metabolismo
- Menor riesgo de obesidad post-operatoria
- El animal sigue siendo "completo" físicamente
- Útil para machos detectores de celo en programas de reproducción

**Desventajas:**
- Persisten comportamientos asociados a testosterona:
  - Marcaje con orina
  - Comportamiento de monta
  - Agresividad hacia otros machos
  - Vagabundeo en busca de hembras
- Mayor riesgo de patologías prostáticas y testiculares
- No previene tumores testiculares

**¿Cuándo está indicada?**
- Propietarios que desean evitar la reproducción pero mantener las hormonas
- Machos utilizados como detectores de celo
- Casos específicos donde la castración está contraindicada

**El procedimiento:**
Es una cirugía relativamente sencilla, menos invasiva que la castración, con recuperación rápida.

**Importante:**
Tras la vasectomía, el macho sigue siendo fértil durante varias semanas (espermatozoides residuales en el tracto), por lo que debe mantenerse alejado de hembras en celo durante al menos 6 semanas.`,
    image: "/images/blog/vasectomia.jpg"
  }
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug)
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map(post => post.slug)
}
