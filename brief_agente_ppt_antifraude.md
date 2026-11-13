# Brief para construir la presentación: productos de datos en el proyecto antifraude de autos

## Qué te pido

Construye una presentación en PowerPoint (.pptx, 16:9, en español de España) que acompañe una charla de formación de 30 minutos. El contenido ya está decidido y lo tienes completo más abajo, diapositiva a diapositiva. Tu trabajo es convertirlo en diapositivas claras, con los diagramas dibujados y las notas del orador escritas.

Quien presenta es el data scientist del proyecto. Va a hablar él: las diapositivas apoyan lo que dice, no lo sustituyen. Por eso cada diapositiva lleva poco texto y los puntos a comentar van en las notas del orador.

## El contexto que necesitas

Una aseguradora ha montado un proyecto de gestión integral antifraude en el ramo de autos. El equipo lo forman una persona de seguridad, un perito, un médico, un data scientist y un equipo de tramitación dedicado a fraude. En esta sesión cada perfil enseña lo que ha desarrollado. Esta presentación cubre solo la parte de productos de datos.

Hay tres productos hechos y uno futuro:

1. Una aplicación en Streamlit que normaliza datos para cargarlos en i2, la herramienta que usa el equipo para detectar fraude mediante grafos de relaciones. Por lo general normaliza apoyándose en otros campos: si coinciden teléfono, siniestro y mail, el nombre pasa a ser el mismo.
2. Un dashboard de seguimiento del equipo, que compara el año pasado con la nueva forma de trabajar.
3. Un modelo que optimiza las reglas de negocio actuales (reglas con pesos) y prioriza expedientes. En una validación con cuatro meses de principios de año encuentra un 30 % más de fraude confirmado. El ponente tiene una demo con una barra deslizante: parte de la carga de trabajo actual y, al moverla, se ven los expedientes que se revisarían.
4. A futuro, un agente tramitador que haga una primera tramitación de ciertos expedientes y proponga los próximos pasos.

La charla abre con un punto de situación: cómo se trabajaba el año pasado y dónde se quiere llegar. Después sigue cuatro preguntas, una por producto:

- ¿Con qué datos investigamos? → normalizador para i2
- ¿Cómo lo estamos haciendo? → dashboard
- ¿Qué expedientes miramos primero? → modelo
- ¿Qué trabajo le quitamos al tramitador? → agente

Usa estas cuatro preguntas como navegación visual: aparecen juntas en la diapositiva 3 y después, en pequeño, en cada diapositiva, con la pregunta activa resaltada.

## La audiencia

Es mixta: tramitadores, perito, médico, seguridad y algún responsable. La mayoría no es técnica. Eso tiene tres consecuencias:

- Nada de jerga de data science en pantalla. Ni «features», ni «recall», ni nombres de algoritmos. El modelo se explica con una imagen: las reglas son una lista de comprobación con puntos, y el modelo ha aprendido de los casos confirmados cuánto vale de verdad cada punto.
- Los tramitadores están en la sala y el bloque 4 habla de cómo registran su trabajo. El tono ahí es de proceso y de herramienta: el trabajo se hace y se hace bien, lo que falla es el momento en que se registra. Ninguna diapositiva debe poder leerse como un reproche a personas o a centros concretos.
- El mensaje de fondo hacia ellos es doble. Uno, de reconocimiento: el modelo mejora porque aprende de fraude que los tramitadores detectaron por criterio propio cuando las reglas no saltaban. Dos, de consecuencia: una tramitación bien hecha y bien registrada hace más eficaces los próximos productos de datos, porque es el dato del que aprenden el modelo y el futuro agente.

## Reglas sobre los datos

Solo hay una cifra de resultado confirmada: el 30 % más de fraude confirmado, en una validación con cuatro meses de principios de año. Todo lo demás que necesite un número está marcado entre corchetes en este brief, por ejemplo `[tiempo antes y después]`.

