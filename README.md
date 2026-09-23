<div align="center">

# Ticket Sales API

<p>Concert & Event Ticketing REST API with Seat Allocation</p>

![Status](https://img.shields.io/badge/Status-Active-success?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)
![Express.js](https://img.shields.io/badge/Express.js-blue?style=flat-square) ![Prisma ORM](https://img.shields.io/badge/Prisma%20ORM-blue?style=flat-square) ![Multer](https://img.shields.io/badge/Multer-blue?style=flat-square) ![JWT](https://img.shields.io/badge/JWT-blue?style=flat-square) ![Ticketing](https://img.shields.io/badge/Ticketing-blue?style=flat-square)

</div>

---

## Overview
An Express.js REST API built for event organizers to handle ticket categories, seat numbering, customer orders, and receipt file uploads with Multer.

---

## Key Features
- Event creation, seat tiers (VIP, Regular), and ticket inventory quotas
- Receipt attachment handling via Multer multipart parser
- Unique ticket code generator for attendee check-in verification

---

## Tech Stack
- **Framework**: Express.js
- **ORM**: Prisma ORM
- **FileHandling**: Multer
- **Database**: MySQL

---

## Project Structure
```text
tiket_sales/
├── controller/         # Event, Seat, Ticket, Auth controllers
├── middlewares/        # Token validation
└── prisma/
```

---

## Getting Started

### Prerequisites
Make sure you have the required runtimes and tools installed on your machine:
- Node.js (v18+ recommended) / Appropriate runtime
- Git

### Installation & Local Setup
```bash
git clone https://github.com/MohammadKevin/tiket_sales.git
cd tiket_sales
npm install
npx prisma migrate dev
npm run dev
```

---

## Author
**Mohammad Kevin Arif Rudianto**
- **GitHub:** [@MohammadKevin](https://github.com/MohammadKevin)
- **Portfolio:** [portfolio-mohammadkevin.vercel.app](https://portfolio-mohammadkevin.vercel.app)
- **LinkedIn:** [Mohammad Kevin](https://www.linkedin.com/in/mohammad-kevin-arif-rudianto-945733347)
- **Email:** [kvn4.200581@gmail.com](mailto:kvn4.200581@gmail.com)

---

## License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

<div align="center">
If you found this repository useful, please consider giving it a star!
</div>
