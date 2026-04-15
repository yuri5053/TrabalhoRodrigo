# Usar imagem oficial do Node.js
FROM node:20

# Definir diretório de trabalho dentro do container
WORKDIR /app

# Copiar arquivos de dependência primeiro
COPY package*.json ./

# Instalar dependências
RUN npm ci

# Copiar o restante do código
COPY . .

# Expor a porta usada pelo app (ajuste se necessário)
EXPOSE 3000

# Comando padrão para iniciar o app
CMD ["npm", "start"]