Mantén cada corchete visible en la diapositiva, con un resaltado de color para que el ponente los encuentre y los rellene. No inventes cifras, nombres de centros, capturas ni casos para tapar un hueco: un número inventado en una formación interna acaba citado como real.

La única excepción es el ejemplo de los grafos de la diapositiva 4, que es ficticio a propósito y debe decirlo en pantalla.

Donde haga falta una captura de pantalla (la app, el dashboard, la barra del modelo), deja un marco del tamaño correcto con el texto `[captura: …]`.

Cuida tres expresiones:

- Di «fraude confirmado» o «indicios», nunca afirmes que un expediente o una persona «es fraude».
- El 30 % va siempre acompañado de «en validación». Es una prueba con cuatro meses de datos y todavía no hay resultados en producción.
- El modelo «prioriza» u «ordena». La decisión es siempre del tramitador.

## Criterios de diseño

- Una idea por diapositiva. El título es una frase completa que dice la conclusión, no una etiqueta. «El modelo encuentra un 30 % más de fraude confirmado en validación» en lugar de «Resultados del modelo».
- Como máximo unas 25 palabras de cuerpo por diapositiva, sin contar título ni etiquetas de diagramas.
- Los diagramas y los grafos se dibujan con formas nativas de PowerPoint, editables, no como imagen pegada. El ponente tendrá que ajustar nombres.
- Estilo sobrio y corporativo. Si recibes una plantilla de la compañía junto a este brief, úsala. Si no, fondo claro, una tipografía sans-serif, un color de acento, un color de error para los nodos duplicados del grafo y otro reservado para los corchetes pendientes.
- Sin fotos de stock, sin iconos decorativos, sin animaciones.
- Cada diapositiva lleva notas del orador con los puntos a comentar y la frase de transición que se indica.

## Diapositivas

Son 18 diapositivas más dos de respaldo. Los minutos son por bloque.

### Apertura (4 min)

**1. Portada**
- Título: «Productos de datos en el proyecto antifraude de autos»
- Subtítulo: `[nombre del ponente]` · `[fecha]`
- Notas: el ponente se presenta. Es el data scientist del equipo, junto a seguridad, perito, médico y tramitación especializada en fraude.

**2. De dónde venimos y dónde queremos llegar**
- Visual: dos columnas unidas por una flecha con la etiqueta «este proyecto».
  - Izquierda, «El año pasado»: `[cómo se detectaba, quién investigaba y qué seguimiento había]`. Dato conocido que sí puedes poner: la detección se apoyaba en reglas con pesos fijos y en el criterio de cada tramitador.
  - Derecha, «Dónde queremos llegar»: cada expediente llega al tramitador priorizado y con una primera tramitación hecha, y el equipo ve cada día cómo va. `[objetivo concreto, si lo hay]`
- Notas: es lo primero que se cuenta tras la presentación. Dos o tres hechos del año pasado, sin juzgar, y el destino. La parte de datos es lo que se pone para recorrer ese camino.

**3. Cuatro preguntas, cuatro productos**
- Visual: las cuatro preguntas en fila, cada una con su producto debajo. La cuarta diferenciada como «futuro».
- Notas: cada producto responde a una pregunta. Frase de arranque: «Yo no investigo siniestros. Mi trabajo es que quien investiga tenga el dato preparado, sepa cómo va y sepa por dónde empezar.» Avisa de que también enseñará lo que no ha salido limpio, porque es lo que más ha enseñado al proyecto.

### Normalizador para i2 (4 min)

**4. Mismo teléfono, siniestro y mail: tres nombres pasan a ser una persona**
- Visual: dos grafos del mismo ejemplo, uno al lado del otro, con una flecha «normalización» entre ambos. Es la diapositiva más importante del bloque: tiene que verse el cambio de un vistazo.
  - Izquierda, «Antes: el grafo con errores». Tres nodos de persona con el nombre escrito distinto, en color de error: «José García López», «Jose Garcia» y «J. García Lopez». Los tres están unidos a los mismos tres nodos: un teléfono, un siniestro y un mail.
  - Derecha, «Después: el grafo corregido». Un solo nodo de persona, «José García López», unido a esos mismos tres nodos.
  - Mismo tamaño, misma posición de los nodos compartidos en los dos lados, para que lo único que cambie sea el número de personas.
