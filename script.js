document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-input');

    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Mencegah form submit (jika ada)
            searchInput.value = ''; // Menghapus teks di dalam input
        }
    });
});
