import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(<div>
  <h1>Cuaderno de comunicaciones digital</h1>
<div class="container" id="container">
	<div class="form-container sign-up-container">
		<form action="#">
			<h2>¿Problemas?</h2>
			<span>Contacta con tu escuela</span>
			<input type="text" placeholder="Nombre" />
			<input type="email" placeholder="Email" />
			<select placeholder="Colegio" class="social-containerr">
				<option value="Epet20">Elegir Escuela</option>
				<option value="Epet20">Epet20</option>
				<option value="Epet14">Epet14</option>
			</select>

			<button>Envia tus datos</button>
			<div class="social-container">
				<img src="https://www.argentina.gob.ar/sites/default/files/min_educacion.png" alt=""/>
			</div>
		</form>
	</div>
	<div class="form-container sign-in-container">
		<form action="#">
			<h2>Inicio de sesion</h2>
			<span>¿Tenes cuenta?</span>
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<a href="#">¿Olvidaste tu contraseña?</a>
			<button>Iniciar sesion</button>
			<div class="social-container">
				<img src="https://www.argentina.gob.ar/sites/default/files/min_educacion.png" alt="" />
			</div>
		</form>
	</div>
	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-left">
				<h1>Bienvenido de nuevo!</h1>
				<p>Mantente conectado para saber toda tu informacion escencial.</p>
				<button class="ghost" id="signIn">Sign In</button>
			</div>
			<div class="overlay-panel overlay-right">
				<h1>¿Eres nuevo?</h1>
				<p>Ingresa tus datos de tu hijo o los tuyos para que tu colegio pueda darte acceso a tu informacion!</p>
				<button class="ghost" id="signUp">Sign Up</button>
			</div>
		</div>
	</div>
</div>

  <script  src="./script.js"></script>
</div>)


