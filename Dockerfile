# Dockerfile para el back

FROM node:18-alpine

WORKDIR /app

# Copiamos package.json y package-lock.json
COPY package*.json ./

RUN npm install

# Copiamos el resto del código
COPY . .

# Expone el puerto configurado, en este caso 3001
EXPOSE 3001

CMD ["npm", "run", "start"]
