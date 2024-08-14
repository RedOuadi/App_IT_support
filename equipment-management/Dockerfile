# Utiliser l'image de base Maven pour compiler le projet
FROM openjdk:17

# Utiliser l'image de base OpenJDK pour exécuter l'application

# Copier le fichier JAR du projet à partir de l'image de build
ADD /target/itsupport.jar /itsupport.jar

# Exposer le port 8084
EXPOSE 8080

# Commande pour démarrer l'application
ENTRYPOINT ["java", "-jar", "itsupport.jar"]
