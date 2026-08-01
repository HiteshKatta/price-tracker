# 📉 Price Tracker

A smart product price tracking application that monitors products across popular e-commerce websites and notifies users when prices drop.

Built with **Next.js 16**, **Firecrawl**, **Supabase**, and **Resend**.

---

## 🚀 Features

* 🔍 **Track Any Product**

  * Monitor products from Amazon, Zara, Walmart, and many other e-commerce websites.

* 📈 **Price History**

  * View interactive charts to analyze historical price trends.

* 📧 **Price Drop Alerts**

  * Receive email notifications whenever a tracked product's price decreases.

* 🔄 **Automated Daily Price Checks**

  * Scheduled cron jobs automatically check product prices every day.

* 🔐 **Google Authentication**

  * Secure sign-in using Google OAuth.

* 📱 **Responsive Design**

  * Optimized for desktop, tablet, and mobile devices.

---

## 🛠️ Tech Stack

### Frontend

* Next.js 16 (App Router)
* React
* TypeScript
* Tailwind CSS
* shadcn/ui
* Recharts

### Backend

* Supabase

  * PostgreSQL Database
  * Google Authentication
  * Row Level Security (RLS)
  * Database Functions

### Web Scraping

* Firecrawl

  * AI-powered structured data extraction
  * JavaScript rendering
  * Rotating proxies
  * Anti-bot bypass
  * Multi-site support

### Email Service

* Resend

  * Transactional email delivery
  * Price drop notifications

### Deployment

* Vercel
* Vercel Cron Jobs

---

## 📊 Workflow

1. User adds a product URL.
2. Product details are scraped using Firecrawl.
3. Product information is stored in Supabase.
4. A scheduled cron job checks prices daily.
5. Price history is updated automatically.
6. Users receive email alerts when prices drop.

---

## ✨ Highlights

* Modern App Router architecture
* AI-powered web scraping
* Secure authentication
* Interactive price history charts
* Automated background price monitoring
* Real-time email notifications
* Clean and responsive UI
