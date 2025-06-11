[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/w8H8oomW)
**<ins>Note</ins>: Students must update this `README.md` file to be an installation manual or a README file for their own CS403 projects.**

**รหัสโครงงาน:** ระบุรหัสโครงงานที่นี่ เช่น 66-2_01_ssr-s2

**ชื่อโครงงาน (ไทย):** ระบบจัดการงานแสดงของชุมนุมดนตรี คณะวิทยาศาสตร์และเทคโนโลยี

**Project Title (Eng):** SCI BAND MUSIC PERFORMANCE MANAGEMENT SYSTEM 

**อาจารย์ที่ปรึกษาโครงงาน:** ระบุชื่ออาจารย์ที่ปรึกษาโครงงานที่นี่ 

**ผู้จัดทำโครงงาน:** (โปรดเขียนข้อมูลผู้จัดทำโครงงานตามฟอร์แมตดังแสดงในตัวอย่างด้านล่าง)
1. นายณกลิน บุณยกะลิน  6409682660  nagalin.pun@dome.tu.ac.th
2. <ถ้ามี>
   
Manual / Instructions for your projects starts here !
# Topic 1
# Topic 2 
# Topic 3
# Topic 4
# วิธีติดตั้ง dependencies และ setup database
- ติดตั้ง dependencies สำหรับ frontend ด้วยคำสั่ง `cd frontend` และ `npm install`
- ติดตั้ง dependencies สำหรับ backend ด้วยคำสั่ง `cd backend` และ `npm install`
- ทำ Database migration ด้วยคำสั่ง `npx prisma migrate dev -name init`
- seed ข้อมูล user ใน database ด้วยคำสั่ง `npx prisma db seed` เพื่อให้สามารถ login เข้าสู่ระบบได้
# การ set up third library API
## clerk และ discord
setup clerk และ discord สำหรับระบบ authentication โดยสามารถอ่านขั้นตอนได้ตามลิงก์:
https://clerk.com/docs/authentication/social-connections/discord  
ลิงก์สำหรับ discord developer application: https://discord.com/developers/applications  
โดยหลัง setup เสร็จแล้วให้กลับไปที่หน้า clerk dashboard และไปที่หัวข้อ configure และหาหัวข้อ Developers และกด API keys
จากกนั้นทำการ copy Public key, Secret key, JWKS Public key และเปิด file .env ของ frontend เพื่อใส่ public key ลงไปในตัวแปร `EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY` จากนั้นเปิด file .env ของ backend และ Secret key ในตัวแปร `CLERK_SECRET_KEY` สุดท้ายวาง JWKS Public key ใส่ตัวแปร `CLERK_JWT_PUBLIC_KEY`

# Topic 7
# Topic 8 