- Pie de la diapositiva: «Si coinciden teléfono, siniestro y mail, el nombre pasa a ser el mismo. Ejemplo ficticio.»
- Usa datos claramente inventados para teléfono, siniestro y mail, por ejemplo «600 000 000», «Siniestro 001» y «jgarcia@ejemplo.com».
- Notas: i2 solo encuentra una red si la misma persona está escrita igual en todos los expedientes. Los datos llegan con formatos distintos. La app, por lo general, se apoya en otros campos: si coinciden teléfono, siniestro y mail, unifica el nombre. Sin eso, una sola persona son tres nodos y sus conexiones quedan repartidas entre los tres.

**5. La app deja el fichero listo para i2 en tres pasos**
- Visual: flujo de tres cajas: subir el fichero → normalizar y validar → fichero listo para la ingesta. Debajo, marco `[captura: app de Streamlit]`.
- Cifra destacada: `[tiempo antes y después, o número de cargas hechas]`
- Notas: preparar una carga a mano llevaba `[tiempo]` y dependía de quién la hiciera. La usa `[seguridad / analista]` sin depender del data scientist para cada carga.
- Transición: «Con el dato preparado ya podemos investigar. Lo siguiente era saber cómo lo estamos haciendo.»

### Dashboard de seguimiento (7 min)

**6. Por primera vez vemos cada día cómo trabaja el equipo**
- Visual: dos columnas. «Se actualiza a diario»: métricas del proceso de investigación. «Se actualiza cada mes»: desviación de reserva.
- Notas: sirve para seguir al equipo y para comparar el año pasado con la nueva forma de trabajar. El objetivo de tramitación que se sigue es la desviación de reserva, y es el único dato mensual. Decirlo pronto evita la pregunta de por qué ese número no se mueve.

**7. El funnel de tiempos dice dónde se acumulan los días**
- Visual: diagrama horizontal de cinco etapas con el tiempo de cada tramo entre ellas:
  1. Tramitación del expediente
  2. Apertura de la investigación
  3. Inicio de la investigación
  4. Cierre de la investigación
  5. Confirmación
- Entre etapas, un hueco `[días]` para cada tramo.
- Notas: es la métrica principal. Cada tramo es tiempo de espera o tiempo de trabajo, y donde se acumulan los días es donde hay que actuar. Los nombres de las etapas pueden cambiar: el ponente los ajustará a los del dashboard real.

**8. Demo: del funnel a un centro y a un expediente**
- Visual: marco grande `[captura: dashboard]` como respaldo por si la demo en vivo falla. Debajo, el recorrido en tres pasos: funnel completo → un centro → un expediente.
- Notas: fue el producto más largo de construir. Para que esté vivo a diario hubo que `[motivos reales: automatizar cargas, acordar qué fecha marca cada etapa, reconstruir el año pasado]`.

**9. Este año frente al año pasado**
- Visual: una o dos cifras grandes en comparación antes/después: `[métrica 1: año pasado → este año]`, `[métrica 2: año pasado → este año]`.
- Nota al pie en la diapositiva: «Los tiempos son provisionales mientras se corrige el registro (ver siguiente bloque).»
- Transición: «Al mirar el funnel con detalle aparecieron números que no cuadraban, y eso ha sido de lo más útil del proyecto.»

### Lo que el dashboard ha destapado (5 min)

