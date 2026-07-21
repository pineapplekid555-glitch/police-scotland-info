// Search functionality for state codes
function searchCodes() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    const query = searchInput.value.toLowerCase();
    const resultsDiv = document.getElementById('searchResults');
    
    if (query.length === 0) {
        resultsDiv.innerHTML = '';
        return;
    }
    
    // Sample codes data
    const codes = [
        { code: '01', description: 'Violent Crime - Homicide', category: 'Serious' },
        { code: '02', description: 'Violent Crime - Assault', category: 'Moderate' },
        { code: '03', description: 'Sexual Offence', category: 'Serious' },
        { code: '04', description: 'Robbery', category: 'Serious' },
        { code: '05', description: 'Burglary - Residential', category: 'Moderate' },
        { code: '06', description: 'Burglary - Commercial', category: 'Moderate' },
        { code: '07', description: 'Theft - Vehicle', category: 'Minor' },
        { code: '08', description: 'Theft - Other', category: 'Minor' },
        { code: '11', description: 'Drug Possession - Class A', category: 'Serious' },
        { code: '12', description: 'Drug Possession - Class B', category: 'Moderate' },
        { code: '13', description: 'Drug Possession - Class C', category: 'Minor' },
        { code: '14', description: 'Drug Supply/Trafficking', category: 'Serious' },
        { code: '15', description: 'Drug Manufacturing', category: 'Serious' },
        { code: '21', description: 'Speeding Violation', category: 'Minor' },
        { code: '22', description: 'Reckless Driving', category: 'Moderate' },
        { code: '23', description: 'Driving Under Influence', category: 'Serious' },
        { code: '24', description: 'Vehicle License Plate Violation', category: 'Minor' },
        { code: '25', description: 'Motor Vehicle Accident', category: 'Minor' },
        { code: '31', description: 'Welfare Check', category: 'Administrative' },
        { code: '32', description: 'Lost and Found Property', category: 'Administrative' },
        { code: '33', description: 'Community Engagement', category: 'Administrative' },
        { code: '34', description: 'Traffic Control', category: 'Administrative' },
        { code: '35', description: 'Accident Investigation', category: 'Administrative' }
    ];
    
    // Filter codes based on search
    const filtered = codes.filter(item => 
        item.code.includes(query) || 
        item.description.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
    );
    
    // Display results
    if (filtered.length === 0) {
        resultsDiv.innerHTML = '<p style="padding: 1rem; background-color: #fff3cd; border-radius: 4px; color: #856404;">No results found. Try a different search term.</p>';
    } else {
        let html = '<table class="codes-table" style="margin-top: 1rem;"><thead><tr><th>Code</th><th>Description</th><th>Category</th></tr></thead><tbody>';
        
        filtered.forEach(item => {
            const categoryClass = getCategoryClass(item.category);
            html += `<tr><td class="code">${item.code}</td><td>${item.description}</td><td><span class="badge ${categoryClass}">${item.category}</span></td></tr>`;
        });
        
        html += '</tbody></table>';
        resultsDiv.innerHTML = html;
    }
}

// Helper function to get badge class based on category
function getCategoryClass(category) {
    switch(category) {
        case 'Serious':
            return 'danger';
        case 'Moderate':
            return 'warning';
        case 'Minor':
            return 'info';
        case 'Administrative':
            return 'success';
        default:
            return 'info';
    }
}

// Add enter key support for search
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                searchCodes();
            }
        });
    }
    
    // Highlight active navigation link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});