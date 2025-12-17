# MySplit

**Elevator Pitch:**
MySplit is a personal workout application. This helps users track their workout progress based on their lifting routine from prior weeks. This allows for correct book keeping and progress visualization. 

---

### Goal/Challenge:
- Bring this app from idea to completion with full deployment **in under three weeks**.
- Use as little AI as possible, to familiarize myself with React Native (this is new to me)
- Incorporate some sort of ML regression model to predict weight loss or muscle gain.
- Have fun!

--- 

### Tech Stack
- React-Native: View, UI, Frontend
- FastAPI: Controller, backend
- Supabase: Model, PostgreSQL interface

--- 

### Features
- Users design their own work out splits with `n` amount of workouts per day designated to them (e.g "Push" may include "Bench Press, Tricep Pushdown", and so on.)
- Data from the previous week is displayed during workout to promote the user to promote specific goals.
  - If a user is cutting/ losing weight, the goal may be to hit the same rep and weight count
  - If a user is bulking/ putting on weight, the goal may be to hit more reps at the same weight or less at a greater weight.
  - If a user is maintaining, then periodically the system may encourage more reps at the same weight.
- Analytics:
  - View progress data tied to a specific split day (e.g. "Push" Day progress over time), similar graphical data for Weight Loss, BMI, Body Fat Percentage and so on.
  - Regression Model that makes predictions based on various input features (e.g. weight, age, sex, workout frequency, workout intensity, calories reported, steps walked, BMI, so on)

### Timeline 
- Week 1:
  - Basic UI layouts
  - Calander View for Split Data (Each split occupies a week of time) 
  - Supabse Integration, ER diagram for modelng
  - Basic Data Queries
- Week 2:
  - Authentication
  - Authorization
  - Custom Split Design
  - Start Data Visualization
- Week 3:
  - Build Regression Model based on User Features & Data
  - UI Polish
  - Deployment

