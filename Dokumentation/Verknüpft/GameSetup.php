<!DOCTYPE html>

<html lang=de>

	<?php 
	session_start()
	?>

	
	<head>
		<meta charset=utf-8 />
		<title>Game Setup</title>
		<link rel= stylesheet href=stylehome.css>
	</head>
	
	
	<body>
		<header>
			<h1>Game-Setup</h1>
		</header>
		
		<main>
			<article>
				<h1>Character - Setup</h1>
				<section>
					<h3>Wie heißt du?<h3>
					<form> nick: <input name=username required>
					</form>
					
				</section>
				<section>
					<h3>Typ<h3>
					<form>
						<input type=button value=weiter onclick=function()>
						<input type=button value=zurück onclick=function()>	
					</form>
				</section>
				
				<footer>
					<nav>
						<a href=Home.html>
							<button type="button">Main-Menü</button>
						</a>
						<a href=Game.html>
							<button type="button">Start Game</button>
						</a>
					</nav>
				</footer>
			</article>
		</main>		
	</body>
</html>