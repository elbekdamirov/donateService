# 📦 Delivery Service API

NestJS, Sequelize va PostgreSQL asosida qurilgan backend tizim. Bu API orqali adminlar, kuryerlar, kategoriyalar va ijtimoiy tarmoqlarni boshqarish mumkin.

---

## 📚 Texnologiyalar

- Node.js (NestJS)
- TypeScript
- Sequelize ORM
- PostgreSQL

---

## 🚀 API Endpointlar

### 🧑‍💼 Admins

- `POST /admins` — Admin yaratish  
- `GET /admins` — Barcha adminlar  
- `GET /admins/:id` — Bitta adminni olish  
- `PATCH /admins/:id` — Adminni yangilash  
- `DELETE /admins/:id` — Adminni o‘chirish  

#### Request body:
```json
{
  "full_name": "Jamshid Qodirov",
  "email": "jamshid.qodirov@example.com",
  "role": "superadmin",
  "password_hash": "hashed_password123",
  "is_active": true
}


### Va boshqalar...
