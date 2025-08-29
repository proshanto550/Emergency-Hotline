// Heart Count Increase
function heartCount () {
    let heart = parseInt(document.getElementById("heart-count").innerText);
    heart++;
    document.getElementById("heart-count").innerText = heart;
}

document.getElementById("love1").addEventListener("click", function(){
    heartCount();
})
document.getElementById("love2").addEventListener("click", function(){
    heartCount();
})
document.getElementById("love3").addEventListener("click", function(){
    heartCount();
})
document.getElementById("love4").addEventListener("click", function(){
    heartCount();
})
document.getElementById("love5").addEventListener("click", function(){
    heartCount();
})
document.getElementById("love6").addEventListener("click", function(){
    heartCount();
})
document.getElementById("love7").addEventListener("click", function(){
    heartCount();
})
document.getElementById("love8").addEventListener("click", function(){
    heartCount();
})
document.getElementById("love9").addEventListener("click", function(){
    heartCount();
})


// Call with History Functionality
function calling (numberBtn, serviceBtn) {
    let coins = parseInt(document.getElementById("coin").innerText);
    if(coins < 20) {
        alert("Not enough coins (min 20 coins) to make a call");
        return;
    }
        const number = document.getElementById(numberBtn).textContent.trim();
        const service = document.getElementById(serviceBtn).textContent.trim();
        coins = coins - 20;
        alert(`📞Calling ${service} ${number} `);
        document.getElementById("coin").innerText = coins;
}

document.getElementById("call-btn1").addEventListener("click", function() {
    calling("num1", "service1");
})
document.getElementById("call-btn2").addEventListener("click", function() {
    calling("num2", "service2");
})
document.getElementById("call-btn3").addEventListener("click", function() {
    calling("num3", "service3");
})
document.getElementById("call-btn4").addEventListener("click", function() {
    calling("num4", "service4");
})
document.getElementById("call-btn5").addEventListener("click", function() {
    calling("num5", "service5");
})
document.getElementById("call-btn6").addEventListener("click", function() {
    calling("num6", "service6");
})
document.getElementById("call-btn7").addEventListener("click", function() {
    calling("num7", "service7");
})
document.getElementById("call-btn8").addEventListener("click", function() {
    calling("num8", "service8");
})
document.getElementById("call-btn9").addEventListener("click", function() {
    calling("num9", "service9");
})



// Copy Button Functionality

async function copyToClipboard(text) {
      // আধুনিক API চেষ্টা করি
      if (navigator.clipboard && navigator.clipboard.writeText) {
        try {
          await navigator.clipboard.writeText(text);
          return true;
        } catch (err) {
          // writeText ব্যর্থ হলে নিচের fallback চেষ্টা হবে
        }
      }

      // fallback (পুরনো ব্রাউজার): temporary textarea তৈরি করে select + execCommand
      try {
        const ta = document.createElement('textarea');
        ta.value = text;
        // UI এ না দেখাতে
        ta.style.position = 'fixed';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.select();
        // Mobile safari এর জন্য select() + setSelectionRange
        ta.setSelectionRange(0, ta.value.length);
        const ok = document.execCommand('copy');
        document.body.removeChild(ta);
        return ok;
      } catch (e) {
        return false;
      }
}

function copyText(c, t, newText) {
    document.getElementById(c).addEventListener('click', async () =>{
    let copy = parseInt(document.getElementById("copy-count").innerText);
    const someText = document.getElementById(t);
    const divMsg = document.getElementById(newText);
    const text = someText.textContent;
    const ok = await copyToClipboard(text);
    divMsg.textContent = ok ? 'Copied ✅' : 'Copy failed ❌';
    setTimeout(() => divMsg.textContent = '', 2000);

    copy++;
    document.getElementById("copy-count").innerText = copy;
    });
}

copyText("copy1", "service1", "divMsg1");
copyText("copy2", "service2", "divMsg2");
copyText("copy3", "service3", "divMsg3");
copyText("copy4", "service4", "divMsg4");
copyText("copy5", "service5", "divMsg5");
copyText("copy6", "service6", "divMsg6");
copyText("copy7", "service7", "divMsg7");
copyText("copy8", "service8", "divMsg8");
copyText("copy9", "service9", "divMsg9");
