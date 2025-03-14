# Usamos la version de node que tenemos y le damos un nombre
FROM node:22.13.0 AS build

# Elegimos el area de trabajo dentro del contenedor
WORKDIR /app

# Copiamos solo los archivos necesarios para instalar dependencias
COPY package.json package-lock.json ./

# Instalamos solo las dependencias de producción
RUN npm install --omit=dev

# Copiamos el resto del código fuente
COPY . .

# Generamos la Imagen ligera sin dependencias innecesarias y su area de trabajo
FROM node:22.13.0-slim
WORKDIR /app

# Copiamos solo los archivos necesarios desde la etapa de construcción
COPY --from=build /app ./

# Usamos el puerto donde corre el backend
EXPOSE 3000

# Ejecutamos la app en modo producción
CMD ["npm", "run", "script"]
