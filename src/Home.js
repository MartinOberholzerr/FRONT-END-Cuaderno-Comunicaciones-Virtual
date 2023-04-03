function Home() {
  return (
    <><header>
      <div class="nav"><p>Cuaderno de comunicanes virtual</p></div>
  </header>
  <div class="background">
    <div class="grid ">
          <div class="item" tabindex="1">
            <div class="box">
              <h2>NOTICIAS GENERALES</h2>
              <div class="notice"><p>Pre-inscripcion para estudiantes no promovidos(repitentes) ciclo superiror(4°-5°)</p></div><br/>
              <div class="notice">Noticia 2</div><br/>
              <div class="notice">Noticia 3</div><br/>
              <div class="notice">Noticia 4</div><br/>
            </div>
          </div>
          <div class="item" tabindex="2">
            <div class="box">
              <h2>RETIROS</h2>
              <div class="notice"><p>Miercoles 23/04 de 18:00-19:20: Ausente Matematica</p></div><br/>
              <div class="notice"><p>Viernes 26/03 de 18:00-21:00 Ausente Logica</p></div><br/>
              <div class="notice"><p>Lunes 15/03 de 18:00-21:00 Ausente Dibujo</p></div><br/>
              <div class="notice"><p>Luens 9/03 de 19:20-21:00 Ausente Matematica</p></div><br/>
            </div>
          </div>
          <div class="item" tabindex="3">
            <div class="box">
            <h2>COMUNICACIONES</h2>
            <p>Generar nota:</p>
            <input></input>
            <h3>Ultima nota:</h3>
            <p>No hay comunicaciones</p>
            </div>
          </div>
          <div class="item" tabindex="4">
            <div class="box">
            <h2>NOTICIAS PERSONALES</h2>
              <div class="notice"><p>Prueba Matematica(2/04): 8</p></div><br/>
              <div class="notice"><p>Trabajo Practico Logica(20/03): 10</p></div><br/>
              <div class="notice"><p>Taller Carpinteria(nota final): 7</p></div><br/>
              <div class="notice">Noticia 4</div><br/>
            </div>
          </div>
        </div>
  </div></>
  );
}
function Box(){
  return(
    <div class="box">
    <div class="notice1">Noticia 1</div>
    <div class="notice2">Noticia 2</div>
    <div class="notice3">Noticia 3</div>
    <div class="notice4">Noticia 4</div>
    </div>
  )
}

export default function MyApp() {
  return (
    <div>
      <Home />
      <Box />
    </div>
  );
}
