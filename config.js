// Purr Beat · online settings
// วิธีตั้งค่าอยู่ใน SETUP-TH.md
//
// supabaseUrl      Supabase → Project Settings → Data API → Project URL
// supabaseAnonKey  Supabase → Project Settings → API Keys → anon (public) / publishable key
//                  key นี้ใส่ในหน้าเว็บได้ เพราะความปลอดภัยคุมด้วย Row Level Security ใน schema.sql
//                  ห้ามใส่ service_role / secret key ในไฟล์นี้เด็ดขาด
// emailDomain      ใช้แปลงชื่อผู้ใช้เป็นอีเมลภายใน (ไม่มีการส่งอีเมลจริง)
//                  ถ้าสมัครแล้วขึ้นว่าอีเมลไม่ถูกต้อง ให้ลองเปลี่ยนเป็นโดเมนอื่นตามคู่มือ
//
// ถ้าเว้น supabaseUrl หรือ supabaseAnonKey ว่างไว้ เกมจะเก็บอันดับไว้ในเครื่องที่เล่นเท่านั้น
window.PURR_CONFIG = {
  supabaseUrl: 'https://rpxutkhsdkzroxloxacn.supabase.co',
  supabaseAnonKey: 'sb_publishable_wPrDsl_ZzkP0TzJw1ehYZg_bX6inxaD',
  emailDomain: 'players.purrbeat.invalid'
};
