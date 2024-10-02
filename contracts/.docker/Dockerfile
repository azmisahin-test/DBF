FROM node:16

# Çalışma dizinini ayarla
WORKDIR /app

# Global olarak Truffle'ı yükle
RUN npm install -g truffle

# Sadece package.json ve package-lock.json'ı kopyala
COPY package.json package-lock.json ./

# Bağımlılıkları yükle
RUN npm install

# Tüm dosyaları kopyala
COPY . .

# Migrations dizinini çalıştır
# CMD ["truffle", "migrate", "--network", "development"]

# Konteynerin açık kalmasını sağla
CMD ["tail", "-f", "/dev/null"]