import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
    const [query, setQuery] = useState("");

    const tools = [
        { name: "WhatsApp Direct", cat: "Essentials", path: "/whatsapp", icon: "fa-bolt", desc: "Message without saving numbers." },
        { name: "GST Calculator", cat: "Finance", path: "/gst-calculator", icon: "fa-university", desc: "Quick tax and invoice calculations." },
        { name: "PDF Merge", cat: "PDF", path: "/pdf-merge", icon: "fa-file-pdf-o", desc: "Combine multiple docs into one." },
        { name: "Currency", cat: "Converters", path: "/currency-converter", icon: "fa-refresh", desc: "Real-time global exchange rates." },
        { name: "QR Generator", cat: "Essentials", path: "/qr-generator", icon: "fa-qrcode", desc: "Generate custom QR codes instantly." },
        { name: "Age Calculator", cat: "Finance", path: "/age-calculator", icon: "fa-calendar", desc: "Calculate exact age and milestones." }
    ];

    const filteredTools = tools.filter(t => 
        t.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="home-dashboard">
            <header className="hero-section">
                <div className="hero-content">
                    <h1>OnTools <span className="accent">PowerStation</span></h1>
                    <p>Stop wasting time. Access professional-grade utilities instantly.</p>
                    
                    <div className="command-bar">
                        <i className="fa fa-search"></i>
                        <input 
                            type="text" 
                            placeholder="Type a tool name (e.g. 'PDF', 'GST')..." 
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <span className="shortcut">ESC</span>
                    </div>
                </div>
            </header>

            <main className="dashboard-grid">
                <div className="grid-header">
                    <h2>{query ? "Search Results" : "Featured Workspaces"}</h2>
                    <div className="status-badge">Live System</div>
                </div>

                <div className="tool-cards">
                    {filteredTools.map((tool, index) => (
                        <Link to={tool.path} key={index} className="action-card">
                            <div className="card-top">
                                <div className="icon-wrapper">
                                    <i className={`fa ${tool.icon}`}></i>
                                </div>
                                <span className="category-tag">{tool.cat}</span>
                            </div>
                            <div className="card-body">
                                <h3>{tool.name}</h3>
                                <p>{tool.desc}</p>
                            </div>
                            <div className="card-footer">
                                <span>Launch Tool</span>
                                <i className="fa fa-chevron-right"></i>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Home;
