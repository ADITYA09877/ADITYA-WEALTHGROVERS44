const indianCourses = [
    {
        id: 1,
        name: 'Chartered Accountancy (CA)',
        duration: '4.5-5 years',
        durationValue: '4+',
        mode: 'Self-study + Exams',
        conductor: 'The Institute of Chartered Accountants of India (ICAI)',
        cost: '₹1-2 Lakh',
        costValue: 'low',
        eligibility: 'Pass 12+2 any stream',
        procedure: 'Register with ICAI → CA Foundation → Intermediate → Articleship → Final Exam',
        careerPath: 'Auditor, Tax Consultant, CFO, Investment Banker',
        institutes: 'ICAI (Exam Body)'
    },
    {
        id: 2,
        name: 'Company Secretary (CS)',
        duration: '3-4 years',
        durationValue: '3-4',
        mode: 'Self-study + Exams',
        conductor: 'The Institute of Company Secretaries of India (ICSI)',
        cost: '₹1 Lakh',
        costValue: 'low',
        eligibility: 'Pass 12+2 any stream',
        procedure: 'Register with ICSI → Foundation → Intermediate → Final Exam',
        careerPath: 'Legal & Compliance Advisor, Corporate Secretary, Governance Expert',
        institutes: 'ICSI (Exam Body)'
    },
    {
        id: 3,
        name: 'Cost & Management Accounting (CMA)',
        duration: '3-4 years',
        durationValue: '3-4',
        mode: 'Self-study + Exams',
        conductor: 'The Institute of Cost Accountants of India (ICMAI)',
        cost: '₹1 Lakh',
        costValue: 'low',
        eligibility: 'Pass 12+2 any stream',
        procedure: 'Register with ICMAI → Foundation → Intermediate → Final Exam',
        careerPath: 'Cost Controller, Financial Analyst, Budget Manager',
        institutes: 'ICMAI (Exam Body)'
    },
    {
        id: 4,
        name: 'Bachelor of Commerce (B.Com)',
        duration: '3 years',
        durationValue: '2-3',
        mode: 'College-based',
        conductor: 'Various Universities',
        cost: '₹30,000 - ₹1.5 Lakh/year',
        costValue: 'low',
        eligibility: 'Pass 12+2 with Commerce',
        procedure: 'Merit-based admission through 12+2 marks or entrance exam',
        careerPath: 'Accountant, Banker, Financial Analyst, Auditor',
        institutes: 'Delhi University, Christ University, Loyola College, SRCC'
    },
    {
        id: 5,
        name: 'BBA in Finance / BMS (Finance Specialization)',
        duration: '3 years',
        durationValue: '2-3',
        mode: 'College-based',
        conductor: 'Various Universities',
        cost: '₹2-6 Lakh total',
        costValue: 'low',
        eligibility: 'Pass 12+2 any stream',
        procedure: 'Merit-based or entrance exam based admission',
        careerPath: 'Financial Analyst, Wealth Manager, Investment Advisor',
        institutes: 'NMIMS, Symbiosis, Amity University, Delhi University'
    },
    {
        id: 6,
        name: 'MBA in Finance',
        duration: '2 years',
        durationValue: '1-2',
        mode: 'College-based',
        conductor: 'Top Business Schools',
        cost: '₹10-25 Lakh',
        costValue: 'low',
        eligibility: 'Bachelor\'s degree + CAT/GMAT + Work experience (preferred)',
        procedure: 'Entrance exam (CAT/XAT) → Written test → Personal Interview',
        careerPath: 'Investment Banker, Financial Planner, Corporate Finance Manager',
        institutes: 'IIM Ahmedabad, IIM Bangalore, XLRI, FMS Delhi, ISB'
    },
    {
        id: 7,
        name: 'Certified Financial Planner (CFP)',
        duration: '1-1.5 years',
        durationValue: '1-2',
        mode: 'Self-study or Training Institute + Exams',
        conductor: 'Financial Planning Standards Board (FPSB India)',
        cost: '₹1.5-2 Lakh',
        costValue: 'low',
        eligibility: 'Bachelor\'s degree + Work experience in finance',
        procedure: 'Training → Comprehensive exam → Compliance with standards',
        careerPath: 'Financial Planner, Wealth Manager, Investment Consultant',
        institutes: 'FPSB India authorized centers'
    },
    {
        id: 8,
        name: 'Financial Modelling & Valuation Analyst (FMVA)',
        duration: '6-12 months',
        durationValue: '1-2',
        mode: 'Online Self-paced',
        conductor: 'CFI.org and other training providers',
        cost: '₹50,000 - ₹1 Lakh',
        costValue: 'low',
        eligibility: 'Bachelor\'s degree or working professional',
        procedure: 'Online course enrollment → Self-paced learning → Certification exam',
        careerPath: 'Financial Analyst, Investment Banker, Valuation Specialist',
        institutes: 'CFI.org, Investopedia, Various Online Platforms'
    },
    {
        id: 9,
        name: 'Stock Market & Investment Analysis Course',
        duration: '6-12 months',
        durationValue: '1-2',
        mode: 'Course-based / Online',
        conductor: 'NSE Academy, BSE Institute',
        cost: '₹30,000 - ₹1 Lakh',
        costValue: 'low',
        eligibility: 'Pass 12+2 any stream',
        procedure: 'Course enrollment → Online/Classroom training → Certification test',
        careerPath: 'Stock Broker, Investment Advisor, Market Analyst',
        institutes: 'NSE Academy, BSE Institute, Nifty Trading Academy'
    },
    {
        id: 10,
        name: 'Bachelor of Economics (B.Econ / B.A. Hons Economics)',
        duration: '3 years',
        durationValue: '2-3',
        mode: 'College-based',
        conductor: 'Various Universities',
        cost: '₹50,000 - ₹2 Lakh',
        costValue: 'low',
        eligibility: 'Pass 12+2 any stream',
        procedure: 'Merit-based or entrance exam based admission',
        careerPath: 'Economic Analyst, Financial Researcher, Policy Advisor',
        institutes: 'SRCC (Delhi), St. Xavier\'s (Mumbai), Presidency (Kolkata)'
    }
];

