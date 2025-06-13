[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/w8H8oomW)
**<ins>Note</ins>: Students must update this `README.md` file to be an installation manual or a README file for their own CS403 projects.**

**รหัสโครงงาน:** ระบุรหัสโครงงานที่นี่ เช่น 67-1_02_ssr-r2

**ชื่อโครงงาน (ไทย):** ระบบจัดการงานแสดงของชุมนุมดนตรี คณะวิทยาศาสตร์และเทคโนโลยี

**Project Title (Eng):** SCI BAND MUSIC PERFORMANCE MANAGEMENT SYSTEM 

**อาจารย์ที่ปรึกษาโครงงาน:** ผศ. ดร. ทรงศักดิ์ รองวิริยะพานิช

**ผู้จัดทำโครงงาน:** 
1. นายณกลิน บุณยกะลิน  6409682660  nagalin.pun@dome.tu.ac.th
2. นายสันติภาพ สโมสร   6409680086  santiphap.sam@dome.tu.ac.th
   
# directory tree สำหรับ frontend
```
└── 📁frontend // โฟลเดอร์หลักของ frontend
    └── 📁.expo // โฟลเดอร์การตั้งค่า Expo
        └── devices.json // ข้อมูลอุปกรณ์ที่ใช้ทดสอบ
        └── README.md // เอกสารอธิบายการใช้งาน
        └── 📁types // โฟลเดอร์เก็บ type definitions
            └── router.d.ts // กำหนด type สำหรับ router
    └── 📁.maestro // โฟลเดอร์สำหรับการทดสอบ e2e
        └── e2e.yaml // ไฟล์การตั้งค่าการทดสอบ e2e
    └── 📁app // โฟลเดอร์หลักของแอพพลิเคชัน
        └── _layout.tsx // ไฟล์กำหนด root layout
        └── 📁(tabs) // โฟลเดอร์จัดการ tab navigation
            └── _layout.tsx // ไฟล์กำหนด layout ของ tabs
            └── 📁(stack) // โฟลเดอร์จัดการ stack navigation
                └── _layout.tsx // ไฟล์กำหนด layout ของ stack
                └── 📁event // โฟลเดอร์จัดการหน้างานแสดงดนตรี
                    └── _layout.tsx // ไฟล์กำหนด layout ของหน้า event
                    └── detail.tsx // หน้าแสดงรายละเอียดและอัปเดตงานแสดงดนตรี
                    └── index.tsx // หน้างานแสดงดนตรีทั้งหมด
                    └── run.tsx // หน้าจัดการการ run ของงานแสดงดนตรี
                └── 📁song // โฟลเดอร์จัดการหน้าเพลงของงานแสดงดนตรี
                    └── _layout.tsx // ไฟล์กำหนด layout ของหน้า song
                    └── assign-player.tsx // หน้า assign และดูข้อมูล player
                    └── create.tsx // หน้าสร้างเพลงใหม่
                    └── detail.tsx // หน้าแสดงรายละเอียดและอัปเดตเพลง
                    └── index.tsx // หน้าคิวเพลงของงานแสดงดนตรี
            └── 📁admin // โฟลเดอร์จัดการหน้า System admin
                └── account-config.tsx // หน้าตั้งค่าบัญชี
                └── transfer-privilege.tsx // หน้าโอนสิทธิ์
            └── main-menu.tsx // หน้าเมนูหลัก
            └── profile.tsx // หน้าโปรไฟล์ผู้ใช้
        └── index.tsx // หน้าหลักของแอพ
        └── login.tsx // หน้าเข้าสู่ระบบ
    └── 📁assets // โฟลเดอร์เก็บไฟล์ทรัพยากร
        └── 📁fonts // โฟลเดอร์เก็บฟอนต์
            └── SpaceMono-Regular.ttf // ฟอนต์ Space Mono
        └── 📁icons // โฟลเดอร์เก็บไอคอน
            └── calender.tsx // ไอคอนปฏิทิน
            └── clock.tsx // ไอคอนนาฬิกา
            └── close-square.tsx // ไอคอนปิด
            └── edit.tsx // ไอคอนแก้ไข
            └── list.tsx // ไอคอนรายการ
        └── 📁images // โฟลเดอร์เก็บรูปภาพ
            └── adaptive-icon.png // ไอคอนปรับขนาดอัตโนมัติ
            └── bg.jpg // รูปพื้นหลัง
            └── favicon.png // ไอคอนเว็บไซต์
            └── icon.png // ไอคอนแอพ
            └── music-bg.jpg // รูปพื้นหลังเพลง
            └── partial-react-logo.png // ล็อกโก้ React บางส่วน
            └── react-logo.png // ล็อกโก้ React
            └── react-logo@2x.png // ล็อกโก้ React ขนาด 2x
            └── react-logo@3x.png // ล็อกโก้ React ขนาด 3x
            └── sciband.PNG // รูป SciBand
            └── splash-icon.png // ไอคอนหน้า splash
    └── 📁components // โฟลเดอร์เก็บคอมโพเนนต์
        └── 📁admin // components สำหรับ system admin
            └── activate-account.tsx // component เปิดใช้งานบัญชี
            └── deactivate-account.tsx // component ปิดใช้งานบัญชี
            └── tranfer-admin.tsx // component โอนสิทธิ์แอดมิน
            └── use-activate-account.ts // hook เปิดใช้งานบัญชี
            └── use-deactivate-account.ts // hook ปิดใช้งานบัญชี
            └── use-transfer-admin.ts // hook โอนสิทธิ์แอดมิน
        └── 📁event // components เกี่ยวกับกิจกรรม
            └── card.tsx // การ์ดแสดงงานแสดงดนตรี
            └── event-action-buttons.tsx // ปุ่มดำเนินการงานแสดงดนตรี
            └── form.tsx // ฟอร์มสร้างและอัปเดตงานแสดงดนตรี
            └── modal.tsx // modal แสดงแบบฟอร์มงานแสดงดนตรี
            └── use-event-form.ts // hook ฟอร์มกิจกรรม
        └── 📁login // components เกี่ยวกับการเข้าสู่ระบบ
            └── login.tsx // components เข้าสู่ระบบ
            └── use-login.ts // hook การเข้าสู่ระบบ
        └── 📁player // components เกี่ยวกับผู้เล่น
            └── assigned-player-list.tsx // components สำหรับแแสดงรายชื่อ player ที่ถูก assigned ในเพลงนั้น ๆ
            └── unassigned-player-list.tsx // components สำหรับแแสดงรายชื่อ player ที่ั่ยังไม่ถูก assigned ในเพลงนั้น ๆ
            └── use-assign-player.ts // hook assign player
            └── use-unassign-player.ts // hook unassign player
        └── 📁profile // components เกี่ยวกับโปรไฟล์
            └── profile.tsx // component โปรไฟล์
        └── 📁run-event // components สำหรับหน้า run งานแสดงดนตรี
            └── header.tsx // ส่วนหัวของหน้า run event
            └── noti-modal.tsx // modal แจ้งเตือน player
            └── song-queue-run.tsx // คิวเพลงที่กำลังเล่น
            └── use-noti.ts // hook การแจ้งเตือนไปยัง Discord DM
        └── 📁song // components เกี่ยวกับเพลง
            └── card.tsx // การ์ดแสดงเพลง
            └── form.tsx // ฟอร์มสร้างและอัปเดตเพลง
            └── total-player-input.tsx // ช่องกรอกจำนวน player
            └── use-song-form.ts // hook ฟอร์มเพลง
        └── 📁ui // components reusable UI พื้นฐาน
            └── background.tsx // พื้นหลัง
            └── button.tsx // ปุ่ม
            └── form-controller.tsx // ตัวควบคุมฟอร์ม สำหรับ React Hook Form
            └── main-menu-card.tsx // การ์ดเมนูหลัก
            └── text-input.tsx // ช่องกรอกข้อความ
            └── text.tsx // ข้อความ
    └── 📁hooks // โฟลเดอร์เก็บ global custom hooks
        └── use-socket-query.ts // hook เชื่อมต่อ socket สำหรับระบบอัปเดตคิวเพลงแบบ real-time ขณะ run งานแสดงดนตรี 
        └── use-theme.ts // hook สำหรับจัดการธีมสีในระบบ
    └── 📁libs // โฟลเดอร์เก็บ library
        └── axios.ts // file config axios สำหรับยิง API
    └── 📁services // โฟลเดอร์เก็บ files service สำหรับยิง API
        └── event.service.ts // service สำหรับงานแสดงดนตรี
        └── song.service..ts // service สำหรับงานเพลง
        └── user.service.ts // service สำหรับผู้ใช้งาน
    └── 📁types // โฟลเดอร์เก็บ type definitions สำหรับ TypeScript
        └── event.d.ts // type definitions สำหรับงานแสดงดนตรี
        └── song.d.ts // type definitions สำหรับเพลง
        └── user.d.ts // type definitions สำหรับผู้ใช้งาน
    └── 📁utils // โฟลเดอร์เก็บฟังก์ชันช่วยเหลือขนาดเล็ก
        └── check-user-role.ts // ฟังก์ชันตรวจสอบบทบาทผู้ใช้
    └── 📁zustand // โฟลเดอร์จัดการ global state สำหรับ React Native
        └── store.ts // ไฟล์เก็บ global state โดยประกอบด้วย ID งานแสดงดนตรีปัจจุบัน, ID เพลงปัจจุบัน, player type ปัจจุบัน
    └── .env // ไฟล์เก็บตัวแปร config ต่าง ๆ เช่น API Keys
    └── .env.example // ตัวอยย่าง file .env
    └── app.json // การตั้งค่าแอพ Expo
    └── cache.ts // ไฟล์จัดการแคช
    └── expo-env.d.ts // TypeScript definitions สำหรับ Expo
    └── package-lock.json // ไฟล์ล็อคเวอร์ชัน dependencies
    └── package.json // การตั้งค่าและ dependencies ของโปรเจค
    └── README.md // เอกสารอธิบายโปรเจค
    └── tsconfig.json // การตั้งค่า TypeScript
```

