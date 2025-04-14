import React from 'react';
import './abstract.css'; // Import the CSS file for styling

const Abstract = () => {
    return (
        <div className="container">
          {/* Slogan Section */}
          <section className="slogan">
            <h1>Seeing Beyond the Pixels — Understanding the Story Behind Every Image</h1>
          </section>
    
          {/* The Problem Section */}
          <section className="problem">
            <h2>🧠 The Problem</h2>
            <p>
              Traditional image analysis methods—like captioning 📝, object detection 🧍, or segmentation ✂️—tend to focus on what’s visible: people, objects, and actions. But in real-world scenarios, just recognizing &quot;a man riding a bike&quot; isn’t enough.
            </p>
            <p>What’s happening? Who is he? Where is this? Why does it matter?</p>
            <p>Most current AI systems miss the bigger picture.</p>
          </section>
    
          {/* Our Mission Section */}
          <section className="mission">
            <h2>🎯 Our Mission</h2>
            <p>
              EVENTA aims to transform how machines interpret images by enriching them with event-level understanding. We go beyond surface-level descriptions to capture:
            </p>
            <ul>
              <li>🧑‍🤝‍🧑 Who is involved</li>
              <li>🕒 When & Where the event takes place</li>
              <li>📖 What is happening</li>
              <li>🧩 Why it’s significant</li>
            </ul>
            <p>
              We combine visual cues with contextual reasoning to create narrative-rich, informative captions that tell the full story behind the image.
            </p>
          </section>
    
          {/* Why It Matters Section */}
          <section className="why-it-matters">
            <h2>🔍 Why It Matters</h2>
            <p>
              Understanding an image isn’t just about identifying what’s in it—it’s about making sense of its context, implications, and human relevance.
            </p>
            <p>Whether it&apos;s:</p>
            <ul>
              <li>A protest in a city square</li>
              <li>A historic moment captured in a photograph</li>
              <li>A family gathering full of subtle emotion</li>
            </ul>
            <p>EVENTA helps AI not just see, but understand.</p>
            <p>This makes it a powerful tool for:</p>
            <ul>
              <li>📰 Journalism & media analysis</li>
              <li>🔎 Event discovery & image search</li>
              <li>🏛️ Cultural archiving & storytelling</li>
              <li>🧪 Research in computer vision, AI, and cognitive science</li>
            </ul>
          </section>
    
          {/* What Makes EVENTA Different Section */}
          <section className="what-makes-different">
            <h2>🚀 What Makes EVENTA Different?</h2>
            <ul>
              <li>✔️ Context-aware captions that include names, timelines, outcomes</li>
              <li>✔️ Emphasis on narrative and semantic depth</li>
              <li>✔️ Bridging the gap between vision and storytelling</li>
            </ul>
          </section>
        </div>
      );
    };
    
export default Abstract;