const abroadCourses = [
    {
        id: 1,
        name: 'MBA in Finance',
        countries: 'USA, UK, Canada, Australia',
        duration: '1-2 years',
        durationValue: '1-2',
        cost: '₹80 Lakh - ₹1.5 Crore',
        costValue: 'high',
        eligibility: 'Bachelor\'s degree + GMAT (650+) + Work Experience (2-5 years)',
        admission: 'GMAT exam → Written application → Essay → Personal Interview',
        universities: [
            'Harvard Business School, Boston, USA',
            'London Business School, London, UK',
            'Rotman School of Management, Toronto, Canada',
            'University of Melbourne - Melbourne Business School, Australia'
        ]
    },
    {
        id: 2,
        name: 'Master\'s in Finance (MFin)',
        countries: 'UK, USA, Canada, Germany',
        duration: '1-2 years',
        durationValue: '1-2',
        cost: '₹35-70 Lakh',
        costValue: 'medium',
        eligibility: 'Bachelor\'s degree in any field + Strong academic record + GMAT/GRE',
        admission: 'Standardized test (GMAT/GRE) → Application → Interview',
        universities: [
            'London School of Economics (LSE), UK',
            'MIT Sloan School of Management, USA',
            'University of Toronto - Rotman, Canada',
            'University of Mannheim, Germany'
        ]
    },
    {
        id: 3,
        name: 'Master\'s in Financial Engineering / Quantitative Finance',
        countries: 'USA, Singapore, Switzerland',
        duration: '1-2 years',
        durationValue: '1-2',
        cost: '₹60-90 Lakh',
        costValue: 'high',
        eligibility: 'Strong math/physics/engineering background + GMAT/GRE',
        admission: 'GRE exam + Strong technical background + Coding skills',
        universities: [
            'Columbia University, New York, USA',
            'National University of Singapore (NUS)',
            'ETH Zurich, Switzerland',
            'Stanford University, USA'
        ]
    },
    {
        id: 4,
        name: 'Chartered Financial Analyst (CFA)',
        countries: 'Global Program (can study anywhere)',
        duration: '3-4 years',
        durationValue: '3-4',
        cost: '₹3.5-4 Lakh total',
        costValue: 'low',
        eligibility: 'Bachelor\'s degree + 4 years investment work experience',
        admission: 'Self-study + Three level exams + Ethical standards compliance',
        universities: [
            'CFA Institute, USA (Global Organization)',
            'Study from any location worldwide'
        ]
    },
    {
        id: 5,
        name: 'Master\'s in Accounting and Auditing',
        countries: 'Canada, Australia, Germany',
        duration: '1-2 years',
        durationValue: '1-2',
        cost: '₹40-80 Lakh',
        costValue: 'medium',
        eligibility: 'Bachelor\'s degree + GMAT/GRE + English proficiency',
        admission: 'Standardized tests + Application + Interview',
        universities: [
            'University of Toronto, Canada',
            'University of Melbourne, Australia',
            'University of Cologne, Germany'
        ]
    },
    {
        id: 6,
        name: 'Master\'s in Financial Economics',
        countries: 'UK, USA',
        duration: '1-2 years',
        durationValue: '1-2',
        cost: '₹50-80 Lakh',
        costValue: 'medium',
        eligibility: 'Bachelor\'s in Economics/Finance/related field + Strong math skills',
        admission: 'GMAT/GRE + Relevant coursework + Research interest',
        universities: [
            'Oxford University, UK',
            'Yale University, USA',
            'University of Cambridge, UK'
        ]
    },
    {
        id: 7,
        name: 'Certified Public Accountant (CPA)',
        countries: 'USA',
        duration: 'Self-paced (varies)',
        durationValue: '1-2',
        cost: '₹2-3 Lakh',
        costValue: 'low',
        eligibility: 'Bachelor\'s degree + Accounting/Business courses + Work experience',
        admission: 'State board requirements + CPA exam (4 parts) + Ethics course',
        universities: [
            'AICPA (American Institute of CPAs) - Exam body',
            'Study from any location in USA'
        ]
    },
    {
        id: 8,
        name: 'Master\'s in FinTech / Digital Finance',
        countries: 'UK, Singapore, Canada',
        duration: '1 year',
        durationValue: '1-2',
        cost: '₹40-60 Lakh',
        costValue: 'medium',
        eligibility: 'Bachelor\'s degree in any field + Tech/coding interest',
        admission: 'Application + Portfolio (if tech background) + Interview',
        universities: [
            'University College London, UK',
            'Nanyang Technological University (NTU), Singapore',
            'University of Toronto - Blockchain/FinTech, Canada'
        ]
    },
    {
        id: 9,
        name: 'Master\'s in Actuarial Science',
        countries: 'UK, USA, Australia',
        duration: '1-2 years',
        durationValue: '1-2',
        cost: '₹50-90 Lakh',
        costValue: 'high',
        eligibility: 'Bachelor\'s with strong math + Passed actuarial exams (preferred)',
        admission: 'Strong math background + GMAT/GRE + Actuarial society exams',
        universities: [
            'Heriot-Watt University, UK',
            'Columbia University, USA',
            'University of Melbourne, Australia'
        ]
    },
    {
        id: 10,
        name: 'FRM (Financial Risk Manager)',
        countries: 'Global Program (can study anywhere)',
        duration: '1-2 years',
        durationValue: '1-2',
        cost: '₹1.5-2 Lakh',
        costValue: 'low',
        eligibility: 'Bachelor\'s degree + 2 years finance/risk work experience',
        admission: 'Self-study + Two level exams + GARP registration',
        universities: [
            'GARP (Global Association of Risk Professionals) - Exam body',
            'Study from any location worldwide'
        ]
    }
];

