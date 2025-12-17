FROM node:20-alpine

# Tạo thư mục làm việc trong container
WORKDIR /app

# Copy package trước để cache
COPY package*.json ./

# Cài dependency
RUN npm install

# Copy toàn bộ source code
COPY . .

# Mở port cho backend
EXPOSE 4000

# Chạy server
CMD ["npm", "run", "dev"]
