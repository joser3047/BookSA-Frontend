pipeline {
	agent { label 'master' }
	
		stages {
            stage('bajar'){
				steps {
					bat "cd C:\\Users\\Administrator\\BookSA-Frontend && git pull && npm install && npm run-script build"
				}
			}
		}
}