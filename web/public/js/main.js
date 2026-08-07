document.documentElement.classList.remove('no-js');

document.addEventListener('DOMContentLoaded', () => {

  /* ===== 1) Scroll reveal (IntersectionObserver) ===== */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const revealIO = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          revealIO.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => revealIO.observe(el));
  }

  /* legacy .fade support for sub-pages */
  const fades = document.querySelectorAll('.fade');
  if (fades.length) {
    const fadeIO = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); });
    }, { threshold: 0.1 });
    fades.forEach(el => fadeIO.observe(el));
  }

  /* ===== 2) Hamburger menu ===== */
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      nav.classList.toggle('open');
      document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      hamburger.classList.remove('active');
      nav.classList.remove('open');
      document.body.style.overflow = '';
    }));
  }

  /* ===== 3) Accordion ===== */
  document.querySelectorAll('.acc-item').forEach(item => {
    item.querySelector('.acc-q').addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      item.classList.toggle('open');
      const ans = item.querySelector('.acc-a');
      ans.style.maxHeight = wasOpen ? 0 : ans.scrollHeight + 'px';
    });
  });

  /* ===== 4) Header scroll (white→black) ===== */
  const heroHeader = document.querySelector('.header--hero');
  if (heroHeader) {
    let ticking = false;
    const THRESHOLD = 30;
    const onHeaderScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          heroHeader.classList.toggle('is-scrolled', window.scrollY > THRESHOLD);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onHeaderScroll, { passive: true });
    onHeaderScroll();
  }

  /* ===== 5) Hero background parallax ===== */
  const parallaxBg = document.querySelector('.hero-bg-parallax');
  if (parallaxBg) {
    let pTicking = false;
    window.addEventListener('scroll', () => {
      if (!pTicking) {
        requestAnimationFrame(() => {
          const y = window.scrollY;
          if (y < window.innerHeight * 1.5) {
            parallaxBg.style.transform = `translateY(${y * 0.25}px)`;
          }
          pTicking = false;
        });
        pTicking = true;
      }
    }, { passive: true });
  }

  /* ===== 6) Count-up animation ===== */
  const countEls = document.querySelectorAll('.countup');
  if (countEls.length) {
    const countIO = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const text = el.textContent;
        const match = text.match(/^([\d,]+)/);
        if (!match) return;
        const target = parseInt(match[1].replace(/,/g, ''), 10);
        const suffix = text.replace(match[1], '');
        const duration = 1200;
        const start = performance.now();
        const step = now => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(target * eased);
          el.textContent = current.toLocaleString() + suffix;
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        countIO.unobserve(el);
      });
    }, { threshold: 0.5 });
    countEls.forEach(el => countIO.observe(el));
  }

  /* ===== 7) お問い合わせフォーム バリデーション ===== */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const inputs = contactForm.querySelectorAll('.contact-form-input, .contact-form-textarea');
    const radios = contactForm.querySelectorAll('input[name="purpose"]');

    function clearErrors() {
      inputs.forEach(el => { el.classList.remove('is-error'); });
      const errEls = contactForm.querySelectorAll('.contact-form-error');
      errEls.forEach(el => el.remove());
    }

    function showError(input, message) {
      input.classList.add('is-error');
      const wrap = input.closest('.contact-form-field, .contact-form-sub');
      if (wrap && !wrap.querySelector('.contact-form-error')) {
        const err = document.createElement('span');
        err.className = 'contact-form-error';
        err.textContent = message;
        input.after(err);
      }
    }

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      clearErrors();
      let valid = true;

      if (!contactForm.querySelector('input[name="purpose"]:checked')) {
        valid = false;
        const wrap = contactForm.querySelector('.contact-form-radios');
        if (wrap && !wrap.querySelector('.contact-form-error')) {
          const err = document.createElement('span');
          err.className = 'contact-form-error';
          err.textContent = 'ご用件を選択してください';
          wrap.after(err);
        }
      }

      const nameEl = contactForm.querySelector('#name');
      if (!nameEl.value.trim()) {
        valid = false;
        showError(nameEl, 'お名前を入力してください');
      }

      const furiganaEl = contactForm.querySelector('#furigana');
      if (!furiganaEl.value.trim()) {
        valid = false;
        showError(furiganaEl, 'ふりがなを入力してください');
      }

      const telEl = contactForm.querySelector('#tel');
      if (!telEl.value.trim()) {
        valid = false;
        showError(telEl, '電話番号を入力してください');
      }

      const emailEl = contactForm.querySelector('#email');
      if (!emailEl.value.trim()) {
        valid = false;
        showError(emailEl, 'メールアドレスを入力してください');
      } else if (!emailRe.test(emailEl.value.trim())) {
        valid = false;
        showError(emailEl, '有効なメールアドレスを入力してください');
      }

      const messageEl = contactForm.querySelector('#message');
      if (!messageEl.value.trim()) {
        valid = false;
        showError(messageEl, 'お問い合わせ内容を入力してください');
      }

      if (!valid) {
        contactForm.querySelector('.is-error')?.focus();
        return;
      }

      const purpose = contactForm.querySelector('input[name="purpose"]:checked')?.value || '';
      const company = contactForm.querySelector('#company').value.trim();
      const name = nameEl.value.trim();
      const furigana = furiganaEl.value.trim();
      const tel = telEl.value.trim();
      const email = emailEl.value.trim();
      const message = messageEl.value.trim();
      const body = [
        '【ご用件】' + purpose,
        '【法人名】' + (company || '（未入力）'),
        '【お名前】' + name,
        '【ふりがな】' + furigana,
        '【電話番号】' + tel,
        '【メールアドレス】' + email,
        '',
        '【お問い合わせ内容】',
        message
      ].join('\n');
      const mailto = 'mailto:office@vixeed.jp?subject=' + encodeURIComponent('お問い合わせ') + '&body=' + encodeURIComponent(body);
      window.location.href = mailto;
    });
  }

  /* ===== 8) 代表挨拶：続きを読む / 戻る（折りたたみ） ===== */
  const presidentMore = document.getElementById('president-message-more');
  const presidentReadMore = document.getElementById('president-read-more');
  const presidentReadBack = document.getElementById('president-read-back');
  const presidentAnchor = document.getElementById('president-message-anchor');
  if (presidentMore && presidentReadMore && presidentReadBack && presidentAnchor) {
    presidentReadMore.addEventListener('click', () => {
      presidentMore.hidden = false;
      presidentReadMore.hidden = true;
      presidentReadMore.setAttribute('aria-expanded', 'true');
    });
    presidentReadBack.addEventListener('click', () => {
      presidentMore.hidden = true;
      presidentReadMore.hidden = false;
      presidentReadMore.setAttribute('aria-expanded', 'false');
      presidentAnchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
      presidentReadMore.focus({ preventScroll: true });
    });
  }

});