function showCourses(type) {
    document.getElementById('selector-view').style.display = 'none';
    document.getElementById('india-view').classList.remove('active');
    document.getElementById('abroad-view').classList.remove('active');

    if (type === 'india') {
        document.getElementById('india-view').classList.add('active');
        renderIndianCourses(indianCourses);
    } else if (type === 'abroad') {
        document.getElementById('abroad-view').classList.add('active');
        renderAbroadCourses(abroadCourses);
    }
}

function backToSelector() {
    document.getElementById('selector-view').style.display = 'block';
    document.getElementById('india-view').classList.remove('active');
    document.getElementById('abroad-view').classList.remove('active');
    document.getElementById('india-search').value = '';
    document.getElementById('india-duration').value = '';
    document.getElementById('abroad-search').value = '';
    document.getElementById('abroad-cost').value = '';
}

function renderIndianCourses(courses) {
    const container = document.getElementById('india-courses');
    container.innerHTML = '';

    if (courses.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <p>No courses found. Try adjusting your filters.</p>
            </div>
        `;
        return;
    }

    courses.forEach((course, index) => {
        container.innerHTML += `
            <div class="course-item" onclick="toggleCourseExpand(this)">
                <div class="course-header">
                    <h3>${course.name}</h3>
                    <div class="course-badge">${course.duration}</div>
                </div>
                <div class="course-body">
                    <div class="course-detail">
                        <div class="course-detail-label"><i class="fas fa-hourglass-end"></i> Duration</div>
                        <div class="course-detail-value">${course.duration}</div>
                    </div>
                    <div class="course-detail">
                        <div class="course-detail-label"><i class="fas fa-graduation-cap"></i> Mode</div>
                        <div class="course-detail-value">${course.mode}</div>
                    </div>
                    <div class="course-detail">
                        <div class="course-detail-label"><i class="fas fa-building"></i> Conductor</div>
                        <div class="course-detail-value">${course.conductor}</div>
                    </div>
                    <div class="course-detail">
                        <div class="course-detail-label"><i class="fas fa-tag"></i> Cost</div>
                        <div class="course-detail-value">${course.cost}</div>
                    </div>
                    <div class="course-detail">
                        <div class="course-detail-label"><i class="fas fa-check-circle"></i> Eligibility</div>
                        <div class="course-detail-value">${course.eligibility}</div>
                    </div>
                    <div class="course-detail">
                        <div class="course-detail-label"><i class="fas fa-list-check"></i> Procedure</div>
                        <div class="course-detail-value">${course.procedure}</div>
                    </div>
                    <div class="course-detail">
                        <div class="course-detail-label"><i class="fas fa-briefcase"></i> Career Path</div>
                        <div class="course-detail-value">${course.careerPath}</div>
                    </div>
                    <div class="course-detail">
                        <div class="course-detail-label"><i class="fas fa-university"></i> Top Institutes</div>
                        <div class="course-detail-value">${course.institutes}</div>
                    </div>
                </div>
                <div class="course-footer">
                    <button class="expand-btn">
                        <i class="fas fa-chevron-down"></i> <span>Show More</span>
                    </button>
                </div>
            </div>
        `;
    });
}

function renderAbroadCourses(courses) {
    const container = document.getElementById('abroad-courses');
    container.innerHTML = '';

    if (courses.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <p>No courses found. Try adjusting your filters.</p>
            </div>
        `;
        return;
    }

    courses.forEach((course, index) => {
        const universityList = course.universities.map(uni => `<li style="margin-bottom: 0.5rem;">• ${uni}</li>`).join('');
        container.innerHTML += `
            <div class="course-item" onclick="toggleCourseExpand(this)">
                <div class="course-header">
                    <h3>${course.name}</h3>
                    <div class="course-badge">${course.countries}</div>
                </div>
                <div class="course-body">
                    <div class="course-detail">
                        <div class="course-detail-label"><i class="fas fa-globe"></i> Best Countries</div>
                        <div class="course-detail-value">${course.countries}</div>
                    </div>
                    <div class="course-detail">
                        <div class="course-detail-label"><i class="fas fa-hourglass-end"></i> Duration</div>
                        <div class="course-detail-value">${course.duration}</div>
                    </div>
                    <div class="course-detail">
                        <div class="course-detail-label"><i class="fas fa-tag"></i> Cost (Tuition + Living)</div>
                        <div class="course-detail-value">${course.cost}</div>
                    </div>
                    <div class="course-detail">
                        <div class="course-detail-label"><i class="fas fa-check-circle"></i> Eligibility & Admission</div>
                        <div class="course-detail-value">${course.eligibility}</div>
                    </div>
                    <div class="course-detail">
                        <div class="course-detail-label"><i class="fas fa-clipboard-list"></i> Admission Process</div>
                        <div class="course-detail-value">${course.admission}</div>
                    </div>
                    <div class="course-detail">
                        <div class="course-detail-label"><i class="fas fa-university"></i> Top Universities</div>
                        <div class="course-detail-value">
                            <ul style="list-style: none; padding: 0;">${universityList}</ul>
                        </div>
                    </div>
                </div>
                <div class="course-footer">
                    <button class="expand-btn">
                        <i class="fas fa-chevron-down"></i> <span>Show More</span>
                    </button>
                </div>
            </div>
        `;
    });
}

