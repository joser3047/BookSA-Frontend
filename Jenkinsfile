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
			stage('construir proyecto'){
				steps {
					bat "cd C:\\Users\\Administrator\\BookSA-Frontend && npm run-script build"
				}
			}
		}
}