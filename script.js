// Ähli ýazuw elementini saýlaň​
const typingEl = document.querySelectorAll('.animate-typing')

// Bärden ýazmaga başlaň
const startTyping = (el) => {
    // Elementdäki ähli nyşanlary aýlaň
    [...el.querySelectorAll('span')].every(spanEl => {
        // Ilkinji gizlin aralyk elementini gizlemek
        if (spanEl.classList.contains('char-hide')) {
            // elementi gizle
            spanEl.classList.remove('char-hide')

            if (el.querySelectorAll('span.char-hide').length == 0) {
                /**
                 *Ähli nyşanlaryň görkezilendigini / görkezilýändigini barlaň
                  * - Hawa bolsa 3s-den soň täzeden gizläň we animasiýany täzeden işlediň
                 */
                setTimeout(() => {
                    el.querySelectorAll('span').forEach((spanEL2, i) => {
                        // Kursor elementini däl-de, diňe nyşanlary gizläň
                        if ((i + 1) < el.querySelectorAll('span').length)
                            spanEL2.classList.add('char-hide')
                    })
                    // Rerun Animation
                    startTyping(el)
                }, 3000)
            } else {
                setTimeout(() => {
                    // Rerun Animation
                    startTyping(el)
                }, 100)
            }
            return false
        }
        return true
    })

}
// Ýazuw animasiýasy synpy bolan ähli elementlere ýazuw animasiýasyny başlaň
typingEl.forEach(el => {
    // Ähli nyşanlary bölüň
    var elTxtSplit = el.innerText.split("")
    // Täze element HTML mazmuny
    var newContent = ``;
    elTxtSplit.forEach(char => {
        // Aralyk elementi bilen gurlan nyşanlary täzeläň
        newContent += `<span class="char-hide">${char}</span>`;
    })
    // ýazýan kursor elementini goşuň
    newContent += `<span></span>`;
    // element mazmunyny täze mazmun bilen täzeläň
    el.innerHTML = newContent

    // Animasiýa başlaň
    startTyping(el)
})
