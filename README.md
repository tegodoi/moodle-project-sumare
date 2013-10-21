Projeto Moodle Sumare
=====================

Projeto Moodle Faculdade Sumaré

####Como baixar o projeto:

- [Guia Prático de Git](http://rogerdudler.github.io/git-guide/index.pt_BR.html)
- No console do git digitar `git clone git@github.com:RafaelLucio/moodle-project-sumare.git`

Pronto o projeto já esta baixando na sua máquina

####Instalar o Nodejs Linux

- sudo apt-get install python g++ make checkinstall
- mkdir ~/src && cd $_
- wget -N http://nodejs.org/dist/node-latest.tar.gz
- tar xzvf node-latest.tar.gz && cd node-v*
- ./configure
- checkinstall #(remove the "v" in front of the version number in the dialog)
- sudo dpkg -i node_*

####Instalar o Nodejs Windows

- [Usando um pacote](http://nodejs.org/#download)
- [Simples download Windows Instalador](http://nodejs.org/#download).
- Using [chocolatey](http://chocolatey.org/) to install [Node](http://chocolatey.org/packages/nodejs):
- `cinst nodejs`
- or for [full install with NPM](http://chocolatey.org/packages/nodejs.install):
- `cinst nodejs.install`

####Link de referência

[Instalar Nodejs Windows/Linux](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager)

####Instalar o Ruby e o Compass (Windows):
- Baixe a versão `1.9.3` aqui [http://rubyinstaller.org/downloads/](http://rubyinstaller.org/downloads/)
- Coloque o Ruby no PATH do window (variável de ambiente), exemplo: 

	- From the desktop, right-click `My Computer` and click `Properties`.
	- In the System Properties window, click on the `Advanced tab`.
	- In the Advanced section, click the `Environment Variables` button.

- Link para referência: [aqui](http://geekswithblogs.net/renso/archive/2009/10/21/how-to-set-the-windows-path-in-windows-7.aspx)

- Abra o terminal do window e digita: `ruby -v` para exibir a versão do Ruby
- Se a versão aparecer digite `gem install compass`

####Como rodar o projeto:

- No console digitar: `npm install -g bower grunt-cli`
- Entrar na pasta moodle-project-sumare
- Dentro da pasta moodle-project-sumare digitar os comandos `npm install && bower install`
- Digitar no console `grunt server`
