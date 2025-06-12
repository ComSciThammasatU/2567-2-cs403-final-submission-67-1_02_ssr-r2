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
# วิธีติดตั้ง dependencies และ setup ฐานข้อมูล
- ติดตั้ง dependencies สำหรับ frontend ด้วยคำสั่ง `cd frontend` และ `npm install`
- ติดตั้ง dependencies สำหรับ backend ด้วยคำสั่ง `cd backend` และ `npm install`
- ทำ Database migration ด้วยคำสั่ง `npx prisma migrate dev -name init` ภายใต้ folder backend
- seed ข้อมูล user ใน database ด้วยคำสั่ง `npx prisma db seed` ภายใต้ folder backend เพื่อให้สามารถ login เข้าสู่ระบบได้



# การ Setup Clerk API และ Discord API
ลิงก์สำหรับ Clerk Dashboard: https://dashboard.clerk.com  
ลิงก์สำหรับ Discord Developer Protal: https://discord.com/developers/applications
- Setup Clerk และ Discord API ตามคู่มือ: https://clerk.com/docs/authentication/social-connections/discord  


- เพิ่ม API keys เข้าสู่ระบบ โดยเข้าสู่ Clerk Dashboard → Configure → Developers → API Keys

- Copy Public key ใส่ในไฟล์ .env ของ frontend ในตัวแปร   `EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY` 

- Copy Secret key → ใส่ใน .env ของ backend ในตัวแปร `CLERK_SECRET_KEY`

- Copy JWKS Public key ใส่ใน .env ของ backend ในตัวแปร `CLERK_JWT_PUBLIC_KEY`

- Copy Discord bot token เข้าสู่ระบบ โดยเลือกหัวข้อ Bot ใน Discord Developer Portal → คัดลอก Token → วางในไฟล์ .env ของ backend ที่ DISCORD_BOT_TOKEN

- เพิ่ม Discord bot เข้าสู่ Discord Server โดยไปที่ OAuth2 → OAuth2 URL Generator → เลือก Scope เป็น "Bot" → มอบสิทธิ์ "Administrator" -> คัดลอกลิงก์ที่ได้ → เปิดลิงก์ → เพิ่ม Bot เข้าเซิร์ฟเวอร์ Sci Band

# การ Setup Google Forms และ Google sheets
- คัดลอกฟอร์มสมัคร Sci Band: https://docs.google.com/forms/d/1YQ4yOBQZNrSyrCHsir8ZBqPKhqrPns1ReM6pen9b-7U/copy

- ลิงก์ Google Forms กับ Google Sheets โดยไปที่การตอบกลับ -> ลิงก์ไปยังชีต
  ![image](https://github.com/user-attachments/assets/6f16e4ad-c52a-4394-ba4c-2b4287e401bb)


- เปิดใช้งาน Google Sheets API ที่: https://console.cloud.google.com โดยการ new project -> Navigation menu -> APIs & Services -> Enabled APIs & Services -> ค้นหา Google sheets และทำการ enable Google Sheets API
  ![image](https://github.com/user-attachments/assets/c3112879-7c6b-45b9-b7e7-a9ec3788ce85)
 ![image](https://github.com/user-attachments/assets/0c5ca706-68a5-4139-88ae-d4aeefce9c9f)



- เปิดใช้งาน Service account เพื่อใช้งาน Google Sheets API โดยกลับไปที่ Navigation menu -> IAM & Admin -> Servies account -> Create service account -> กรอก Service account name และกด done
![image](https://github.com/user-attachments/assets/66d62f9f-0cdd-4bce-bb0f-ca1f1be77d45)

- Download Service account credentials ลงเครื่องโดยกดที่ Service account email ที่หน้า Service account -> Keys -> Add key -> Create new key -> เลือก JSON Format -> Create และบันทึกไฟล์ลงเครื่อง

- เปิดไฟล์ Service account credentials และคัดลอกเนื้อหาไฟล์ทั้งหมดใส่ใน .env ของ backend ในตัวแปร `GOOGLE_APPLICATION_CREDENTIALS`

- ให้สิทธ์ Service account ในการอ่านข้อมูล Google sheets โดยการคัดลอก Service account email -> ไปยังหน้่า Google Sheets -> แชร์ -> เพิ่มสิทธิ์โดยการวาง Service account email -> กดส่ง

- copy Google Sheets ID โดยการเปิด Google Sheets ซึ่ง ID จะอยู่ที่ URL หลัง path d/

- นำ Google Sheets Id ใส่ใน .env ของ backend ในตัวแปร `GOOGLE_SHEET_ID`


# Download android studio และ emulator
ลิงก์สำหรับ Download android studio เพื่อใช้งาน emulator: https://developer.android.com/studio  
หลัง download android studio เสร็จแล้วนั้นให้ทำการ install emulator โดยแนะนำ emulator ที่มีขนาดหน้าจอ 1080 x 2400 เพื่อให้การแสดงผล UI เป็นไปอย่างเที่ยงตรงมากที่สุด




# Run project
หลังการ setup project เสร็จเรียบร้อยแล้วนั้นสามารถเริ่ม run project ได้โดย
- เริ่มการ run frontend ด้วยคำสั่ง `cd fronend` และ `npm run android` โดยต้องเปิด emulator ไว้ก่อนใช้งานคำสั่ง
- เริ่มการ run backend ด้วยคำสั่ง `cd backend` และ `npm run start:dev`