**10. El dashboard mide lo que se registra, y hoy el registro no sigue al trabajo real**
- Visual: dos líneas de tiempo paralelas para un mismo expediente. Arriba, «Lo que ocurre»: la investigación dura varios días. Abajo, «Lo que ve el sistema»: apertura y cierre el mismo día, duración cero.
- Notas: primer patrón. Se investiga primero y después se abre y se cierra la investigación el mismo día. Enseñar un expediente anonimizado como ejemplo: `[caso]`.

**11. Segundo patrón: reasignaciones con la investigación ya cerrada**
- Visual: un expediente cerrado en el centro A que después aparece en el centro B. Usa «centro A» y «centro B», nunca nombres reales.
- Cifra: `[porcentaje de investigaciones abiertas y cerradas el mismo día]` · `[número de reasignaciones tras el cierre]`
- Notas: el caso cuenta en un centro que no lo trabajó. Con los dos patrones, los tiempos del funnel salen mejores o más raros de lo real y la comparación entre centros y con el año pasado pierde fiabilidad. Lo que se pierde de verdad es saber dónde se atasca el trabajo, que es lo que permitiría pedir recursos o cambiar algo.

**12. Registrar bien hoy hace mejores los productos de datos de mañana**
- Visual: a la izquierda, tres peticiones numeradas:
  1. Abrir la investigación cuando empieza
  2. Cerrarla cuando termina
  3. No reasignar expedientes ya cerrados
- A la derecha, una flecha desde «Lo que se registra hoy» hacia tres destinos: dashboard fiable, modelo que prioriza mejor, agente más útil.
- Notas: el trabajo se hace y se hace bien. Lo que falla es el momento del registro, y eso es un problema de proceso. La idea que debe quedar: lo que hoy se registra es el dato del que aprenden el modelo y el futuro agente, así que una tramitación bien hecha y bien registrada hace más eficaces los próximos productos de datos. Mientras tanto, desde datos se marcan estos casos en el dashboard y se enseñan las métricas con ellos y sin ellos.
- Transición: «El dashboard nos dice cómo investigamos. El tercer producto ayuda a decidir qué investigar primero.»

### Modelo de priorización (6 min)

**13. De reglas que saltan o no saltan a una lista ordenada**
- Visual: a la izquierda, una lista de comprobación con pesos fijos y un resultado binario (salta / no salta). Flecha. A la derecha, una lista de expedientes ordenada de mayor a menor prioridad.
- Notas: hoy hay reglas de negocio con pesos asignados a mano. El modelo reajusta cómo se combinan y devuelve una lista priorizada. Las reglas siguen siendo las del equipo. La imagen para explicarlo: una lista de comprobación con puntos, y el modelo ha aprendido de los casos confirmados cuánto vale de verdad cada punto.

**14. Demo: con la carga actual, el modelo encuentra un 30 % más de fraude confirmado en validación**
- Visual: marco grande `[captura: barra de carga del modelo]` como respaldo de la demo en vivo. Al lado, el «+30 %» como cifra grande.
- Bajo el marco, una línea que explique la demo: «La barra parte de la carga actual. Al moverla se ven los expedientes que se revisarían.»
- Nota al pie en la diapositiva: «Validación con cuatro meses de principios de año. Pendiente de piloto en producción.»
- Notas: el ponente enseña la barra en vivo. Definir la base con precisión: `[volumen revisado y qué cuenta como fraude confirmado]`. Si el 30 % es a igual carga de trabajo, decirlo aquí: `[confirmar]`.

**15. Ese 30 % sale del criterio de los tramitadores**
- Visual: tres grupos de expedientes: los que marcan las reglas, los que detectó el tramitador sin que saltara ninguna regla, y los que nadie investigó. El modelo cubre el primero y buena parte del segundo. El tercero aparece con un interrogante.
- Notas: el modelo pone arriba expedientes que las reglas no marcaron y que el tramitador detectó por criterio propio. Enseñar un caso anonimizado que las reglas no vieron: `[caso]`. Es un suelo: solo se sabe que hubo fraude donde alguien investigó, y entre lo que el modelo prioriza y nadie miró puede haber más. La otra cara: el modelo aprende solo de lo investigado, así que el fraude que hoy nadie detecta tampoco lo verá. Siguiente paso: piloto en producción en `[fecha]`, midiendo fraude confirmado por expediente revisado.
- Transición: «Si ya sabemos qué expedientes mirar primero, la pregunta siguiente es cuánto del trabajo inicial podemos dejar preparado.»

