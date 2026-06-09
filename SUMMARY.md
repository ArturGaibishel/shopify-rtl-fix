# סיכום הפרויקט — RTL Fix for Luna Soul Store

## מה זה
תחליף חינמי לפלאגין Sense RTL ($7.75/חודש).
קובץ JS אחד שמטפל ב-RTL, פונט עברי ואיקוני תשלום.

---

## קבצים בפרויקט

| קובץ | מה זה |
|------|-------|
| `rtl-fix.js` | הקובץ הראשי — זה מה שמותקן באתר |
| `SUMMARY.md` | המדריך הזה |

---

## מה הקובץ עושה

- **RTL** — כיוון מימין לשמאל לכל האתר (`direction: rtl`)
- **פונט Rubik** — נטען מ-Google Fonts (חינמי)
- **סליידרים** — מוגנים מפני היפוך (`direction: ltr`)
- **עמוד מוצר** — רווח בין תמונה לטקסט
- **כפתור "קנה עכשיו"** — ממורכז עם JavaScript + MutationObserver
- **ניוזלטר בפוטר** — מיושר לימין
- **Brand information בפוטר** — תוקן overflow
- **איקוני תשלום בפוטר** — Visa, Mastercard, Apple Pay, Google Pay, Bit

---

## התקנה בשופיפיי

**שלב 1 — העלה קובץ:**
- Online Store → Themes → Edit code
- Assets → Add new asset → Create blank file → שם: `rtl-fix.js`
- העתק תוכן הקובץ מ-GitHub → הדבק → Save

**שלב 2 — הוסף לכל עמודים:**
- Layout → theme.liquid
- מעל `</body>` הוסף:
```liquid
<script src="{{ 'rtl-fix.js' | asset_url }}" defer></script>
```
- Save

---

## GitHub

**כתובת:** https://github.com/ArturGaibishel/shopify-rtl-fix

---

## בעיות שנפתרו בדרך

| בעיה | פתרון |
|------|-------|
| טקסט ממורכז נשבר | הסרנו `text-align: right` גורף |
| סליידרים הפוכים | הוספנו `direction: ltr` לסליידרים |
| כפתור קנה עכשיו מיושר ימין | JavaScript ישיר + MutationObserver |
| Brand info נחתך בפוטר | `overflow: visible` + `width: 100%` |
| ניוזלטר מיושר שמאל | `text-align: right` לסקשן הניוזלטר |

## בעיות שלא ניתן לפתור

| בעיה | סיבה |
|------|-------|
| תפריט מובייל נפתח מצד שמאל | Shopify חוסמת שינוי — CSS שבר את התפריט |

---

## תאריך התקנה
יוני 2026
