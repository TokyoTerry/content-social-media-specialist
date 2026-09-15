# TABLEAU COMPLETE HANDBOOK
## Terry Tobas Career Analysis Dashboard
**Date Created:** September 4, 2026  
**Status:** Ready to Use

---

## TABLE OF CONTENTS
1. Overview
2. File Setup
3. Step-by-Step Tableau Connection
4. Creating Visualizations
5. Troubleshooting Common Issues
6. Best Practices
7. Next Steps

---

## 1. OVERVIEW

**What:** Interactive career data visualization showing 26 employment roles across 20 years
**Why:** Transforms employment data into charts for job applications, interviews, salary negotiation
**Where:** Tableau (Public or Desktop)
**Data Source:** Terry_Tobas_Employment_Data.xls (clean, formatted Excel file)

**Key Metrics to Visualize:**
- Industries (9 total): Education dominates 52.33 years, 3,355 students trained
- Role Types (7 types): Trainer/Instructor = 13 roles, 2,405 students, 100 staff managed
- Employment Types (8 types): 60% part-time concurrent (demonstrates multi-tasking)

---

## 2. FILE SETUP

### **Files in D:\Resumes:**

#### **PRIMARY (Use These):**
- `Terry_Tobas_Employment_Data.xls` — **MAIN FILE** (clean Excel with Industry pivot)
  - Contains: Industry, Count of Roles, Sum of Years, Students Trained, Employees Managed, Average Years Per Role
  - 10 rows (9 industries + TOTAL)
  - Ready for Tableau

- `Terry_Tobas_Work_History.csv` — Raw employment data (26 roles)
  - Contains: Company, Job Title, Location, Start Date, End Date, Years, Industry, etc.
  - For detailed analysis if needed

- `Terry_Tobas_Analysis_Data.csv` — Clean pivot results (CSV format)
  - Same as .xls but in CSV format
  - Use if Excel file has issues

#### **REFERENCE (Documentation):**
- `TABLEAU_COMPLETE_HANDBOOK.md` — This file
- `CREATE_EXCEL_WORKBOOK.txt` — Old instructions (reference only)

### **File Naming Clarity:**
| File | Purpose | Status |
|---|---|---|
| Terry_Tobas_Employment_Data.xls | **CURRENT: Use this** | ✓ Ready |
| Terry_Tobas_Analysis_Data.csv | Backup/Reference | ✓ Clean |
| Terry_Tobas_Analysis_Data.xls | Old (messy) | ✗ Don't use |
| Terry_Tobas_Career_Analysis.xlsx | Never existed | ✗ Ignore |
| Terry_Tobas_Work_History.csv | Raw data | ✓ Available |

---

## 3. STEP-BY-STEP TABLEAU CONNECTION

### **INSTALL TABLEAU (First Time Only)**
1. Go to https://public.tableau.com
2. Click "Sign Up" (free account)
3. Download "Tableau Public" desktop app
4. Install and launch

### **CONNECT YOUR DATA**

#### **Method A: Load Employment_Data.xls (RECOMMENDED)**
1. Open **Tableau Public**
2. Click **Connect to Data** (or File → New Data Source)
3. Select **Microsoft Excel**
4. Navigate to: `D:\Resumes\Terry_Tobas_Employment_Data.xls`
5. Click **Open**
6. Verify sheet shows: "Terry_Tobas_Analysis_Data" with clean columns
7. Click **"Sheet 1"** or **"Start Analysis"**

#### **Method B: Load Analysis_Data.csv (If Excel Fails)**
1. Open **Tableau Public**
2. Click **Connect to Data**
3. Select **Text File** (CSV)
4. Navigate to: `D:\Resumes\Terry_Tobas_Analysis_Data.csv`
5. Click **Open**
6. Verify 6 fields, 10 rows
7. Click **"Start Analysis"**

### **VERIFY DATA LOADED**
Left panel should show clean field names:
- ✓ Industry
- ✓ Count of Roles
- ✓ Sum of Years
- ✓ Students Trained
- ✓ Employees Managed
- ✓ Average Years Per Role

If you see **F10, F2, F3** → You have the old file. Start over with correct file.

---

## 4. CREATING VISUALIZATIONS

### **CHART 1: Industry Breakdown (PIE CHART)**

**What it shows:** Which industries consumed your career (Education dominates)