### Agente tramitador (3 min)

**16. Lo siguiente: que el expediente llegue al tramitador ya preparado**
- Etiqueta visible en la diapositiva: «Idea en estudio, sin fecha»
- Visual: dos columnas. «Lo que haría el agente»: resumir el expediente, señalar los indicios, proponer los próximos pasos. «Lo que sigue en manos del tramitador»: revisar, corregir, decidir.
- Notas: se empezaría por un tipo de expediente acotado y repetitivo: `[cuál]`. El agente no cierra ni califica ningún expediente. Pedir a la sala que digan qué pasos repiten siempre y qué les ahorraría más tiempo. Conexión con el bloque 4: un agente aprende del proceso tal como está registrado, así que un registro fiel le hace más útil.

**17. Así sería una primera tramitación**
- Visual: maqueta de una ficha con tres apartados: «Resumen del expediente», «Indicios detectados», «Próximos pasos propuestos». Rellena cada apartado con `[ejemplo anonimizado]`, sin inventar el caso.

### Cierre (1 min)

**18. Tres ideas y una petición**
- Visual: tres ideas numeradas y, separada y destacada, la petición.
  1. Con el dato normalizado, i2 enseña redes que antes no aparecían.
  2. El dashboard está vivo cada día, y será fiable cuando el registro siga al trabajo.
  3. El modelo encuentra un 30 % más en validación, y lo aprende del criterio de los tramitadores.
- Petición: «Registrar la apertura y el cierre de la investigación en el momento en que ocurren.»

### Respaldo (no se proyecta salvo que haga falta)

**19. Reglas frente a modelo**
- Visual: gráfico de dos barras con el fraude confirmado encontrado con las reglas `[valor]` y con el modelo `[valor]`, a igual número de expedientes revisados `[confirmar]`.
- Nota al pie: «Validación con cuatro meses de principios de año.»
- Notas: se usa si la demo de la barra falla o si alguien pide la comparación en una sola imagen.

**20. Preguntas previsibles**

Ponlas en una tabla de dos columnas, pregunta y respuesta corta:

| Pregunta | Respuesta |
| --- | --- |
| ¿El modelo sustituye a las reglas o a nosotros? | Parte de las reglas y aprende de vuestras detecciones. Ordena la lista y la decisión es vuestra. |
| ¿Cómo sabéis que es un 30 %? | Validación con cuatro meses de principios de año: fraude confirmado que el modelo prioriza y las reglas no marcaron. Falta confirmarlo en producción. |
| ¿Vamos a tener más expedientes que investigar? | `[confirmar: mismo volumen mejor ordenado, o más volumen]` |
| ¿El dashboard es para controlarnos? | Mide el proceso y la nueva forma de trabajar. Por eso interesa a todos que refleje el trabajo real. |
| ¿Por qué mis tiempos salen a cero? | Porque la investigación se abrió y se cerró el mismo día en el sistema. Se corrige registrando al empezar. |
| ¿Cuándo llega el agente? | Sin fecha. Primero va el piloto del modelo. |

## Qué debes entregar

1. El fichero .pptx con las 20 diapositivas y sus notas del orador.
2. Una lista de todos los corchetes que quedan por rellenar, con el número de diapositiva de cada uno.
3. Cualquier decisión que hayas tomado sin que este brief la cubriera, en una o dos líneas cada una.

Antes de entregar, renderiza las diapositivas y revísalas: que ningún texto se salga de su caja, que los diagramas y los grafos se lean a tamaño de proyección y que todos los corchetes sigan visibles.
