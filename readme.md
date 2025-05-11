# 📦 API Classificados – Checklist de Endpoints (MVC)

## 🧑‍💼 USERS
- [ X ] `GET /users` – Listar todos os usuários  
- [ X ] `GET /users/:id` – Obter um usuário por ID  
- [ X ] `POST /users` – Criar um novo usuário  
- [ ] `PUT /users/:id` – Atualizar um usuário existente  
- [ ] `DELETE /users/:id` – Deletar um usuário  

---

## 🗂️ CATEGORIES
- [ X  ] `GET /categories` – Listar todas as categorias  
- [ X  ] `GET /categories/:id` – Obter uma categoria por ID  
- [  ] `POST /categories` – Criar uma nova categoria  
- [ ] `PUT /categories/:id` – Atualizar uma categoria existente  
- [ ] `DELETE /categories/:id` – Deletar uma categoria  

---

## 📦 PRODUCTS
- [ X ] `GET /products` – Listar todos os produtos  
- [ X ] `GET /products/:id` – Obter um produto por ID  
- [ X ] `POST /products` – Criar um novo produto  
- [ ] `PUT /products/:id` – Atualizar um produto existente  
- [ ] `DELETE /products/:id` – Deletar um produto  
- [ ] `GET /products/by-category/:categoryId` – Listar produtos por categoria  
- [ ] `GET /products/by-user/:userId` – Listar produtos de um usuário  

---

## 🖼️ PRODUCT IMAGES
- [ ] `GET /product-images` – Listar todas as imagens  
- [ ] `GET /product-images/:id` – Obter imagem por ID  
- [ ] `POST /product-images` – Adicionar nova imagem  
- [ ] `PUT /product-images/:id` – Atualizar uma imagem  
- [ ] `DELETE /product-images/:id` – Deletar imagem  
- [ ] `GET /products/:productId/images` – Listar imagens de um produto  