**Steps:**
1. **Worksheet** → **New Worksheet**
2. Left panel → Drag **Industry** → Center canvas (Rows)
3. Left panel → Drag **Count of Roles** → Center canvas (Values)
4. Automatic bar chart appears
5. Click chart type icon (bottom-left) → **Pie Chart**
6. **Result:** Pie slices showing Education (42%), Technology (19%), Content (15%), etc.

**Customize:**
- Right-click chart → **Edit Title** → "Career Distribution by Industry"
- Click **Color** → Assign colors (Education=blue, Technology=orange, etc.)
- Add **Data Labels** (show percentages)

---

### **CHART 2: Role Type Impact (BAR CHART)**

**What it shows:** Which role types trained the most students (Trainer/Instructor dominates)

**Steps:**
1. **Worksheet** → **New Worksheet**
2. Drag **Role Category** (if available) or recreate manually:
   - Drag **Industry** → Rows (temporary)
   - Then replace with custom data entry
3. **Alternative:** Create new data source with Role Type pivot
4. Drag **Students Trained** → Values
5. Drag **Sum of Years** → Size (bubble size = years invested)
6. **Result:** Bars sorted by impact, bubble size shows experience

**Customize:**
- Sort descending (largest bars first)
- Title: "Role Categories: Impact vs. Experience"
- Add filter: Employment Type (toggle full-time/part-time only)

---

### **CHART 3: Timeline (LINE CHART)**

**What it shows:** Career progression over 20 years

**Note:** Requires Timeline data from Terry_Tobas_Analysis_Data.csv  
**If available:**
1. Create new data source with Timeline sheet
2. Drag **Year** → Columns
3. Drag **Industry** → Rows
4. Drag **Count** → Values
5. Click line chart type
6. **Result:** 9 lines showing industry trends 1997-2026

---

### **CREATE A DASHBOARD (Combine Charts)**

1. **Dashboard** → **New Dashboard**
2. Name: "Terry Tobas Career Overview"
3. Drag your 3 charts onto dashboard canvas
4. Arrange: Top-left (Pie), Top-right (Bar), Bottom (Timeline)
5. Add title: "Career Impact: 20 Years, 3,510+ Trained, 9 Industries"
6. **Optional:** Make Pie chart a filter (click pie slice → all other charts update)

---

## 5. TROUBLESHOOTING COMMON ISSUES

### **Problem: "F10, F2, F3" column names appear**
**Cause:** Connected to old messy Analysis_Data file  
**Solution:**
1. Data → Remove current connection
2. Data → New Data Source
3. Open: `D:\Resumes\Terry_Tobas_Employment_Data.xls`
4. Try again

### **Problem: "Cannot expand" or "Cannot delete sheet"**
**Cause:** Trying to delete the last worksheet, or sheet is locked to data source  
**Solution:**
1. Create NEW worksheet first (Worksheet → New)
2. Then delete the old sheet (right-click tab → Delete)

### **Problem: Chart won't appear when dragging fields**
**Cause:** Data source not connected properly  
**Solution:**
1. Check left panel: Do you see field names (Industry, Students Trained)?
2. If blank: Re-connect data source (Data → New Data Source)
3. Drag fields to center canvas (not to Marks area)

### **Problem: "Sheet 1" appears empty**
**Cause:** You're in Data Source view, not Worksheet view  
**Solution:**
1. Look for "Go to Worksheet" button (bottom-left)
2. Click it to enter visualization mode
3. Now center canvas should say "Drop field here"

### **Problem: Old data shows in Marks area**
**Cause:** Worksheet connected to old data source  
**Solution:**
1. Right-click in Marks area → Clear
2. Or create new Worksheet (starts fresh)

---

## 6. BEST PRACTICES

### **File Management**
- **Always use:** `Terry_Tobas_Employment_Data.xls`
- **Never use:** Old Analysis_Data files with F2, F3, etc.
- **Backup:** Keep `Terry_Tobas_Work_History.csv` (raw data)

### **Visualization Tips**
- **Pie Charts:** Best for showing percentages (Industry breakdown)
- **Bar Charts:** Best for comparing values (Role Type impact)
- **Line Charts:** Best for trends over time (Timeline)
- **Filters:** Add filters to make dashboards interactive (click to filter)

