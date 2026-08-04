# Sababa 🧆 — Learn spoken Hebrew

**Sababa** (סבבה — Israeli slang for *"cool / all good"*) teaches the Hebrew you'll actually **speak** on a trip to Israel. Instead of flashcards, you drop into a real travel **scenario** — a café, a taxi, the shuk — and an AI tutor plays the person on the other side. You complete a **mission** by talking your way through it, in Hebrew.

It's a single self-contained web page (`index.html`): no install, no build step. Open it in a browser on your phone or computer.

> This is an early **prototype**. Feedback welcome.

## How it works

1. **Pick a scenario** — e.g. order a coffee, take a taxi to your hotel, haggle at the market.
2. **The AI opens the scene** in Hebrew, staying in character as the barista / driver / vendor.
3. **You reply** — in Hebrew (tap the starter chips or the pop-out keyboard if you're stuck, or fall back to English).
4. Each of the tutor's lines comes with **tap-to-reveal** help: 🔊 hear it, 🔤 pronunciation, 🇬🇧 translation.
5. Gentle **corrections** nudge your Hebrew, and when you accomplish the **mission** you get a 🎉.

## Scenarios in the prototype

☕ The café · 🚕 The taxi · 🍅 The shuk (market) · 🏨 The hotel · 🧭 Lost in the street · 🧆 Falafel stand

## Features

- 💬 **In-character role-play** — talk to a real-feeling Israeli in each scene, not a quiz.
- 🎯 **Missions** — every scenario has a concrete goal, with a ✓ when you nail it.
- 🔤 **Training wheels** — per-message pronunciation and translation you reveal only when you need them.
- 🔊 **Voice** — the tutor's Hebrew is read aloud using your browser's built-in speech (no extra setup).
- 🪄 **Nikud on/off** — show or hide vowel points; and a **level** dial (beginner → intermediate).
- 💡 **Starter chips** — tap common phrases to build a reply without a Hebrew keyboard.
- 💾 **Local-only** — your key, settings, and progress live in your browser, nowhere else.

## Getting started

1. **Open the app** — from its web link, or by opening `index.html` in a browser.
2. Add your **OpenAI API key** (see below), pick your level and nikud preference.
3. Pick a scenario and start talking.

> Tip: on a phone, use **"Add to Home Screen"** so Sababa opens full-screen like a normal app.

## The OpenAI key 🔑

The tutor is powered by OpenAI, so the app needs an API key.

- Get one at **platform.openai.com → API keys → "Create new secret key"**.
- Paste it once (setup or **Settings**). It's saved **only on your device** and is never put in the code or shared anywhere.
- Chat uses the low-cost `gpt-4o-mini` model. Voice uses your browser's free built-in speech.

**Never paste an API key into a chat, a message, or the source code.** If a key is exposed, roll it at platform.openai.com and paste the new one into Settings.

## Privacy

Your key, settings, and progress live in your browser on your own device — nothing is stored on any server run by this app. Your messages do go to OpenAI (that's what powers the tutor), under your own account.

## Tech notes

- Plain HTML/CSS/JS in one file (`index.html`) — no dependencies, no build.
- Calls the OpenAI Chat Completions API directly from the browser using your key, and asks the model for a structured JSON reply (Hebrew + transliteration + translation + correction + mission status).
- Pronunciation uses the browser's built-in `SpeechSynthesis` (`he-IL`), so voice needs no extra key.
