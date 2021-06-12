pipeline {
	agent { label 'master' }
	
		stages {
            stage('bajar'){
				steps {
					bat "git pull"
				}
			}
			stage('install'){
				steps {
					bat "npm install"
				}
			}
            stage('despliegue'){
                steps {
                    bat "npm run-script build"
                }
            }
		}
}