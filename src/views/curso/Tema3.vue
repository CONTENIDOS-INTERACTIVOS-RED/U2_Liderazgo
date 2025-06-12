<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Bienestar organizacional y coaching'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      p.mb-4 A continuación, se presenta un video  que explora el vínculo entre el bienestar organizacional y el<i> coaching</i>, destacando cómo esta herramienta estratégica contribuye al desarrollo de entornos laborales más saludables, resilientes y orientados al crecimiento profesional.
      .row.bg-fondo-slider.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3
          figure
            .video
              <iframe width="1905" height="748" src="https://www.youtube.com/embed/VPdpqWMKYOU" title="Coaching y bienestar organizacional" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      #t_3_1.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 3.1
          h2 Identificación de factores psicosociales y estrés laboral

      p.mb-4 En el entorno laboral actual, la <b>comprensión y gestión de los factores psicosociales</b> se ha convertido en una prioridad estratégica para aquellas organizaciones que buscan fomentar el bienestar de sus empleados e incrementar la productividad. Estos factores hacen referencia a las <b>condiciones vinculadas con la organización del trabajo, el contenido del puesto y la ejecución de la tarea</b>, las cuales pueden influir tanto en el desarrollo de las funciones como en la salud de los trabajadores.

      .row.mb-4
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-43.png', alt='Texto que describa la imagen') 
        .col-12.col-xl-8
          .d-flex.bg-verde.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-44.svg', alt='Texto descriptivo de la imagen')
            .my-auto.p-4.p-xl-0
              p.pe-xl-3.mb-0 Los factores psicosociales más comunes incluyen la <b>sobrecarga de trabajo, la falta de control sobre las tareas, los conflictos interpersonales, la ambigüedad de roles y la inseguridad laboral</b>. Estas condiciones generan reacciones negativas, siendo una de las más frecuentes el <b>estrés laboral</b>, entendido como la respuesta física y emocional que ocurre cuando las demandas del trabajo exceden las capacidades, recursos o necesidades del empleado.
          span El <b>estrés laboral y la ansiedad</b> afectan directamente la salud física y mental del trabajador y traen consecuencias significativas para la organización: aumento del <b>absentismo</b>, <b>rotación de personal</b> y <b>reducción de la productividad</b>. Por ejemplo, en <b>España</b>, las bajas por motivos de salud mental han aumentado un <b>72%</b> desde la pandemia de COVID-19, siendo los sectores de <b>sanidad y educación</b> los más afectados.

      .row.mb-4.mx-0
        .col-12.col-xl-8.d-flex.align-items-center.bg-verde-oscuro.p-4(data-aos="fade-up")
          p.mb-0.text-white Para identificar y evaluar estos riesgos, se han desarrollado herramientas específicas como el <b>Cuestionario de Evaluación de Riesgos Psicosociales en el Trabajo</b>, que permite diagnosticar condiciones laborales que podrían impactar negativamente en la salud de los empleados.
        .d-none.d-xl-block.col-4.px-0
          img.h-100(src='@/assets/curso/unidad/img-45.png', alt='Texto que describa la imagen')

      .row.bg-fondo-1.bg-full-width.py-4.mb-4
        div.px-5

          p.mb-4 Adicionalmente, existen <b>marcos normativos</b> que respaldan esta labor: 
          .row.mb-4
            .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-right")
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-46.png', alt='Texto que describa la imagen')
                div.mb-4.px-4
                  p.text-bold.text-center Cuestionario de Evaluación de Riesgos Psicosociales
                  p.text-small.px-4.text-center.pb-2 Herramienta de diagnóstico para identificar factores de riesgo psicosocial en el entorno laboral.
            .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-up")
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-47.png', alt='Texto que describa la imagen')
                div.mb-4.px-4
                  p.text-bold.text-center NOM-035-STPS-2018 (México)
                  p.text-small.px-4.text-center.pb-2 Norma oficial que regula la identificación, análisis y prevención de factores de riesgo psicosocial en el trabajo.
            .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-left")
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-48.png', alt='Texto que describa la imagen')
                div.mb-4.px-4
                  p.text-bold.text-center Resolución 2646 de 2008 (Colombia)
                  p.text-small.px-4.text-center.pb-2 Establece criterios para evaluar factores psicosociales: intralaborales, extralaborales y personales.

      .row.bg-naranja.p-4.py-xl-0.mb-4(data-aos='fade-up')
        .col-3.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-49.png', alt='Texto descriptivo de la imagen') 
        .col-12.col-xl-9.d-flex
          .my-auto
            span Para los estudiantes de <b>Administración de Empresas</b>, comprender la identificación y prevención de los factores psicosociales es esencial para desarrollar habilidades de liderazgo responsables y efectivas. Promover <b>ambientes laborales saludables y sostenibles</b> no solo mejora la calidad de vida de los trabajadores, sino que también fortalece el <b>desempeño organizacional y la permanencia del talento humano</b>.

      h2 Matriz DOFA : factores psicosociales y estrés laboral en la organización
      p.mb-4 La siguiente matriz DOFA permite identificar factores internos (fortalezas y debilidades) y externos (oportunidades y amenazas) relacionados con la presencia de factores psicosociales y el estrés laboral en una organización. Además, se incluye una segunda tabla con ejemplos prácticos que ilustran su aplicación para estudiantes de Administración de Empresas.

      p.mb-4 <b>Figura 1.</b> Matriz DOFA General

      .tabla-a
        table
          thead
            tr
              th.bg-marron.text-bold.text-center Factores Internos
              th.bg-marron.text-bold.text-center Factores Externos
          tbody
            tr
              td
                p.text-bold.mb-3 Fortalezas

                div.d-flex
                  img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').m-2
                  p.mb-0 Cultura organizacional de apoyo emocional
                div.d-flex
                  img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').m-2
                  p.mb-0 Programas de prevención del estrés
                div.d-flex
                  img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').m-2
                  p.mb-0 Liderazgo participativo
              td
                p.text-bold.mb-3 Oportunidades

                div.d-flex
                  img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').m-2
                  p.mb-0 Avances en normativas de salud mental laboral
                div.d-flex
                  img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').m-2
                  p.mb-0 Alianzas con entidades de salud ocupacional
                div.d-flex
                  img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').m-2
                  p.mb-0 Uso de tecnología para el seguimiento psicosocial
            tr
              td
                p.text-bold.mb-3 Debilidades
 
                div.d-flex
                  img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').m-2
                  p.mb-0 Dificultad para identificar síntomas de estrés
                div.d-flex
                  img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').m-2
                  p.mb-0 Poca formación en manejo de emociones
                div.d-flex
                  img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').m-2
                  p.mb-0 Ausencia de protocolos claros para conflictos psicosociales
              td
                p.text-bold.mb-3 Amenazas
 
                div.d-flex
                  img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').m-2
                  p.mb-0 Sobrecarga laboral derivada de cambios organizacionales
                div.d-flex
                  img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').m-2
                  p.mb-0 Clima laboral tenso por rotación frecuente
                div.d-flex
                  img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').m-2
                  p.mb-0 Riesgo de ausentismo por fatiga emocional

      h2 Matriz DOFA aplicada con ejemplos prácticos
      p.mb-4 Esta matriz complementaria muestra cómo aplicar el análisis DOFA mediante ejemplos específicos que evidencian situaciones relacionadas con factores psicosociales y el estrés laboral.
      ImagenInfografica.color-secundario.mb-4.bg-white
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/unidad/img-50.png', alt='Descripción de la imagen')
        .tarjeta.bg-white.p-4(x='35%' y='17%' numero='+')
          .h5.mb-2 Debilidad 
          p Algunos líderes no están formados en habilidades blandas, lo que genera malentendidos y respuestas autoritarias que incrementan el estrés.
        .tarjeta.bg-white.p-4(x='66%' y='17%' numero='+')
          .h5.mb-2 Amenaza
          p El aumento de la carga laboral por reducción de personal genera estrés continuo, disminuyendo la productividad y afectando el clima organizacional.
        .tarjeta.bg-white.p-4(x='66%' y='78%' numero='+')
          .h5.mb-2 Oportunidad
          p Se firma un convenio con una EPS para realizar valoraciones psicológicas preventivas y brindar acompañamiento gratuito.
        .tarjeta.bg-white.p-4(x='35%' y='78%' numero='+')
          .h5.mb-2 Fortalezas
          p El área de talento humano cuenta con un protocolo de intervención rápida ante síntomas de agotamiento emocional en los trabajadores.

      .row.bg-fondo-1.bg-full-width.py-4.mb-4
        div.px-5

          #t_3_2.titulo-segundo(data-aos="flip-up")
            div.d-flex
              span.me-3 3.2
              h2 Estrategias de intervención con enfoque en coaching

          p.mb-4 El <i>coaching</i> organizacional se ha consolidado como una herramienta esencial para <b>desarrollar el talento humano</b> y <b>mejorar el desempeño organizacional</b>. A través de intervenciones estructuradas, permite <b>identificar y superar barreras</b> que afectan el rendimiento, al mismo tiempo que promueve una <b>cultura de aprendizaje continuo y adaptación al cambio</b>. Las estrategias que integran este enfoque se basan en etapas claramente definidas, orientadas a resultados sostenibles tanto a nivel individual como colectivo:

          .row
            .col-12.col-xl-8
              SlyderF(columnas='col-12 col-lg-6 py-4 px-3')
                .custom-image-card.d-flex.flex-column.p-4.py-md-5
                  img.mx-auto.mb-4(src='@/assets/curso/unidad/img-51.svg', style='width: 80px')
                  p.text-bold.mb-4.text-center Diagnóstico y establecimiento de objetivos
                  p.px-1.text-small.mb-0.text-center El proceso inicia con un diagnóstico detallado que identifica necesidades específicas. Esta etapa permite definir objetivos claros y alineados con la misión organizacional.
                .custom-image-card.d-flex.flex-column.p-4.py-md-5
                  img.mx-auto.mb-4(src='@/assets/curso/unidad/img-52.svg', style='width: 80px')
                  p.text-bold.mb-4.text-center Desarrollo de habilidades blandas
                  p.px-1.text-small.mb-0.text-center Se refuerzan competencias clave como la <i>comunicación efectiva, empatía y resiliencia</i>, fundamentales para mejorar las relaciones laborales y el clima organizacional.
                .custom-image-card.d-flex.flex-column.p-4.py-md-5
                  img.mx-auto.mb-4(src='@/assets/curso/unidad/img-53.svg', style='width: 80px')
                  p.text-bold.mb-4.text-center Coaching de equipos
                  p.px-1.text-small.mb-0.text-center Se abordan dinámicas grupales mediante sesiones orientadas a fortalecer la confianza, colaboración y resolución de conflictos dentro de los equipos.
                .custom-image-card.d-flex.flex-column.p-4.py-md-5
                  img.mx-auto.mb-4(src='@/assets/curso/unidad/img-54.svg', style='width: 80px')
                  p.text-bold.mb-4.text-center Implementación de planes de acción
                  p.px-1.text-small.mb-0.text-center Se diseñan planes personalizados con metas específicas, indicadores de avance y mecanismos de seguimiento que aseguren mejoras sostenidas en el desempeño.
                .custom-image-card.d-flex.flex-column.p-4.py-md-5
                  img.mx-auto.mb-4(src='@/assets/curso/unidad/img-55.svg', style='width: 80px')
                  p.text-bold.mb-4.text-center Evaluación y retroalimentación
                  p.px-1.text-small.mb-0.text-center Se realiza un seguimiento constante con retroalimentación constructiva, lo cual permite ajustar estrategias y garantizar el cumplimiento de los objetivos propuestos.
            .col-12.col-xl-4
              img(src='@/assets/curso/unidad/img-56.png', alt='Texto descriptivo de la imagen')

      
      .row.bg-verde-oscuro.bg-full-width.py-4.mb-4
        div.px-5

          span.text-white Estas estrategias hacen del <i>coaching</i> una metodología eficaz para <b>elevar el rendimiento organizacional</b>, optimizar procesos de liderazgo y fortalecer las capacidades del equipo humano en entornos altamente competitivos.

      h2 Ejemplo práctico: aplicación de estrategias de coaching basadas en habilidades blandas

      .row.mb-4
        .col-5.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-57.png', alt='Texto que describa la imagen')
        .col-12.col-xl-7.d-flex
          .bg-azul.p-4.h-100.d-flex(data-aos='fade-up')
            p.my-auto Este caso describe la experiencia de la empresa <b>TechNow</b>, del sector tecnológico, que enfrenta alta rotación de personal en el área de soporte. Para responder a esta situación, se aplicaron <b>cinco estrategias de intervención con enfoque en </b><b><i>coaching</i></b>, articuladas con habilidades blandas específicas, logrando así una transformación organizacional efectiva. 

      .row.mb-4
        .col-12.col-lg-7.col-xl-8
          AcordionA(tipo="b")
            .div(titulo="Diagnóstico y establecimiento de objetivos")
              p Se detecta que la falta de reconocimiento afecta la motivación del personal. Se fija como meta reducir la rotación en un 20%.
              p <i>Habilidad asociada:</i> Autoconciencia emocional.

            .div(titulo="Desarrollo de habilidades blandas")
              p Se imparten talleres de comunicación asertiva y manejo del estrés a líderes de equipo. La retroalimentación mejora notablemente. 
              p <i>Habilidad asociada</i>: Comunicación efectiva.

            .div(titulo="Coaching de equipos")
              p Intervención con el equipo de desarrollo de software. Se identifican fallos de comunicación y se establecen nuevas dinámicas basadas en la empatía. 
              p <i>Habilidad asociada</i>: Escucha activa.

            .div(titulo="Implementación de planes de acción")
              p Los líderes elaboran planes que incluyen pausas activas, mentorías internas y celebraciones de logros.
              p <i>Habilidad asociada</i>: Liderazgo colaborativo.

            .div(titulo="Evaluación y retroalimentación")
              p Se realiza seguimiento trimestral con entrevistas. Se ajustan las estrategias según resultados. Mejora del clima laboral y reconocimiento del personal. 
              p <i>Habilidad asociada</i>: Adaptabilidad.

        .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-58.png', alt='Texto que describa la imagen')

      p.mb-4 La intervención generó mejoras en la comunicación, el clima laboral y la motivación del equipo. Se logró reducir la rotación y fortalecer la cultura organizacional, demostrando que el <i>coaching</i> orientado al desarrollo de habilidades blandas <b>es una herramienta poderosa de transformación empresarial</b>.

      .row.bg-marron.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3.py-4.d-flex
          .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
            img.h-100(src='@/assets/curso/unidad/img-59.png', alt='Texto que describa la imagen')
          .col-12.col-xl-7.d-flex.ps-4.ps-xl-5.align-items-center.flex-column
            h2.mb-4.pb-2.me-auto Coaching organizacional y sostenibilidad
            p.mb-5(data-aos="fade-up") Se invita a leer el documento Coaching organizacional y sostenibilidad, donde se aborda la integración del coaching organizacional como una herramienta estratégica para promover la sostenibilidad en las empresas.
            a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/Anexos_clima_organizacional.pdf')" target="_blank")
              img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
              p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Coaching organizacional y sostenibilidad

      .bg-full-width.border-top-9-azul
        .px-5.pt-5.pb-0
          h2 Material complementario
          .row
            .col-12.col-md-6.col-lg-8
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://doi.org/10.33996/revistahorizontes.v7i28.548") El liderazgo directivo en el proceso educativo
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.itcilo.org/es/courses/herramientas-para-la-prevencion-y-gestion-de-conflictos-en-el-lugar-de-trabajo") Herramientas para la prevención y gestión de conflictos en el lugar de trabajo
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://viterbit.com/blog/coaching-empresarial-como-aplicarlo-eficientemente-en-la-empresa/") Coaching empresarial: estrategias efectivas para tu organización
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.apd.es/tecnicas-coaching-empresarial/") Las 8 técnicas de coaching empresarial más importantes
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://recursosparadirectivos.com/la-intervencion-en-equipos-desde-la-perspectiva-del-coaching/") La intervención en equipos desde la perspectiva del coaching
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.ilcacademy.com/blog/enfoques-de-coaching/") Enfoques de Coaching - Formas de intervención
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.adecco.es/insights/formacion/coaching-y-sostenibilidad") Coaching y sostenibilidad
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://upgreen.es/coaching-ejecutivo-sostenibilidad/") El coaching ejecutivo y la sostenibilidad
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://gamaliel-malave-s39g.squarespace.com/blog/2024/9/17/como-el-coaching-empresarial-impulsa-una-estrategia-sostenible-para-el-crecimiento") Cómo el coaching empresarial impulsa una estrategia sostenible para el crecimiento
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://synertium.com/coaching-sostenibilidad") Coaching Sostenibilidad
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://transformacionyliderazgo.com/fortaleciendo-la-sostenibilidad-organizacional-a-traves-de-la-conciencia-de-si-mismo/") Fortaleciendo la sostenibilidad organizacional a través de la conciencia de sí mismo
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=yByDuOAtGuI") [Vídeo] Bienestar Organizacional
            .col-12.col-md-6.col-lg-3
              figure
                img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')

      p

  
  </template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    cuestionario: {
      tema: 'Unidad 3',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito principal de un manual de funciones y responsabilidades en una organización?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Promover la rotación de personal',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Establecer un sistema de incentivos salariales',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Definir tareas, responsabilidades y roles específicos',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reducir los costos de producción',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué competencia blanda se asocia principalmente con la capacidad de entender y atender las emociones de otros?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Pensamiento lógico', esCorrecta: false },
            { id: 'b', texto: 'Empatía', esCorrecta: true },
            { id: 'c', texto: 'Planificación estratégica', esCorrecta: false },
            { id: 'd', texto: 'Toma de decisiones', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de las siguientes estrategias favorece la permanencia del talento humano en una empresa?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar la carga laboral sin reconocimiento',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Establecer horarios inflexibles',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Implementar planes de carrera y desarrollo',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reducir la comunicación con los empleados',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            "¿Qué representa el 'ciclo motivacional' en el contexto organizacional?",
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El proceso de pago de nómina',
              esCorrecta: false,
            },
            { id: 'b', texto: 'La jerarquía de la empresa', esCorrecta: false },
            {
              id: 'c',
              texto:
                'El proceso desde la aparición de una necesidad hasta su satisfacción',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La estructura del organigrama',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es una función principal del liderazgo transformador en una organización?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ignorar las opiniones del equipo',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Fomentar el cambio positivo e inspirar al equipo',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Centrarse únicamente en resultados financieros',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Mantener estructuras rígidas sin innovación',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