function toggleCourseExpand(element) {
    const allCourses = element.parentElement.querySelectorAll('.course-item');
    allCourses.forEach(course => {
        if (course !== element && course.classList.contains('expanded')) {
            course.classList.remove('expanded');
            const btn = course.querySelector('.expand-btn span');
            btn.textContent = 'Show More';
        }
    });

    element.classList.toggle('expanded');
    const btn = element.querySelector('.expand-btn span');
    btn.textContent = element.classList.contains('expanded') ? 'Show Less' : 'Show More';
}

function filterIndianCourses() {
    const searchTerm = document.getElementById('india-search').value.toLowerCase();
    const durationFilter = document.getElementById('india-duration').value;

    const filtered = indianCourses.filter(course => {
        const matchesSearch = course.name.toLowerCase().includes(searchTerm) ||
                            course.careerPath.toLowerCase().includes(searchTerm) ||
                            course.institutes.toLowerCase().includes(searchTerm);
        const matchesDuration = !durationFilter || course.durationValue === durationFilter;

        return matchesSearch && matchesDuration;
    });

    renderIndianCourses(filtered);
}

function filterAbroadCourses() {
    const searchTerm = document.getElementById('abroad-search').value.toLowerCase();
    const costFilter = document.getElementById('abroad-cost').value;

    const filtered = abroadCourses.filter(course => {
        const matchesSearch = course.name.toLowerCase().includes(searchTerm) ||
                            course.countries.toLowerCase().includes(searchTerm);

        let matchesCost = true;
        if (costFilter === 'low') {
            matchesCost = course.costValue === 'low';
        } else if (costFilter === 'medium') {
            matchesCost = course.costValue === 'medium';
        } else if (costFilter === 'high') {
            matchesCost = course.costValue === 'high';
        }

        return matchesSearch && matchesCost;
    });

    renderAbroadCourses(filtered);
}
