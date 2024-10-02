FROM node:16

# Çalışma alanı
WORKDIR /app

# .env dosyasını kopyala
COPY .docker/.env ./

# Sadece package.json ve package-lock.json'ı kopyala
COPY package.json package-lock.json ./ 

# Bağımlılıkları yükle
RUN npm install

# Tüm dosyaları kopyala
COPY . .

# Uygulamayı başlat
# CMD ["npm", "start"]

# Konteynerin açık kalmasını sağla
CMD ["tail", "-f", "/dev/null"]
