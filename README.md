# Elyx Hackathon HealthAI Dataset Generator

Generate realistic healthcare conversations simulating 8 months of personalized member–team interactions, complete with decision traceability and AI-driven insights.

## 🎯 What This Does

This notebook creates a comprehensive healthcare journey dataset featuring:
- **Realistic conversations** between Rohan Patel and the Elyx care team
- **Expert personas** (Concierge, Physician, Nutritionist, etc.)
- **Healthcare scenarios** (supplement reviews, workouts, medical tests, device calibration)
- **Professional outputs**: Conversation logs, episode summaries, and objective reviews

You can also explore the **visualization dashboard** here:  
👉 [https://elyx-life-hackathon-health-ai-task.vercel.app/](https://elyx-life-hackathon-health-ai-task.vercel.app/)

## 🚀 Quick Setup

1. Download `elyx_hackathon_perplexity.ipynb` and open in Google Colab.  
2. Connect your Google Drive when prompted.  
3. In the first code cell, replace 'Your_api_key' with your Perplexity API key.  
4. Select **Runtime > Run all** and wait for completion.

## 📁 Outputs

- `convos.docx` – Full 8-month chat logs  
- `summaries.docx` – Structured episode summaries  
- `objective.docx` – Data-driven episode reviews  

Find these in your Google Drive and open with Google Docs.

## 🔧 Customization & Troubleshooting

- **Member Profile**: Edit `member_profile` in Cell 4.   
- **Dependencies**: The notebook installs `python-docx`, `langchain`, and `requests` automatically.  
- **API Errors**: Verify your Perplexity key and credits.

---

This single notebook workflow empowers you to generate, customize, and review a full-scale AI-powered healthcare concierge dataset on your own.
