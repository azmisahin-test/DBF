FROM node:14

# Global olarak Truffle'ı yükle
RUN npm install -g truffle

# Sadece package.json ve package-lock.json'ı kopyala
COPY package.json package-lock.json ./

# Bağımlılıkları yükle
RUN npm install

# Tüm dosyaları kopyala
COPY . .

# Uygulamayı başlat
CMD ["truffle", "migrate"]
