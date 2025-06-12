[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/w8H8oomW)
**<ins>Note</ins>: Students must update this `README.md` file to be an installation manual or a README file for their own CS403 projects.**

**รหัสโครงงาน:** ระบุรหัสโครงงานที่นี่ เช่น 67-1_02_ssr-r2

**ชื่อโครงงาน (ไทย):** ระบบจัดการงานแสดงของชุมนุมดนตรี คณะวิทยาศาสตร์และเทคโนโลยี

**Project Title (Eng):** SCI BAND MUSIC PERFORMANCE MANAGEMENT SYSTEM 

**อาจารย์ที่ปรึกษาโครงงาน:** ผศ. ดร. ทรงศักดิ์ รองวิริยะพานิช

**ผู้จัดทำโครงงาน:** 
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
- ทำ Database migration ด้วยคำสั่ง `npx prisma migrate dev -name init` ภายใต้ folder backend
- seed ข้อมูล user ใน database ด้วยคำสั่ง `npx prisma db seed` ภายใต้ folder backend เพื่อให้สามารถ login เข้าสู่ระบบได้
# การ set up third library API
## clerk และ discord
setup clerk และ discord สำหรับระบบ authentication โดยสามารถอ่านขั้นตอนได้ตามลิงก์:
https://clerk.com/docs/authentication/social-connections/discord  
ลิงก์สำหรับ discord developer application: https://discord.com/developers/applications  
โดยหลัง setup เสร็จแล้วให้กลับไปที่หน้า clerk dashboard และไปที่หัวข้อ configure และหาหัวข้อ Developers และกด API keys
จากกนั้นทำการ copy Public key, Secret key, JWKS Public key และเปิด file .env ของ frontend เพื่อใส่ public key ลงไปในตัวแปร `EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY` จากนั้นเปิด file .env ของ backend และ Secret key ในตัวแปร `CLERK_SECRET_KEY` สุดท้ายวาง JWKS Public key ใส่ตัวแปร `CLERK_JWT_PUBLIC_KEY`
## Discord bot
ในหน้า Discord developer ให้ไปที่หน้า Bot และ copy token เพื่อนำไปวางที่ไฟล์ .env ของ backend ในตัวแปร `DISCORD_BOT_TOKEN` จากนั้นให้ที่หน้า Oauth2 ภายใต้หัวข้อ OAuth2 URL Generator ให้เลือก Bot และให้สิทธิ์เป็น Administrator จากนั้นให้ copy Generated URL และเปิดลิงก์จากนั้นทำการเลือก Sci band server เพื่อทำการเพิ่ม bot เข้าสู่ Sci band server

# Google Forms และ Google sheets
เปิดลิงก์ https://docs.google.com/forms/d/1YQ4yOBQZNrSyrCHsir8ZBqPKhqrPns1ReM6pen9b-7U/copy เพื่อทำการ copy Google Forms สำหรับสมัคร Sci band และให้ทำการลิงก์ตัว Google Forms ไปยัง Google sheets  
จากนั้นให้ทำการเปิดลิงก์ https://console.cloud.google.com เพื่อเปิดใช้งาน Google sheets API

# Download android studio และ emulator
ลิงก์สำหรับ Download android studio เพื่อใช้งาน emulator: https://developer.android.com/studio  
หลัง download android studio เสร็จแล้วนั้นให้ทำการ install emulator โดยแนะนำ emulator ที่มีขนาดหน้าจอ 1080 x 2400 เพื่อให้การแสดงผล UI เป็นไปอย่างเที่ยงตรงมากที่สุด




# Run project
หลังการ setup project เสร็จเรียบร้อยแล้วนั้นสามารถเริ่ม run project ได้โดย
- เริ่มการ run frontend ด้วยคำสั่ง `cd fronend` และ `npm run android` โดยต้องเปิด emulator ไว้ก่อนใช้งานคำสั่ง
- เริ่มการ run backend ด้วยคำสั่ง `cd backend` และ `npm run start:dev`