# directory tree สำหรับ backend
```
└── 📁backend // โฟลเดอร์หลักของ backend
    └── 📁prisma // โฟลเดอร์จัดการฐานข้อมูล
        └── 📁migrations // โฟลเดอร์เก็บการเปลี่ยนแปลงฐานข้อมูล
            └── 📁20250613085135_init // การเปลี่ยนแปลงเริ่มต้น
                └── migration.sql // SQL สำหรับการเปลี่ยนแปลงฐานข้อมูล
            └── migration_lock.toml // ไฟล์ล็อคเวอร์ชันการเปลี่ยนแปลง
        └── schema.prisma // ไฟล์กำหนดโครงสร้างฐานข้อมูล
        └── seed.ts // ไฟล์สำหรับใส่ seed database
    └── 📁src // โฟลเดอร์เก็บ source code หลัก
        └── 📁admins // โฟลเดอร์จัดการ system admin
            └── admin.controller.ts // ตัวควบคุม system admin API
            └── admin.module.ts // system admin module
            └── admin.service.ts // service สำหรับ system admin
            └── 📁dto // โฟลเดอร์เก็บ Data Transfer Objects สำหรับ API
                └── transfer-admin.dto.ts // DTO สำหรับโอนสิทธิ์แอดมิน
            └── 📁swaggers // โฟลเดอร์เก็บเอกสาร API
                └── admin-swagger.ts // เอกสาร System admin API
        └── app.module.ts // module หลักของแอพพลิเคชัน
        └── 📁auth // โฟลเดอร์จัดการการยืนยันตัวตน
            └── auth.controller.ts // ตัวควบคุม API การยืนยันตัวตน
            └── auth.module.ts // module การยืนยันตัวตน
            └── auth.service.ts // service การยืนยันตัวตน
        └── 📁decorators // โฟลเดอร์เก็บ decorators ของ Nest.js
            └── api-responses.decorator.ts // decorator สำหรับ Swagger
        └── 📁discord // โฟลเดอร์จัดการ Discord
            └── discord.module.ts // module Discord
            └── discord.service.ts // service เกี่ยวกับ Discord
        └── 📁events // โฟลเดอร์จัดการงานแสดงดนตรี
            └── 📁dto // โฟลเดอร์เก็บ DTO
                └── create-update-event.dto.ts // DTO สำหรับสร้างและอัปเดตงานแสดงดนตรี
                └── get-current-song.dto.ts // DTO สำหรับดึงเพลงปัจจุบัน
                └── get-event.dto.ts // DTO สำหรับดึงข้อมูลงานแสดงดนตรี
            └── event.controller.ts // ตัวควบคุม API งานแสดงดนตรี
            └── event.module.ts // module งานแสดงดนตรี
            └── event.service.ts // service ของงานแสดงดนตรี
            └── 📁swaggers // โฟลเดอร์เก็บเอกสาร API
                └── event-swagger.ts // เอกสาร API งานแสดงดนตรี
        └── 📁exceptions // โฟลเดอร์จัดการ global exceptions
            └── custom-exception.ts // file custom exception ที่ใช้ภายในระบบ
        └── 📁filters // โฟลเดอร์เก็บ filters ของ Nest.js
            └── global-exception.filter.ts.ts // filter จัดการข้อผิดพลาดทั่วทั้งระบบ
        └── 📁google-sheets // โฟลเดอร์จัดการ Google Sheets
            └── google-sheets.module.ts // module Google Sheets
            └── google-sheets.service.ts // service ของ Google Sheets
        └── 📁guards // โฟลเดอร์เก็บ guards ของ NestJS สำหรับทำ Authorization
            └── admin.guard.ts // guard สำหรับ system admin
            └── backstage.guard.ts // guard สำหรับ backstage
        └── main.ts // ไฟล์เริ่มต้นแอพพลิเคชัน
        └── 📁middlewares // โฟลเดอร์เก็บ middlewares
            └── auth.middleware.ts // middleware สำหรับยืนยันตัวตนผู้ใช้งานเพื่อป้องกันการเข้าถึง API จากผู้ใช้ที่ไม่ผ่านการยืนยันตัวตน
        └── 📁players // โฟลเดอร์จัดการ player
            └── 📁dto // โฟลเดอร์เก็บ DTO
                └── get-player.dto.ts // DTO สำหรับดึงข้อมูล player
                └── player.dto.ts // DTO สำหรับplayer
            └── player.controller.ts // ตัวควบคุม API player
            └── player.module.ts // module player
            └── player.service.ts // service ของ player
            └── 📁swaggers // โฟลเดอร์เก็บเอกสาร API
                └── player-swagger.ts // เอกสาร API ของ player
        └── prisma.service.ts // service ของ Prisma
        └── 📁songs // โฟลเดอร์จัดการเพลง
            └── 📁dto // โฟลเดอร์เก็บ DTO
                └── create-update-song.dto.ts // DTO สำหรับสร้างและอัปเดตเพลง
                └── reorder-song.dto.ts // DTO สำหรับจัดลำดับเพลงใหม่
                └── song.dto.ts // DTO สำหรับเพลง
            └── song.controller.ts // ตัวควบคุม API เพลง
            └── song.module.ts // module เพลง
            └── song.service.ts // service ของเพลง
            └── 📁swaggers // โฟลเดอร์เก็บเอกสาร API
                └── song-swagger.ts // เอกสาร API เพลง
        └── 📁types // โฟลเดอร์เก็บ type definitions
            └── express.d.ts // type definitions สำหรับ Express
        └── 📁users // โฟลเดอร์จัดการผู้ใช้
            └── 📁dto // โฟลเดอร์เก็บ DTO
                └── get-user.dto.ts // DTO สำหรับดึงข้อมูลผู้ใช้
            └── 📁swaggers // โฟลเดอร์เก็บเอกสาร API
                └── user-swagger.ts // เอกสาร API ผู้ใช้
            └── user.controller.ts // ตัวควบคุม API ผู้ใช้
            └── user.module.ts // moduleผู้ใช้
            └── user.service.ts // บริการผู้ใช้
        └── 📁web-sockets // โฟลเดอร์จัดการ WebSocket
            └── event.gateway.ts // gateway สำหรับงานแสดงดนตรี
            └── websockets.module.ts // module WebSocket
    └── .env // ไฟล์เก็บค่า config ต่าง ๆ เช่น API Keys
    └── .env.example // ตัวอย่างไฟล์ .env
    └── .eslintrc.js // การตั้งค่า ESLint
    └── .prettierrc // การตั้งค่า Prettier
    └── nest-cli.json // การตั้งค่า NestJS CLI
    └── package-lock.json // ไฟล์ล็อคเวอร์ชัน dependencies
    └── package.json // การตั้งค่าและ dependencies ของโปรเจค
    └── README.md // เอกสารอธิบายโปรเจค
    └── tsconfig.build.json // การตั้งค่า TypeScript สำหรับการ build
    └── tsconfig.json // การตั้งค่า TypeScript
```


