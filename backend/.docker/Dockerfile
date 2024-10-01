FROM node:14

# Çalışma dizini
WORKDIR /app

# Sadece package.json ve package-lock.json'ı kopyala
COPY package.json package-lock.json ./

# Bağımlılıkları yükle
RUN npm install

# Tüm dosyaları kopyala
COPY . .

# Uygulamayı başlat
CMD ["npm", "start"]