### **Naming Conventions**
- Chart titles should describe what they show (not "Chart 1")
- Example: "Education: 52 Years, 3,355 Students Trained"
- Dashboard title shows the big picture: "Career Impact Dashboard"

### **Color Scheme**
- **Education:** Blue (largest, represents foundation)
- **Technology:** Orange (growing area)
- **Content:** Green (secondary focus)
- **Other:** Gray or neutral

### **Sharing & Publishing**
- **Tableau Public:** File → Save to Tableau Public
- **Creates public URL:** Anyone can view (no login needed)
- **LinkedIn:** Post the URL with caption "My 20-year career visualized"
- **Interviews:** Screenshot charts or share link

---

## 7. NEXT STEPS

### **Immediate (This Week)**
1. ✓ Open Tableau Public
2. ✓ Connect to `Terry_Tobas_Employment_Data.xls`
3. ✓ Create Industry pie chart
4. ✓ Create Role Type bar chart
5. ✓ Combine into dashboard

### **Short Term (This Month)**
1. Publish dashboard to Tableau Public
2. Get public URL
3. Share on LinkedIn with career summary
4. Use in interview preparation (show recruiter)
5. Reference in cover letters ("Interactive career dashboard available at...")

### **Long Term (Career Use)**
1. **Job Applications:** "3,355 students trained in education roles"
2. **Salary Negotiation:** "100+ staff managed, 17+ years tenure at single employer"
3. **Career Planning:** Filter by "Technology" to see growth area
4. **Resume Enhancement:** Add "Data visualization portfolio: [URL]" showing tech skills

### **Advanced (Optional)**
1. Create separate Tableau workbook for each industry (Education-focused, Tech-focused, Content-focused)
2. Add interactivity: Click filter to show only relevant roles for each job application
3. Include Timeline chart showing career progression
4. Add KPI cards: "3,510+ Trained", "26 Roles", "9 Industries", "102+ Managed"

---

## 8. REFERENCE QUICK COMMANDS

### **Tableau Shortcuts**
| Action | Steps |
|---|---|
| New Worksheet | Worksheet → New Worksheet |
| New Dashboard | Dashboard → New Dashboard |
| New Data Source | Data → New Data Source |
| Drag to Visualize | Drag field from left panel → Center canvas |
| Change Chart Type | Click chart type icon (bottom-left) |
| Add Filter | Drag field to Filters area (left panel) |
| Save to Public | File → Save to Tableau Public |
| Delete Worksheet | Right-click sheet tab → Delete |

### **File Paths**
```
Primary:     D:\Resumes\Terry_Tobas_Employment_Data.xls
Backup:      D:\Resumes\Terry_Tobas_Analysis_Data.csv
Raw Data:    D:\Resumes\Terry_Tobas_Work_History.csv
Raw Source:  D:\Resumes\Master_Resume_Terry_Tobas_Complete.md
```

### **Key Metrics to Remember**
- **Education:** 11 roles, 52.33 years, 3,355 students trained, 100 staff managed
- **Technology:** 5 roles, 4.17 years, 50 students trained (emerging area)
- **Content/Publishing:** 4 roles, 8.17 years (secondary focus)
- **Total Career:** 26 roles, 75.09 years (concurrent), 3,510+ trained, 102+ managed

---

## 9. CAREER IMPACT SUMMARY

**Use this when presenting your dashboard:**

> "My 20-year career spans 26 roles across 9 industries. I've trained 3,500+ people, primarily in education (13 roles, 2,405 students trained). I managed 100+ staff at Glova during 2019-2022. While my foundation is in education (52+ years across concurrent roles), I'm actively pivoting to technology—my recent roles include Python/Docker/Jenkins automation, AI integration (Claude, ChatGPT), and technical documentation. My ability to juggle 2-4 concurrent roles while maintaining quality demonstrates my capacity and work ethic."

---

## 10. CONTACT & SUPPORT

**Questions about this handbook?**
- Review this document first
- Check the Troubleshooting section (Section 5)
- Refer to file names in Section 2 for clarity

**Tableau Support:**
- Tableau Public Help: https://public.tableau.com/support
- Community Forums: https://community.tableau.com

---

**Status:** Complete and Ready to Use  
**Last Updated:** September 4, 2026  
**File Location:** D:\Resumes\TABLEAU_COMPLETE_HANDBOOK.md

