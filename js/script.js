document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply animation to elements with stagger for expertise cards
    const expertiseCards = document.querySelectorAll('.expertise-card');
    const projectCards = document.querySelectorAll('.project-card');

    expertiseCards.forEach((el, index) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = `opacity 0.8s ease ${index * 0.15}s, transform 0.8s ease ${index * 0.15}s`;
        observer.observe(el);
    });

    projectCards.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
        el.style.transition = "opacity 0.9s ease, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)";
        observer.observe(el);
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Remove active class from all links
            document.querySelectorAll('.nav-hover').forEach(link => {
                link.classList.remove('active');
            });
            
            // Add active class to clicked link
            if (this.classList.contains('nav-hover')) {
                this.classList.add('active');
            }

            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Modal Schema Logic
    const modal = document.getElementById('schemaModal');
    const closeBtn = document.querySelector('.close-modal');
    const schemaContent = document.getElementById('schemaContent');

    const schemas = {
        '1': [
            { name: 'Google Tasks', type: 'trigger', icon: '📝', desc: 'Watch Tasks' },
            { name: 'Gemini AI', type: 'process', icon: '🧠', desc: 'Content Analysis' },
            { name: 'Airtable', type: 'db', icon: '📊', desc: 'Save as Pending' },
            { name: 'Todoist', type: 'action', icon: '✅', desc: 'Create Task' },
            { name: 'Airtable', type: 'db', icon: '📊', desc: 'Mark as Synced' },
            { name: 'Slack', type: 'notify', icon: '💬', desc: 'Send Report' }
        ],
        '2': [
            { name: 'Meta Ads', type: 'trigger', icon: '🎯', desc: 'List Campaigns' },
            { name: 'Facebook Insights', type: 'process', icon: '📈', desc: 'Get Results (ROAS)' },
            { name: 'Google Sheets', type: 'action', icon: '📊', desc: 'Add Report Row' },
            { name: 'Error Handler', type: 'notify', icon: '🔄', desc: 'Auto-Retry (3x)' }
        ],
        '3': [
            { name: 'Jira Software', type: 'trigger', icon: '🎫', desc: 'Search JQL Issues' },
            { name: 'Data Aggregator', type: 'process', icon: '📦', desc: 'Group by Status' },
            { name: 'Text Parser', type: 'process', icon: '📝', desc: 'Format Report' },
            { name: 'Slack', type: 'notify', icon: '💬', desc: 'Send Message' }
        ],
        '4': [
            { name: 'ID POS API', type: 'trigger', icon: '🏪', desc: 'Auth & Fetch Transactions' },
            { name: 'Basic Feeder', type: 'process', icon: '🔁', desc: 'Iterate Records' },
            { name: 'ID POS API', type: 'process', icon: '🧾', desc: 'Get Transaction Detail' },
            { name: 'OpenRouter AI', type: 'process', icon: '🧠', desc: 'Classify Kitchen / Bar' },
            { name: 'JSON Parser', type: 'process', icon: '⚙️', desc: 'Parse AI Response' },
            { name: 'Google Sheets', type: 'action', icon: '📊', desc: 'Append Report Row' }
        ]
    };

    function renderSchema(id) {
        const data = schemas[id] || [];
        schemaContent.innerHTML = '';
        data.forEach((step, index) => {
            const node = document.createElement('div');
            node.className = `schema-node ${step.type}`;
            node.innerHTML = `
                <div class="node-icon">${step.icon}</div>
                <div class="node-info">
                    <h4>${step.name}</h4>
                    <p>${step.desc}</p>
                </div>
            `;
            schemaContent.appendChild(node);
            
            if (index < data.length - 1) {
                const arrow = document.createElement('div');
                arrow.className = 'schema-arrow';
                arrow.innerHTML = '&#8594;';
                schemaContent.appendChild(arrow);
            }
        });
    }

    document.querySelectorAll('.btn-schema').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = btn.getAttribute('data-project');
            renderSchema(projectId);
            modal.classList.add('active');
        });
    });

    if(closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
});
