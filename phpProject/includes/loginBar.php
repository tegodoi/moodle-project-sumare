	<div class="navbar navbar-inverse navbar-fixed-top">
		<div class="navbar-inner">
			<div class="container">
				<button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a class="brand" href="#">Project Moodle</a>
				<div class="nav-collapse collapse">
					<ul class="nav">
						<li class="active"><a href="#">Home</a></li>
						<li><a href="#about">Sobre</a></li>
						<li><a href="#contact">Contato</a></li>
					</ul>
					<form action="check_users.php" method="post" name="form_login" id="form_login" class="navbar-form pull-right">
						<input type="text" placeholder="Login" name="usuario" id="username" class="span2" />
						<input type="password" placeholder="Senha" name="senha" id="password" class="span2" />
						<button type="button" id="submitLogin" name="send" class="btn">Acessar</button>
					</form>
				</div><!--/.nav-collapse -->
			</div>
		</div>
	</div>