// ==========================================
// COMPETENCYAI - FRONTEND JAVASCRIPT
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("CompetencyAI loaded successfully 🚀");

    // ------------------------------------------
    // 1. SIDEBAR NAVIGATION
    // ------------------------------------------

    const navItems = document.querySelectorAll(".nav-item");

    let currentLanguage = localStorage.getItem("competencyAILanguage") === "Hindi" ? "Hindi" : "English";
    const englishToHindi = {
        "Dashboard": "डैशबोर्ड",
        "Learning Materials": "लर्निंग मटेरियल्स",
        "My Competencies": "मेरी दक्षताएँ",
        "Assessments": "आकलन",
        "Recommendations": "सिफारिशें",
        "My Progress": "मेरी प्रगति",
        "Settings": "सेटिंग्स",
        "Overview": "अवलोकन",
        "Profile": "प्रोफ़ाइल",
        "Learning Preferences": "लर्निंग प्राथमिकताएँ",
        "Account": "खाता",
        "Upload Material": "मटेरियल अपलोड करें",
        "Take Assessment": "आकलन शुरू करें",
        "Explore Recommendations": "सिफारिशें देखें",
        "Log Out": "लॉग आउट",
        "Edit Profile": "प्रोफ़ाइल संपादित करें",
        "Save Changes": "परिवर्तन सहेजें",
        "Name": "नाम",
        "Role": "भूमिका",
        "Address": "पता",
        "Email": "ईमेल",
        "Preferred Learning Mode": "पसंदीदा लर्निंग मोड",
        "Language": "भाषा",
        "Notifications": "सूचनाएँ",
        "Self-paced": "स्व-अध्ययन",
        "On": "चालू",
        "Manage your profile and learning preferences.": "अपनी प्रोफ़ाइल और लर्निंग प्राथमिकताएँ प्रबंधित करें।",
        "Are you sure you want to log out?": "क्या आप लॉग आउट करना चाहते हैं?",
        "Cancel": "रद्द करें",
        "Welcome back": "वापसी पर स्वागत है",
        "Log In": "लॉग इन करें",
        "Demo Login · No real authentication is used.": "डेमो लॉगिन · वास्तविक प्रमाणीकरण का उपयोग नहीं किया गया है।"
        ,"Main": "मुख्य"
        ,"Learning": "लर्निंग"
        ,"Personalized Learning": "व्यक्तिगत लर्निंग"
        ,"Good morning, Vanshika": "सुप्रभात, Vanshika"
        ,"Here's your competency overview and recommended learning path.": "यहाँ आपका दक्षता अवलोकन और अनुशंसित लर्निंग पथ है।"
        ,"Overall Competency": "कुल दक्षता"
        ,"Competencies Tracked": "ट्रैक की गई दक्षताएँ"
        ,"Learning Progress": "लर्निंग प्रगति"
        ,"Assessments": "आकलन"
        ,"since last assessment": "पिछले आकलन से"
        ,"need attention": "ध्यान आवश्यक"
        ,"this month": "इस महीने"
        ,"pending": "लंबित"
        ,"Skill Intelligence": "दक्षता जानकारी"
        ,"Competency Overview": "दक्षता अवलोकन"
        ,"View all →": "सभी देखें →"
        ,"AI Insight": "AI जानकारी"
        ,"Recommended for You": "आपके लिए अनुशंसित"
        ,"Strengthen Data Quality": "डेटा गुणवत्ता मजबूत करें"
        ,"Your recent assessment shows an opportunity to improve this competency.": "आपका हालिया आकलन इस दक्षता में सुधार का अवसर दिखाता है।"
        ,"Beginner–Intermediate": "शुरुआती–मध्यवर्ती"
        ,"Analyze a new learning resource": "नए लर्निंग संसाधन का विश्लेषण करें"
        ,"Test your current competencies": "अपनी वर्तमान दक्षताओं का परीक्षण करें"
        ,"Find your next learning step": "अपना अगला लर्निंग चरण खोजें"
        ,"Track your assessment performance, learning progress, and competency improvement.": "अपने आकलन प्रदर्शन, लर्निंग प्रगति और दक्षता सुधार को ट्रैक करें।"
        ,"Learning Overview": "लर्निंग अवलोकन"
        ,"A clear view of your recent performance and competency growth.": "आपके हालिया प्रदर्शन और दक्षता वृद्धि का स्पष्ट अवलोकन।"
        ,"Learning Paths Completed": "पूरे किए गए लर्निंग पथ"
        ,"Assessments Completed": "पूरे किए गए आकलन"
        ,"Completed learning paths": "पूरे किए गए लर्निंग पथ"
        ,"Across your learning journey": "आपकी लर्निंग यात्रा में"
        ,"Improving": "सुधार जारी"
        ,"from recent activity": "हालिया गतिविधि से"
        ,"Recent Results": "हालिया परिणाम"
        ,"Assessment Performance": "आकलन प्रदर्शन"
        ,"Current Levels": "वर्तमान स्तर"
        ,"Competency Improvement": "दक्षता सुधार"
        ,"Activity": "गतिविधि"
        ,"Modules: 3/3 completed": "मॉड्यूल: 3/3 पूरे"
        ,"Completed": "पूरा हुआ"
        ,"Progress": "प्रगति"
        ,"Your competency profile is improving.": "आपकी दक्षता प्रोफ़ाइल में सुधार हो रहा है।"
        ,"Your strongest areas are Data Quality and Data Validation. Continue focusing on Survey Methodology to reduce your remaining competency gap.": "आपके सबसे मजबूत क्षेत्र डेटा गुणवत्ता और डेटा सत्यापन हैं। शेष दक्षता अंतर कम करने के लिए सर्वेक्षण पद्धति पर ध्यान जारी रखें।"
        ,"Material Intelligence": "मटेरियल जानकारी"
        ,"Turn learning resources into insight.": "लर्निंग संसाधनों को जानकारी में बदलें।"
        ,"Upload a resource and CompetencyAI will identify the concepts and competencies it covers.": "एक संसाधन अपलोड करें और CompetencyAI उसके विषयों और दक्षताओं की पहचान करेगा।"
        ,"New Resource": "नया संसाधन"
        ,"Upload learning material": "लर्निंग मटेरियल अपलोड करें"
        ,"Choose file": "फ़ाइल चुनें"
        ,"Drop your file here": "अपनी फ़ाइल यहाँ छोड़ें"
        ,"or choose a file from your device": "या अपने डिवाइस से फ़ाइल चुनें"
        ,"Supported formats up to 25 MB": "25 MB तक के प्रारूप समर्थित हैं"
        ,"Analyze Material": "मटेरियल का विश्लेषण करें"
        ,"How It Works": "यह कैसे काम करता है"
        ,"From material to mastery": "मटेरियल से दक्षता तक"
        ,"Upload a resource": "संसाधन अपलोड करें"
        ,"Analyze key concepts": "मुख्य विषयों का विश्लेषण करें"
        ,"Map relevant competencies": "संबंधित दक्षताओं को मैप करें"
        ,"Your material stays in this prototype session.": "आपका मटेरियल इस प्रोटोटाइप सत्र में रहता है।"
        ,"Analysis Results": "विश्लेषण परिणाम"
        ,"Extracted Concepts": "निकाले गए विषय"
        ,"Identified Competencies": "पहचानी गई दक्षताएँ"
        ,"Competency Check": "दक्षता जाँच"
        ,"Build confidence with focused questions matched to your learning goals.": "अपने लर्निंग लक्ष्यों से जुड़े केंद्रित प्रश्नों के साथ आत्मविश्वास बढ़ाएँ।"
        ,"Recommended for you": "आपके लिए अनुशंसित"
        ,"Recent Assessments": "हालिया आकलन"
        ,"Start Assessment": "आकलन शुरू करें"
        ,"Question": "प्रश्न"
        ,"of": "में से"
        ,"Correct": "सही"
        ,"Incorrect": "गलत"
        ,"Correct answer:": "सही उत्तर:"
        ,"Next Question": "अगला प्रश्न"
        ,"Assessment Complete": "आकलन पूरा हुआ"
        ,"You have completed the Data Quality & Validation Assessment.": "आपने डेटा गुणवत्ता और सत्यापन आकलन पूरा कर लिया है।"
        ,"Score:": "स्कोर:"
        ,"Back to Assessments": "आकलन पर वापस जाएँ"
        ,"Personalized Insight": "व्यक्तिगत जानकारी"
        ,"Based on your competency profile and recent assessment performance, these resources are recommended next.": "आपकी दक्षता प्रोफ़ाइल और हालिया आकलन प्रदर्शन के आधार पर, ये संसाधन आगे अनुशंसित हैं।"
        ,"Curated for You": "आपके लिए चुने गए"
        ,"View Learning Path →": "लर्निंग पथ देखें →"
        ,"View Learning Path": "लर्निंग पथ देखें"
        ,"← Back to Recommendations": "← सिफारिशों पर वापस जाएँ"
        ,"← Back to Learning Path": "← लर्निंग पथ पर वापस जाएँ"
        ,"Your biggest learning gap is Survey Methodology.": "आपका सबसे बड़ा दक्षता अंतर सर्वेक्षण पद्धति है।"
        ,"THE SIGNALS BEHIND THE PATH": "इस पथ के पीछे के संकेत"
        ,"CURATED FOR YOU": "आपके लिए चुने गए"
        ,"PERSONALIZED INSIGHT": "व्यक्तिगत जानकारी"
        ,"DATA QUALITY & VALIDATION ASSESSMENT": "डेटा गुणवत्ता और सत्यापन आकलन"
        ,"YOUR ACTIVITY": "आपकी गतिविधि"
        ,"CURRENT LEVELS": "वर्तमान स्तर"
        ,"LEARNING ACTIVITY": "लर्निंग गतिविधि"
        ,"WHY THIS WAS RECOMMENDED": "इसकी सिफारिश क्यों की गई"
        ,"LEARNING PATH": "लर्निंग पथ"
        ,"MODULE 01 · BUILD THE FOUNDATION": "मॉड्यूल 01 · बुनियाद तैयार करें"
        ,"MODULE 02 · PRACTICE THE CORE CONCEPTS": "मॉड्यूल 02 · मुख्य अवधारणाओं का अभ्यास करें"
        ,"MODULE 03 · APPLY YOUR LEARNING": "मॉड्यूल 03 · अपनी लर्निंग लागू करें"
        ,"Why these recommendations?": "इन सिफारिशों का कारण"
        ,"Assessment Performance": "आकलन प्रदर्शन"
        ,"Competency Gaps": "दक्षता अंतर"
        ,"Learning History": "लर्निंग इतिहास"
        ,"Personalized Learning Path": "व्यक्तिगत लर्निंग पथ"
        ,"Learning Path": "लर्निंग पथ"
        ,"Back to Recommendations": "सिफारिशों पर वापस जाएँ"
        ,"Why this was recommended": "इसकी सिफारिश क्यों की गई"
        ,"Start Learning": "लर्निंग शुरू करें"
        ,"Continue Learning": "लर्निंग जारी रखें"
        ,"Learning Path Completed": "लर्निंग पथ पूरा हुआ"
        ,"Learning path started.": "लर्निंग पथ शुरू हुआ।"
        ,"Module 2 completed.": "मॉड्यूल 2 पूरा हुआ।"
        ,"Learning path completed.": "लर्निंग पथ पूरा हुआ।"
        ,"In Progress": "जारी है"
        ,"Not Started": "शुरू नहीं हुआ"
        ,"Apply your learning": "अपनी लर्निंग लागू करें"
        ,"Build the foundation": "बुनियाद तैयार करें"
        ,"Practice the core concepts": "मुख्य अवधारणाओं का अभ्यास करें"
        ,"Mark as Complete": "पूरा हुआ चिह्नित करें"
        ,"Back to Learning Path": "लर्निंग पथ पर वापस जाएँ"
        ,"Learning Preferences": "लर्निंग प्राथमिकताएँ"
        ,"Account": "खाता"
        ,"Edit Profile": "प्रोफ़ाइल संपादित करें"
        ,"Save Changes": "परिवर्तन सहेजें"
        ,"Profile details are ready to update in this prototype.": "इस प्रोटोटाइप में प्रोफ़ाइल विवरण अपडेट के लिए तैयार हैं।"
        ,"End this demo session and return to the prototype login screen.": "इस डेमो सत्र को समाप्त करके प्रोटोटाइप लॉगिन स्क्रीन पर लौटें।"
        ,"Demo Access": "डेमो एक्सेस"
        ,"Continue your learning intelligence journey.": "अपनी लर्निंग इंटेलिजेंस यात्रा जारी रखें।"
        ,"Password": "पासवर्ड"
        ,"Demo password": "डेमो पासवर्ड"
        ,"Period": "अवधि"
        ,"This month⌄": "इस महीने⌄"
        ,"This week⌄": "इस सप्ताह⌄"
        ,"Learning Intelligence": "लर्निंग इंटेलिजेंस"
        ,"Personalized Learning": "व्यक्तिगत लर्निंग"
        ,"Skill Intelligence": "दक्षता जानकारी"
        ,"Get Started": "शुरू करें"
        ,"Activity": "गतिविधि"
        ,"View Personalized Path →": "व्यक्तिगत पथ देखें →"
        ,"Material Selected": "मटेरियल चुना गया"
        ,"Your learning material is ready for analysis.": "आपका लर्निंग मटेरियल विश्लेषण के लिए तैयार है।"
        ,"Analysis Complete": "विश्लेषण पूरा हुआ"
        ,"Analyzing...": "विश्लेषण हो रहा है..."
        ,"Reading your material": "आपका मटेरियल पढ़ा जा रहा है"
        ,"Identifying concepts and competency signals...": "विषयों और दक्षता संकेतों की पहचान की जा रही है..."
        ,"Ready": "तैयार"
        ,"Data Quality & Validation Assessment": "डेटा गुणवत्ता और सत्यापन आकलन"
        ,"Intermediate": "मध्यवर्ती"
        ,"10 MCQs": "10 बहुविकल्पीय प्रश्न"
        ,"10 minutes": "10 मिनट"
        ,"Recommended based on your current competency gaps.": "आपके वर्तमान दक्षता अंतर के आधार पर अनुशंसित।"
        ,"Data Analysis Basics": "डेटा विश्लेषण की मूल बातें"
        ,"Statistical Concepts": "सांख्यिकीय अवधारणाएँ"
        ,"Data Validation": "डेटा सत्यापन"
        ,"Not Attempted": "प्रयास नहीं किया गया"
        ,"Fundamentals of Survey Methodology": "सर्वेक्षण पद्धति की मूल बातें"
        ,"Survey Methodology": "सर्वेक्षण पद्धति"
        ,"Beginner": "शुरुआती"
        ,"2h 30m": "2 घंटे 30 मिनट"
        ,"Data Quality & Validation": "डेटा गुणवत्ता और सत्यापन"
        ,"1h 45m": "1 घंटा 45 मिनट"
        ,"Statistical Analysis Essentials": "सांख्यिकीय विश्लेषण की आवश्यक बातें"
        ,"3h": "3 घंटे"
        ,"94% match": "94% मेल"
        ,"88% match": "88% मेल"
        ,"81% match": "81% मेल"
        ,"What is Survey Methodology?": "सर्वेक्षण पद्धति क्या है?"
        ,"Why survey design matters": "सर्वेक्षण डिज़ाइन क्यों महत्वपूर्ण है"
        ,"Basic stages of a survey": "सर्वेक्षण के मूल चरण"
        ,"Sampling basics": "सैंपलिंग की मूल बातें"
        ,"Questionnaire design": "प्रश्नावली डिज़ाइन"
        ,"Sources of survey error": "सर्वेक्षण त्रुटि के स्रोत"
        ,"Apply survey methodology to a real-world example": "वास्तविक उदाहरण पर सर्वेक्षण पद्धति लागू करें"
        ,"Identify common survey design issues": "सामान्य सर्वेक्षण डिज़ाइन समस्याएँ पहचानें"
        ,"Use data quality checks to improve results": "परिणाम सुधारने के लिए डेटा गुणवत्ता जाँचें"
        ,"Strong performance. You have a solid foundation in data quality and validation.": "अच्छा प्रदर्शन। डेटा गुणवत्ता और सत्यापन में आपकी नींव मजबूत है।"
        ,"Good progress. Review the areas you missed to strengthen your foundation.": "अच्छी प्रगति। अपनी नींव मजबूत करने के लिए छूटे हुए क्षेत्रों की समीक्षा करें।"
        ,"Keep practicing. Revisiting data quality and validation concepts will help build confidence.": "अभ्यास जारी रखें। डेटा गुणवत्ता और सत्यापन अवधारणाओं की पुनरावृत्ति आत्मविश्वास बढ़ाएगी।"
    };
    const hindiToEnglish = Object.fromEntries(Object.entries(englishToHindi).map(([english, hindi]) => [hindi, english]));

    navItems.forEach(item => {
        item.dataset.pageName = item.querySelector("span:last-child")?.textContent.trim() || item.innerText.trim();
    });

    function applyLanguage() {
        const translations = currentLanguage === "Hindi" ? englishToHindi : hindiToEnglish;
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        const textNodes = [];
        while (walker.nextNode()) textNodes.push(walker.currentNode);
        textNodes.forEach(node => {
            const text = node.nodeValue.trim();
            const normalizedText = text.replace(/\s+/g, " ");
            if (translations[normalizedText]) {
                node.nodeValue = translations[normalizedText];
            } else if (currentLanguage === "Hindi" && /^Question \d+ of \d+$/.test(normalizedText)) {
                node.nodeValue = normalizedText.replace(/^Question (\d+) of (\d+)$/, "प्रश्न $1 में से $2");
            } else if (currentLanguage === "Hindi" && /^QUESTION \d+$/.test(normalizedText)) {
                node.nodeValue = normalizedText.replace(/^QUESTION (\d+)$/, "प्रश्न $1");
            } else if (currentLanguage === "English" && /^प्रश्न \d+ में से \d+$/.test(normalizedText)) {
                node.nodeValue = normalizedText.replace(/^प्रश्न (\d+) में से (\d+)$/, "Question $1 of $2");
            } else if (currentLanguage === "English" && /^प्रश्न \d+$/.test(normalizedText)) {
                node.nodeValue = normalizedText.replace(/^प्रश्न (\d+)$/, "QUESTION $1");
            }
        });
        document.documentElement.lang = currentLanguage === "Hindi" ? "hi" : "en";
        localStorage.setItem("competencyAILanguage", currentLanguage);
    }

    navItems.forEach(item => {

        item.addEventListener("click", function(event) {

            event.preventDefault();

            // Remove active from all items
            navItems.forEach(nav => {
                nav.classList.remove("active");
            });

            // Add active to clicked item
            this.classList.add("active");

            // Get page name
            const pageName = this.dataset.pageName;

            changePage(pageName);
        });
    });


    // ------------------------------------------
    // 2. PAGE SWITCHING
    // ------------------------------------------

    function changePage(pageName, showAnalysis = false, selectedMaterial = null, openRecommendedPath = false) {

        const title = document.querySelector(".page-title h2");
        const subtitle = document.querySelector(".page-title p");

        if (!title || !subtitle) return;

        if (pageName.includes("Dashboard")) {

            title.textContent = "Overview";
            subtitle.textContent = "Track your learning and competency progress.";

            showDashboard();

        } else if (pageName.includes("Learning Materials")) {

            title.textContent = "Learning Materials";
            subtitle.textContent = "Upload and analyze your learning resources.";

            showLearningMaterials(showAnalysis, selectedMaterial);

        } else if (pageName.includes("My Competencies")) {

            title.textContent = "My Competencies";
            subtitle.textContent = "View your competency profile and identified gaps.";

            showCompetencies();

        } else if (pageName.includes("Assessments")) {

            title.textContent = "Assessments";
            subtitle.textContent = "Evaluate your competencies and identify areas for improvement.";

            showAssessments();

        } else if (pageName.includes("Recommendations")) {

            title.textContent = "Recommendations";
            subtitle.textContent = "Personalized learning paths based on your competency gaps.";

            showRecommendations(openRecommendedPath);

        } else if (pageName.includes("My Progress")) {

            title.textContent = "My Progress";
            subtitle.textContent = "Track your assessment performance, learning progress, and competency improvement.";

            showProgress();

        } else if (pageName.includes("Settings")) {

            title.textContent = "Settings";
            subtitle.textContent = "Manage your profile and learning preferences.";

            showSettings();
        }

        applyLanguage();
    }


    // ------------------------------------------
    // 3. REMEMBER ORIGINAL DASHBOARD
    // ------------------------------------------

    const dashboardContainer = document.querySelector(".dashboard");

    let originalDashboard = "";

    if (dashboardContainer) {
        originalDashboard = dashboardContainer.innerHTML;
    }


    // ------------------------------------------
    // 4. SHOW ORIGINAL DASHBOARD
    // ------------------------------------------

    function showDashboard() {

        if (!dashboardContainer) return;

        dashboardContainer.innerHTML = originalDashboard;

        attachDashboardButtons();
        applyLanguage();
    }


    // ------------------------------------------
    // 5. SHOW TEMPORARY PAGE
    // ------------------------------------------

    function showComingSoon(icon, heading, description) {

        if (!dashboardContainer) return;

        dashboardContainer.innerHTML = `
            <div style="
                background: white;
                border: 1px solid #e5e7eb;
                border-radius: 16px;
                padding: 60px 30px;
                text-align: center;
                margin-top: 20px;
            ">

                <div style="
                    font-size: 50px;
                    margin-bottom: 15px;
                ">
                    ${icon}
                </div>

                <h2 style="
                    margin-bottom: 10px;
                    color: #111827;
                ">
                    ${heading}
                </h2>

                <p style="
                    color: #6b7280;
                    max-width: 550px;
                    margin: auto;
                    line-height: 1.6;
                ">
                    ${description}
                </p>

                <div style="
                    margin-top: 25px;
                    display: inline-block;
                    padding: 8px 14px;
                    background: #eff6ff;
                    color: #2563eb;
                    border-radius: 20px;
                    font-size: 13px;
                    font-weight: 600;
                ">
                    Prototype Module
                </div>

            </div>
        `;
        applyLanguage();
    }


    function showCompetencies() {

        if (!dashboardContainer) return;

        dashboardContainer.innerHTML = `
            <div class="competencies-intro">
                <div>
                    <span class="eyebrow">SKILL INTELLIGENCE</span>
                    <h1>Competency Profile</h1>
                    <p>A snapshot of your current strengths and the areas ready for focused growth.</p>
                </div>
                <div class="competencies-intro-icon">◈</div>
            </div>

            <div class="competencies-layout">
                <section class="panel competency-profile-panel">
                    <div class="panel-header">
                        <div>
                            <span class="panel-label">CURRENT LEVELS</span>
                            <h3>Competency Profile</h3>
                        </div>
                        <span class="profile-status">4 competencies</span>
                    </div>

                    <div class="competency-list">
                        <div class="competency">
                            <div class="competency-info"><span>Data Quality</span><strong>78%</strong></div>
                            <div class="progress-bar"><div class="progress-fill" style="width: 78%"></div></div>
                        </div>
                        <div class="competency">
                            <div class="competency-info"><span>Data Validation</span><strong>72%</strong></div>
                            <div class="progress-bar"><div class="progress-fill" style="width: 72%"></div></div>
                        </div>
                        <div class="competency">
                            <div class="competency-info"><span>Statistical Analysis</span><strong>64%</strong></div>
                            <div class="progress-bar"><div class="progress-fill" style="width: 64%"></div></div>
                        </div>
                        <div class="competency warning">
                            <div class="competency-info"><span>Survey Methodology</span><strong>42%</strong></div>
                            <div class="progress-bar"><div class="progress-fill" style="width: 42%"></div></div>
                        </div>
                    </div>
                </section>

                <section class="panel competency-gaps-panel">
                    <div class="panel-header">
                        <div>
                            <span class="panel-label">FOCUS AREAS</span>
                            <h3>Competency Gaps</h3>
                        </div>
                        <span class="gap-count">2 areas</span>
                    </div>

                    <div class="gap-list">
                        <div class="gap-item"><span class="gap-icon">!</span><div><strong>Survey Methodology</strong><span>Needs Improvement</span></div></div>
                        <div class="gap-item"><span class="gap-icon">!</span><div><strong>Data Quality</strong><span>Needs Improvement</span></div></div>
                    </div>
                </section>
            </div>

            <section class="panel competency-insight">
                <div class="ai-badge">AI</div>
                <div><span class="panel-label">AI INSIGHT</span><p>Your strongest area is Data Quality. Focus next on Survey Methodology to reduce your competency gap.</p></div>
            </section>
        `;
        applyLanguage();
    }


    function showRecommendations(openRecommendedPath = false) {

        if (!dashboardContainer) return;

        const recommendations = [
            {
                title: "Fundamentals of Survey Methodology",
                competency: "Survey Methodology",
                level: "Beginner",
                duration: "2h 30m",
                match: "94%",
                icon: "01",
                reason: "This path addresses your largest current competency gap."
            },
            {
                title: "Data Quality & Validation",
                competency: "Data Quality",
                level: "Intermediate",
                duration: "1h 45m",
                match: "88%",
                icon: "02",
                reason: "This path reinforces the quality practices that support accurate analysis."
            },
            {
                title: "Statistical Analysis Essentials",
                competency: "Statistical Analysis",
                level: "Intermediate",
                duration: "3h",
                match: "81%",
                icon: "03",
                reason: "This path builds on your current analysis foundation with practical concepts."
            }
        ];

        dashboardContainer.innerHTML = `
            <section class="recommendations-insight">
                <div class="ai-badge">AI</div>
                <div><span class="panel-label">PERSONALIZED INSIGHT</span><h3>Your biggest learning gap is Survey Methodology.</h3><p>Based on your competency profile and recent assessment performance, these resources are recommended next.</p></div>
            </section>

            <section class="panel recommendations-list-panel">
                <div class="panel-header">
                    <div><span class="panel-label">CURATED FOR YOU</span><h3>Recommended for You</h3></div>
                    <span class="recommendation-count">3 paths</span>
                </div>
                <div class="recommendations-grid">
                    ${recommendations.map((recommendation, index) => `
                        <article class="recommendation-item">
                            <div class="recommendation-item-top"><div class="recommendation-icon">${recommendation.icon}</div><span class="match-badge">${recommendation.match} match</span></div>
                            <h4>${recommendation.title}</h4>
                            <p class="recommendation-competency">${recommendation.competency}</p>
                            <div class="recommendation-meta"><span>${recommendation.level}</span><span>${recommendation.duration}</span></div>
                            <button class="secondary-button view-learning-path" type="button" data-recommendation="${index}">View Learning Path <span>→</span></button>
                        </article>
                    `).join("")}
                </div>
            </section>

            <section class="panel recommendation-reason">
                <div class="panel-header"><div><span class="panel-label">THE SIGNALS BEHIND THE PATH</span><h3>Why these recommendations?</h3></div></div>
                <div class="recommendation-signals"><span>Assessment Performance</span><b>+</b><span>Competency Gaps</span><b>+</b><span>Learning History</span><b>→</b><strong>Personalized Learning Path</strong></div>
            </section>
        `;

        document.querySelectorAll(".view-learning-path").forEach(button => {
            button.addEventListener("click", () => showLearningPath(recommendations[Number(button.dataset.recommendation)]));
        });

        if (openRecommendedPath) showLearningPath(recommendations[0]);
        applyLanguage();
    }


    function showProgress() {

        if (!dashboardContainer) return;

        const assessmentResults = [
            ["Data Analysis Basics", 82],
            ["Statistical Concepts", 68],
            ["Data Quality & Validation", 90]
        ];
        const competencyResults = [
            ["Data Quality", 78],
            ["Data Validation", 72],
            ["Statistical Analysis", 64],
            ["Survey Methodology", 42]
        ];

        dashboardContainer.innerHTML = `
            <div class="progress-intro">
                <div><span class="eyebrow">LEARNING OVERVIEW</span><h1>My Progress</h1><p>A clear view of your recent performance and competency growth.</p></div>
                <div class="progress-intro-icon">↗</div>
            </div>

            <div class="progress-summary-grid">
                <div class="stat-card"><div class="stat-top"><span>Learning Paths Completed</span><div class="stat-icon blue">✓</div></div><div class="stat-value">1</div><div class="stat-footer">Completed learning paths</div></div>
                <div class="stat-card"><div class="stat-top"><span>Assessments Completed</span><div class="stat-icon green">✓</div></div><div class="stat-value">8</div><div class="stat-footer">Across your learning journey</div></div>
                <div class="stat-card"><div class="stat-top"><span>Overall Competency</span><div class="stat-icon orange">◈</div></div><div class="stat-value">72<span>%</span></div><div class="stat-footer positive">↑ Improving <span>from recent activity</span></div></div>
            </div>

            <div class="progress-sections-grid">
                <section class="panel progress-section-panel">
                    <div class="panel-header"><div><span class="panel-label">RECENT RESULTS</span><h3>Assessment Performance</h3></div></div>
                    <div class="progress-result-list">
                        ${assessmentResults.map(result => `<div class="progress-result"><div class="progress-result-heading"><span>${result[0]}</span><strong>${result[1]}%</strong></div><div class="progress-bar"><div class="progress-fill" style="width: ${result[1]}%"></div></div></div>`).join("")}
                    </div>
                </section>

                <section class="panel progress-section-panel">
                    <div class="panel-header"><div><span class="panel-label">CURRENT LEVELS</span><h3>Competency Improvement</h3></div></div>
                    <div class="progress-result-list">
                        ${competencyResults.map(result => `<div class="progress-result"><div class="progress-result-heading"><span>${result[0]}</span><strong>${result[1]}%</strong></div><div class="progress-bar"><div class="progress-fill" style="width: ${result[1]}%"></div></div></div>`).join("")}
                    </div>
                </section>
            </div>

            <section class="panel learning-activity-panel">
                <div class="panel-header"><div><span class="panel-label">LEARNING ACTIVITY</span><h3>Learning Activity</h3></div><span class="activity-status">Completed</span></div>
                <div class="activity-heading"><strong>Fundamentals of Survey Methodology</strong><span>Modules: 3/3 completed</span></div>
                <div class="activity-progress"><div><span>Progress</span><strong>100%</strong></div><div class="progress-bar"><div class="progress-fill" style="width: 100%"></div></div></div>
            </section>

            <section class="progress-insight"><div class="ai-badge">AI</div><div><span class="panel-label">AI INSIGHT</span><h3>Your competency profile is improving.</h3><p>Your strongest areas are Data Quality and Data Validation. Continue focusing on Survey Methodology to reduce your remaining competency gap.</p></div></section>
        `;
        applyLanguage();
    }


    function showSettings() {

        if (!dashboardContainer) return;

        const defaultProfile = {
            name: "Vanshika",
            role: "Learner",
            address: "",
            email: "learner@competencyai.demo"
        };
        let profile = { ...defaultProfile };
        try {
            profile = { ...defaultProfile, ...JSON.parse(localStorage.getItem("competencyAIProfile") || "{}") };
        } catch (error) {
            profile = { ...defaultProfile };
        }

        dashboardContainer.innerHTML = `
            <div class="settings-intro">
                <div><span class="eyebrow">ACCOUNT CENTER</span><h1>Settings</h1><p>Manage your profile and learning preferences.</p></div>
                <div class="settings-intro-icon">⚙</div>
            </div>

            <div class="settings-layout">
                <section class="panel settings-panel">
                    <div class="panel-header"><div><span class="panel-label">YOUR ACCOUNT</span><h3>Profile</h3></div></div>
                    <div id="profileContent"></div>
                </section>

                <section class="panel settings-panel">
                    <div class="panel-header"><div><span class="panel-label">HOW YOU LEARN</span><h3>Learning Preferences</h3></div></div>
                    <label class="preference-row"><span>Preferred Learning Mode</span><select><option>Self-paced</option><option>Instructor-led</option></select></label>
                    <label class="preference-row"><span>Language</span><select id="languagePreference"><option>English</option><option>Hindi</option></select></label>
                    <label class="preference-row preference-toggle"><span>Notifications</span><input type="checkbox" checked><span class="toggle-track" aria-hidden="true"></span><strong>On</strong></label>
                </section>
            </div>

            <section class="panel account-panel">
                <div><span class="panel-label">ACCESS</span><h3>Account</h3><p>End this demo session and return to the prototype login screen.</p></div>
                <button class="secondary-button logout-button" id="logoutButton" type="button">Log Out</button>
            </section>
        `;

        function renderProfileView() {
            document.querySelector("#profileContent").innerHTML = `
                <div class="profile-details"><div><span>Name</span><strong>${profile.name || "-"}</strong></div><div><span>Role</span><strong>${profile.role || "-"}</strong></div><div><span>Address</span><strong>${profile.address || "-"}</strong></div><div><span>Email</span><strong>${profile.email || "-"}</strong></div></div>
                <button class="secondary-button settings-action-button" id="editProfile" type="button">Edit Profile</button>
            `;
            document.querySelector("#editProfile").addEventListener("click", renderProfileForm);
            applyLanguage();
        }

        function renderProfileForm() {
            document.querySelector("#profileContent").innerHTML = `
                <form class="profile-edit-form" id="profileEditForm">
                    <label>Name<input name="name" type="text" value="${profile.name}"></label>
                    <label>Role<input name="role" type="text" value="${profile.role}"></label>
                    <label>Address<input name="address" type="text" value="${profile.address}" placeholder="Enter your address"></label>
                    <label>Email<input name="email" type="email" value="${profile.email}"></label>
                    <div class="profile-edit-actions"><button class="primary-button" type="submit">Save Changes</button><button class="secondary-button" id="cancelProfileEdit" type="button">Cancel</button></div>
                </form>
            `;
            document.querySelector("#cancelProfileEdit").addEventListener("click", renderProfileView);
            document.querySelector("#profileEditForm").addEventListener("submit", event => {
                event.preventDefault();
                const formData = new FormData(event.currentTarget);
                profile = Object.fromEntries(formData.entries());
                localStorage.setItem("competencyAIProfile", JSON.stringify(profile));
                renderProfileView();
                applyLanguage();
            });
            applyLanguage();
        }

        renderProfileView();
        document.querySelector("#logoutButton").addEventListener("click", showLogoutModal);
        document.querySelector("#languagePreference").value = currentLanguage;
        document.querySelector("#languagePreference").addEventListener("change", event => {
            currentLanguage = event.target.value;
            applyLanguage();
        });
        applyLanguage();
    }


    function showLogoutModal() {

        const modal = document.createElement("div");
        modal.className = "settings-modal-backdrop";
        modal.innerHTML = `
            <div class="settings-modal" role="dialog" aria-modal="true" aria-labelledby="logoutTitle">
                <h3 id="logoutTitle">Are you sure you want to log out?</h3>
                <div class="settings-modal-actions"><button class="secondary-button" id="cancelLogout" type="button">Cancel</button><button class="primary-button" id="confirmLogout" type="button">Log Out</button></div>
            </div>
        `;
        document.body.appendChild(modal);
        document.querySelector("#cancelLogout").addEventListener("click", () => modal.remove());
        document.querySelector("#confirmLogout").addEventListener("click", () => {
            modal.remove();
            showLogin();
        });
        applyLanguage();
    }


    function showLogin() {

        if (!dashboardContainer) return;

        dashboardContainer.innerHTML = `
            <section class="panel login-panel">
                <div class="login-brand"><div class="login-brand-icon">C</div><strong>Competency<span>AI</span></strong></div>
                <span class="panel-label">DEMO ACCESS</span>
                <h1>Welcome back</h1>
                <p class="login-copy">Continue your learning intelligence journey.</p>
                <form id="demoLoginForm">
                    <label>Email<input type="email" placeholder="learner@competencyai.demo"></label>
                    <label>Password<input type="password" placeholder="Demo password"></label>
                    <button class="primary-button login-button" type="submit">Log In</button>
                </form>
                <p class="demo-login-note">Demo Login · No real authentication is used.</p>
            </section>
        `;

        document.querySelector("#demoLoginForm").addEventListener("submit", event => {
            event.preventDefault();
            const dashboardNav = Array.from(navItems).find(nav => nav.dataset.pageName === "Dashboard");
            navItems.forEach(nav => nav.classList.remove("active"));
            dashboardNav?.classList.add("active");
            changePage("Dashboard");
        });
        applyLanguage();
    }


    function showLearningPath(recommendation, progress = 0, moduleOneStatus = "Not Started", moduleTwoStatus = "Not Started", moduleThreeStatus = "Not Started", confirmationText = "Learning path started.") {

        if (!dashboardContainer) return;

        dashboardContainer.innerHTML = `
            <section class="panel learning-path-panel">
                <button class="back-recommendations-button" id="backRecommendations" type="button">← Back to Recommendations</button>
                <div class="learning-path-heading"><span class="panel-label">LEARNING PATH</span><h3>${recommendation.title}</h3><p>${recommendation.competency} · ${recommendation.level} · ${recommendation.duration}</p></div>
                <div class="learning-path-reason"><span class="panel-label">WHY THIS WAS RECOMMENDED</span><p>${recommendation.reason}</p></div>
                <div class="learning-path-progress"><div><span>Progress</span><strong id="learningProgressValue">${progress}%</strong></div><div class="progress-bar"><div class="progress-fill" id="learningProgressFill" style="width: ${progress}%"></div></div></div>
                <div class="learning-modules"><div id="learningModuleOne" class="${moduleOneStatus === "In Progress" ? "in-progress" : moduleOneStatus === "Completed" ? "completed" : ""}"><b>01</b><span class="learning-module-title">Build the foundation</span><small id="learningModuleOneStatus">${moduleOneStatus}</small></div><div id="learningModuleTwo" class="${moduleTwoStatus === "In Progress" ? "in-progress" : moduleTwoStatus === "Completed" ? "completed" : ""}"><b>02</b><span class="learning-module-title">Practice the core concepts</span><small>${moduleTwoStatus}</small></div><div id="learningModuleThree" class="${moduleThreeStatus === "In Progress" ? "in-progress" : moduleThreeStatus === "Completed" ? "completed" : ""}"><b>03</b><span class="learning-module-title">Apply your learning</span><small>${moduleThreeStatus}</small></div></div>
                <p class="learning-start-confirmation" id="learningStartConfirmation" ${progress >= 33 ? "" : "hidden"}>${confirmationText}</p>
                <button class="primary-button start-learning-button" id="startLearning" type="button">${moduleThreeStatus === "Completed" ? "Learning Path Completed" : moduleOneStatus === "Not Started" ? "Start Learning" : "Continue Learning"} <span>→</span></button>
            </section>
        `;

        document.querySelector("#backRecommendations").addEventListener("click", showRecommendations);
        document.querySelector("#startLearning").addEventListener("click", () => {
            if (document.querySelector("#learningModuleOneStatus").textContent === "In Progress") {
                showLearningLesson(recommendation, 1);
                return;
            }

            if (document.querySelector("#learningModuleTwo small").textContent === "In Progress") {
                showLearningLesson(recommendation, 2);
                return;
            }

            if (document.querySelector("#learningModuleThree small").textContent === "In Progress") {
                showLearningLesson(recommendation, 3);
                return;
            }

            if (document.querySelector("#learningModuleOneStatus").textContent === "Completed") return;

            document.querySelector("#learningProgressValue").textContent = "33%";
            document.querySelector("#learningProgressFill").style.width = "33%";
            document.querySelector("#learningModuleOne").classList.add("in-progress");
            document.querySelector("#learningModuleOneStatus").textContent = "In Progress";
            document.querySelector("#learningStartConfirmation").hidden = false;
            document.querySelector("#startLearning").innerHTML = "Continue Learning <span>→</span>";
        });
        applyLanguage();
    }


    function showLearningLesson(recommendation, moduleNumber = 1) {

        if (!dashboardContainer) return;

        const module = moduleNumber === 2
            ? {
                label: "MODULE 02 · PRACTICE THE CORE CONCEPTS",
                title: "Practice the core concepts",
                subtitle: "Survey Methodology · Beginner",
                sections: [
                    ["Sampling basics", "Sampling is the process of selecting a representative group from a wider population so findings can be gathered efficiently."],
                    ["Questionnaire design", "Clear, focused questions and a logical order help respondents understand what is being asked and provide useful answers."],
                    ["Sources of survey error", "Sampling, response, measurement, and processing errors can affect findings, so each stage should be planned and reviewed."]
                ]
            }
            : moduleNumber === 3
                ? {
                    label: "MODULE 03 · APPLY YOUR LEARNING",
                    title: "Apply your learning",
                    subtitle: "Survey Methodology · Beginner",
                    sections: [
                        ["Apply survey methodology to a real-world example", "Use a clear objective, appropriate sample, and well-structured questions to plan a practical survey."],
                        ["Identify common survey design issues", "Look for leading questions, unclear wording, response bias, and sampling choices that could affect findings."],
                        ["Use data quality checks to improve results", "Review completeness, consistency, and accuracy so the final results are reliable and useful."]
                    ]
                }
            : {
                label: "MODULE 01 · BUILD THE FOUNDATION",
                title: recommendation.title,
                subtitle: "Survey Methodology · Beginner",
                sections: [
                    ["What is Survey Methodology?", "Survey methodology is the structured process of planning, designing, collecting, and interpreting information from a group of respondents."],
                    ["Why survey design matters", "Thoughtful design helps questions stay clear and unbiased, so the responses provide useful evidence for decisions."],
                    ["Basic stages of a survey", "Define the objective, design the questions, select the sample, collect responses, and analyze the findings."]
                ]
            };

        dashboardContainer.innerHTML = `
            <section class="panel learning-lesson-panel">
                <button class="back-recommendations-button" id="backLearningPath" type="button">← Back to Learning Path</button>
                <div class="learning-path-heading"><span class="panel-label">${module.label}</span><h3>${module.title}</h3><p>${module.subtitle}</p></div>
                ${module.sections.map(section => `<div class="lesson-section"><h4>${section[0]}</h4><p>${section[1]}</p></div>`).join("")}
                <button class="primary-button mark-complete-button" id="markLessonComplete" type="button">Mark as Complete</button>
            </section>
        `;

        document.querySelector("#backLearningPath").addEventListener("click", () => moduleNumber === 3
            ? showLearningPath(recommendation, 66, "Completed", "Completed", "In Progress", "Module 2 completed.")
            : moduleNumber === 2
                ? showLearningPath(recommendation, 66, "Completed", "In Progress", "Not Started")
                : showLearningPath(recommendation, 33, "In Progress", "Not Started"));
        document.querySelector("#markLessonComplete").addEventListener("click", () => moduleNumber === 3
            ? showLearningPath(recommendation, 100, "Completed", "Completed", "Completed", "Learning path completed.")
            : moduleNumber === 2
                ? showLearningPath(recommendation, 66, "Completed", "Completed", "In Progress", "Module 2 completed.")
                : showLearningPath(recommendation, 66, "Completed", "In Progress"));
            applyLanguage();
    }


    function showAssessments() {

        if (!dashboardContainer) return;

        dashboardContainer.innerHTML = `
            <div class="assessments-intro">
                <div>
                    <span class="eyebrow">COMPETENCY CHECK</span>
                    <h1>Assessments</h1>
                    <p>Build confidence with focused questions matched to your learning goals.</p>
                </div>
                <div class="assessments-intro-icon">✓</div>
            </div>

            <section class="panel recommended-assessment">
                <div class="panel-header">
                    <div>
                        <span class="panel-label">RECOMMENDED FOR YOU</span>
                        <h3>Data Quality &amp; Validation Assessment</h3>
                    </div>
                    <span class="assessment-badge">Intermediate</span>
                </div>
                <div class="assessment-summary">
                    <div class="assessment-meta"><span>10 MCQs</span><span>10 minutes</span></div>
                    <p>Recommended based on your current competency gaps.</p>
                </div>
                <button class="primary-button start-assessment-button" id="startAssessment" type="button">Start Assessment <span>→</span></button>
            </section>

            <section class="panel recent-assessments">
                <div class="panel-header">
                    <div>
                        <span class="panel-label">YOUR ACTIVITY</span>
                        <h3>Recent Assessments</h3>
                    </div>
                </div>
                <div class="recent-assessment-list">
                    <div class="recent-assessment-row"><span>Data Analysis Basics</span><strong>82%</strong><em>Completed</em></div>
                    <div class="recent-assessment-row"><span>Statistical Concepts</span><strong>68%</strong><em>Completed</em></div>
                    <div class="recent-assessment-row"><span>Data Validation</span><strong>Not Attempted</strong><em class="not-attempted">Not Attempted</em></div>
                </div>
            </section>
        `;

        document.querySelector("#startAssessment").addEventListener("click", () => showAssessmentQuestion());
        applyLanguage();
    }


    function showAssessmentQuestion(questionNumber = 1, score = 0) {

        if (!dashboardContainer) return;

        const questions = [
            {
                prompt: "Which practice best improves data quality before analysis?",
                options: ["Removing all incomplete records", "Validating values against defined rules", "Changing values to match expectations", "Ignoring unusual values"],
                correct: 1,
                explanation: "Validation rules check whether values meet the expected format, range, and business requirements."
            },
            {
                prompt: "Which issue is most likely to reduce the accuracy of a dataset?",
                options: ["Consistent field names", "Duplicate records for the same entity", "Documented validation rules", "A complete data dictionary"],
                correct: 1,
                explanation: "Duplicate records can count the same entity more than once and distort analysis."
            },
            {
                prompt: "What is the best first step when investigating missing values?",
                options: ["Replace every blank with zero", "Delete every row with a blank", "Understand why the values are missing", "Copy the value from the previous row"],
                correct: 2,
                explanation: "Understanding the cause of missingness helps determine whether to impute, exclude, or retain the values."
            },
            {
                prompt: "Which measure summarizes the center of a distribution using the middle value?",
                options: ["Mean", "Median", "Range", "Variance"],
                correct: 1,
                explanation: "The median is the middle value after observations are ordered, making it useful for skewed data."
            },
            {
                prompt: "A validation rule requires an age field to be between 0 and 120. What does this rule check?",
                options: ["Completeness", "Range validity", "Uniqueness", "Formatting consistency"],
                correct: 1,
                explanation: "A range rule checks that a value falls within an acceptable lower and upper limit."
            },
            {
                prompt: "Which example demonstrates data consistency?",
                options: ["Every customer has a unique ID", "A date uses the same format in every record", "A survey contains optional questions", "A table has several columns"],
                correct: 1,
                explanation: "Using one date format across records makes the field consistent and easier to compare or process."
            },
            {
                prompt: "What is a common effect of an extreme outlier on the mean?",
                options: ["It pulls the mean toward its value", "It always leaves the mean unchanged", "It removes the median", "It guarantees a normal distribution"],
                correct: 0,
                explanation: "Because the mean uses every value, an extreme observation can pull it toward the outlier."
            },
            {
                prompt: "Which check helps identify whether a required field has been left blank?",
                options: ["A completeness check", "A correlation test", "A sampling check", "A visualization check"],
                correct: 0,
                explanation: "Completeness checks identify missing values in fields that are required for the process."
            },
            {
                prompt: "Why should categorical values such as department names be standardized?",
                options: ["To increase the number of categories", "To prevent equivalent labels from splitting results", "To remove all rare values", "To make numeric calculations possible"],
                correct: 1,
                explanation: "Standard labels prevent values such as 'HR' and 'Human Resources' from being counted as separate groups."
            },
            {
                prompt: "Which statistic describes how spread out values are around the mean?",
                options: ["Mode", "Median", "Standard deviation", "Count"],
                correct: 2,
                explanation: "Standard deviation measures the typical distance of observations from the mean."
            }
        ];

        if (questionNumber > questions.length) {
            showAssessmentComplete(score);
            return;
        }

        const question = questions[questionNumber - 1];

        dashboardContainer.innerHTML = `
            <section class="panel assessment-question-panel">
                <div class="question-topline"><span class="panel-label">DATA QUALITY &amp; VALIDATION ASSESSMENT</span><strong>Question ${questionNumber} of 10</strong></div>
                <div class="question-progress"><span style="width: ${questionNumber * 10}%"></span></div>
                <div class="question-content">
                    <span class="question-kicker">QUESTION ${String(questionNumber).padStart(2, "0")}</span>
                    <h3>${question.prompt}</h3>
                    <div class="answer-options">
                        ${question.options.map(option => `<button type="button" aria-pressed="false">${option}</button>`).join("")}
                    </div>
                    <div class="answer-feedback" aria-live="polite" hidden></div>
                    <button class="primary-button next-question-button" type="button" disabled>Next Question <span>→</span></button>
                </div>
            </section>
        `;

        const answerOptions = document.querySelectorAll(".answer-options button");
        const nextQuestionButton = document.querySelector(".next-question-button");
        const feedback = document.querySelector(".answer-feedback");
        let selectedIndex = null;

        answerOptions.forEach((option, index) => {
            option.addEventListener("click", () => {
                selectedIndex = index;
                answerOptions.forEach(answer => {
                    answer.classList.remove("selected", "correct", "incorrect");
                    answer.setAttribute("aria-pressed", "false");
                });

                option.classList.add("selected", index === question.correct ? "correct" : "incorrect");
                option.setAttribute("aria-pressed", "true");
                answerOptions[question.correct].classList.add("correct");
                answerOptions.forEach(answer => {
                    answer.disabled = true;
                });

                const isCorrect = selectedIndex === question.correct;
                feedback.hidden = false;
                feedback.className = `answer-feedback ${isCorrect ? "feedback-correct" : "feedback-incorrect"}`;
                feedback.innerHTML = `<strong>${isCorrect ? "Correct" : "Incorrect"}</strong><span>Correct answer: ${question.options[question.correct]}</span><p>${question.explanation}</p>`;
                nextQuestionButton.disabled = false;
            });
        });

        nextQuestionButton.addEventListener("click", () => {
            if (selectedIndex === null) return;
            showAssessmentQuestion(questionNumber + 1, score + (selectedIndex === question.correct ? 1 : 0));
        });
        applyLanguage();
    }


    function showAssessmentComplete(score) {

        if (!dashboardContainer) return;

        const performanceMessage = score >= 8
            ? "Strong performance. You have a solid foundation in data quality and validation."
            : score >= 5
                ? "Good progress. Review the areas you missed to strengthen your foundation."
                : "Keep practicing. Revisiting data quality and validation concepts will help build confidence.";

        dashboardContainer.innerHTML = `
            <section class="panel assessment-complete-panel">
                <div class="assessment-complete-icon">✓</div>
                <span class="panel-label">DATA QUALITY &amp; VALIDATION ASSESSMENT</span>
                <h3>Assessment Complete</h3>
                <p>You have completed the Data Quality &amp; Validation Assessment.</p>
                <div class="assessment-score">Score: ${score} / 10</div>
                <div class="assessment-performance">${performanceMessage}</div>
                <button class="primary-button back-to-assessments-button" id="backToAssessments" type="button">Back to Assessments</button>
            </section>
        `;

        document.querySelector("#backToAssessments").addEventListener("click", showAssessments);
        applyLanguage();
    }


    // ------------------------------------------
    // 6. LEARNING MATERIALS
    // ------------------------------------------

    function showLearningMaterials(showAnalysis = false, selectedMaterial = null) {

        if (!dashboardContainer) return;

        dashboardContainer.innerHTML = `
            <div class="materials-intro">
                <div>
                    <span class="eyebrow">MATERIAL INTELLIGENCE</span>
                    <h1>Turn learning resources into insight.</h1>
                    <p>Upload a resource and CompetencyAI will identify the concepts and competencies it covers.</p>
                </div>
                <div class="materials-intro-icon">✦</div>
            </div>

            <div class="materials-layout">
                <section class="panel upload-panel">
                    <div class="panel-header">
                        <div>
                            <span class="panel-label">NEW RESOURCE</span>
                            <h3>Upload learning material</h3>
                        </div>
                        <span class="file-type-badge">PDF · DOCX · TXT</span>
                    </div>

                    <div class="upload-zone" id="uploadZone" tabindex="0" role="button" aria-label="Choose a learning material">
                        <div class="upload-icon">↑</div>
                        <h4>Drop your file here</h4>
                        <p>or choose a file from your device</p>
                        <button class="secondary-button choose-file-button" type="button">Choose file</button>
                        <span class="upload-limit">Supported formats up to 25 MB</span>
                    </div>

                    <input class="file-input" id="materialFile" type="file" accept=".pdf,.docx,.txt">
                    <div class="selected-file" id="selectedFile" aria-live="polite"></div>

                    <button class="primary-button analyze-material-button" id="analyzeMaterial" type="button" disabled>
                        Analyze Material <span>→</span>
                    </button>
                </section>

                <aside class="panel analysis-panel">
                    <span class="panel-label">HOW IT WORKS</span>
                    <h3>From material to mastery</h3>
                    <div class="analysis-steps">
                        <div class="analysis-step"><b>01</b><span>Upload a resource</span></div>
                        <div class="analysis-step"><b>02</b><span>Analyze key concepts</span></div>
                        <div class="analysis-step"><b>03</b><span>Map relevant competencies</span></div>
                    </div>
                    <div class="analysis-note"><span>✦</span><p>Your material stays in this prototype session.</p></div>
                </aside>
            </div>

            <section class="panel results-panel" id="analysisResults" hidden></section>
        `;

        const fileInput = document.querySelector("#materialFile");
        const uploadZone = document.querySelector("#uploadZone");
        const chooseButton = document.querySelector(".choose-file-button");
        const selectedFile = document.querySelector("#selectedFile");
        const analyzeButton = document.querySelector("#analyzeMaterial");
        const results = document.querySelector("#analysisResults");

        function selectFile() {
            fileInput.click();
        }

        function renderFile(file) {
            if (!file) return;

            const fileSize = file.size < 1024 * 1024
                ? `${Math.max(1, Math.round(file.size / 1024))} KB`
                : `${(file.size / 1024 / 1024).toFixed(2)} MB`;

            selectedFile.innerHTML = `
                <div class="file-summary-icon">▤</div>
                <div class="file-summary-copy">
                    <strong></strong>
                    <span>${file.type || "Learning material"} · ${fileSize}</span>
                </div>
                <button class="remove-file" type="button" aria-label="Remove selected file">×</button>
            `;
            selectedFile.querySelector("strong").textContent = file.name;
            selectedFile.classList.add("visible");
            analyzeButton.disabled = false;
            results.hidden = true;
        }

        chooseButton.addEventListener("click", selectFile);
        uploadZone.addEventListener("click", selectFile);
        uploadZone.addEventListener("keydown", event => {
            if (event.key === "Enter" || event.key === " ") selectFile();
        });

        fileInput.addEventListener("change", () => renderFile(fileInput.files[0]));

        selectedFile.addEventListener("click", event => {
            if (!event.target.matches(".remove-file")) return;
            fileInput.value = "";
            selectedFile.classList.remove("visible");
            analyzeButton.disabled = true;
        });

        function showAnalysisResults() {
            results.hidden = false;
            results.classList.add("is-ready");
            results.innerHTML = `
                <div class="results-heading">
                    <div><span class="panel-label">PROTOTYPE ANALYSIS</span><h3>Analysis Results</h3></div>
                    <span class="complete-badge">Ready</span>
                </div>
                <div class="results-grid">
                    <div class="result-group"><h4>Extracted Concepts</h4><div class="tag-list"><span>Data validation</span><span>Missing values</span><span>Data consistency</span><span>Data accuracy</span></div></div>
                    <div class="result-group"><h4>Identified Competencies</h4><div class="tag-list competency-tags"><span>Data Quality</span><span>Data Validation</span><span>Statistical Analysis</span></div></div>
                </div>
            `;
        }

        if (selectedMaterial) renderFile(selectedMaterial);
        if (showAnalysis) showAnalysisResults();

        analyzeButton.addEventListener("click", () => {
            analyzeButton.disabled = true;
            analyzeButton.innerHTML = '<span class="loading-spinner"></span> Analyzing material...';
            results.hidden = false;
            results.classList.remove("is-ready");
            results.innerHTML = '<div class="analysis-loading"><span class="loading-spinner"></span><strong>Reading your material</strong><p>Identifying concepts and competency signals...</p></div>';

            window.setTimeout(() => {
                showAnalysisResults();
                analyzeButton.innerHTML = 'Analyze Material <span>→</span>';
                analyzeButton.disabled = false;
            }, 1400);
        });
        applyLanguage();
    }


    // ------------------------------------------
    // 7. UPLOAD MATERIAL
    // ------------------------------------------

    function openFilePicker() {

        const input = document.createElement("input");

        input.type = "file";

        input.accept = ".pdf,.doc,.docx,.txt";

        input.style.display = "none";

        document.body.appendChild(input);

        input.addEventListener("change", function () {

            const file = this.files[0];

            if (!file) return;

            showUploadResult(file);

            document.body.removeChild(input);
        });

        input.click();
    }


    // ------------------------------------------
    // 8. SHOW UPLOADED FILE
    // ------------------------------------------

    function showUploadResult(file) {

        const fileSize = (file.size / 1024 / 1024).toFixed(2);

        const modal = document.createElement("div");

        modal.id = "uploadModal";

        modal.style.cssText = `
            position: fixed;
            inset: 0;
            background: rgba(15, 23, 42, 0.45);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            padding: 20px;
        `;

        modal.innerHTML = `
            <div style="
                background: white;
                width: 100%;
                max-width: 480px;
                border-radius: 18px;
                padding: 30px;
                box-shadow: 0 20px 50px rgba(0,0,0,0.15);
            ">

                <div style="
                    font-size: 35px;
                    margin-bottom: 12px;
                ">
                    📄
                </div>

                <h2 style="
                    margin: 0 0 8px;
                    color: #111827;
                ">
                    Material Selected
                </h2>

                <p style="
                    color: #6b7280;
                    margin-bottom: 20px;
                ">
                    Your learning material is ready for analysis.
                </p>

                <div style="
                    background: #f8fafc;
                    border: 1px solid #e5e7eb;
                    border-radius: 12px;
                    padding: 15px;
                    margin-bottom: 20px;
                ">

                    <strong>${file.name}</strong>

                    <div style="
                        color: #6b7280;
                        font-size: 13px;
                        margin-top: 5px;
                    ">
                        ${fileSize} MB
                    </div>

                </div>

                <div style="
                    display: flex;
                    gap: 10px;
                ">

                    <button id="analyzeBtn" style="
                        flex: 1;
                        border: none;
                        border-radius: 10px;
                        padding: 12px;
                        background: #2563eb;
                        color: white;
                        font-weight: 600;
                        cursor: pointer;
                    ">
                        Analyze Material
                    </button>

                    <button id="cancelBtn" style="
                        padding: 12px 18px;
                        border: 1px solid #d1d5db;
                        border-radius: 10px;
                        background: white;
                        cursor: pointer;
                    ">
                        Cancel
                    </button>

                </div>

            </div>
        `;

        document.body.appendChild(modal);


        // Cancel button
        document
            .getElementById("cancelBtn")
            .addEventListener("click", () => {
                modal.remove();
            });


        // Analyze button
        document
            .getElementById("analyzeBtn")
            .addEventListener("click", () => {

                const button = document.getElementById("analyzeBtn");

                button.textContent = "Analyzing...";

                button.disabled = true;

                setTimeout(() => {

                    modal.innerHTML = `
                        <div style="
                            background: white;
                            width: 100%;
                            max-width: 480px;
                            border-radius: 18px;
                            padding: 35px;
                            text-align: center;
                        ">

                            <div style="
                                font-size: 45px;
                                margin-bottom: 15px;
                            ">
                                ✅
                            </div>

                            <h2 style="
                                color: #111827;
                                margin-bottom: 10px;
                            ">
                                Analysis Complete
                            </h2>

                            <p style="
                                color: #6b7280;
                                line-height: 1.6;
                            ">
                                The material has been analyzed.
                                Competencies and learning concepts can now
                                be mapped for personalized learning.
                            </p>

                            <button id="closeAnalysis" style="
                                margin-top: 20px;
                                border: none;
                                border-radius: 10px;
                                padding: 12px 25px;
                                background: #2563eb;
                                color: white;
                                font-weight: 600;
                                cursor: pointer;
                            ">
                                Continue
                            </button>

                        </div>
                    `;

                    document
                        .getElementById("closeAnalysis")
                        .addEventListener("click", () => {
                            modal.remove();
                            const results = document.querySelector("#analysisResults");

                            if (results) {
                                results.hidden = false;
                                results.classList.add("is-ready");
                                results.innerHTML = `
                                    <div class="results-heading">
                                        <div><span class="panel-label">PROTOTYPE ANALYSIS</span><h3>Analysis Results</h3></div>
                                        <span class="complete-badge">Ready</span>
                                    </div>
                                    <div class="results-grid">
                                        <div class="result-group"><h4>Extracted Concepts</h4><div class="tag-list"><span>Data validation</span><span>Missing values</span><span>Data consistency</span><span>Data accuracy</span></div></div>
                                        <div class="result-group"><h4>Identified Competencies</h4><div class="tag-list competency-tags"><span>Data Quality</span><span>Data Validation</span><span>Statistical Analysis</span></div></div>
                                    </div>
                                `;
                                return;
                            }

                            changePage("Learning Materials", true, file);
                        });

                }, 1500);
            });
    }


    // ------------------------------------------
    // 9. DASHBOARD BUTTONS
    // ------------------------------------------

    function attachDashboardButtons() {

        // Upload Material buttons
        const uploadButtons = document.querySelectorAll(
            "button"
        );

        uploadButtons.forEach(button => {

            const text = button.innerText.trim();

            if (text.includes("Upload Material")) {

                button.addEventListener("click", openFilePicker);

            }

            if (text.includes("Take Assessment")) {

                button.addEventListener("click", () => {
                    navItems.forEach(nav => nav.classList.remove("active"));
                    Array.from(navItems).find(nav => nav.dataset.pageName === "Assessments")?.classList.add("active");
                    changePage("Assessments");

                });

            }

            if (text.includes("Explore Recommendations")) {

                button.addEventListener("click", () => {
                    navItems.forEach(nav => nav.classList.remove("active"));
                    Array.from(navItems).find(nav => nav.dataset.pageName === "Recommendations")?.classList.add("active");
                    changePage("Recommendations");

                });

            }

            if (text.includes("View Personalized Path")) {

                button.addEventListener("click", () => {
                    navItems.forEach(nav => nav.classList.remove("active"));
                    Array.from(navItems).find(nav => nav.dataset.pageName === "Recommendations")?.classList.add("active");
                    changePage("Recommendations", false, null, true);

                });

            }
        });

        const viewCompetenciesButton = document.querySelector("#viewCompetencies");

        if (viewCompetenciesButton) {
            viewCompetenciesButton.addEventListener("click", () => {
                navItems.forEach(nav => nav.classList.remove("active"));
                Array.from(navItems).find(nav => nav.dataset.pageName === "My Competencies")?.classList.add("active");
                changePage("My Competencies");
            });
        }

        const learningPeriodControl = document.querySelector("#learningPeriodControl");

        if (learningPeriodControl) {
            learningPeriodControl.addEventListener("click", () => {
                const isMonth = learningPeriodControl.dataset.period === "month";
                learningPeriodControl.dataset.period = isMonth ? "week" : "month";
                learningPeriodControl.textContent = isMonth ? "This week⌄" : "This month⌄";

                const chartBars = document.querySelectorAll(".chart-bars div");
                const values = isMonth ? [30, 44, 55, 48, 64, 72, 82] : [38, 52, 45, 68, 60, 78, 86];
                chartBars.forEach((bar, index) => {
                    bar.style.height = `${values[index]}%`;
                });
                applyLanguage();
            });
        }
    }


    // ------------------------------------------
    // 10. INITIALIZE DASHBOARD BUTTONS
    // ------------------------------------------

    attachDashboardButtons();
    applyLanguage();


    // ------------------------------------------
    // 11. NOTIFICATION BUTTON
    // ------------------------------------------

    const notificationButton =
        document.querySelector(".icon-button[aria-label='Notifications']");

    if (notificationButton) {

        notificationButton.addEventListener("click", () => {

            alert(
                "🔔 Notifications\n\n" +
                "You have 1 new learning recommendation."
            );

        });

    }


    // ------------------------------------------
    // 12. PROFILE BUTTON
    // ------------------------------------------

    const profile =
        document.querySelector(".profile");

    if (profile) {

        profile.addEventListener("click", () => {

            let savedProfile = { name: "Vanshika", role: "Learner" };

            try {
                savedProfile = { ...savedProfile, ...JSON.parse(localStorage.getItem("competencyAIProfile") || "{}") };
            } catch (error) {
                savedProfile = { name: "Vanshika", role: "Learner" };
            }

            alert(
                "👤 Learner Profile\n\n" +
                `Name: ${savedProfile.name}\n` +
                `Role: ${savedProfile.role}`
            );

        });

    }

});
    
    fetch("http://localhost:8080/api/competencies")
    .then(response => response.json())
    .then(data => {
        console.log("Competency data from backend:", data);

        const dataQuality = data.find(
            competency => competency.name === "Data Quality"
        );

        if (dataQuality) {
            document.getElementById("dataQualityScore").textContent =
                dataQuality.score + "%";
        }
    })
    .catch(error => {
        console.error("Backend connection error:", error);
    });