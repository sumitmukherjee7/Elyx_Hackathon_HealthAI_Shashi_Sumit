# Elyx Hackathon HealthAI Dataset Generator

Generate realistic healthcare conversations simulating 8 months of personalized member–team interactions, complete with decision traceability and AI-driven insights.

## 🎯 What This Does

This project contains two major parts:

1. **Dataset Generation (Colab Notebook)**  
   The notebook `Elyx_Hackathon_HealthAI.ipynb` automatically generates a synthetic healthcare journey for a member (Rohan Patel).  
   It includes:
   - Conversations with the Elyx care team (Concierge, Physician, Nutritionist, etc.)
   - Personalized medical and wellness scenarios
   - Episode summaries and objective reviews  
   You can run this notebook in **Google Colab** to reproduce or customize the dataset.

2. **Visualization Dashboard**  
   Explore the generated data in an interactive dashboard:  
   👉 [https://elyx-life-hackathon-health-ai-task.vercel.app/](https://elyx-life-hackathon-health-ai-task.vercel.app/)

## 📄 Repository Files

- **`Elyx_Hackathon_HealthAI.ipynb`** – Main notebook to generate datasets using Perplexity API.  
- **`final_conversations_HealthAI.docx`** – Full 8-month conversation logs between the member and Elyx team.  
- **`final_objective_HealthAI.docx`** – Data-driven, objective review of episodes highlighting progress and challenges.  
- **`final_summaries_HealthAI.docx`** – Structured summaries of each episode for quick reference.  
- **`index.html` / `src/` / `public/`** – Source code for the visualization dashboard.  
- **`README.md`** – Documentation.  

## 🚀 Quick Setup (Notebook)

1. Open `Elyx_Hackathon_HealthAI.ipynb` in **Google Colab**.  
2. Mount your Google Drive when prompted.  
3. Replace `'Your_api_key'` with your **Perplexity API key** in the first cell.  
4. Run **Runtime > Run all** to generate outputs.  

The `.docx` outputs will appear in your Google Drive automatically.

## 📁 Outputs

- `convos.docx` → Detailed conversations  
- `summaries.docx` → Episode summaries  
- `objective.docx` → Objective review  

*(Already uploaded here as `final_conversations_HealthAI.docx`, `final_summaries_HealthAI.docx`, `final_objective_HealthAI.docx`)*  

---

This workflow enables **end-to-end dataset generation, storage, and visualization** for healthcare AI hackathons.