# ระบบจัดการงานแสดงของชุมนุมดนตรี คณะวิทยาศาสตร์และเทคโนโลยี
- เป็นแอปพลิเคชันช่วยในการแก้ไขปัญหาเรื่องการสับสนระหว่างการขึ้นแสดง ผู้เล่นไม่รู้คิวของตัวเอง
- เป็นแอปพลิเคชันช่วยในการจัดการปัญหาเรื่องกลุ่ม line ที่เยอะและมีจำนวนมากในแต่ละงาน
- ใช้เทคโนโลยีหลักๆคือ Reac Native, NestJS และ PostgreSQL พร้อมระบบแจ้งเตือนผ่าน แอปพลิเคชัน Discord
  ![Image](https://github.com/user-attachments/assets/888824ec-47ed-4042-8937-84b41d066106)
  
# วิธี clone repository
- คัดลอกลิงก์ URL ของ git โดยใช้เป็น https

  
  ![Image](https://github.com/user-attachments/assets/424be6a2-b257-4d73-9920-f143eff48274)
- สร้างโฟลเดอร์ไว้สักที่นึงเพื่อรองรับ code ที่จะใช้คำสั่ง `git clone`
- เปิด cmd หรือ Command Prompt ให้ set path ให้ตรงกับที่โฟลเดอร์ได้สร้างเอาไว้ และใช้คำสั่ง `git clone https://github.com/ComSciThammasatU/2567-2-cs403-final-submission-67-1_02_ssr-r2.git ตามด้วยชื่อ โฟลเดอร์` เป็นอันเสร็จสมบูรณ์
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
  
# การ set ค่าไฟล์ .env ของ PostgreSQL และ Discord
- เข้าไปที่โฟลเดอร์ backend
- คลิกขวาที่โฟลเดอร์ backend -> เลือก `New File` -> ตั้งชื่อว่า `.env`
  ![Image](https://github.com/user-attachments/assets/4dc10854-6fce-417c-8363-26ed5cafc4af)
- ทำการ copy file .env.exmple ลงไปในไฟล์ .env ที่สร้างขึ้น ในรูปคือไฟล์ .env.example
  ![Image](https://github.com/user-attachments/assets/e03c1ded-c9c5-414d-875b-6b193715194e)
  ทำการ copy ลงไปใน .env ดังรูป
  ![Image](https://github.com/user-attachments/assets/1df70269-127c-431b-a169-88243948df70)
- ตั้งค่าฐานข้อมูลให้ถูกต้องตามการตั้งค่าของผู้ใช้งาน ในตัวแปล `DATABASE_URL`
- ทำการใส่ Discord user ID และ Discord Username ในตัวแปล `SEED_DISCORD_ID` กับ `SEED_DISCORD_USERNAME` ตามลำดับ เพื่อ ใช้เพื่อระบุตัวตนในการข้าใช้งานระบบ

  
 ![image](https://github.com/user-attachments/assets/ab1bd4ba-863e-4502-a483-38b5845693a4)

  
  **ระบบของเราออกแบบให้คนที่เป็นสมาชิกชมรมเท่านั้นที่สามารถใช้งานได้ เลยต้องทำการยืนยันตัวตนผ่าน Discord ID และ Discord Username**
- ใส่ discord server ID ในที่นี้ได้ทำการสร้าง server ให้ผู้ใช้งานคัดลอก ID จากตรงนี้ `1325140885666791495` ซึ่งหน้าตา server จะเป็นในรูปแบบนี้ นำไปใส่ในตัวแปร `DISCORD_SERVER_ID`
  ลิงก์สำหรับเข้าร่วม Discord server: https://discord.gg/xD3bBn4Xc7
  ![Image](https://github.com/user-attachments/assets/c89e1e48-b103-4cbc-94b0-60f6d73d83c8)


**ในส่วนของ frontend ให้ทำขั้นตอนเหมือน backend เพื่อเตรียมทำในขั้นตอนถัดไป**
-คลิกขวาที่โฟลเดอร์ frontend -> เลือก `New File` -> ตั้งชื่อว่า `.env`


![Image](https://github.com/user-attachments/assets/117aaf58-6a7a-454a-9a2b-696c8a278573)
- ทำการ copy file .env.exmple ลงไปในไฟล์ .env ที่สร้างขึ้น ในรูปคือไฟล์ .env.example


![Image](https://github.com/user-attachments/assets/b776f4c3-2445-47c4-9965-45a72f7f3e2d)
ทำการ copy ลงไปใน .env ดังรูป


![Image](https://github.com/user-attachments/assets/296504fe-8aae-4e0a-b36f-5ea1084b9d25)

   
# วิธีติดตั้ง dependencies และ setup ฐานข้อมูล
- ติดตั้ง dependencies สำหรับ frontend ด้วยคำสั่ง `cd frontend` และ `npm install`
- ติดตั้ง dependencies สำหรับ backend ด้วยคำสั่ง `cd backend` และ `npm install`
- ทำ Database migration ด้วยคำสั่ง `npx prisma migrate dev --name init` ภายใต้ folder backend
- seed ข้อมูล user ใน database ด้วยคำสั่ง `npx prisma db seed` ภายใต้ folder backend เพื่อให้สามารถ login เข้าสู่ระบบได้ โดยคำสั่งนี้จะเพิ่มข้อมูล Discord username และ Discord Id ที่ได้ใส่ไว้ใน .env ของ frontend เข้าสู่ฐานข้อมูลและกำหนดสิทธิ์ให้เป็น Backstage และ System admin เพื่อความสะดวกในการใช้งานในตอนต้น



# การ Setup Clerk API, Discord API และ Discord bot
ลิงก์สำหรับ Clerk Dashboard: https://dashboard.clerk.com  
ลิงก์สำหรับ Discord Developer Protal: https://discord.com/developers/applications
- Setup Clerk และ Discord API ตามคู่มือ: https://clerk.com/docs/authentication/social-connections/discord  


- เพิ่ม API keys เข้าสู่ระบบ โดยเข้าสู่ Clerk Dashboard → Configure → Developers → API Keys
  ![image](https://github.com/user-attachments/assets/ea81884f-3395-429b-906c-007ba9edc81e)


- Copy Public key ใส่ในไฟล์ .env ของ frontend ในตัวแปร   `EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY` 

- Copy Secret key → ใส่ใน .env ของ backend ในตัวแปร `CLERK_SECRET_KEY`

- Copy JWKS Public key ใส่ใน .env ของ backend ในตัวแปร `CLERK_JWT_PUBLIC_KEY`

- Copy Discord bot token โดยไปที่ Discord Developer Protal เลือกหัวข้อ Bot ใน Discord Developer Portal → คัดลอก Token → วางในไฟล์ .env ของ backend ที่ DISCORD_BOT_TOKEN
  ![image](https://github.com/user-attachments/assets/db6866ba-7746-4871-985b-84dd733a078d)
- ติ๊กถูกในช่อง PRESENSE INTENT, SERVER MEMBRES INTENT, MESSAGE CONTENT INTENT เพื่อให้ Discord bot สามารถจัดการผู้ใช้ภายใน Server ได้ และกด Save Changes
  ![image](https://github.com/user-attachments/assets/c479f0f9-a4fe-45db-b925-89bd7a1beccb)

- เพิ่ม Discord bot เข้าสู่ Discord Server โดยไปที่ OAuth2 → OAuth2 URL Generator → เลือก Scope เป็น "Bot"
![image](https://github.com/user-attachments/assets/5e0d9144-cf05-498f-9d01-bc49dec02801)

- ในหัวข้อ Bot Permissions เลือก Administrator 
  ![image](https://github.com/user-attachments/assets/0bb36dcc-e002-418a-879b-06235b993536)

- คัดลอกลิงก์ที่ได้ → เปิดลิงก์ → เพิ่ม Bot เข้าเซิร์ฟเวอร์ Sci Band

  ![image](https://github.com/user-attachments/assets/e93a32dc-aab0-484d-a83b-f46bb261198e)
  ![image](https://github.com/user-attachments/assets/30450af7-ea4f-4089-b952-2b225a862719)



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
  ![image](https://github.com/user-attachments/assets/30456cd7-c7aa-4d39-9af7-f394a056bbec)


- เปิดไฟล์ Service account credentials และคัดลอกเนื้อหาไฟล์ทั้งหมดใส่ใน .env ของ backend ในตัวแปร `GOOGLE_APPLICATION_CREDENTIALS`

- ให้สิทธ์ Service account ในการอ่านข้อมูล Google Sheets โดยการคัดลอก Service account email -> ไปยังหน้่า Google Sheets -> แชร์ -> เพิ่มสิทธิ์โดยการวาง Service account email -> กดส่ง
  ![image](https://github.com/user-attachments/assets/a717c5ef-b0cc-4a8c-b33a-a3e6bb3f68f5)


- copy Google Sheets ID ซึ่ง ID จะอยู่ที่ URL หลัง path d/
  ![image](https://github.com/user-attachments/assets/4161d417-f60c-4f63-acb7-d5f0e3c901d9)


- นำ Google Sheets Id ใส่ใน .env ของ backend ในตัวแปร `GOOGLE_SHEET_ID`

# การ Setup IPv4 เพื่อเชื่อม frontend และ backend
เนื่องจาก frontend run อยู่บน emulator และ backend run อยู่บนเครื่องของเรา จึงเปรียบเสมือนกับ frontend และ backend นั้น run อยู่บนคนละเครื่องกัน frontend จึงต้องรู้ที่อยู่ IPv4 ของ backend โดยการเปิด terminal และใช้คำสั่น `ipconfig`
จากนั้นทำการ Coy ค่า IPv4 ตามรูป
![image](https://github.com/user-attachments/assets/87654e7f-6e89-4a27-9f3d-d6428eb5544c)
นำค่าที่ได้ใส่ไปยังไฟล์ .env ของ frontend ในตัวแปร `EXPO_PUBLIC_API_BASE_URL` ดังรูป
![image](https://github.com/user-attachments/assets/6d3e0640-669f-4698-be3d-684bb068202d)



# Download android studio และ emulator
- ลิงก์สำหรับ Download android studio เพื่อใช้งาน emulator: https://developer.android.com/studio  
- หลัง download android studio เสร็จแล้วนั้นให้ทำการ install emulator โดยการเลือก Device manager ทางด้านขวา -> + -> Create Virtual Device
  ![image](https://github.com/user-attachments/assets/47186ab8-3c4f-4cf8-b10c-1efcca19df10)

-  เลือก Medium Phone หรือ emulator ที่มีขนาดหน้าจอเท่ากับหรือใกล้เคียง 1080 x 2400 pixels เพื่อให้การแสดงผล UI เป็นไปอย่างเที่ยงตรงมากที่สุด -> Next -> Finish
  ![image](https://github.com/user-attachments/assets/68fd13e4-2873-42c7-8e0f-ee7f6bfff01d)

- Run emulator โดยการกดไอคอน ▷ โดยการ Run ครั้งแรกจะใช้เวลานานกว่าปกติ
  ![image](https://github.com/user-attachments/assets/f373abaa-1321-4278-af3b-6c5482ef6de4)






# Run project
หลังการ setup project เสร็จเรียบร้อยแล้วนั้นสามารถเริ่ม run project ได้โดย
- เริ่มการ run frontend ด้วยคำสั่ง `cd fronend` และ `npm run android` โดยต้องเปิด emulator ไว้ก่อนใช้งานคำสั่งเท่านั้น โดการ Run ครั้งแรกจะใช้เวลานานกว่าปกติ โดยหลัง run เสร็จตัว App จะเปิดขึ้นมาดังภาพ
  ![image](https://github.com/user-attachments/assets/3a7b9fb7-8a94-450a-99c6-4a6a6cca9e13)

- เริ่มการ run backend ด้วยคำสั่ง `cd backend` และ `npm run start:dev` และรอการ compile โดยหลัง comiple เสร็จแล้วนั้นจะเป็นดังรูป
  ![image](https://github.com/user-attachments/assets/369994ef-7545-4abc-8dcb-45e5514935fd)

- จากนั้นจึงกลับมาที่ emulator และทำการ login ด้วย Discord account ที่ได้ seed ไว้ใน database หากทำถูกต้องจะปรากฏหน้า Main menu ดังรูป
  ![image](https://github.com/user-attachments/assets/5aea30cc-4e35-4ff6-bfe5-44664b79d637)


