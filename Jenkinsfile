pipeline {
	agent { label 'master' }
	
		stages {
            		stage('bajar repositorio'){
				steps {
					bat "cd C:\\Users\\Administrator\\BookSA-Frontend && git pull"
				}
			}
			stage('instalar dependencias'){
				steps {
					bat "cd C:\\Users\\Administrator\\BookSA-Frontend && npm install"
				}
			}
			stage('pruebas'){
				steps {
					bat "cd C:\\Users\\Administrator\\BookSA-Frontend && npm test -- --watch=false --code-coverage"
				}
			}
			stage('construir proyecto'){
				steps {
					bat "cd C:\\Users\\Administrator\\BookSA-Frontend && npm run-script build"
				}
			}
		}
}
