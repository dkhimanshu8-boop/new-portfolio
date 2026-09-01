/* Himanshu Mishra — portfolio
   Two jobs only: the mobile menu and the contact form.            */

(function () {
  // ---- Mobile navigation -------------------------------------------
  var toggle = document.querySelector('.nav-toggle');
  var list = document.getElementById('nav-list');
  if (toggle && list) {
    toggle.addEventListener('click', function () {
      var open = list.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.textContent = open ? 'Close' : 'Menu';
    });
    list.addEventListener('click', function (e) {
      if (e.target.tagName === 'A' && list.classList.contains('open')) {
        list.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = 'Menu';
      }
    });
  }

  // ---- Contact form --------------------------------------------------
  // Works two ways:
  //  1. With a Formspree endpoint: replace YOUR_FORM_ID in index.html
  //     (form action) and messages are sent via fetch with no redirect.
  //  2. Without one: falls back to opening the visitor's mail app with
  //     the message pre-filled, so the form is never a dead end.
  var form = document.getElementById('contact-form');
  if (!form) return;
  var status = form.querySelector('.form-status');
  var EMAIL = 'dk.himanshu8@gmail.com';

  function setStatus(msg, kind) {
    status.textContent = msg;
    status.className = 'form-status' + (kind ? ' ' + kind : '');
  }

  function fieldsValid() {
    var name = form.elements.name.value.trim();
    var email = form.elements.email.value.trim();
    var message = form.elements.message.value.trim();
    if (!name || !email || !message) { setStatus('Please fill in all three fields.', 'err'); return null; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setStatus('That email address doesn\u2019t look right.', 'err'); return null; }
    return { name: name, email: email, message: message };
  }

  function mailtoFallback(d) {
    var subject = encodeURIComponent('Portfolio enquiry from ' + d.name);
    var body = encodeURIComponent(d.message + '\n\n\u2014 ' + d.name + ' (' + d.email + ')');
    window.location.href = 'mailto:' + EMAIL + '?subject=' + subject + '&body=' + body;
    setStatus('Opening your mail app with the message filled in.', 'ok');
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var d = fieldsValid();
    if (!d) return;

    var action = form.getAttribute('action') || '';
    if (action.indexOf('YOUR_FORM_ID') !== -1) { mailtoFallback(d); return; }

    setStatus('Sending\u2026');
    fetch(action, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(form)
    }).then(function (r) {
      if (r.ok) { form.reset(); setStatus('Sent. I usually reply within a day.', 'ok'); }
      else { mailtoFallback(d); }
    }).catch(function () { mailtoFallback(d); });
  });
})();
