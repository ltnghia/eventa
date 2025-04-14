import React from 'react';

const Abstract = () => {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
          {/* Slogan Section */}
          <section style={{ marginBottom: '30px' }}>
            <h1 style={{
              fontSize: '2.5rem', 
              fontWeight: 'bold', 
              color: '#1a73e8', 
              textShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)', 
              backgroundColor: 'rgba(0, 0, 0, 0.05)', 
              padding: '10px', 
              borderRadius: '5px'
            }}>
              Seeing Beyond the Pixels — Understanding the Story Behind Every Image
            </h1>
          </section>
    
          {/* The Problem Section */}
          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333' }}>🧠 The Problem</h2>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
              Traditional image analysis methods—like captioning 📝, object detection 🧍, or segmentation ✂️—tend to focus on what’s visible: people, objects, and actions. But in real-world scenarios, just recognizing "a man riding a bike" isn’t enough.
            </p>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
              What’s happening? Who is he? Where is this? Why does it matter?
            </p>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>Most current AI systems miss the bigger picture.</p>
          </section>
    
          {/* Our Mission Section */}
          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333' }}>🎯 Our Mission</h2>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
              EVENTA aims to transform how machines interpret images by enriching them with event-level understanding. We go beyond surface-level descriptions to capture:
            </p>
            <ul style={{ fontSize: '1.2rem', lineHeight: '1.6', marginLeft: '20px' }}>
              <li>🧑‍🤝‍🧑 Who is involved</li>
              <li>🕒 When & Where the event takes place</li>
              <li>📖 What is happening</li>
              <li>🧩 Why it’s significant</li>
            </ul>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
              We combine visual cues with contextual reasoning to create narrative-rich, informative captions that tell the full story behind the image.
            </p>
          </section>
    
          {/* Why It Matters Section */}
          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333' }}>🔍 Why It Matters</h2>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
              Understanding an image isn’t just about identifying what’s in it—it’s about making sense of its context, implications, and human relevance.
            </p>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
              Whether it's:
            </p>
            <ul style={{ fontSize: '1.2rem', lineHeight: '1.6', marginLeft: '20px' }}>
              <li>A protest in a city square</li>
              <li>A historic moment captured in a photograph</li>
              <li>A family gathering full of subtle emotion</li>
            </ul>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
              EVENTA helps AI not just see, but understand.
            </p>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>This makes it a powerful tool for:</p>
            <ul style={{ fontSize: '1.2rem', lineHeight: '1.6', marginLeft: '20px' }}>
              <li>📰 Journalism & media analysis</li>
              <li>🔎 Event discovery & image search</li>
              <li>🏛️ Cultural archiving & storytelling</li>
              <li>🧪 Research in computer vision, AI, and cognitive science</li>
            </ul>
          </section>
    
          {/* What Makes EVENTA Different Section */}
          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333' }}>🚀 What Makes EVENTA Different?</h2>
            <ul style={{ fontSize: '1.2rem', lineHeight: '1.6', marginLeft: '20px' }}>
              <li>✔️ Context-aware captions that include names, timelines, outcomes</li>
              <li>✔️ Emphasis on narrative and semantic depth</li>
              <li>✔️ Bridging the gap between vision and storytelling</li>
            </ul>
          </section>
        </div>
      );
    };

export default Abstract;
