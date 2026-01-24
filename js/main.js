function showLevel(level) {
    const b2Content = document.getElementById('content-B2');
    const c2Content = document.getElementById('content-C2');
    const btnB2 = document.getElementById('btn-B2');
    const btnC2 = document.getElementById('btn-C2');

    if (level === 'B2') {
        b2Content.classList.remove('hidden');
        c2Content.classList.add('hidden');
        btnB2.classList.add('bg-emerald-500', 'text-white');
        btnC2.classList.remove('bg-indigo-600', 'text-white');
    } else {
        b2Content.classList.add('hidden');
        c2Content.classList.remove('hidden');
        btnB2.classList.remove('bg-emerald-500', 'text-white');
        btnC2.classList.add('bg-indigo-600', 'text-white');
    }
}