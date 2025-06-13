[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/w8H8oomW)
**<ins>Note</ins>: Students must update this `README.md` file to be an installation manual or a README file for their own CS403 projects.**

**รหัสโครงงาน:** ระบุรหัสโครงงานที่นี่ เช่น 67-1_02_ssr-r2

**ชื่อโครงงาน (ไทย):** ระบบจัดการงานแสดงของชุมนุมดนตรี คณะวิทยาศาสตร์และเทคโนโลยี

**Project Title (Eng):** SCI BAND MUSIC PERFORMANCE MANAGEMENT SYSTEM 

**อาจารย์ที่ปรึกษาโครงงาน:** ผศ. ดร. ทรงศักดิ์ รองวิริยะพานิช

**ผู้จัดทำโครงงาน:** 
1. นายณกลิน บุณยกะลิน  6409682660  nagalin.pun@dome.tu.ac.th
2. นายสันติภาพ สโมสร   6409680086  santiphap.sam@dome.tu.ac.th
   
Manual / Instructions for your projects starts here !
# ระบบจัดการงานแสดงของชุมนุมดนตรี คณะวิทยาศาสตร์และเทคโนโลยี
- เป็นแอปพลิเคชันช่วยในการแก้ไขปัญหาเรื่องการสับสนระหว่างการขึ้นแสดง ผู้เล่นไม่รู้คิวของตัวเอง
- เป็นแอปพลิเคชันช่วยในการจัดการปัญหาเรื่องกลุ่ม line ที่เยอะและมีจำนวนมากในแต่ละงาน
- ใช้เทคโนโลยีหลักๆคือ Reac Native, NestJS และ PostgreSQL พร้อมระบบแจ้งเตือนผ่าน แอปพลิเคชัน Discord
  ![Image](https://github.com/user-attachments/assets/888824ec-47ed-4042-8937-84b41d066106)
  
# วิธี clone repository
- คัดลอกลิงก์ URL ของ git โดยใช้เป็น https

  
  ![Image](https://github.com/user-attachments/assets/424be6a2-b257-4d73-9920-f143eff48274)
- สร้างโฟลเดอร์ไว้สักที่นึงเพื่อรองรับ code ที่จะใช้คำสั่ง `git clone`
- เปิด cmd หรือ Command Prompt ให้ set path ให้ตรงกับที่โฟลเดอร์ได้สร้างเอาไว้ และใช้คำสั่ง `git clone --URL ของ github-- ตามด้วยชื่อ โฟลเดอร์` เป็นอันเสร็จสมบูรณ์
  ![Image](https://github.com/user-attachments/assets/8b559109-66bb-42db-af4d-d123e53aab68)
  
# การติดตั้งเครื่องมือต่างๆเพื่อใช้งาน
- ติดตั้ง node.js ***ใข้เวอร์ชั่น 22.14 กันกรณีมีปัญหาหรือเกิดบัคได้*** 
  ลิงก์สำหรับดาวน์โหลด node.js version 22.14: https://nodejs.org/en/blog/release/v22.14.0
  ![Image](https://github.com/user-attachments/assets/7de45923-c4dc-4d0e-bd2f-be8e87aad314)
  
  ตรวจสอบว่าใช้งานได้หรือไม่ด้วยคำสั่ง node -v และ npm -v ถ้าใช้งานได้จะขึ้นตามรูปข้างต้น
  ![Image](https://github.com/user-attachments/assets/44dedf99-68e9-41b8-ae7a-5bb922108c9b)
  
- ติดตั้ง Discord ทำการสมัครถ้ายังไม่มี account และทำการตั้งค่า โหมดของผู้พัฒนา `ตั้งค่า -> ขั้นสูง(Advanced) -> เปิดโหมดผู้พัฒนา (Developer mode)`
  ลิงก์สำหรับดาวน์โหลด Discord: https://discord.com/download
  ![Image](https://github.com/user-attachments/assets/a8391847-a378-46b7-a425-b4d573881175)
  
- ลิงก์สำหรับดาวน์โหลด PostgreSQL ทุกเวอร์ชั่น: https://www.enterprisedb.com/downloads/postgres-postgresql-downloads 
  ติดตั้ง PostgreSQL ใช้เวอร์ชั่น 17.5 หรือล่าสุดก็ได้และทำการตั้งค่า password และเปิด pgadmin4 และทำการล็อคอินตามที่ได้ตั้งค่าเอาไว้ จะได้ในลักษณะแบบนี้
  ![Image](https://github.com/user-attachments/assets/6176b696-2250-48c1-8b19-ff3c0baff63d)
  
# การ set ค่าไฟล์ .env ของ postgresql และ discord
- เข้าไปที่โฟลเดอร์ backend
- คลิกขวาที่โฟลเดอร์ backend -> เลือก 'New File' -> ตั้งชื่อว่า '.env'
  ![Image](https://github.com/user-attachments/assets/4dc10854-6fce-417c-8363-26ed5cafc4af)
- ทำการ copy file .env.exmple ลงไปในไฟล์ .env ที่สร้างขึ้น ในรูปคือไฟล์ .env.example
  ![Image](https://github.com/user-attachments/assets/e03c1ded-c9c5-414d-875b-6b193715194e)
  ทำการ copy ลงไปใน .env ดังรูป
  ![Image](https://github.com/user-attachments/assets/1df70269-127c-431b-a169-88243948df70)
- ตั้งค่าฐานข้อมูลให้ถูกต้องตามการตั้งค่าของผู้ใช้งาน ในตัวแปล `DATABASE_URL`
- ทำการใส่ Discord user ID และ Discord Username ในตัวแปล `SEED_DISCORD_ID` กับ `SEED_DISCORD_USERNAME` ตามลำดับ เพื่อ ใช้เพื่อระบุตัวตนในการข้าใช้งานระบบ

  
  ![Image](https://github.com/user-attachments/assets/6f550047-aafa-453e-9ab1-b2967fd6dde6)

  
  **ระบบของเราออกแบบให้คนที่เป็นสมาชิกชมรมเท่านั้นที่สามารถใช้งานได้ เลยต้องทำการยืนยันตัวตนผ่าน Discord ID และ Discord Username**
- ใส่ discord server ID ในที่นี้ได้ทำการสร้าง server ให้ผู้ใช้งานคัดลอก ID จากตรงนี้ `1325140885666791495` ซึ่งหน้าตา server จะเป็นในรูปแบบนี้ นำไปใส่ในตัวแปร `DISCORD_SERVER_ID`
  ลิงก์สำหรับเข้าร่วม Discord server: https://discord.gg/xD3bBn4Xc7
  ![Image](https://github.com/user-attachments/assets/c89e1e48-b103-4cbc-94b0-60f6d73d83c8)
   
# วิธีติดตั้ง dependencies และ setup ฐานข้อมูล
- ติดตั้ง dependencies สำหรับ frontend ด้วยคำสั่ง `cd frontend` และ `npm install`
- ติดตั้ง dependencies สำหรับ backend ด้วยคำสั่ง `cd backend` และ `npm install`
- ทำ Database migration ด้วยคำสั่ง `npx prisma migrate dev -name init` ภายใต้ folder backend
- seed ข้อมูล user ใน database ด้วยคำสั่ง `npx prisma db seed` ภายใต้ folder backend เพื่อให้สามารถ login เข้าสู่ระบบได้



# การ Setup Clerk API, Discord API และ Discord bot
ลิงก์สำหรับ Clerk Dashboard: https://dashboard.clerk.com  
ลิงก์สำหรับ Discord Developer Protal: https://discord.com/developers/applications
- Setup Clerk และ Discord API ตามคู่มือ: https://clerk.com/docs/authentication/social-connections/discord  


- เพิ่ม API keys เข้าสู่ระบบ โดยเข้าสู่ Clerk Dashboard → Configure → Developers → API Keys
  ![image](https://github.com/user-attachments/assets/ea81884f-3395-429b-906c-007ba9edc81e)


- Copy Public key ใส่ในไฟล์ .env ของ frontend ในตัวแปร   `EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY` 

- Copy Secret key → ใส่ใน .env ของ backend ในตัวแปร `CLERK_SECRET_KEY`

- Copy JWKS Public key ใส่ใน .env ของ backend ในตัวแปร `CLERK_JWT_PUBLIC_KEY`

- Copy Discord bot token เข้าสู่ระบบ โดยเลือกหัวข้อ Bot ใน Discord Developer Portal → คัดลอก Token → วางในไฟล์ .env ของ backend ที่ DISCORD_BOT_TOKEN
  ![image](https://github.com/user-attachments/assets/db6866ba-7746-4871-985b-84dd733a078d)
- ติ๊กถูกในช่อง Presence Intent, Server Members Intent, Message Content Intent เพื่อให้ Discord bot สามารถจัดการผู้ใช้ภายใน Server ได้ และกด Save Changes
  ![image](https://github.com/user-attachments/assets/c479f0f9-a4fe-45db-b925-89bd7a1beccb)

- เพิ่ม Discord bot เข้าสู่ Discord Server โดยไปที่ OAuth2 → OAuth2 URL Generator → เลือก Scope เป็น "Bot"
![image](https://github.com/user-attachments/assets/5e0d9144-cf05-498f-9d01-bc49dec02801)

- ในหัวข้อ Bot Permissions เลือก Administrator 
  ![image](https://github.com/user-attachments/assets/0bb36dcc-e002-418a-879b-06235b993536)

- คัดลอกลิงก์ที่ได้ → เปิดลิงก์ → เพิ่ม Bot เข้าเซิร์ฟเวอร์ Sci Band

  ![image](https://github.com/user-attachments/assets/e93a32dc-aab0-484d-a83b-f46bb261198e)


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
